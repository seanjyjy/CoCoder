import { useEffect, useState, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import useInterval from '../../hooks/useInterval';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { MatchServerToClientEvents, MatchClientToServerEvents } from '../../types/index';
import { QuestionDifficulty } from 'src/shared/constants';
import { useNavigate } from 'react-router-dom';
import './index.scss';
import { URI_MATCHING_SVC, PREFIX_MATCHING_SVC } from 'src/configs';

type MatchingModalProps = {
  onClose: () => void;
  open: boolean;
  username: string;
  difficulty: QuestionDifficulty;
  onFailure: () => void;
  onSuccess: () => void;
};

type TSocket = Socket<MatchServerToClientEvents, MatchClientToServerEvents>;

const MatchingModal = ({ onClose, open, username, difficulty, onFailure, onSuccess }: MatchingModalProps) => {
  const [count, setCount] = useState(30);
  const [isRunning, setIsRunning] = useState(true);
  const navigate = useNavigate();
  const [socket, setSocket] = useState<TSocket>();

  const endMatching = useCallback(() => {
    setIsRunning(false);
    onClose();
  }, [onClose]);

  const forceEnd = useCallback(() => {
    endMatching();
    socket?.emit('removeEvent', username, difficulty);
  }, [difficulty, endMatching, socket, username]);

  useEffect(() => {
    const socket: TSocket = io(URI_MATCHING_SVC, {
      path: PREFIX_MATCHING_SVC + '/socket.io',
    });
    setSocket(socket);
    socket.on('connect', () => {
      socket.emit('matchEvent', username, difficulty, socket.id);

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
    });

    return () => {
      socket.disconnect();
    };
  }, [difficulty, endMatching, username, onFailure, onSuccess, navigate]);

  useInterval(
    () => {
      if (count <= 0) {
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
          <ClearRoundedIcon style={{ color: '#757575', cursor: 'pointer' }} onClick={forceEnd} />
        </div>
        <div className="matchingModal__headerText">Searching for partner...</div>
        <CircularProgress />
        <div className="matchingModal__count">{`~ ${count}s...`}</div>
      </div>
    </Modal>
  );
};

export default MatchingModal;
