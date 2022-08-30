import { RequestHandler } from 'express';
import { IUser } from '../../common/Models';
import { HttpStatusCode } from '../../common/HttpStatusCodes';
import { ormCreateUser as _createUser, ormFindUser as _checkUsername } from '../model/user-orm';

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { username, password }: IUser = req.body;
    await _createUser({ username, password });
    return res.status(HttpStatusCode.CREATED).json({ message: `Created new user ${username} successfully!` });
  } catch (err) {
    return next(err);
  }
};

export const checkUsername: RequestHandler = async (req, res, next) => {
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
