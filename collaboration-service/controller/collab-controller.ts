import { changeRoomText, exitRoom, joinRoom } from '../service/collab-service';
import type { Server, Socket } from 'socket.io';
import {
  CollabClientToServerEvents,
  CollabInterServerEvents,
  CollabServerToClientEvents,
  CollabSocketData,
} from '../../common/collaboration-service/socket-io-types';

type IOType = Server<CollabClientToServerEvents, CollabServerToClientEvents, CollabInterServerEvents, CollabSocketData>;
type SocketType = Socket<CollabClientToServerEvents, CollabServerToClientEvents, CollabInterServerEvents, CollabSocketData>;

export const joinRoomEvent = (io: IOType, socket: SocketType) => async (roomId: string, username: string) => {
  const { errMsg, data } = await joinRoom(roomId, username);
  if (errMsg) {
    console.log(`${username} error joining room ${roomId}`);
    //io.to(roomID).emit('errorEvent');
    return;
  }
  console.log(`${username} joined room ${roomId}`);
  socket.join(roomId);
  if (!data) {
    console.log(`${username} error retrieving room ${roomId} data`);
    return;
  }
  console.log(data);
  io.to(roomId).emit('roomUsersEvent', data.users);
  io.to(roomId).emit('remoteTextChangeEvent', data.text);
};

export const exitRoomEvent = (io: IOType, socket: SocketType) => async (roomId: string, username: string) => {
  const { errMsg, data } = await exitRoom(roomId, username);
  if (errMsg) {
    console.log(`${username} error exiting room ${roomId}`);
    //io.to(roomID).emit('errorEvent');
    return;
  }
  console.log(`${username} exited room ${roomId}`);
  socket.leave(roomId);
  if (!data) {
    console.log(`${username} error retrieving room ${roomId} data`);
    return;
  }
  io.to(roomId).emit('roomUsersEvent', data.users);
};

export const textChangeEvent = (io: IOType) => async (roomId: string, text: string) => {
  const { errMsg } = await changeRoomText(roomId, text);
  if (errMsg) {
    console.log(`error change text of room ${roomId}`);
    //io.to(roomID).emit('errorEvent');
    return;
  }
  console.log(`new change in ${roomId}: ${text}`);

  io.to(roomId).emit('remoteTextChangeEvent', text);
};
