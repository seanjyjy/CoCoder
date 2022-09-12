import type { Request, Response } from 'express';
import { HttpStatusCode } from '../../common/HttpStatusCodes';

import { fetchRandomLeetCodeQuestionWithFallback } from '../services/question-service';

export async function getRandomLeetcodeQuestionBasedOnDifficulty(req: Request, res: Response) {
  const difficulty = req.body.difficulty;
  const data = await fetchRandomLeetCodeQuestionWithFallback(difficulty);
  return res.status(HttpStatusCode.OK).json({ data });
}
