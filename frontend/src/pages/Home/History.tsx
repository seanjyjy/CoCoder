import { useState, useEffect } from 'react';
import { getUserHistory } from 'src/services/HistoryService';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import './index.scss';
import useTokenLogin from 'src/hooks/useTokenLogin';
import { HistoryData } from 'src/types';
import CodeEditorAsImage from './CodeEditorAsImage';

const monthConverter = (month: number) => {
  switch (month) {
    case 1:
      return 'Jan';
    case 2:
      return 'Feb';
    case 3:
      return 'Mar';
    case 4:
      return 'Apr';
    case 5:
      return 'May';
    case 6:
      return 'Jun';
    case 7:
      return 'Jul';
    case 8:
      return 'Aug';
    case 9:
      return 'Sep';
    case 10:
      return 'Oct';
    case 11:
      return 'Nov';
    case 12:
      return 'Dec';
    default:
      return '-';
  }
};

export const formatDate = (date: Date) => {
  return [date.getDate(), monthConverter(date.getMonth() + 1), date.getFullYear()].join(' ');
};

const History = () => {
  const { user } = useTokenLogin();
  const [historyArray, setHistoryArray] = useState<Array<HistoryData>>([]);

  useEffect(() => {
    const setHistory = async () => {
      const res = await getUserHistory(user?.username);
      if (res) {
        setHistoryArray((res?.data?.historyInfo).reverse());
      }
    };
    setHistory().catch((err) => {
      console.log(err);
    });
  }, [historyArray?.length, user?.username]);

  return (
    <div className="history__container">
      <div className="history__header">Past Attempts</div>
      <div className="history__button_container">
        {historyArray == null ? (
          <p id="history__noPastAttempts">No past attempts</p>
        ) : (
          historyArray?.map((attempt, i) => (
            <Box className="history__box" component="div" key={`${attempt.questionID}-${i}`}>
              <div className="history__box__top">
                <CodeEditorAsImage code={attempt.code} language={attempt.language} key={`${attempt.code}-${attempt.language}`} />
              </div>
              <div className="history__box__bot">
                <div className="history__usersAndDate">
                  <p id="history__users">
                    {user?.username} • {attempt.partner}
                  </p>
                  <p id="history__date">{formatDate(new Date(attempt.date))}</p>
                </div>
                <Divider />
                <p id="history__question">
                  #{attempt.questionID} {attempt.questionName}
                </p>
                <p id="history__difficulty">{attempt.questionDifficulty}</p>
              </div>
            </Box>
          ))
        )}
      </div>
    </div>
  );
};

export default History;
