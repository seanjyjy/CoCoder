import { createUser, doesUsernameExist, findUserByDocumentId, findUserByUsername, findUserWithPasswordByUsername } from './repository';
import { IUserDTO } from '../../common/Models';
import { HttpStatusCode } from '../../common/HttpStatusCodes';
import AppError from '../utils/AppError';
import { Document, HydratedDocument } from 'mongoose';
import { IUserMethods } from './user-model';

//need to separate orm functions from repository to decouple business logic from persistence

export async function ormCreateUser(user: IUserDTO): Promise<HydratedDocument<IUserDTO>> {
  return await createUser(user);
}

export async function ormReadUserPublicInfo(username: string) {
  return await findUserByUsername(username);
}

export async function ormUpdateUser(user: Document<unknown, any, IUserDTO> & IUserDTO & { _id: any } & IUserMethods, fields: any) {
  // Fill up a placeholder user object to determine valid fields
  const mutableFields = { password: 'string' };
  console.log('Fields: ', fields);
  if (fields.password) {
    console.log('Attempting to change Password');
    if (!(await user.checkPassword(fields.oldPassword))) {
      console.log('Incorrect Password');
      throw new AppError('Current password is incorrect!', HttpStatusCode.BAD_REQUEST);
    }
  }

  // For each field, if it is a valid field, update the field in the user document
  for (const attrname in fields) {
    if (mutableFields[attrname] !== undefined) {
      console.log('Setting attribute: ', attrname);
      user.$set(attrname, fields[attrname]);
    }
  }

  if (user.isModified()) {
    user.save();
    return user;
  } else {
    return null;
  }
}

export function ormDeleteUser(user: Document) {
  return user.delete();
}

export async function ormDoesUsernameExist(username: string) {
  return await doesUsernameExist(username);
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

export async function ormFindUserByDocumentId(id: string, shouldReturnPOJO?: boolean) {
  return await findUserByDocumentId(id, shouldReturnPOJO);
}
