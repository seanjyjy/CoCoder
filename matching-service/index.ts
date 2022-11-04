import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import type { MatchClientToServerEvents, MatchInterServerEvents, MatchServerToClientEvents, MatchSocketData } from './types/socket-io-types';
import { matchEvent, deleteEvent, removeEvent } from './controller/match-controller';

const app = express();
const httpServer = createServer(app);
httpServer.listen(8001, () => {
  console.log('matching-service listening on port 8001');
});
// check with chester if i can include credentials here
const io = new Server<MatchClientToServerEvents, MatchServerToClientEvents, MatchInterServerEvents, MatchSocketData>(httpServer, {
  cors: {
    origin: ['http://localhost:3000'],
    // credentials: true
  },
  path: '/api/matching/socket.io',
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // config cors so that front-end can use
// @ts-ignore
app.options('*', cors());

app.get('/api/matching/', (req, res) => {
  res.send('Hello World from matching-service');
});

io.on('connection', (socket) => {
  socket.on('matchEvent', matchEvent(io));
  socket.on('deleteEvent', deleteEvent(io));
  socket.on('removeEvent', removeEvent);
});
