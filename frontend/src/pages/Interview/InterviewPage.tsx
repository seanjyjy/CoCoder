import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from 'src/hooks/UserContext';
import { RoutePath } from 'src/services/RoutingService';
import CollabPage from './CollabPage';

const InterviewPage = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user || !id) {
    //redirect
    navigate(RoutePath.BASE);
    return <></>;
  }
  // todo: move socket logic here

  return (
    <>
      <CollabPage roomId={id} username={user.username} />
    </>
  );
};

export default InterviewPage;
