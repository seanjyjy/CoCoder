import type { QuestionType } from '../QuestionType';

// technically, we should download the codeMirror extension into the collaobration service
// but since we put here as common so will just leave as any instead of CodeMirror.Position
// todo: move to collaboration service
export interface CollabClientToServerEvents {
  joinRoomEvent: (roomId: string, username: string) => void;
  exitRoomEvent: (roomId: string, username: string, code?: string) => void;
  fetchRoomEvent: (roomId: string) => void;
  cursorChangeEvent: (roomId: string, userId: string, cursor: any, from: any, to: any) => void;
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
  errorEvent: (msg?: string) => void;
  cursorChangeEvent: (roomId: string, userId: string, cursor: any, from: any, to: any) => void;
  codeInsertEvent: (roomId: string, index: number, text: string) => void;
  codeReplaceEvent: (roomId: string, index: number, length: number, text: string) => void;
  codeDeleteEvent: (roomId: string, index: number, length: number) => void;
  codeSyncEvent: (roomId: string, code: string) => void;
  codeInitEvent: (code: string) => void; // this is for if the user have already typed something and come back in
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
};
