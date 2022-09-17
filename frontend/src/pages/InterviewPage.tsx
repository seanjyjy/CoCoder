import { useNavigate, useParams } from 'react-router-dom';
import CollabPage from './CollabPage';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from 'src/hooks/UserContext';
import { CollabSocketContext } from 'src/hooks/SocketContext';
import { RoutePath } from 'src/services/RoutingService';
import Loading from 'src/components/Loading';

const InterviewPage = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const socket = useContext(CollabSocketContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user || !id) {
      return;
    }

    socket.emit('joinRoomEvent', id, user.username);

    socket.on('joinRoomFailure', handleJoinRoomFailure);

    socket.on('joinRoomSuccess', handleJoinRoomSuccess);

    return () => {
      socket.off('joinRoomFailure', handleJoinRoomFailure);
      socket.off('joinRoomSuccess', handleJoinRoomSuccess);
    };
  }, [socket]);

  if (!user || !id) {
    navigate(RoutePath.BASE);
  }

  const handleJoinRoomFailure = () => {
    console.log('joinRoomFailure');
    navigate(RoutePath.HOME);
  };

  const handleJoinRoomSuccess = () => {
    console.log('joinRoomSuccess');
    setIsLoading(false);
  };

  return <>{isLoading || !user || !id ? <Loading /> : <CollabPage roomId={id} username={user.username} />}</>;
};

export default InterviewPage;
