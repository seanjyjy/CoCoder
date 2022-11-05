import { io, Socket } from 'socket.io-client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'src/services/RoutingService';
import { getMode, languages, getSnippet } from './utils';
import { throttle } from 'throttle-typescript';
import parse from 'html-react-parser';
import useInterval from 'src/hooks/useInterval';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { SnackbarProvider } from 'notistack';
import SnackMessages from 'src/hooks/useSnackbar';
// Reference page: https://github.com/convergencelabs/codemirror-collab-ext
// code mirror related. Ignore the types lolol
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-palenight.css';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/comment/comment';
import '@convergencelabs/codemirror-collab-ext/css/codemirror-collab-ext.css';
import * as CodeMirrorCollabExt from '@convergencelabs/codemirror-collab-ext';

import { sourceUser, partnerUser, TCodeEditorUser } from './constants';
import type { CollabClientToServerEvents, CollabServerToClientEvents, QuestionType, TUserData } from 'src/types';

import usePeer from 'src/hooks/usePeer';
import ChatBox from 'src/components/Chatbox/ChatBox';
import useVideo from 'src/hooks/useVideo';
import Draggable from 'react-draggable';
import { Allotment } from 'allotment';

import observer from 'src/observer/Observer';

import 'allotment/dist/style.css';
import './index.scss';
import './tailwindProse.scss';
import { URI_COLLABORATION_SVC, PREFIX_COLLABORATION_SVC } from 'src/configs';

type CollabPageProps = {
  roomId: string;
  username: string;
};

type TCollabSocket = Socket<CollabServerToClientEvents, CollabClientToServerEvents>;

