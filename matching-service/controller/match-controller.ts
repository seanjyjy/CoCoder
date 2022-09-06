// This is a socket-io controller. It is similar to routes

import type { Server } from 'socket.io';
import QuestionDifficulty from '../../common/QuestionDifficulty';
import { MatchClientToServerEvents, MatchInterServerEvents, MatchServerToClientEvents, MatchSocketData } from '../../socket-io-types/types';
import { createMatch, deleteMatch, findMatch } from '../service/match-service';
import sleep from '../../utils/sleep';
import { uuid } from 'uuidv4';

type IOType = Server<MatchClientToServerEvents, MatchServerToClientEvents, MatchInterServerEvents, MatchSocketData>;

export const matchEvent = (io: IOType) => async (username: string, difficulty: QuestionDifficulty, roomID: string) => {
  const { errMsg } = await createMatch(username, difficulty, roomID);
  if (errMsg) {
    io.to(roomID).emit('errorEvent');
    return;
  }

  let found = false;

  // try to find for roughly 30s
  for (let i = 0; i < 30; i++) {
    const { user, errMsg } = await findMatch(username, difficulty);
    if (errMsg) {
      io.to(roomID).emit('errorEvent');
      break;
    }

    console.log(user);

    if (user) {
      found = true;
      const sessionID = uuid();
      io.to(roomID).emit('matchSuccessEvent', sessionID);
      io.to(user.roomID).emit('matchSuccessEvent', sessionID);
      await deleteMatch(username, difficulty);
      await deleteMatch(user.username, difficulty);
      break;
    }

    await sleep(1000);
  }

  if (!found) {
    io.to(roomID).emit('matchFailureEvent');
  }
};

export const deleteEvent = (io: IOType) => async (username: string, difficulty: QuestionDifficulty, roomID: string) => {
  const { errMsg } = await deleteMatch(username, difficulty);
  if (errMsg) {
    io.to(roomID).emit('errorEvent');
    return;
  }
};
