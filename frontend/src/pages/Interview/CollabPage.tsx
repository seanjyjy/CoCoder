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

import { COLORS, sourceUser, partnerUser, TCodeEditorUser } from './constants';
import type { CollabClientToServerEvents, CollabServerToClientEvents, QuestionType, TUserData } from 'src/types';

import './index.scss';
import './tailwindProse.scss';

type CollabPageProps = {
  roomId: string;
  username: string;
};

type TSocket = Socket<CollabServerToClientEvents, CollabClientToServerEvents>;

export default function CollabPage({ roomId, username }: CollabPageProps) {
  const [roomUsers, setRoomUsers] = useState<TUserData[]>([]);
  const navigate = useNavigate();
  const [codeSocket, setCodeSocket] = useState<TSocket>();
  const editor = useRef<CodeMirror.Editor>();
  const [otherLabel, setOtherLabel] = useState<string>();
  const didUserMoveRef = useRef(false);
  const [question, setQuestion] = useState<QuestionType>();
  const [language, setLanguage] = useState('JavaScript');

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

  const handleDisconnect = useCallback(() => {
    navigate(RoutePath.HOME);
  }, [navigate]);

  useEffect(() => {
    if (editor.current) {
      editor.current?.setOption('mode', getMode(language));
      const value = question && getSnippet(question, language)?.code;
      if (value) {
        editor.current?.setValue(value);
      }
    }
  }, [language]);

  useEffect(() => {
    const socket: TSocket = io('http://localhost:8002', {
      closeOnBeforeunload: false,
    });
    setCodeSocket(socket);

    socket.on('connect', () => {
      socket.emit('joinRoomEvent', roomId, username);
      setTimeout(() => {
        socket.emit('fetchRoomEvent', roomId);
      }, 50);
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
    const editorHTML = document.getElementById('editor') as HTMLTextAreaElement;
    if (editorHTML == null || codeSocket == null || otherLabel == null) {
      return;
    }

    const codeEditor = CodeMirror.fromTextArea(editorHTML, {
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
      contentManager.replace(0, code.length, code);
    });

    const usernameIdx = roomUsers.findIndex((roomUser) => roomUser.username === username);
    const otherUserIdx = roomUsers.findIndex((roomUser) => roomUser.username === otherLabel);
    const { cursor: sourceCursor, selection: sourceSelection } = getEditorUserConfig(
      sourceUser,
      username,
      cursorManager,
      selectionManager,
      COLORS[usernameIdx]
    );
    const { cursor: partnerCursor, selection: partnerSelection } = getEditorUserConfig(
      partnerUser,
      otherLabel,
      cursorManager,
      selectionManager,
      COLORS[otherUserIdx]
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
    if (codeSocket && editor.current && (roomUsers.length === 1 || roomUsers[0].username === username)) {
      codeSocket.emit('codeSyncEvent', roomId, editor.current.getValue());
    }
  }, 1000);

  return (
    <div className="coding">
      <div className="coding__question prose">
        <div className="coding__question_header">{question ? `${question?.questionId}. ${question?.title}` : ''}</div>
        <div className="coding__leetcode_content">{question?.content && parse(question?.content.replace(/&nbsp;/g, ''))}</div>
      </div>
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
          <textarea id="editor" />
        </div>
        <div className="coding__bottom_tab">
          <div className="coding__users">
            {roomUsers.map(({ username, connected }, index) => {
              if (!connected) return <></>;
              return (
                <div key={username}>
                  <div className="coding__user__ball" style={{ backgroundColor: COLORS[index] }} />
                  <div className="coding__user__name">{username}</div>
                </div>
              );
            })}
          </div>
          <div className="coding__controllers">
            <Button variant="contained" onClick={handleDisconnect}>
              END SESSION
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
