import { createUser, doesUsernameExist, findUserByDocumentId, findUserWithPasswordByUsername } from './repository';
import { IUserDTO } from '../../common/Models';
import { HttpStatusCode } from '../../common/HttpStatusCodes';
import AppError from '../utils/AppError';
import { HydratedDocument } from 'mongoose';

//need to separate orm functions from repository to decouple business logic from persistence
export async function ormCreateUser(user: IUserDTO): Promise<HydratedDocument<IUserDTO>> {
  return createUser(user);
}

export async function ormDoesUsernameExist(username: string) {
  return doesUsernameExist(username);
}

export async function ormFindUserByUsernamAndPassword(username: string, password: string): Promise<HydratedDocument<IUserDTO>> {
  const user = await findUserWithPasswordByUsername(username);
  if (!user || !(await user.checkPassword(password))) {
    throw new AppError('Incorrect username or password', HttpStatusCode.UNAUTHORIZED);
  }
  // Password is valid
  // Remove password from user
  return user;
}

export async function ormFindUserByDocumentId(id: string) {
  return findUserByDocumentId(id);
}
