import { createUser, findByUsername } from './repository';
import { IUser } from './user-model';

//need to separate orm functions from repository to decouple business logic from persistence
export async function ormCreateUser(user: IUser) {
  const newUser = createUser(user);
  await newUser.save();
}

export async function ormFindUser(username: string) {
  return findByUsername(username);
}
