import Alert, { AlertColor } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useCallback, useState } from 'react';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import MatchingModal from 'src/components/MatchingModal';
import useTokenLogin from 'src/hooks/useTokenLogin';
import { QuestionDifficulty } from 'src/shared/constants';
import Difficulty from './Difficulty';
import './index.scss';

const Home = () => {
  const [open, setOpen] = useState(false);
  const { user } = useTokenLogin();
  const [snackOpen, setSnackOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [difficulty, setDifficulty] = useState(QuestionDifficulty.EASY);
  const [severity, setSeverity] = useState<AlertColor | undefined>();

  const onFailure = useCallback(() => {
    setSnackOpen(true);
    setMessage('Failed to find a match! Please try again');
    setSeverity('warning');
  }, []);

  const onSuccess = useCallback(() => {
    setSnackOpen(true);
    setMessage('Found a match, redirecting you to a room!');
    setSeverity('success');
  }, []);

  return (
    <div className="home">
      <div>
        <Header />
        <div className="home__container">
          <div className="home__introduction">
            CodeReview emphasizes the need for engineers to be able to communicate with another just like in real world interviews. It is designed to allow
            learning to be enjoyable and interesting. We provide 3 levels of difficulty and you will be matched with another user of the same difficulty. You
            will take turn turns with one another to be the interviewer and interview respectively.
          </div>
          <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} setOpen={setOpen} />
          {open && user?.username && (
            <MatchingModal
              open={open}
              onClose={() => setOpen(false)}
              difficulty={difficulty}
              username={user.username}
              onFailure={onFailure}
              onSuccess={onSuccess}
            />
          )}
        </div>
        <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={snackOpen} onClose={() => setSnackOpen(false)} autoHideDuration={2000}>
          <Alert onClose={() => setSnackOpen(false)} severity={severity} sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
