import { useParams } from 'react-router-dom';
import CollabPage from './CollabPage';
import { getCurrentUser } from 'src/services/UserService';
import { useContext, useEffect } from 'react';
import useAuth from 'src/hooks/useAuth';
import { UserContext } from 'src/hooks/UserContext';

const InterviewPage = () => {
  const { id } = useParams<{ id: string }>();
  const { user, setUser } = useContext(UserContext);
  console.log('user context:', user);
  const sessionID = sessionStorage.getItem('sessionID');
  if (sessionID !== id) {
    // maybne can mae this page nice
    return <div>This interview session is not for you. </div>;
  }

  if (!user) {
    //redirect
    return <div>Failed to authenticate user</div>;
  }
  console.log('sessionId is', sessionID);

  // need to get user information here
  return (
    <>
      <CollabPage sessionId={sessionID} username={user.username} />
    </>
  );
};

export default InterviewPage;
