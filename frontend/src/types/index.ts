import { QuestionDifficulty } from 'src/shared/constants';
import CodeMirror from 'codemirror';

export type codeSnippet = {
  lang: string;
  langSlug: string;
  code: string;
};

export type QuestionType = {
  categoryTitle: string;
  codeSnippets: codeSnippet[];
  content: string;
  difficulty: string;
  metaData: string;
  questionId: string;
  title: string;
  titleSlug: string;
};

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

export interface CollabClientToServerEvents {
  joinRoomEvent: (roomId: string, username: string) => void;
  exitRoomEvent: (roomId: string, username: string, code?: string) => void;
  fetchRoomEvent: (roomId: string) => void;
  cursorChangeEvent: (roomId: string, userId: string, cursor: CodeMirror.Position, from: CodeMirror.Position, to: CodeMirror.Position) => void;
  codeInsertEvent: (roomId: string, index: number, text: string) => void;
  codeReplaceEvent: (roomId: string, index: number, length: number, text: string) => void;
  codeDeleteEvent: (roomId: string, index: number, length: number) => void;
  codeSyncEvent: (roomId: string, code: string) => void;
  roomLanguageChangeEvent: (roomId: string, language: string) => void;
}

export interface CollabServerToClientEvents {
  joinRoomFailure: () => void;
  joinRoomSuccess: (username: string) => void;
  roomUsersChangeEvent: (users: TUserData[]) => void;
  cursorChangeEvent: (roomId: string, userId: string, cursor: CodeMirror.Position, from: CodeMirror.Position, to: CodeMirror.Position) => void;
  codeInsertEvent: (roomId: string, index: number, text: string) => void;
  codeReplaceEvent: (roomId: string, index: number, length: number, text: string) => void;
  codeDeleteEvent: (roomId: string, index: number, length: number) => void;
  codeSyncEvent: (roomId: string, code: string) => void;
  codeInitEvent: (code: string) => void;
  roomQuestionEvent: (question: QuestionType) => void;
  roomLanguageChangeEvent: (roomId: string, language: string) => void;
}

export interface CommsClientToServerEvents {
  joinRoomEvent: (roomId: string, peerId: string) => void;
  joinCallRoomEvent: (roomId: string, peerId: string) => void;
  leaveCallRoomEvent: (roomId: string, peerId: string) => void;
}
export interface CommsServerToClientEvents {
  peerConnected: (peerId: string) => void;
  peerDisconnected: (peerId: string) => void;
  peerCallConnected: (peerId: string) => void;
  peerCallDisconnected: (peerId: string) => void;
}

export interface CollabInterServerEvents {}
export interface CollabSocketData {}

export type TRoomData = {
  users: TUserData[];
  text: string;
  data: QuestionType;
};

export type TUserData = {
  username: string;
  peerId: string;
  connected: boolean;
  color: string;
};

export type HistoryData = {
  partner: string;
  startTime: Number;
  date: Date;
  duration: string;
  questionDifficulty: QuestionDifficulty;
  questionID: string;
  questionURL: string;
  code: string;
  questionName: string;
  questionContent: string;
  language: string;
};

export type IHistoryModel = {
  me: string;
  historyInfo: HistoryData[];
};
