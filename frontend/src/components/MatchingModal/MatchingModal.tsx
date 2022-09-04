import { useEffect, useState, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import useInterval from '../../hooks/useInterval';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { MatchServerToClientEvents, MatchClientToServerEvents } from 'src/types';
import { QuestionDifficulty } from 'src/shared/constants';

import './index.scss';

type MatchingModalProps = {
  onClose: () => void;
  open: boolean;
  // TODO: sean
  // difficulty: QuestionDifficulty // to import next time
};

const MatchingModal = ({ onClose, open }: MatchingModalProps) => {
  const [count, setCount] = useState(30);
  const [isRunning, setIsRunning] = useState(true);

  const endMatching = useCallback(() => {
    setIsRunning(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    const socket: Socket<MatchServerToClientEvents, MatchClientToServerEvents> = io('http://localhost:8001');
    socket.on('connect', () => {
      console.log(`socket id: ${socket.id}`);
      socket.emit('matchEvent', `testbot-${Math.random()}`, QuestionDifficulty.EASY, socket.id);
    });

    socket.on('matchFailureEvent', () => {
      endMatching();
    });

    socket.on('matchSuccessEvent', (uuid) => {
      endMatching();
      sessionStorage.setItem('sessionID', uuid);
      // TODO: sean
      // navigate to new page
      console.log(`new session id: ${uuid}`);
    });

    return () => {
      socket.disconnect();
    };
  }, [endMatching]);

  useInterval(
    () => {
      if (count < 0) {
        endMatching();
        return;
      }

      setCount((oldCount) => oldCount - 1);
    },
    isRunning ? 1000 : null
  );

  return (
    <Modal open={open}>
      <div className="matchingModal">
        <div className="matchingModal__close">
          <ClearRoundedIcon style={{ color: '#757575', cursor: 'pointer' }} onClick={onClose} />
        </div>
        <div className="matchingModal__headerText">Searching for partner...</div>
        <CircularProgress />
        <div className="matchingModal__count">{`~ ${count}s...`}</div>
      </div>
    </Modal>
  );
};

export default MatchingModal;
