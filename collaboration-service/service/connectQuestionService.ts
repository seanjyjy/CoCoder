import axios from 'axios';
import QuestionDifficulty from '../../common/QuestionDifficulty';
import { QuestionType } from '../../common/QuestionType';

const URI_QUESTION_SVC = process.env.URI_QUESTION_SVC || 'http://localhost:8004';

export const getRoomQuestion = async (difficulty: QuestionDifficulty) => {
  return await axios.get<{ data: QuestionType }>(`${URI_QUESTION_SVC}/api/question/?difficulty=${difficulty}`);
};
