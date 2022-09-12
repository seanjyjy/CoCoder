import RedisClient from '../db';
import { TRoomData } from '../../common/collaboration-service/socket-io-types';

const newRoomData = (): TRoomData => {
  return { users: [], text: '' };
};
const getFromRedis = async (key: string): Promise<TRoomData> => {
  const data = await RedisClient.get(key);
  return data ? JSON.parse(data) : null;
};

export const joinRoom = async (roomId: string, username: string) => {
  try {
    const roomData = (await getFromRedis(roomId)) ?? newRoomData();
    console.log(roomData);
    if (!roomData.users.includes(username)) {
      roomData.users.push(username);
      await RedisClient.set(roomId, JSON.stringify(roomData));
    }

    return { errMsg: null, data: roomData };
  } catch {
    return { errMsg: 'Something went wrong with user joining room' };
  }
};

export const exitRoom = async (roomId: string, username: string) => {
  try {
    const roomData = await getFromRedis(roomId);

    if (roomData.users.includes(username)) {
      roomData.users = roomData.users.filter((u) => u == username);
      await RedisClient.set(roomId, JSON.stringify(roomData));
    }
    return { errMsg: null, data: roomData };
  } catch {
    return { errMsg: 'Something went wrong with user joining room' };
  }
};

export const changeRoomText = async (roomId: string, text: string) => {
  try {
    const roomData = await getFromRedis(roomId);
    roomData.text = text;
    await RedisClient.set(roomId, JSON.stringify(roomData));
    return { errMsg: null };
  } catch {
    return { errMsg: 'Something went wrong with user joining room' };
  }
};
