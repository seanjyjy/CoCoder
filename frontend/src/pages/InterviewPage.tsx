import { useParams } from 'react-router-dom';

const InterviewPage = () => {
  const { id } = useParams<{ id: string }>();
  const sessionID = sessionStorage.getItem('sessionID');
  if (sessionID !== id) {
    // maybne can mae this page nice
    return <div>This interview session is not for you. </div>;
  }

  return <div>Hello world LOL</div>;
};

export default InterviewPage;
