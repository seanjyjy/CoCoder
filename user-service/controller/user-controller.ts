import { Request, Response } from 'express';
import { IUser } from 'model/user-model';
import { HttpStatusCode } from '../../common/HttpStatusCodes';
import { ormCreateUser as _createUser } from '../model/user-orm'

export async function createUser(req: Request, res: Response) {
    try {
        const { username, password }: IUser = req.body;
        if (!username || !password) {
            return res.status(HttpStatusCode.BAD_REQUEST).json({message: 'Username and/or Password are missing!'});
        }
        await _createUser({ username, password });
        //     console.log(resp);
        //     if (resp.err) {
        //         return res.status(400).json({message: 'Could not create a new user!'});
        //     } else {
        //         console.log(`Created new user ${username} successfully!`)
        //         return res.status(201).json({message: `Created new user ${username} successfully!`});
        //     }
    } catch (err) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({message: 'Database failure when creating new user!'})
    }
}
