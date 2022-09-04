import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import type { MatchClientToServerEvents, MatchInterServerEvents, MatchServerToClientEvents, MatchSocketData } from '../socket-io-types/types';
import { matchEvent, deleteEvent } from './controller/match-controller';

const app = express();
const httpServer = createServer(app);
httpServer.listen(8001);
// check with chester if i can include credentials here
const io = new Server<MatchClientToServerEvents, MatchServerToClientEvents, MatchInterServerEvents, MatchSocketData>(httpServer, {
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
  res.send('Hello World from matching-service');
});

io.on('connection', (socket) => {
  socket.on('matchEvent', matchEvent(io));
  socket.on('deleteEvent', deleteEvent(io));
});
