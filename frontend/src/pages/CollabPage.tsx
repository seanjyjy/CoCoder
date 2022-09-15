import { io, Socket } from 'socket.io-client';
import { useContext, useEffect, useState } from 'react';
import TextEditor from 'src/components/TextEditor';
import { CollabClientToServerEvents, CollabServerToClientEvents, TUserData } from '../../../common/collaboration-service/socket-io-types';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'src/services/RoutingService';
import { CollabSocketContext } from 'src/hooks/SocketContext';

type CollabPageProps = {
  roomId: string;
  username: string;
};

export default function CollabPage(props: CollabPageProps) {
  const [text, setText] = useState('');
  const [roomUsers, setRoomUsers] = useState<TUserData[]>([]);
  const navigate = useNavigate();
  const socket = useContext(CollabSocketContext);

  useEffect(() => {
    socket.on('remoteTextChangeEvent', handleRemoteTextChange);
    socket.on('roomUsersChangeEvent', handleRoomUsersChange);

    return () => {
      socket.off('remoteTextChangeEvent', handleRemoteTextChange);
      socket.off('roomUsersChangeEvent', handleRoomUsersChange);
    };
  }, [socket]);

  const handleDisconnect = () => {
    socket.emit('exitRoomEvent', props.roomId, props.username);
    navigate(RoutePath.HOME);
  };

  const handleRoomUsersChange = (users: TUserData[]) => {
    console.log('handleRoomUsersChange');
    setRoomUsers(users);
  };

  const handleRemoteTextChange = (data: string) => {
    console.log('new remote change');
    if (text !== data) {
      setText(data);
    }
  };

  const handleTextChange = async (data: string) => {
    console.log('set text local', data);
    setText(data);
    socket.emit('textChangeEvent', props.roomId, data);
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

      <TextEditor text={text} onTextChange={handleTextChange} />
      <Button variant={'contained'} onClick={handleDisconnect}>
        Exit Room
      </Button>
    </>
  );
}
