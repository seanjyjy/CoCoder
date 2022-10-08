import Alert, { AlertColor } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useCallback, useEffect, useState } from 'react';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import MatchingModal from 'src/components/MatchingModal';
import useTokenLogin from 'src/hooks/useTokenLogin';
import { QuestionDifficulty } from 'src/shared/constants';
import Difficulty from './Difficulty';
import History from './History';

import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses, LinearProgressProps } from '@mui/material/LinearProgress';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import './index.scss';
import { getUserStatistics } from 'src/services/HistoryService';

type LineProgressProps = {
  percentage: number;
  primaryColor: string;
  secondarycolor: string;
  difficulty: string;
  totalSolved: number;
  total: number;
};

const WrapperLinearProgress = ({ percentage, primaryColor, secondarycolor, ...rest }: Partial<LineProgressProps> & LinearProgressProps) => {
  return <LinearProgress {...rest} />;
};

const BorderLinearProgress = styled(WrapperLinearProgress)(({ primaryColor, secondarycolor }) => ({
  height: 4,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: secondarycolor,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: primaryColor,
  },
}));

const LineProgress = ({ percentage, primaryColor, secondarycolor, difficulty, total, totalSolved }: LineProgressProps) => {
  return (
    <div>
      <div className="linearProgressTitle">
        <div className="linearProgressTitle__difficulty">{difficulty}</div>
        <div className="linearProgressTitle__number">{`${totalSolved} / ${total}`}</div>
      </div>
      <BorderLinearProgress variant="determinate" value={percentage} percentage={percentage} primaryColor={primaryColor} secondarycolor={secondarycolor} />
    </div>
  );
};

const Home = () => {
  const [open, setOpen] = useState(false);
  const { user } = useTokenLogin();
  const [snackOpen, setSnackOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [difficulty, setDifficulty] = useState(QuestionDifficulty.EASY);
  const [severity, setSeverity] = useState<AlertColor | undefined>();
  const [easyAttempted, setEasyAttempted] = useState(0);
  const [mediumAttempted, setMediumAttempted] = useState(0);
  const [hardAttempted, setHardAttempted] = useState(0);
  const [easyTotal, setEasyTotal] = useState(0);
  const [mediumTotal, setMediumTotal] = useState(0);
  const [hardTotal, setHardTotal] = useState(0);
  const [languages, setLanguages] = useState<Array<String>>([]);

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

  const fetchStatistic = useCallback(async () => {
    if (user?.username) {
      const { data: axiosData } = await getUserStatistics(user.username);
      const {
        numberOfEasyAttempted,
        numberOfMediumAttempted,
        numberOfHardAttempted,
        totalNumberOfEasy,
        totalNumberOfHard,
        totalNumberOfMedium,
        languagesAttempted,
      } = axiosData;
      setEasyAttempted(numberOfEasyAttempted);
      setMediumAttempted(numberOfMediumAttempted);
      setHardAttempted(numberOfHardAttempted);
      setEasyTotal(totalNumberOfEasy);
      setMediumTotal(totalNumberOfMedium);
      setHardTotal(totalNumberOfHard);
      setLanguages(languagesAttempted);
    }
  }, [user?.username]);

  useEffect(() => {
    fetchStatistic();
  }, [fetchStatistic]);

  const totalPercentage =
    easyAttempted + mediumAttempted + hardAttempted === 0
      ? 0
      : Math.floor(((easyAttempted + mediumAttempted + hardAttempted) / (easyTotal + mediumTotal + hardTotal)) * 100);
  const easyPercentage = easyAttempted === 0 ? 0 : Math.floor((easyAttempted / easyTotal) * 100);
  const mediumPercentage = mediumAttempted === 0 ? 0 : Math.floor((mediumAttempted / mediumTotal) * 100);
  const hardPercentage = hardAttempted === 0 ? 0 : Math.floor((hardAttempted / hardTotal) * 100);

  return (
    <>
      <div className="home">
        <div>
          <Header />
          <div className="home__container">
            <div>
              <div className="home__introduction">
                CodeReview emphasizes the need for engineers to be able to communicate with another just like in real world interviews. It is designed to allow
                learning to be enjoyable and interesting. We provide 3 levels of difficulty and you will be matched with another user of the same difficulty.
                You will take turn turns with one another to be the interviewer and interview respectively.
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
              <History />
            </div>
            <div className="home__statistics">
              <div className="home__statistics__title">Overall Statistics</div>
              <div className="home__statistics__stats">
                <div className="home__statistics__progresscircle">
                  <CircularProgressbar
                    value={totalPercentage}
                    text={`${totalPercentage}%`}
                    strokeWidth={4}
                    styles={buildStyles({
                      strokeLinecap: 'round',
                      textSize: '16px',
                      pathColor: '#FFA116',
                      textColor: '#fff',
                      trailColor: '#4A4A4A',
                    })}
                  />
                </div>
                <div className="home__statistics__progressline">
                  <LineProgress
                    percentage={easyPercentage}
                    primaryColor="#00B8A3"
                    secondarycolor="#2A5237"
                    difficulty="Easy"
                    total={easyTotal}
                    totalSolved={easyAttempted}
                  />
                  <LineProgress
                    percentage={mediumPercentage}
                    primaryColor="#FFC01E"
                    secondarycolor="#665326"
                    difficulty="Medium"
                    total={mediumTotal}
                    totalSolved={mediumAttempted}
                  />
                  <LineProgress
                    percentage={hardPercentage}
                    primaryColor="#EF4743"
                    secondarycolor="#613130"
                    difficulty="Hard"
                    total={hardTotal}
                    totalSolved={hardAttempted}
                  />
                </div>
              </div>
            </div>
          </div>
          <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={snackOpen} onClose={() => setSnackOpen(false)} autoHideDuration={2000}>
            <Alert onClose={() => setSnackOpen(false)} severity={severity} sx={{ width: '100%' }}>
              {message}
            </Alert>
          </Snackbar>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
