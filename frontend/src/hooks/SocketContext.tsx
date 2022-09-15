import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';
import { CollabClientToServerEvents, CollabServerToClientEvents } from '../../../common/collaboration-service/socket-io-types';

export const collabSocket: Socket<CollabServerToClientEvents, CollabClientToServerEvents> = io('http://localhost:8002');

export const CollabSocketContext = createContext(collabSocket);
