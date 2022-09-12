//import CodeMirror from '../components/CodeEditor';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import TextEditor from 'src/components/TextEditor';

type CollabPageProps = {
  sessionId: string;
  username: string;
};

export default function CollabPage(props: CollabPageProps) {
  const [socket, setSocket] = useState<any>();
  const [text, setText] = useState('');
  const [roomUsers, setRoomUsers] = useState<string[]>([]);
  console.log('user is', props.username);

  useEffect(() => {
    const s = io('http://localhost:8002');
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on('connect', () => {
      socket.emit('joinRoomEvent', props.sessionId, props.username, socket.id);
    });

    socket.on('disconnect', () => {
      socket.emit('exitRoomEvent', props.sessionId, props.username);
    });

    socket.on('room-users', (data: string[]) => {
      setRoomUsers(data);
    });

    socket.on('removeTextChangeEvent', (data: string) => {
      console.log('new remote change');
      if (text !== data) {
        setText(data);
      }
    });
  }, [socket]);

  const onTextChange = async (data: string) => {
    console.log('set text local', data);
    setText(data);
    socket.emit('textChangeEvent', props.sessionId, data); // if send text, it may be delayed since we don't wait on setText
  };
  const roomUsersList = () => {
    return roomUsers.map((user) => {
      return <div>{user}</div>;
    });
  };
  return (
    <>
      <h1>Collab Page</h1>
      <div>Room users: </div>
      <div>{roomUsersList()}</div>

      <TextEditor text={text} onTextChange={onTextChange} />
    </>
  );
}
