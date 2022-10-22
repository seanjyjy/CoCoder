// This is a socket-io controller. It is similar to routes

import type { Server } from 'socket.io';
import QuestionDifficulty from '../../common/QuestionDifficulty';
import { MatchClientToServerEvents, MatchInterServerEvents, MatchServerToClientEvents, MatchSocketData } from '../types/socket-io-types';
import { createMatch, createRoom, deleteMatch, findMatch } from '../service/match-service';
import sleep from '../../common/utils/sleep';
import { v4 } from 'uuid';

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

    if (user) {
      await sleep(1000); // this is so that it wont instantly match to at least show some animation lol
      found = true;
      const sessionID = v4();

      // this is so that only one client will trigger a room create
      if (username > user.username) {
        const { errMsg } = await createRoom(sessionID, [username, user.username], difficulty);
        if (!errMsg) {
          io.to(roomID).emit('matchSuccessEvent', sessionID);
          await deleteMatch(username, difficulty);

          io.to(user.roomID).emit('matchSuccessEvent', sessionID);
          await deleteMatch(user.username, difficulty);
        } else {
          io.to(roomID).emit('errorEvent');
          found = false;
          break;
        }
      }
      break;
    }

    await sleep(1000);
  }

  if (!found) {
    // remember to clear it from the pool
    deleteMatch(username, difficulty);
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

// tbh we donnid deleteEvent dk why i have that also
export const removeEvent = async (username: string, difficulty: QuestionDifficulty) => {
  const { errMsg } = await deleteMatch(username, difficulty);
  if (errMsg) {
    return;
  }
};
