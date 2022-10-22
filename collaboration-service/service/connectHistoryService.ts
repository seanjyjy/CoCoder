import axios from 'axios';
import QuestionDifficulty from '../../common/QuestionDifficulty';

const URI_HISTORY_SVC = process.env.URI_HISTORY_SVC || 'http://localhost:8003';
const PREFIX_HISTORY_SVC = '/api/history';
const URL_HISTORY_SVC = URI_HISTORY_SVC + PREFIX_HISTORY_SVC;

type THistoryData = {
  partner: String;
  startTime: Number;
  date: Date;
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
  return await axios.put(`${URL_HISTORY_SVC}/${username}`, data);
};
