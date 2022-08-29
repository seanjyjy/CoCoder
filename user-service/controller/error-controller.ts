import { Request, Response } from "express";
import { CallbackWithoutResultAndOptionalError, Error } from 'mongoose';
import { AppError} from '../utils/AppError'
import { HttpStatusCode } from '../../common/HttpStatusCodes'

//handle errors thrown by mongoose validators
const handleValidationError = (err: Error.ValidationError, res: Response) => {
    const errors = Object.values(err.errors).map(el => el.message);
    const fields = Object.values(err.errors).map(el => el.path);

    const formattedErrors = errors.join(' ');
    res.status(HttpStatusCode.BAD_REQUEST).send({messages: formattedErrors, fields: fields});
}

//handle errors thrown by mongoose validators
const handleAppError = (err: AppError, res: Response) => {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ messages: err.message });
}

//error controller function
module.exports = (err: Error | void, req: Request, res: Response, next: CallbackWithoutResultAndOptionalError) => {
    try {
        console.log('-- ERROR LOG --');
        console.log(err);
        if (err instanceof Error.ValidationError) {
            handleValidationError(err as Error.ValidationError, res); 
        }
        if (err instanceof AppError) {
            handleAppError(err as AppError, res)
        }
        return
    } catch(err) {
        res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send('An unknown error occured.');
    }
}
