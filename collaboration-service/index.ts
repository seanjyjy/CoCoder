import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import {
  CollabClientToServerEvents,
  CollabServerToClientEvents,
  CollabInterServerEvents,
  CollabSocketData,
} from '../common/collaboration-service/socket-io-types';
import { fetchRoomEvent, exitRoomEvent, joinRoomEvent, textChangeEvent } from './controller/collab-controller';
import { HttpStatusCode } from '../common/HttpStatusCodes';
import { createRoom } from './service/collab-service';

const app = express();
const httpServer = createServer(app);

httpServer.listen(8002, () => {
  console.log('Collaboration service listening on port 8002');
});

const io = new Server<CollabClientToServerEvents, CollabServerToClientEvents, CollabInterServerEvents, CollabSocketData>(httpServer, {
  cors: {
    origin: ['http://localhost:3000'],
    // credentials: true
  },
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // config cors so that front-end can use
// @ts-ignore
app.options('*', cors());

app.get('/', (req, res) => {
  res.send('Hello World from collaboration-service');
});

app.post('/createRoom', async (req, res) => {
  const { errMsg, data } = await createRoom(req.body.roomId, req.body.users);
  if (errMsg) {
    res.status(HttpStatusCode.BAD_REQUEST).send();
    return;
  }

  res.status(HttpStatusCode.OK).send(data);
});

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('fetchRoomEvent', fetchRoomEvent(io, socket));

  socket.on('joinRoomEvent', joinRoomEvent(io, socket));

  socket.on('exitRoomEvent', exitRoomEvent(io, socket));

  socket.on('disconnect', () => {
    console.log('disconnected', socket.id);
  });

  socket.on('textChangeEvent', textChangeEvent(io));
});
