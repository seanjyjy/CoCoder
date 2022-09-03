import UserModel from './user-model';
import { IUserDTO } from '../../common/Models';
import mongoose, { HydratedDocument } from 'mongoose';
import 'dotenv/config';

//Set up mongoose connection

let mongoDB = process.env.ENV == 'PROD' ? process.env.DB_CLOUD_URI : process.env.DB_LOCAL_URI;

mongoose.connect(mongoDB!);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export function createUser(user: IUserDTO) {
  return UserModel.create(user);
}

export async function doesUsernameExist(username: string) {
  return await UserModel.exists({ username: username });
}

export async function findUserWithPasswordByUsername(username: string) {
  return await UserModel.findOne({ username: username }).select('+password');
}

export async function findUserByDocumentId(id: string) {
  return await UserModel.findById(id);
}
