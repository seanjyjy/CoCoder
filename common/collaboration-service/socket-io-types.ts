export interface CollabClientToServerEvents {
  joinRoomEvent: (roomId: string, username: string) => void;
  exitRoomEvent: (roomId: string, username: string) => void;
  textChangeEvent: (roomId: string, text: string) => void;
}

export interface CollabServerToClientEvents {
  remoteTextChangeEvent: (text: string) => void;
  roomUsersEvent: (users: string[]) => void;
}

export interface CollabInterServerEvents {}
export interface CollabSocketData {}

export type TRoomData = {
  users: string[];
  text: string;
};
