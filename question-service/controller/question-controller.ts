import type { Request, Response } from 'express';
import { HttpStatusCode } from '../../common/HttpStatusCodes';
import QuestionDifficulty from '../../common/QuestionDifficulty';

import { fetchRandomLeetCodeQuestionWithFallback } from '../services/question-service';

export async function getRandomLeetcodeQuestionBasedOnDifficulty(req: Request, res: Response) {
  const difficulty = req.query.difficulty;
  try {
    const data = await fetchRandomLeetCodeQuestionWithFallback(difficulty as QuestionDifficulty);
    return res.status(HttpStatusCode.OK).json({ data });
  } catch {
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ msg: 'Error occured in internal, please try again' });
  }
}
