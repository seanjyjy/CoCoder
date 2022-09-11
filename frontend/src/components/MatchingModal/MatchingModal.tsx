import { useEffect, useState, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import useInterval from '../../hooks/useInterval';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { MatchServerToClientEvents, MatchClientToServerEvents } from 'src/types';
import { QuestionDifficulty } from 'src/shared/constants';
import { useNavigate } from 'react-router-dom';
import './index.scss';

type MatchingModalProps = {
  onClose: () => void;
  open: boolean;
  username: string;
  difficulty: QuestionDifficulty;
  onFailure: () => void;
  onSuccess: () => void;
};

const MatchingModal = ({ onClose, open, username, difficulty, onFailure, onSuccess }: MatchingModalProps) => {
  const [count, setCount] = useState(30);
  const [isRunning, setIsRunning] = useState(true);
  const navigate = useNavigate();

  const endMatching = useCallback(() => {
    setIsRunning(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    const socket: Socket<MatchServerToClientEvents, MatchClientToServerEvents> = io('http://localhost:8001');
    socket.on('connect', () => socket.emit('matchEvent', username, difficulty, socket.id));

    socket.on('matchFailureEvent', () => {
      endMatching();
      onFailure();
    });

    socket.on('errorEvent', () => {
      endMatching();
      onFailure();
    });

    socket.on('matchSuccessEvent', (uuid) => {
      endMatching();
      onSuccess();
      sessionStorage.setItem('sessionID', uuid);
      setTimeout(() => navigate(`/interview/${uuid}`), 1000);
    });

    return () => {
      socket.disconnect();
    };
  }, [difficulty, endMatching, username, onFailure, onSuccess, navigate]);

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
