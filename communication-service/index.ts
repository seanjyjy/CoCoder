import express from 'express';
import cors from 'cors';
// import { ExpressPeerServer } from 'peer';
import { createServer } from 'http';
import { Server } from 'socket.io';
import router from './routes/routes';

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:3000'],
    // credentials: true
  },
  path: '/api/communication/socket.io',
});

httpServer.listen(8005, () => {
  console.log('Communication service listening on port 8005');
});

// const peerServer = ExpressPeerServer(httpServer, {
//   path: '/',
// });

app.use(cors()); // config cors so that front-end can use
// @ts-ignore
app.options('*', cors());
app.use('/api/communication', router);
// app.use(peerServer);

io.on('connection', (socket) => {
  console.log('New connection: ', socket.id);
  socket.on('joinRoomEvent', (roomId: string, peerId: string) => {
    console.log(`${peerId} joined room ${roomId}`);
    socket.join(roomId);
    socket.to(roomId).emit('peerConnected', peerId);

    socket.on('joinCallRoomEvent', (roomId: string, peerId: string) => {
      console.log(`${peerId} joined call ${roomId}`);
      socket.to(roomId).emit('peerCallConnected', peerId);
    });

    socket.on('leaveCallRoomEvent', (roomId: string, peerId: string) => {
      console.log(`${peerId} left call ${roomId}`);
      socket.to(roomId).emit('peerCallDisconnected', peerId);
    });

    socket.on('disconnect', () => {
      console.log(`${peerId} disconnected from room ${roomId}`);
      socket.to(roomId).emit('peerDisconnected', peerId);
      socket.leave(roomId);
    });
  });
});
