import UserModel from './user-model';
import { IUserDTO } from '../../common/Models';
import mongoose from 'mongoose';
import 'dotenv/config';

//Set up mongoose connection

const mongoDB = process.env.USER_SVC_DB_URI || 'mongodb://localhost:27017';

mongoose.connect(mongoDB!);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export async function createUser(user: IUserDTO) {
  return await UserModel.create(user);
}

export async function deleteUserById(id: string) {
  return await UserModel.deleteOne({ _id: id });
}

export async function doesUsernameExist(username: string) {
  return await UserModel.exists({ username: username });
}

export async function findUserByUsername(username: string) {
  return await UserModel.findOne({ username: username }, { _id: 0, __v: 0 });
}

export async function findUserWithPasswordByUsername(username: string) {
  return await UserModel.findOne({ username: username }).select('+password');
}

export async function findUserByDocumentId(id: string, shouldReturnPOJO?: boolean) {
  return await UserModel.findById(id, shouldReturnPOJO ? { _id: 0, __v: 0 } : undefined).select(shouldReturnPOJO ? '-password' : '+password');
}
