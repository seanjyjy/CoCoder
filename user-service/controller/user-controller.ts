import { RequestHandler } from 'express';
import { IUser } from 'model/user-model';
import { HttpStatusCode } from '../../common/HttpStatusCodes';
import { ormCreateUser as _createUser } from '../model/user-orm';

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { username, password }: IUser = req.body;
    await _createUser({ username, password });
    return res.status(HttpStatusCode.CREATED).json({ message: `Created new user ${username} successfully!` });
  } catch (err) {
    return next(err);
  }
};
