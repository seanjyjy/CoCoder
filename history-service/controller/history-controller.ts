import type { Request, Response } from 'express';
import { IHistoryModel as THistory } from '../model/history-model';
import {
  createHistory as _createHistory,
  updateUserHistory as _updateUserHistory,
  getAllHistory as _getAllHistory,
  getUserHistory as _getUserHistory,
} from '../service/history-service';

export async function createHistory(req: Request, res: Response) {
  const { user, msg } = await _createHistory(req.params.username);
  if (msg && !user) {
    return res.status(500).json({ msg });
  }
  return res.status(200).json({ user });
}

export async function updateUserHistory(req: Request, res: Response) {
  const body = req.body;
  if (
    !(
      body?.partner &&
      body?.startTime &&
      body?.duration &&
      body?.questionDifficulty &&
      body?.questionID &&
      body?.questionURL &&
      body?.code &&
      body?.questionName &&
      body?.questionContent &&
      body?.language &&
      body?.topics
    )
  ) {
    return res.status(400).json({ msg: 'Invalid body sent. Missing parameters' });
  }

  const { user, msg } = await _updateUserHistory(req.params.username, body as THistory);
  if (msg && !user) {
    return res.status(500).json({ msg });
  }
  return res.status(200).json({ user });
}

export async function getAllHistory(_: Request, res: Response) {
  const { data, msg } = await _getAllHistory();
  if (msg && !data) {
    return res.status(500).json({ msg });
  }
  return res.status(200).json({ data });
}

export async function getUserHistory(req: Request, res: Response) {
  const { data, msg } = await _getUserHistory(req.params.username);
  if (!msg && !data) {
    return res.status(500).json({ msg });
  }
  return res.status(200).json({ data });
}
