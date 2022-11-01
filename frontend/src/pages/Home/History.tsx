import { useState, useEffect, useContext } from 'react';
import { getUserHistory } from 'src/services/HistoryService';
import Divider from '@mui/material/Divider';
import './index.scss';
import { HistoryData } from 'src/types';
import CodeEditorAsImage from './CodeEditorAsImage';
import { QuestionDifficulty } from 'src/shared/constants';
import CircularProgress from '@mui/material/CircularProgress';
import { UserContext } from 'src/hooks/UserContext';

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

type HistoryCellProps = {
  questionID: string;
  language: string;
  code: string;
  username: string;
  partner: string;
  date: Date;
  questionName: string;
  questionDifficulty: QuestionDifficulty;
  style?: React.CSSProperties;
};

const HistoryCell = ({ questionID, language, code, username, partner, date, questionDifficulty, questionName, style }: HistoryCellProps) => {
  return (
    <div className="history__box" style={style}>
      <div className="history__box__top">
        <CodeEditorAsImage code={code} language={language} />
      </div>
      <div className="history__box__bot">
        <div className="history__usersAndDate">
          <p id="history__users">
            {username} • {partner}
          </p>
          {/* somehow mongodb will convert date into iso ... which is string but our type is date oo */}
          <p id="history__date">{formatDate(new Date(date))}</p>
        </div>
        <Divider />
        <p id="history__question">
          #{questionID} {questionName}
        </p>
        <div className="history__bot__bot">
          <p id="history__difficulty">{questionDifficulty}</p>
          <p id="history__difficulty">{language}</p>
        </div>
      </div>
    </div>
  );
};

const History = () => {
  const { user } = useContext(UserContext);
  const [isFetching, setIsFetching] = useState(true);
  const [historyArray, setHistoryArray] = useState<Array<HistoryData>>([]);

  useEffect(() => {
    let ignore = false;
    const setHistory = async () => {
      setIsFetching(true); // tehcnically no need ba
      const res = await getUserHistory(user?.username);
      if (!ignore && res) {
        setHistoryArray(res?.data?.historyInfo ?? []);
      }
      setIsFetching(false);
    };
    setHistory().catch((err) => {
      console.log(err);
    });
    return () => {
      ignore = true;
    };
  }, [user?.username]);

  return (
    <div className="history__container">
      <div className="history__header">Past Attempts</div>
      {isFetching ? (
        <div className="history_loading_container">
          <CircularProgress />
        </div>
      ) : (
        <div className="history__button_container">
          {/* Should use grid i think but forget how to use it properly le :< */}
          {historyArray.length === 0 ? (
            <p id="history__noPastAttempts">No past attempts</p>
          ) : (
            historyArray?.map((attempt, i) => (
              <HistoryCell
                key={`${attempt.questionID}-${i}`}
                questionID={attempt.questionID}
                language={attempt.language}
                code={attempt.code}
                username={user?.username ?? ''}
                partner={attempt.partner}
                date={attempt.date}
                questionName={attempt.questionName}
                questionDifficulty={attempt.questionDifficulty}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default History;
