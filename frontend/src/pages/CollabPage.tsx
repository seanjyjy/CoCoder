import { io, Socket } from 'socket.io-client';
import { useEffect, useState } from 'react';
import TextEditor from 'src/components/TextEditor';
import { CollabClientToServerEvents, CollabServerToClientEvents, TUserData } from '../../../common/collaboration-service/socket-io-types';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'src/services/RoutingService';

type CollabPageProps = {
  sessionId: string;
  username: string;
};

export default function CollabPage(props: CollabPageProps) {
  const [text, setText] = useState('');
  const [roomUsers, setRoomUsers] = useState<TUserData[]>([]);
  const navigate = useNavigate();
  const [socket, setSocket] = useState<Socket<CollabServerToClientEvents, CollabClientToServerEvents>>();

  console.log('user is', props.username);

  useEffect(() => {
    const newSocket = io('http://localhost:8002');
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on('connect', () => {
      console.log('emit joinRoomEvent');
      socket.emit('joinRoomEvent', props.sessionId, props.username);
    });

    socket.on('joinRoomFailure', () => {
      navigate(RoutePath.HOME);
    });

    socket.on('roomUsersEvent', (data: TUserData[]) => {
      console.log('roomUsersEvent');
      setRoomUsers(data);
    });

    socket.on('remoteTextChangeEvent', (data: string) => {
      console.log('new remote change');
      if (text !== data) {
        setText(data);
      }
    });

    return () => {
      handleDisconnect();
    };
  }, [socket]);

  const handleDisconnect = () => {
    console.log('called handleDisconnect', socket);
    if (socket) {
      socket.emit('exitRoomEvent', props.sessionId, props.username);
    }
    navigate(RoutePath.HOME);
  };

  const onTextChange = async (data: string) => {
    console.log('set text local', data);
    setText(data);
    if (socket) {
      socket.emit('textChangeEvent', props.sessionId, data);
    }
  };

  const roomUsersList = () => {
    return roomUsers.map((user) => {
      return (
        <div key={user.username}>
          {user.username} is {user.connected ? 'connected' : 'not connected'}
        </div>
      );
    });
  };
  return (
    <>
      <h1>Collab Page</h1>
      <div>Room users: </div>
      <div>{roomUsersList()}</div>

      <TextEditor text={text} onTextChange={onTextChange} />
      <Button variant={'contained'} onClick={handleDisconnect}>
        Exit Room
      </Button>
    </>
  );
}
