import { useCallback, useContext, useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { getUserStatistics } from 'src/services/HistoryService';

import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses, LinearProgressProps } from '@mui/material/LinearProgress';

import 'react-circular-progressbar/dist/styles.css';
import './index.scss';
import { UserContext } from 'src/hooks/UserContext';

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

const Statistics = () => {
  const { user } = useContext(UserContext);
  const [easyAttempted, setEasyAttempted] = useState(0);
  const [mediumAttempted, setMediumAttempted] = useState(0);
  const [hardAttempted, setHardAttempted] = useState(0);
  const [easyTotal, setEasyTotal] = useState(0);
  const [mediumTotal, setMediumTotal] = useState(0);
  const [hardTotal, setHardTotal] = useState(0);
  const [languages, setLanguages] = useState<Array<String>>([]);

  const totalPercentage =
    easyAttempted + mediumAttempted + hardAttempted === 0
      ? 0
      : Math.floor(((easyAttempted + mediumAttempted + hardAttempted) / (easyTotal + mediumTotal + hardTotal)) * 100);
  const easyPercentage = easyAttempted === 0 ? 0 : Math.floor((easyAttempted / easyTotal) * 100);
  const mediumPercentage = mediumAttempted === 0 ? 0 : Math.floor((mediumAttempted / mediumTotal) * 100);
  const hardPercentage = hardAttempted === 0 ? 0 : Math.floor((hardAttempted / hardTotal) * 100);

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

  return (
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
      <div className="home__statistics__languages">
        <div className="home__statistics__languages__title">Languages used</div>
        <div className="home__statistics__languages__chips">
          {languages.length === 0
            ? '-'
            : languages.map((language) => (
                <div className="home__statistics__languages__chip" key={String(language)}>
                  {language}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
