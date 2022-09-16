import type { Request, Response } from 'express';
import { HttpStatusCode } from '../../common/HttpStatusCodes';

import { fetchRandomLeetCodeQuestionWithFallback } from '../services/question-service';

export async function getRandomLeetcodeQuestionBasedOnDifficulty(req: Request, res: Response) {
  const difficulty = req.body.difficulty;
  try {
    const data = await fetchRandomLeetCodeQuestionWithFallback(difficulty);
    return res.status(HttpStatusCode.OK).json({ data });
  } catch {
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ msg: 'Error occured in internal, please try again' });
  }
}
