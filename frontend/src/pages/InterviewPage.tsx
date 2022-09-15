import { useNavigate, useParams } from 'react-router-dom';
import CollabPage from './CollabPage';
import { getCurrentUser } from 'src/services/UserService';
import { useContext, useEffect } from 'react';
import useAuth from 'src/hooks/useAuth';
import { UserContext } from 'src/hooks/UserContext';
import { RoutePath } from 'src/services/RoutingService';

const InterviewPage = () => {
  const { id } = useParams<{ id: string }>();
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  console.log('user context:', user);

  //const sessionID = sessionStorage.getItem('sessionID');
  // sessionStorage not needed. Authenticate on collab service

  if (!user || !id) {
    //redirect
    navigate(RoutePath.BASE);
    //return <>Not allowed</>;
    return <></>;
  }
  // todo: move socket logic here

  console.log('sessionId is', id);

  return (
    <>
      <CollabPage sessionId={id} username={user.username} />
    </>
  );
};

export default InterviewPage;
