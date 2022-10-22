import type { QuestionType } from '../../common/QuestionType';
import CodeMirror from 'codemirror';

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

export interface CollabInterServerEvents {}
export interface CollabSocketData {}

export type TRoomData = {
  users: TUserData[];
  text: string;
  data: QuestionType;
  language: string;
};

export type TUserData = {
  username: string;
  connected: boolean;
  color: string;
};
