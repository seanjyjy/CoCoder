import { createUser, deleteUserById, doesUsernameExist, findUserByDocumentId, findUserByUsername, findUserWithPasswordByUsername } from './repository';
import { IUserDTO } from '../../common/Models';
import { HttpStatusCode } from '../../common/HttpStatusCodes';
import AppError from '../utils/AppError';
import { Document, HydratedDocument } from 'mongoose';

//need to separate orm functions from repository to decouple business logic from persistence

export function ormCreateUser(user: IUserDTO): Promise<HydratedDocument<IUserDTO>> {
  return createUser(user);
}

export function ormReadUserPublicInfo(username: string) {
  return findUserByUsername(username);
}

export function ormUpdateUser(user: Document, fields: any) {
  // Fill up a placeholder user object to determine valid fields
  const mutableFields = { password: 'string' };

  // For each field, if it is a valid field, update the field in the user document
  for (const attrname in fields) {
    if (mutableFields[attrname] !== undefined) {
      user[attrname] = fields[attrname];
    }
  }
  user.save();
  return user;
}

export function ormDeleteUser(user: Document) {
  return user.delete();
}

export function ormDoesUsernameExist(username: string) {
  return doesUsernameExist(username);
}

export async function ormFindUserByUsernameAndPassword(username: string, password: string): Promise<HydratedDocument<IUserDTO>> {
  const user = await findUserWithPasswordByUsername(username);
  if (!user || !(await user.checkPassword(password))) {
    throw new AppError('Incorrect username or password', HttpStatusCode.UNAUTHORIZED);
  }
  // Password is valid
  // Remove password from user
  return user;
}

export function ormFindUserByDocumentId(id: string) {
  return findUserByDocumentId(id);
}
