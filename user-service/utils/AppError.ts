export enum ErrorCode {
  HTTP_BAD_REQUEST = 400,
}

export enum ErrorName {
  VALIDATION_ERROR = 'ValidationError',
  CAST_ERROR = 'CastError',
}

export class AppError extends Error {
  code: ErrorCode;
  constructor(message: string, code: ErrorCode) {
    super(message); // bult-in param for Error object
    this.code = code;
    this.stack = new Error().stack;
  }
}
