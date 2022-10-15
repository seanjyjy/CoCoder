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

export interface IHistoryInfo {
  partner: String;
  startTime: Number;
  date: String;
  duration: String;
  questionDifficulty: QuestionDifficulty;
  questionID: String;
  questionURL: String;
  code: String;
  questionName: String;
  questionContent: String;
  language: String;
}