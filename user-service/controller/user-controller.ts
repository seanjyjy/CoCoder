import jwt from 'jsonwebtoken';
import { RequestHandler, Request, Response } from 'express';
import { IUserDTO } from '../../common/Models';
import { HttpStatusCode } from '../../common/HttpStatusCodes';
import {
  ormCreateUser as _createUser,
  ormReadUserPublicInfo as _readUser,
  ormUpdateUser as _updateUser,
  ormDeleteUser as _deleteUser,
  ormDoesUsernameExist as _checkUsername,
  ormFindUserByUsernameAndPassword as _loginUser,
  ormFindUserByDocumentId as _findById,
} from '../service/user-service';
import { deleteHistory } from '../service/connect-history-service';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/AppError';
import { HydratedDocument } from 'mongoose';
import { NextFunction } from 'express-serve-static-core';
import * as dotenv from 'dotenv';
dotenv.config();

const JWT_DURATION = 1;
const EXPIRES_IN = JWT_DURATION + 'd';
const JWT_COOKIE_NAME = 'jwt';

interface IJwtToken {
  id: string;
}

//create token for authenticated user
const signToken = (id: string) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: EXPIRES_IN,
  });
};

const verifyToken = async (token: any, shouldReturnPOJO?: boolean) => {
  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as IJwtToken;
  return await _findById(decoded.id, shouldReturnPOJO);
};

const createUserToken = async (user: HydratedDocument<IUserDTO>, code: HttpStatusCode, req: Request, res: Response) => {
  console.log('-- Creating User Token --');
  const token = signToken(user._id.toString());

  //set expiry to 1 day
  const d = new Date();
  d.setDate(d.getDate() + JWT_DURATION);

  //cookie settings
  // Read https://medium.com/swlh/7-keys-to-the-mystery-of-a-missing-cookie-fdf22b012f09
  // If your cookie is missing.
  res.cookie(JWT_COOKIE_NAME, token, {
    expires: d,
    httpOnly: true, // prevents client-side scripts from accessing data, avoiding cross-site scripting (XSS) attacks.

    // secure=true and samesite=none is required for cross site cookie.
    sameSite: 'none',
    secure: true,
    // secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
  });

  // Remove password from user
  user.$set('password', undefined);

  res.status(code).json({
    token,
    data: {
      user,
    },
    message: `Authentication Token for ${user.username} generated successfully!`,
  });
};

export const createUser: RequestHandler = async (req, res, next) => {
  console.log('-- Creating New User --');
  try {
    const { username, password }: IUserDTO = req.body;
    const newUser = await _createUser({ username, password });
    createUserToken(newUser, HttpStatusCode.CREATED, req, res);
  } catch (err) {
    return next(err);
  }
};

export const getUserPublicInfo: RequestHandler = async (req, res, next) => {
  const username = req.params.user.toLowerCase();
  const user = await _readUser(username);
  if (user) {
    res.status(HttpStatusCode.OK).json(user);
  } else {
    res.status(HttpStatusCode.NOT_FOUND).send();
  }
};

export const editUserInfo: RequestHandler = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const username = req.params.user.toLowerCase();
  console.log(`-- Editing User ${username} --`);
  if (!req.cookies.jwt) {
    console.log(`-- User ${username} Not Edited --`);
    res.status(HttpStatusCode.UNAUTHORIZED).send();
    return next();
  }

  const user = await verifyToken(req.cookies.jwt);
  if (!(user?.username === username)) {
    console.log(`-- User ${username} Not Edited --`);
    res.status(HttpStatusCode.FORBIDDEN).send();
    return next();
  }
  console.log(req.body);
  let updatedUser: any = null;
  try {
    updatedUser = await _updateUser(user, req.body);
  } catch (err) {
    return next(err);
  }
  if (!updatedUser) {
    return next(new AppError('Could not update user!', HttpStatusCode.BAD_REQUEST));
  }
  console.log(`-- User ${username} Successfully Edited --`);
  res.status(HttpStatusCode.OK).send();
});

export const deleteUser: RequestHandler = async (req, res, next) => {
  const username = req.params.user.toLowerCase();
  console.log(`-- Deleting User ${username} --`);
  if (!req.cookies.jwt) {
    console.log(`-- User ${username} Not Deleted --`);
    res.status(HttpStatusCode.UNAUTHORIZED).send();
    return next();
  }

  const user = await verifyToken(req.cookies.jwt);
  if (!(user?.username === username)) {
    console.log(`-- User ${username} Not Deleted --`);
    res.status(HttpStatusCode.FORBIDDEN).send();
    return next();
  }

  await _deleteUser(user);
  console.log(`-- User ${username} Successfully Deleted --`);
  await deleteHistory(username);
  res.status(HttpStatusCode.OK).send();
};

export const checkUsername: RequestHandler = async (req, res, next) => {
  try {
    const { username } = req.params;
    const lowercaseUsername = username.trim().toLowerCase();
    console.log(`-- Finding Username ${lowercaseUsername} in Database --`);
    const doesUsernameExist = await _checkUsername(lowercaseUsername);
    if (doesUsernameExist) {
      return res.status(HttpStatusCode.OK).json({ message: `Username ${lowercaseUsername} exists!` });
    } else {
      return res.status(HttpStatusCode.NOT_FOUND).json({ message: `Username ${lowercaseUsername} does not exist!` });
    }
  } catch (err) {
    return next(err);
  }
};

//log user in
export const loginUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { username, password }: IUserDTO = req.body;

  //check if email & password exist
  if (!username || !password) {
    return next(new AppError('Please provide a username and password!', HttpStatusCode.BAD_REQUEST));
  }
  console.log(`-- User ${username} Attemping to Login --`);

  //check if user & password are correct
  const user = await _loginUser(username, password);
  if (user == null) {
    return next(new AppError('Incorrect username or password!', HttpStatusCode.UNAUTHORIZED));
  }

  createUserToken(user, HttpStatusCode.OK, req, res);
  console.log(`-- User ${username} Logged In --`);
});

//log user out
export const logoutUser = (req: Request, res: Response, next: NextFunction) => {
  console.log(`-- User Logged Out --`);
  res.cookie(JWT_COOKIE_NAME, 'loggedout', {
    expires: new Date(Date.now() + 1 * 1000),
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });
  res.status(HttpStatusCode.OK).send();
};

//check if user is logged in
export const isLoggedIn = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  console.log(`-- Verifying JWT Token --`);
  let currentUser;
  if (req.cookies.jwt) {
    currentUser = await verifyToken(req.cookies.jwt, true);
  } else {
    console.log('No JWT stored in cookie');
    currentUser = null;
  }

  if (currentUser) {
    console.log(`-- JWT Token Was Valid --`);
    currentUser.$set('password', undefined);
  } else {
    console.log(`-- JWT Token Was Not Valid --`);
  }

  if (currentUser == null) {
    res.status(HttpStatusCode.UNAUTHORIZED).send();
    return;
  }

  res.status(HttpStatusCode.OK).setHeader('Cache-Control', 'no-store').send({ currentUser });
});
