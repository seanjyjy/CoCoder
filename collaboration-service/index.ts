import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { joinRoom, exitRoom, changeRoomText } from './service/collab-service';

const app = express();
const httpServer = createServer(app);

httpServer.listen(8002, () => {
  console.log('Collaboration service listening on port 8002');
});

// check with chester if i can include credentials here
const io = new Server(httpServer, {
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

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('joinRoomEvent', async (roomId, username) => {
    //io.to(roomId).emit('new-partner', username);
    const { errMsg, data } = await joinRoom(roomId, username);
    if (errMsg) {
      console.log(`${username} error joining room ${roomId}`);
      //io.to(roomID).emit('errorEvent');
      return;
    }
    console.log(`${username} joined room ${roomId}`);
    socket.join(roomId);
    if (!data) {
      console.log(`${username} error retrieving room ${roomId} data`);
      return;
    }
    console.log(data);
    io.to(roomId).emit('room-users', data.users);
    io.to(roomId).emit('removeTextChangeEvent', data.text);
    // pull room data
  });

  socket.on('exitRoomEvent', async (roomId, username) => {
    const { errMsg, data } = await exitRoom(roomId, username);
    if (errMsg) {
      console.log(`${username} error exiting room ${roomId}`);
      //io.to(roomID).emit('errorEvent');
      return;
    }
    console.log(`${username} exited room ${roomId}`);
    if (!data) {
      console.log(`${username} error retrieving room ${roomId} data`);
      return;
    }
    io.to(roomId).emit('room-users', data);
    io.to(roomId).emit('removeTextChangeEvent', data.text);
  });

  socket.on('textChangeEvent', async (roomId, text) => {
    const { errMsg } = await changeRoomText(roomId, text);
    if (errMsg) {
      console.log(`error change text of room ${roomId}`);
      //io.to(roomID).emit('errorEvent');
      return;
    }
    console.log(`new change in ${roomId}: ${text}`);

    io.to(roomId).emit('removeTextChangeEvent', text);
  });
});
