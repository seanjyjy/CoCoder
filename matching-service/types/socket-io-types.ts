import QuestionDifficulty from '../../common/QuestionDifficulty';

export interface MatchServerToClientEvents {
  matchSuccessEvent: (uuid: string) => void;
  matchFailureEvent: () => void;
  errorEvent: () => void;
}

export interface MatchClientToServerEvents {
  matchEvent: (username: string, difficulty: QuestionDifficulty, roomID: string) => void;
  deleteEvent: (username: string, difficulty: QuestionDifficulty, roomID: string) => void;
  removeEvent: (username: string, difficulty: QuestionDifficulty) => void;
}

export interface MatchInterServerEvents {}
export interface MatchSocketData {}
