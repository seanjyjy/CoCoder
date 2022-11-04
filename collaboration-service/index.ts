import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { CollabClientToServerEvents, CollabServerToClientEvents, CollabInterServerEvents, CollabSocketData } from './types/socket-io-types';
import {
  fetchRoomEvent,
  exitRoomEvent,
  joinRoomEvent,
  codeDeleteEvent,
  codeInsertEvent,
  codeReplaceEvent,
  codeSyncEvent,
  cursorChangeEvent,
  roomLanguageChangeEvent,
} from './controller/collab-controller';
import router from './routes/routes';

const app = express();
const httpServer = createServer(app);

httpServer.listen(8002, () => {
  console.log('collaboration-service listening on port 8002');
});

const io = new Server<CollabClientToServerEvents, CollabServerToClientEvents, CollabInterServerEvents, CollabSocketData>(httpServer, {
  cors: {
    origin: ['http://localhost:3000'],
    // credentials: true
  },
  path: '/api/collaboration/socket.io',
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // config cors so that front-end can use
// @ts-ignore
app.options('*', cors());
app.use('/api/collaboration', router);

io.on('connection', (socket) => {
  socket.on('fetchRoomEvent', fetchRoomEvent(io, socket));

  socket.on('joinRoomEvent', joinRoomEvent(io, socket));

  socket.on('exitRoomEvent', exitRoomEvent(io, socket));

  socket.on('codeInsertEvent', codeInsertEvent(socket));
  socket.on('codeReplaceEvent', codeReplaceEvent(socket));
  socket.on('codeDeleteEvent', codeDeleteEvent(socket));
  socket.on('codeSyncEvent', codeSyncEvent(socket));
  socket.on('cursorChangeEvent', cursorChangeEvent(socket));
  socket.on('roomLanguageChangeEvent', roomLanguageChangeEvent(socket));

  socket.on('disconnect', () => {
    console.log('disconnected', socket.id);
  });
});
