import { createUser, doesUsernameExist } from './repository';
import { IUser } from '../../common/Models';

//need to separate orm functions from repository to decouple business logic from persistence
export async function ormCreateUser(user: IUser) {
  const newUser = createUser(user);
  await newUser.save();
}

export async function ormFindUser(username: string) {
  return doesUsernameExist(username);
}