export default function CollabPage({ roomId, username }: CollabPageProps) {
  const navigate = useNavigate();
  const [roomUsers, setRoomUsers] = useState<TUserData[]>([]);
  const [codeSocket, setCodeSocket] = useState<TCollabSocket>();
  const editorHtml = useRef<HTMLTextAreaElement>(null);
  const [otherLabel, setOtherLabel] = useState<string>();
  const [question, setQuestion] = useState<QuestionType>();
  const [language, setLanguage] = useState('JavaScript');
  const didUserMoveRef = useRef(false);
  const editor = useRef<CodeMirror.Editor>();
  const myVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const [langSnackOpen, setLangSnackOpen] = useState(false);
  const [leaveSnackOpen, setLeaveSnackOpen] = useState(false);
  const [joinSnackOpen, setJoinSnackOpen] = useState(false);
  const [messageErrorSnackOpen, setMessageErrorSnackOpen] = useState(false);

  const [isOpenVideo, setIsOpenVideo] = useState(false);
  const [isMinimizeVideo, setIsMinimizedVideo] = useState(false);

  const { dataConnection, dialIn, leaveCall } = usePeer(roomId);
  const { handleCall, handleLeave, removeVideoStream, addVideoStream } = useVideo(dialIn, leaveCall);

  const getEditorUserConfig = (
    user: TCodeEditorUser,
    label: string,
    cursorManager: CodeMirrorCollabExt.RemoteCursorManager,
    selectionManager: CodeMirrorCollabExt.RemoteSelectionManager,
    color: string
  ) => {
    const cursor = cursorManager.addCursor(user.id, color, label);
    const selection = selectionManager.addSelection(user.id, color);
    return { cursor, selection };
  };

  const handleLanguageChange = (event: SelectChangeEvent) => {
    codeSocket?.emit('roomLanguageChangeEvent', roomId, event.target.value);
    setLanguage(event.target.value);
  };

  const leaveCallVideo = () => {
    handleLeave(myVideoRef.current!);
    setIsOpenVideo(false);
  };

  const openCallVideo = () => {
    handleCall(myVideoRef.current!);
    setIsOpenVideo(true);
  };

  const handleDisconnect = useCallback(() => {
    leaveCallVideo();
    navigate(RoutePath.HOME);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  useEffect(() => {
    const subscriber1 = observer.subscribe('partnerCloseCall', () => {
      removeVideoStream(remoteVideoRef.current!);
    });

    const subscriber2 = observer.subscribe('partnerOpenVideo', (stream: any) => {
      const refinedStream = stream as MediaStream;
      addVideoStream(remoteVideoRef.current!, refinedStream);
    });

    const subscriber3 = observer.subscribe('partnerLeftRoom', () => {
      setLeaveSnackOpen(true);
      setTimeout(() => setLeaveSnackOpen(false), 50);
    });

    const subscriber4 = observer.subscribe('partnerJoinedRoom', () => {
      setJoinSnackOpen(true);
      setTimeout(() => setJoinSnackOpen(false), 50);
    });

    const subscriber5 = observer.subscribe('chatMessageToAbsentPartner', () => {
      setMessageErrorSnackOpen(true);
      setTimeout(() => setMessageErrorSnackOpen(false), 50);
    });

    return () => {
      subscriber1.unsubscribe();
      subscriber2.unsubscribe();
      subscriber3.unsubscribe();
      subscriber4.unsubscribe();
      subscriber5.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (editor.current) {
      editor.current?.setOption('mode', getMode(language));
      const value = question && getSnippet(question, language)?.code;
      if (value) {
        editor.current?.setValue(value);
        setLangSnackOpen(true);
        setTimeout(() => setLangSnackOpen(false), 50);
      }
    }
    // donnid question here
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  useEffect(() => {
    const socket: TCollabSocket = io(URI_COLLABORATION_SVC, {
      closeOnBeforeunload: false,
      path: PREFIX_COLLABORATION_SVC + '/socket.io',
    });
    setCodeSocket(socket);

    socket.on('connect', () => {
      socket.emit('joinRoomEvent', roomId, username);
      socket.on('joinRoomSuccess', async () => {
        observer.publish('partnerJoinedRoom');
        setTimeout(() => {
          socket.emit('fetchRoomEvent', roomId);
        }, 50);
      });

      socket.on('codeInitEvent', (code) => {
        if (editorHtml.current && !editor.current) {
          editorHtml.current.setRangeText(code);
        }
      });

      socket.on('joinRoomFailure', handleDisconnect);

      socket.on('roomUsersChangeEvent', (users: TUserData[]) => {
        setRoomUsers(users);
        const otherLabel = users.filter((user) => user.username !== username)[0].username;
        setOtherLabel(otherLabel);
      });

      socket.on('roomQuestionEvent', (question) => setQuestion(question));
      socket.on('roomLanguageChangeEvent', (_roomId, newLanguage) => {
        if (language !== newLanguage) {
          setLanguage(newLanguage);
        }
      });
    });

    const handleExit = () => {
      socket.emit('exitRoomEvent', roomId, username, editor.current?.getValue());
      socket.close();
    };

    // triggered on refresh
    window.addEventListener('beforeunload', handleExit);

    return () => {
      window.removeEventListener('beforeunload', handleExit);
      // triggered when leaving page
      handleExit();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, username, handleDisconnect]);

  useEffect(() => {
    if (editorHtml.current == null || codeSocket == null || otherLabel == null) {
      return;
    }

    const codeEditor = CodeMirror.fromTextArea(editorHtml.current, {
      lineNumbers: true,
      keyMap: 'sublime',
      theme: 'material-palenight',
      mode: getMode(language), // default
      lineWrapping: true,
      scrollbarStyle: 'native',
    });

    editor.current = codeEditor;

    const cursorManager = new CodeMirrorCollabExt.RemoteCursorManager({
      // @ts-ignore This is likely to be a bug in the @types packages lol
      editor: codeEditor,
      tooltips: true,
      tooltipDuration: 1,
    });
    const selectionManager = new CodeMirrorCollabExt.RemoteSelectionManager({
      // @ts-ignore This is likely to be a bug in the @types packages lol
      editor: codeEditor,
    });
    const contentManager = new CodeMirrorCollabExt.EditorContentManager({
      // @ts-ignore This is likely to be a bug in the @types packages lol
      editor: codeEditor,
      onInsert(index, text) {
        codeSocket.emit('codeInsertEvent', roomId, index, text);
      },
      onReplace(index, length, text) {
        codeSocket.emit('codeReplaceEvent', roomId, index, length, text);
      },
      onDelete(index, length) {
        codeSocket.emit('codeDeleteEvent', roomId, index, length);
      },
    });

    codeSocket.on('codeInitEvent', (code) => {
      contentManager.replace(0, codeEditor.getValue().length, code);
    });

    const usernameIdx = roomUsers.findIndex((roomUser) => roomUser.username === username);
    const otherUserIdx = roomUsers.findIndex((roomUser) => roomUser.username === otherLabel);
    const { cursor: sourceCursor, selection: sourceSelection } = getEditorUserConfig(
      sourceUser,
      username,
      cursorManager,
      selectionManager,
      roomUsers[usernameIdx].color
    );
    const { cursor: partnerCursor, selection: partnerSelection } = getEditorUserConfig(
      partnerUser,
      otherLabel,
      cursorManager,
      selectionManager,
      roomUsers[otherUserIdx].color
    );

    // this is when we are moving the cursor
    codeEditor.on(
      'mousedown',
      throttle(() => (didUserMoveRef.current = true), 10)
    );
    codeEditor.on(
      'keydown',
      throttle(() => (didUserMoveRef.current = true), 10)
    );
    codeEditor.on(
      'beforeChange',
      throttle(() => (didUserMoveRef.current = false), 10)
    );

    // Prevent backspace on empty editor to avoid error thrown from the EditorContentManager
    codeEditor.on('keydown', (cm, event) => {
      if (event.key === 'Backspace' && cm.getValue().length === 0) {
        event.preventDefault();
      }
    });

    // this is when there is some cursor activity of the source user
    codeEditor.on('cursorActivity', () => {
      const cursor = codeEditor.getCursor();
      const from = codeEditor.getCursor('from');
      const to = codeEditor.getCursor('to');
      // if user move or select a text of code
      if (didUserMoveRef.current || codeEditor.getSelection()) {
        didUserMoveRef.current = false;
        setTimeout(() => codeSocket.emit('cursorChangeEvent', roomId, sourceUser.id, cursor, from, to), 0);
      }

      // setPosition throws error sometimes lol
      setTimeout(() => {
        try {
          sourceCursor.setPosition(cursor);
          sourceSelection.setPositions(from, to);
        } catch {}
      }, 0);
    });

    // this is when there is some cursor activity of the partner cursor
    codeSocket.on('cursorChangeEvent', (_roomId, _userId, cursor, from, to) => {
      try {
        partnerCursor.setPosition(cursor);
        partnerSelection.setPositions(from, to);
      } catch {}
    });

    codeSocket.on('codeInsertEvent', (_roomId, index, text) => {
      try {
        contentManager.insert(index, text);
      } catch {}
    });

    codeSocket.on('codeReplaceEvent', (_roomId, index, length, text) => {
      try {
        contentManager.replace(index, length, text);
      } catch {}
    });

    codeSocket.on('codeDeleteEvent', (_roomId, index, length) => {
      try {
        contentManager.delete(index, length);
      } catch {}
    });

    return () => {
      codeEditor.toTextArea();
      // Remove the current client own cursor.
      sourceCursor.dispose();
      sourceSelection.dispose();
      contentManager.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codeSocket, roomId, roomUsers, username, otherLabel]);

  useInterval(() => {
    if (codeSocket && editor.current) {
      codeSocket.emit('codeSyncEvent', roomId, editor.current.getValue());
    }
  }, 1500);

  const isConnected = dataConnection && dialIn && leaveCall;
  const peerName = roomUsers.find((roomUser) => roomUser.username !== username)?.username;

  return (
    <>
      <div className="coding">
        <Allotment vertical={true} defaultSizes={[50, 50]}>
          <div className="coding__question prose">
            <div className="coding__question_header">{question ? `${question?.title}` : ''}</div>
            <div className="coding__leetcode_content">{question?.content && parse(question?.content.replace(/&nbsp;/g, ''))}</div>
          </div>
          {isConnected && <ChatBox username={username} dataConnection={dataConnection} roomUsers={roomUsers} />}
        </Allotment>
        <div className="divider" />
        <div className="coding__right">
          <div className="coding__language_option">
            <div>Language: </div>
            <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 240 }} size="small" color="secondary">
              <Select value={language} onChange={handleLanguageChange} displayEmpty>
                {languages.map((language) => (
                  <MenuItem value={language} key={language}>
                    {language}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="editor__container">
            <textarea ref={editorHtml} id="editor" />
          </div>
          <div className="coding__bottom_tab">
            <div className="coding__users">
              {roomUsers.map(({ username, connected, color }) => {
                if (!connected) return <div key={username}></div>;
                return (
                  <div key={username}>
                    <div className="coding__user__ball" style={{ backgroundColor: color }} />
                    <div className="coding__user__name">{username}</div>
                  </div>
                );
              })}
            </div>
            <div className="coding__controllers">
              <Button variant="outlined" color="error" onClick={leaveCallVideo}>
                Leave Call
              </Button>
              <Button variant="contained" color="success" onClick={openCallVideo}>
                Join Call
              </Button>
              <Button variant="contained" onClick={handleDisconnect}>
                END SESSION
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Draggable bounds="body" defaultClassName={!isOpenVideo ? 'magicHidden' : ''}>
        <div className="videoCall">
          <div className="videoCallTools">
            <RemoveRoundedIcon style={{ cursor: 'pointer' }} onClick={() => setIsMinimizedVideo((minVideo) => !minVideo)} />
          </div>
          <video ref={myVideoRef} autoPlay muted className={`${isMinimizeVideo ? 'magicHidden' : ''} videoFrame`} />
          <video ref={remoteVideoRef} autoPlay className={`${isMinimizeVideo ? 'magicHidden' : ''} videoFrame`} />
        </div>
      </Draggable>
      <SnackbarProvider anchorOrigin={{vertical: "top", horizontal: "right"}} maxSnack={2} autoHideDuration={3000} preventDuplicate>
        <SnackMessages variant="info" text={`Language is set to ${language}`} open={langSnackOpen} />
        {(peerName) ? <SnackMessages variant="error" text={`User ${peerName} is disconnected.`} open={leaveSnackOpen} /> : ""}
        {(peerName) ? <SnackMessages variant="success" text={`User ${peerName} is connected.`} open={joinSnackOpen} /> : ""}
        <SnackMessages variant="error" text={`Message not sent. User ${peerName} is disconnected.`} open={messageErrorSnackOpen} />
      </SnackbarProvider>
    </>
  );
}
