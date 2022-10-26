import QuestionDifficulty from './QuestionDifficulty';

export interface IUserInfo {
  username: string;
}

export interface IUserDTO extends IUserInfo {
  password: string;
}

export interface IAppError {
  messages: string[];
  fields: string[];
}
