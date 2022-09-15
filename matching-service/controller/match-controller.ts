// This is a socket-io controller. It is similar to routes

import type { Server } from 'socket.io';
import QuestionDifficulty from '../../common/QuestionDifficulty';
import { MatchClientToServerEvents, MatchInterServerEvents, MatchServerToClientEvents, MatchSocketData } from '../../socket-io-types/types';
import { createMatch, deleteMatch, findMatch } from '../service/match-service';
import sleep from '../../utils/sleep';
import { uuid } from 'uuidv4';
import { HttpStatusCode } from '../../common/HttpStatusCodes';

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
      const sessionID = uuid();

      // this is so that only one client will trigger a room create
      if (username > user.username) {
        const res = await createCollabRoom(sessionID, [username, user.username]);
        if (res.status === HttpStatusCode.OK) {
          console.log('room created in collab service', res.data);
          io.to(roomID).emit('matchSuccessEvent', sessionID);
          io.to(user.roomID).emit('matchSuccessEvent', sessionID);
          await deleteMatch(username, difficulty);
          await deleteMatch(user.username, difficulty);
        } else {
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

// to do: refactor to another file and add types
import axios from 'axios';

const URI_COLLAB_SVC = process.env.URI_COLLAB_SVC || 'http://localhost:8002';

export const createCollabRoom = (roomId: string, users: string[]) => {
  console.log(`request create room ${roomId}`);
  console.log(users);
  return axios.post(URI_COLLAB_SVC + '/createRoom', {
    roomId,
    users,
  });
};
