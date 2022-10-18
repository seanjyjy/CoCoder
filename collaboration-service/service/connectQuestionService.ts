import axios from 'axios';
import QuestionDifficulty from '../../common/QuestionDifficulty';
import { QuestionType } from '../../common/QuestionType';

const URI_QUESTION_SVC = process.env.URI_QUESTION_SVC || 'http://localhost:8004';
const PREFIX_QUESTION_SVC = '/api/question';
const URL_QUESTION_SVC = URI_QUESTION_SVC + PREFIX_QUESTION_SVC;

export const getRoomQuestion = async (difficulty: QuestionDifficulty) => {
  return await axios.get<{ data: QuestionType }>(`${URL_QUESTION_SVC}/?difficulty=${difficulty}`);
};
