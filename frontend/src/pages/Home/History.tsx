import { useState, useEffect } from 'react';
import { getUserHistory } from 'src/services/HistoryService';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import './index.scss';
import useTokenLogin from 'src/hooks/useTokenLogin';
import { IHistoryInfo } from '../../../../common/Models';

const History = () => {
  const { user } = useTokenLogin();
  const [historyArray, setHistoryArray] = useState<IHistoryInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const setHistory = async () => {
      setIsLoading(true)
      const res = await getUserHistory(user?.username)
      if (res) {
        setHistoryArray((res?.data?.data?.historyInfo).reverse())
      }
      setIsLoading(false)
    }
    setHistory()
    .catch((err) => { console.log(err) });
  }, [historyArray?.length, user?.username])

  return (
    <div>
      <div className="history__header">Past Attempts</div>
      <div className="history__button_container">
        {isLoading ? <p>Loading...</p> : null}
        {historyArray == null ? <p id="history__noPastAttempts">No past attempts</p> :
        historyArray?.map((attempt) => (
            <Box className="history__box" component="div">
            <div className="history__usersAndDate">
                <p id="history__users">{user?.username} • {attempt.partner}</p>
                <p id="history__date">{attempt.date}</p>
            </div>
            <Divider></Divider>
            <p id="history__question">#{attempt.questionID} {attempt.questionName}</p>
            <p id="history__difficulty">{attempt.questionDifficulty}</p>
            </Box>
        ))
      }
      </div>
    </div>
    
  );
};

export default History;
