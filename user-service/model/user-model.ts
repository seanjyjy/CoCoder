import mongoose, { Model } from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';
import uniqueValidator from 'mongoose-unique-validator';

var Schema = mongoose.Schema;

export interface IUser {
  username: string;
  password: string;
}
// Put all user instance methods in this interface:
export interface IUserMethods {
  correctPassword(candidatePassword: string, userPassword: string): Promise<boolean>;
}
// Create a new Model type that knows about IUserMethods...
type UserModel = Model<IUser, {}, IUserMethods>;

let UserModelSchema = new Schema<IUser, UserModel, IUserMethods>({
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
    required: [true, 'Enter a password!'],
    minLength: [4, 'Password should be at least four characters!'],
  },
});

UserModelSchema.plugin(uniqueValidator, {
  message: 'Username {VALUE} has already been taken :/',
});

//schema middleware to apply before saving
UserModelSchema.pre('save', async function (this: IUser, next) {
  //hash the password, set hash cost to 10
  this.password = await bcrypt.hash(this.password, 10);

  next();
});

//check password at login
UserModelSchema.methods.correctPassword = async (candidatePassword, userPassword) => {
  return await bcrypt.compare(candidatePassword, userPassword);
};

export default mongoose.model<IUser>('UserModel', UserModelSchema);
