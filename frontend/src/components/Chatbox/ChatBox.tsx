import { useMemo, useState, KeyboardEvent } from 'react';
import { DataConnection } from 'peerjs';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import type { TUserData } from 'src/types';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import './index.scss';

export type ChatBoxProps = {
  username: string;
  dataConnection: DataConnection;
  roomUsers: TUserData[];
};

export type TChatMsg = {
  username: string;
  msg: string;
};

const ChatBox = ({ username, dataConnection: peerConnection, roomUsers }: ChatBoxProps) => {
  const [draftMsg, setDraftMsg] = useState('');
  const [msgLst, setMsgLst] = useState<TChatMsg[]>([]);
  const dataConnection = useMemo(() => {
    peerConnection.on('open', () => {
      peerConnection.send(username + ' connected');
    });
    peerConnection.on('data', (data) => {
      console.log('Data connection received:', data);
      let refinedData = data as TChatMsg;
      if (refinedData.msg) {
        setMsgLst((prev) => [data as TChatMsg, ...prev]);
      }
    });
    peerConnection.on('error', (error) => {
      console.log('Data connection error:', error);
    });
    return peerConnection;
  }, [peerConnection, username]);

  const onSend = () => {
    if (dataConnection) {
      if (dataConnection.open) {
        if (draftMsg.length > 0) {
          dataConnection.send({ msg: draftMsg, username: username });
          setMsgLst((prev) => [{ msg: draftMsg, username: username }, ...prev]);
          setDraftMsg('');
        }
      } else {
        console.log('Connection not open');
      }
    }
  };

  return (
    <div className="chatbox">
      <div className="chatbox__messages">
        {msgLst.map((msg, index) => {
          return (
            <div key={index} className={`chat__message ${username === msg.username ? 'text_right' : 'text_left'}`}>
              <div className="chat__message__username" style={{ color: roomUsers.find((user) => user.username === msg.username)?.color }}>
                {msg.username}
              </div>
              <div className="chat__message__message">{msg.msg}</div>
            </div>
          );
        })}
      </div>
      <div className="chatbox__bot">
        <TextareaAutosize
          value={draftMsg}
          onChange={(event) => setDraftMsg(event.target.value)}
          placeholder="Write a messsage..."
          maxRows={4}
          onKeyDown={(evt: KeyboardEvent<HTMLTextAreaElement>) => {
            if (evt.key === 'Enter' && !evt.shiftKey) {
              onSend();
              evt.preventDefault();
            }
          }}
        />
        <IconButton color="primary" onClick={onSend}>
          <SendIcon color="primary" />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatBox;
