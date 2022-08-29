import { createUser, findByUsername } from './repository'
import { IUser } from './user-model'

//need to separate orm functions from repository to decouple business logic from persistence
export async function ormCreateUser(user: IUser) {
    const newUser = createUser(user)
    const err = await newUser.save().catch(err => err)
    console.log(err)
}

export async function ormFindUser(username: string) {
    return findByUsername(username)
}