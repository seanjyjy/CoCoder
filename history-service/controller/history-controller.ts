import type { Request, Response } from 'express';
import { HistoryData as THistoryData } from '../model/history-model';
import {
  createHistory as _createHistory,
  updateUserHistory as _updateUserHistory,
  getAllHistory as _getAllHistory,
  getUserHistory as _getUserHistory,
  deleteUserHistory as _deleteUserHistory,
  getUserHistoryStatistic as _getUserHistoryStatistic,
} from '../service/history-service';
import { HttpStatusCode } from '../../common/HttpStatusCodes';

export async function createHistory(req: Request, res: Response) {
  const { user, msg } = await _createHistory(req.params.username);
  if (msg && !user) {
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ msg });
  }
  return res.status(HttpStatusCode.OK).json({ user });
}

export async function updateUserHistory(req: Request, res: Response) {
  const body = req.body;
  if (
    !(
      body?.partner &&
      body?.startTime &&
      body?.date &&
      body?.duration &&
      body?.questionDifficulty &&
      body?.questionID &&
      body?.questionURL &&
      body?.code &&
      body?.questionName &&
      body?.questionContent &&
      body?.language
    )
  ) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({ msg: 'Invalid body sent. Missing parameters' });
  }

  const { user, msg } = await _updateUserHistory(req.params.username, body as THistoryData);
  if (msg && !user) {
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ msg });
  }
  return res.status(HttpStatusCode.OK).json({ user });
}

export async function getAllHistory(_: Request, res: Response) {
  const { data, msg } = await _getAllHistory();
  if (msg && !data) {
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ msg });
  }
  return res.status(HttpStatusCode.OK).json({ data });
}

export async function getUserHistory(req: Request, res: Response) {
  const { data, msg } = await _getUserHistory(req.params.username);
  if (msg && !data) {
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ msg });
  }
  return res.status(HttpStatusCode.OK).json({ data });
}

export async function deleteUserHistory(req: Request, res: Response) {
  const { user, msg } = await _deleteUserHistory(req.params.username);
  if (msg && !user) {
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ msg });
  }
  return res.status(HttpStatusCode.OK).json({ user });
}

export async function getUserHistoryStatistic(req: Request, res: Response) {
  const { data, msg } = await _getUserHistoryStatistic(req.params.username);
  if (msg && !data) {
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ msg });
  }
  return res.status(HttpStatusCode.OK).json({ data });
}
