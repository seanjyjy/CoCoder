import axios from 'axios';
import QuestionDifficulty from '../../common/QuestionDifficulty';

const URI_HISTORY_SVC = process.env.URI_HISTORY_SVC || 'http://localhost:8003';

type THistoryData = {
  partner: String;
  startTime: Number;
  duration: String;
  questionDifficulty: QuestionDifficulty;
  questionID: String;
  questionURL: String;
  code: String;
  questionName: String;
  questionContent: String;
  language: String;
};

export const saveHistory = async (username: string, data: THistoryData) => {
  console.log(`${URI_HISTORY_SVC}/api/history/${username}`);
  return await axios.put(`${URI_HISTORY_SVC}/api/history/${username}`, data);
};
