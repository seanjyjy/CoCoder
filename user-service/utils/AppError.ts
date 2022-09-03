import { HttpStatusCode } from '../../common/HttpStatusCodes';

export enum ErrorCode {
  HTTP_BAD_REQUEST = 400,
}

export enum ErrorName {
  VALIDATION_ERROR = 'ValidationError',
  CAST_ERROR = 'CastError',
}

export default class AppError extends Error {
  code: HttpStatusCode;
  constructor(message: string, code: HttpStatusCode) {
    super(message); // bult-in param for Error object
    this.code = code;
    this.stack = new Error().stack;
  }
}
