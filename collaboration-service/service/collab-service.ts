import RedisClient from '../db';
import { TRoomData, TUserData } from '../../common/collaboration-service/socket-io-types';
import QuestionDifficulty from '../../common/QuestionDifficulty';
import { getRoomQuestion } from './connectQuestionService';

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

export const fetchRoom = async (roomId: string) => {
  try {
    const room = await getFromRedis(roomId);
    if (!room) {
      return { errMsg: `Room ${roomId} doesn't exists` };
    }
    return { errMsg: null, data: room };
  } catch {
    return { errMsg: `Something went wrong with fetching room ${roomId}` };
  }
};

export const createRoom = async (roomId: string, usernames: string[], difficulty: QuestionDifficulty) => {
  try {
    const existingRoom = await getFromRedis(roomId);
    if (existingRoom) {
      return { errMsg: `Room ${roomId} already exists` };
    }

    const { data } = await getRoomQuestion(difficulty);
    const room: TRoomData = {
      users: usernames.map((u) => createRoomUser(u)),
      text: data.data.codeSnippets.filter((codeSnippet) => codeSnippet.lang === 'JavaScript')[0].code,
      data: data.data,
      language: 'JavaScript',
    };
    await RedisClient.set(roomId, JSON.stringify(room));

    return { errMsg: null, data: room };
  } catch {
    return { errMsg: `Something went wrong with creating room ${roomId}` };
  }
};

export const joinRoom = async (roomId: string, username: string) => {
  try {
    const room = await getFromRedis(roomId);
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
    if (room.text === text) {
      return { errMsg: null };
    }
    room.text = text;
    await RedisClient.set(roomId, JSON.stringify(room));
    return { errMsg: null };
  } catch {
    return { errMsg: 'Something went wrong with change room text' };
  }
};

export const changeRoomLanguage = async (roomId: string, language: string) => {
  try {
    const room = await getFromRedis(roomId);
    if (!room) {
      return { errMsg: `Room ${roomId} doesn't exists!` };
    }
    if (room.language === language) {
      return { errMsg: null };
    }
    room.language = language;
    await RedisClient.set(roomId, JSON.stringify(room));

    return { errMsg: null };
  } catch {
    return { errMsg: 'Something went wrong with changing room language' };
  }
};

export const deleteRoom = async (roomId: string) => {
  try {
    await RedisClient.del(roomId);
    return { errMsg: null, data: roomId };
  } catch {
    return { errMsg: 'Something went wrong with room delete' };
  }
};
