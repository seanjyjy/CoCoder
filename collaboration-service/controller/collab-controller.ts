import { changeRoomText, exitRoom, joinRoom } from 'service/collab-service';
import type { Server } from 'socket.io';

type IOType = Server<>;
type SocketType = Socket<>;

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
  io.to(roomId).emit('room-users', data.users);
  io.to(roomId).emit('removeTextChangeEvent', data.text);
};

export const exitRoomEvent = (io: IOType) => async (roomId: string, username: string) => {
  const { errMsg, data } = await exitRoom(roomId, username);
  if (errMsg) {
    console.log(`${username} error exiting room ${roomId}`);
    //io.to(roomID).emit('errorEvent');
    return;
  }
  console.log(`${username} exited room ${roomId}`);
  if (!data) {
    console.log(`${username} error retrieving room ${roomId} data`);
    return;
  }
  io.to(roomId).emit('room-users', data);
  io.to(roomId).emit('removeTextChangeEvent', data.text);
};

export const textChangeEvent = (io: IOType) => async (roomId: string, text: string) => {
  const { errMsg } = await changeRoomText(roomId, text);
  if (errMsg) {
    console.log(`error change text of room ${roomId}`);
    //io.to(roomID).emit('errorEvent');
    return;
  }
  console.log(`new change in ${roomId}: ${text}`);

  io.to(roomId).emit('removeTextChangeEvent', text);
};
