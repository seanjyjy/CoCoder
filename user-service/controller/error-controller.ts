import { ErrorRequestHandler, Response } from 'express';
import { Error } from 'mongoose';
import { AppError } from '../utils/AppError';
import { HttpStatusCode } from '../../common/HttpStatusCodes';

//handle errors thrown by mongoose validators
const handleValidationError = (err: Error.ValidationError, res: Response) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const fields = Object.values(err.errors).map((el) => el.path);

  console.log('ERROR - Validation: ', err);
  res.status(HttpStatusCode.BAD_REQUEST).send({ messages: errors, fields: fields });
};

//handle errors thrown by mongoose validators
const handleAppError = (err: AppError, res: Response) => {
  res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({ messages: err.message });
};

//error controller function
const errorController: ErrorRequestHandler = (err, req, res, next) => {
  try {
    console.log('-- ERROR LOG --');
    console.log(err);
    if (err.name == 'ValidationError') {
      handleValidationError(err as Error.ValidationError, res);
    }
    return next();
  } catch (err) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send('An unknown error occured.');
  }
};

export default errorController;
