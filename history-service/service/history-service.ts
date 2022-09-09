import { IHistoryModel as THistory } from '../model/history-model';
import {
  initHistory as _initHistory,
  updateUserHistory as _updateUserHistory,
  getAllHistory as _getAllHistory,
  getUserHistory as _getUserHistory,
} from '../model/repository';

export async function createHistory(username: string) {
  try {
    const user = await _initHistory(username);
    return {
      user,
      msg: null,
    };
  } catch {
    return {
      user: null,
      msg: `Error in initializing history for ${username}`,
    };
  }
}

export async function updateUserHistory(username: string, history: THistory) {
  try {
    const user = await _updateUserHistory(username, history);
    return {
      user,
      msg: null,
    };
  } catch {
    return {
      user: null,
      msg: `Error in updating user history for ${username}`,
    };
  }
}

export async function getAllHistory() {
  try {
    const data = await _getAllHistory();
    return {
      data,
      msg: null,
    };
  } catch {
    return {
      data: null,
      msg: 'Error in fetchign all history',
    };
  }
}

export async function getUserHistory(username: string) {
  try {
    const data = await _getUserHistory(username);
    return {
      data,
      msg: null,
    };
  } catch {
    return {
      data: null,
      msg: `Error in fetching history for ${username}`,
    };
  }
}
