import RedisClient from '../db';
import { TRoomData, TUserData } from '../../common/collaboration-service/socket-io-types';

const getFromRedis = async (key: string): Promise<TRoomData | null> => {
  const data = await RedisClient.get(key);
  return data ? JSON.parse(data) : null;
};

const createRoomUser = (username: string): TUserData => {
  return {
    username,
    connected: false,
  };
};

export const createRoom = async (roomId: string, usernames: string[]) => {
  try {
    const exisTRoomData = await getFromRedis(roomId);
    if (exisTRoomData) {
      return { errMsg: `Room ${roomId} already exists` };
    }
    const room: TRoomData = {
      users: usernames.map((u) => createRoomUser(u)),
      text: '',
    };
    await RedisClient.set(roomId, JSON.stringify(room));

    return { errMsg: null, data: room };
  } catch {
    return { errMsg: `Something went wrong with creating room ${roomId}` };
  }
};

export const joinRoom = async (roomId: string, username: string) => {
  try {
    console.log('collab-service joinRoom');
    const room = await getFromRedis(roomId);
    console.log(room);
    if (!room) {
      return { errMsg: `Room ${roomId} doesn't exists!` };
    }
    const user = room.users.find((u) => u.username == username);
    if (!user) {
      return { errMsg: `User ${username} doesnt belong to ${roomId}!` };
    }
    user.connected = true;
    await RedisClient.set(roomId, JSON.stringify(room));

    return { errMsg: null, data: room };
  } catch {
    return { errMsg: 'Something went wrong with user joining room' };
  }
};

export const exitRoom = async (roomId: string, username: string) => {
  try {
    const room = await getFromRedis(roomId);
    if (!room) {
      return { errMsg: `Room ${roomId} doesn't exists!` };
    }

    const user = room.users.find((u) => u.username == username);

    if (user) {
      user.connected = false;
      await RedisClient.set(roomId, JSON.stringify(room));
    }
    return { errMsg: null, data: room };
  } catch {
    return { errMsg: 'Something went wrong with user joining room' };
  }
};

export const changeRoomText = async (roomId: string, text: string) => {
  try {
    const room = await getFromRedis(roomId);
    if (!room) {
      return { errMsg: `Room ${roomId} doesn't exists!` };
    }
    room.text = text;
    await RedisClient.set(roomId, JSON.stringify(room));
    return { errMsg: null };
  } catch {
    return { errMsg: 'Something went wrong with user joining room' };
  }
};

export const deleteRoom = async (roomId: string) => {
  try {
    console.log(`deleting room ${roomId}`);
    await RedisClient.del(roomId);
    return { errMsg: null, data: roomId };
  } catch {
    return { errMsg: 'Something went wrong with room delete' };
  }
};
