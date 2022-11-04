import axios from 'axios';
import { URL_QUESTION_SVC } from 'src/configs';
import { QuestionDifficulty } from 'src/shared/constants';

export const getRandomQuestionWithDifficulty = async (difficulty: QuestionDifficulty) => {
  return await axios.get(`${URL_QUESTION_SVC}?difficulty=${difficulty}`);
};
