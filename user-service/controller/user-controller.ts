import jwt from 'jsonwebtoken';
import { RequestHandler, Request, Response } from 'express';
import { IUserDTO } from '../../common/Models';
import { HttpStatusCode } from '../../common/HttpStatusCodes';
import {
  ormCreateUser as _createUser,
  ormDoesUsernameExist as _checkUsername,
  ormFindUserByUsernamAndPassword as _loginUser,
  ormFindUserByDocumentId as _findById,
} from '../model/user-orm';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/AppError';
import { HydratedDocument } from 'mongoose';
import { NextFunction } from 'express-serve-static-core';

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
  user.$set({ password: undefined });

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

export const checkUsername: RequestHandler = async (req, res, next) => {
  console.log('-- Finding Username in Database --');
  try {
    const { username } = req.params;
    const doesUsernameExist = await _checkUsername(username);
    if (doesUsernameExist) {
      return res.status(HttpStatusCode.OK).json({ message: `Username ${username} exists!` });
    } else {
      return res.status(HttpStatusCode.NOT_FOUND).json({ message: `Username ${username} does not exist!` });
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
export const logoutUser = catchAsync(async (req, res) => {
  console.log(`-- User Logged Out --`);
  res.cookie(JWT_COOKIE_NAME, 'loggedout', {
    expires: new Date(Date.now() + 1 * 1000),
    httpOnly: true,
  });
  res.status(HttpStatusCode.OK).send('User has been logged out.');
});

//check if user is logged in
export const verifyToken = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  console.log(`-- Verifying JWT Token --`);
  console.log('Headers: ', req.headers);
  let currentUser;
  console.log('Cookies: ', req.cookies);
  if (req.cookies.jwt) {
    const token = req.cookies.jwt;
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as IJwtToken;
    console.log('User doc ID: ', decoded);
    currentUser = await _findById(decoded.id);
  } else {
    console.log('No JWT stored in cookie');
    currentUser = null;
  }

  res.status(HttpStatusCode.OK).send({ currentUser });
});
