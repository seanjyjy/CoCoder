import { changeRoomText, exitRoom, joinRoom, deleteRoom, fetchRoom, createRoom } from '../service/collab-service';
import type { Server, Socket } from 'socket.io';
import {
  CollabClientToServerEvents,
  CollabInterServerEvents,
  CollabServerToClientEvents,
  CollabSocketData,
} from '../../common/collaboration-service/socket-io-types';
import { RequestHandler } from 'express';
import { HttpStatusCode } from '../../common/HttpStatusCodes';

type IOType = Server<CollabClientToServerEvents, CollabServerToClientEvents, CollabInterServerEvents, CollabSocketData>;
type SocketType = Socket<CollabClientToServerEvents, CollabServerToClientEvents, CollabInterServerEvents, CollabSocketData>;

export const createRoomRequest: RequestHandler = async (req, res) => {
  const { data } = await createRoom(req.body.roomId, req.body.users);
  if (data) {
    res.status(HttpStatusCode.OK).send(data);
  } else {
    res.status(HttpStatusCode.BAD_REQUEST).send();
  }
};

export const fetchRoomEvent = (io: IOType, socket: SocketType) => async (roomId: string) => {
  const { errMsg, data } = await fetchRoom(roomId);
  if (!data) {
    io.to(socket.id).emit('errorEvent', errMsg);
    return;
  }
  io.to(roomId).emit('roomUsersChangeEvent', data.users);
  io.to(roomId).emit('remoteTextChangeEvent', data.text);
};

export const joinRoomEvent = (io: IOType, socket: SocketType) => async (roomId: string, username: string) => {
  const { data } = await joinRoom(roomId, username);
  if (!data) {
    io.to(socket.id).emit('joinRoomFailure');
    return;
  }
  socket.join(roomId);

  io.to(socket.id).emit('joinRoomSuccess');
  io.to(roomId).emit('roomUsersChangeEvent', data.users);
  io.to(roomId).emit('remoteTextChangeEvent', data.text);
};

export const exitRoomEvent = (io: IOType, socket: SocketType) => async (roomId: string, username: string) => {
  const { errMsg, data } = await exitRoom(roomId, username);
  if (!data) {
    io.to(socket.id).emit('errorEvent', errMsg);
    return;
  }
  socket.leave(roomId);
  io.to(roomId).emit('roomUsersChangeEvent', data.users);

  await handleRoomDelete(roomId);
};

export const textChangeEvent = (io: IOType) => async (roomId: string, text: string) => {
  const { errMsg } = await changeRoomText(roomId, text);
  if (errMsg) {
    return;
  }

  io.to(roomId).emit('remoteTextChangeEvent', text);
};

// Delete room when users are disconnected after a period of time
const handleRoomDelete = async (roomId: string) => {
  const { data: room } = await fetchRoom(roomId);
  if (!room || room.users.some((u) => u.connected)) {
    return;
  }
  setTimeout(async () => {
    // If after 5s, if room still has no one, delete from store
    const { data: room } = await fetchRoom(roomId);
    if (!room || room.users.some((u) => u.connected)) {
      return;
    }
    const { errMsg } = await deleteRoom(roomId);
    if (errMsg) {
      console.log(errMsg);
    } else {
      console.log(`Room ${roomId} deleted`);
    }
  }, 5000);
};
