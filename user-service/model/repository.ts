import UserModel, { IUser } from './user-model';
import mongoose, { HydratedDocument } from 'mongoose';
import 'dotenv/config';

//Set up mongoose connection

let mongoDB = process.env.ENV == 'PROD' ? process.env.DB_CLOUD_URI : process.env.DB_LOCAL_URI;

mongoose.connect(mongoDB!);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export function createUser(user: IUser): HydratedDocument<IUser> {
  return new UserModel(user);
}

export async function findByUsername(username: string): Promise<IUser | null> {
  return await UserModel.findOne({ username: username }).lean().exec();
}
