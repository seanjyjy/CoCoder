export interface CollabClientToServerEvents {
  joinRoomEvent: (roomId: string, username: string) => void;
  exitRoomEvent: (roomId: string, username: string) => void;
  textChangeEvent: (roomId: string, text: string) => void;
  fetchRoomEvent: (roomId: string) => void;
}

export interface CollabServerToClientEvents {
  joinRoomFailure: () => void;
  joinRoomSuccess: () => void;
  remoteTextChangeEvent: (text: string) => void;
  roomUsersChangeEvent: (users: TUserData[]) => void;
  errorEvent: (msg?: string) => void;
}

export interface CollabInterServerEvents {}
export interface CollabSocketData {}

export type TRoomData = {
  users: TUserData[];
  text: string;
};

export type TUserData = {
  username: string;
  connected: boolean;
};
