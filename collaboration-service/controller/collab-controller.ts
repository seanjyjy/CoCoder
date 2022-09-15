import { changeRoomText, exitRoom, joinRoom, deleteRoom, createRoom } from '../service/collab-service';
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
  console.log('called joinRoomEvent');

  const { errMsg, data } = await joinRoom(roomId, username);
  if (errMsg) {
    console.log(`${username} error joining room ${roomId} - ${errMsg}`);
    //io.to(roomID).emit('errorEvent');
    io.to(socket.id).emit('joinRoomFailure');
    return;
  }
  socket.join(roomId);
  console.log(`${username} joined room ${roomId}`);

  if (!data) {
    console.log(`${username} error retrieving room ${roomId} data`);
    return;
  }
  console.log(data);
  io.to(roomId).emit('roomUsersEvent', data.users);
  io.to(roomId).emit('remoteTextChangeEvent', data.text);
};

export const exitRoomEvent = (io: IOType, socket: SocketType) => async (roomId: string, username: string) => {
  console.log('called exitRoomEvent');
  const { errMsg, data } = await exitRoom(roomId, username);
  if (errMsg) {
    console.log(`${username} error exiting room ${roomId}`);
    //io.to(roomID).emit('errorEvent');
    return;
  }
  socket.leave(roomId);
  console.log(`${username} exited room ${roomId}`);
  if (!data) {
    console.log(`${username} error retrieving room ${roomId} data`);
    return;
  }
  io.to(roomId).emit('roomUsersEvent', data.users);

  handleRoomDelete(io, roomId);
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

const handleRoomDelete = (io: IOType, roomId: string) => {
  const room = io.sockets.adapter.rooms.get(roomId);
  if (room && room.size > 0) {
    return;
  }
  console.log('Handle room delete');
  setTimeout(async () => {
    // If after 5s, if room still has no one, delete from store
    console.log(room);
    if (!room || (room && room.size == 0)) {
      const { errMsg, data } = await deleteRoom(roomId);
      if (errMsg) {
        console.log(errMsg);
      } else {
        console.log('room deleted');
      }
    }
  }, 5000);
};
