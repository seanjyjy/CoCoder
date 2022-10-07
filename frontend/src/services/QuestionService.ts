import axios from 'axios';
import { QuestionDifficulty } from 'src/shared/constants';

const URI_QUESTION_SVC = `${process.env.URI_QUESTION_SVC || 'http://localhost:8004'}/api/question`;

export const getRandomQuestionWithDifficulty = async (difficulty: QuestionDifficulty) => {
  return await axios.get(`${URI_QUESTION_SVC}?difficulty=${difficulty}`);
};
