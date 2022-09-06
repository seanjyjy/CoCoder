import mongoose, { Model } from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';
import uniqueValidator from 'mongoose-unique-validator';
import { IUserDTO } from '../../common/Models';

var Schema = mongoose.Schema;

// Put all user instance methods in this interface:
export interface IUserMethods {
  checkPassword(candidatePassword: string): Promise<boolean>;
}
// Create a new Model type that knows about IUserMethods...
type UserModel = Model<IUserDTO, {}, IUserMethods>;

let UserModelSchema = new Schema<IUserDTO, UserModel, IUserMethods>({
  username: {
    type: String,
    required: [true, 'Enter a username!'],
    unique: true,
    immutable: true,
    lowercase: true,
    trim: true,
    validate: [validator.isAlphanumeric, 'Usernames may only have letters and numbers!'],
  },
  password: {
    type: String,
    select: false,
    required: [true, 'Enter a password!'],
    minLength: [4, 'Password should be at least four characters!'],
  },
});

UserModelSchema.plugin(uniqueValidator, {
  message: 'Username {VALUE} has already been taken :/',
});

//schema middleware to apply before saving
UserModelSchema.pre<IUserDTO>('save', async function (this: IUserDTO, next) {
  //hash the password, set hash cost to 10
  this.password = await bcrypt.hash(this.password, 10);

  next();
});

//check password at login
UserModelSchema.method('checkPassword', async function (this: IUserDTO, candidatePassword) {
  if (candidatePassword == null) {
    return await Promise.resolve(false);
  }
  return await bcrypt.compare(candidatePassword, this.password);
});

export default mongoose.model<IUserDTO, UserModel>('UserModel', UserModelSchema);
