import axios from 'axios';
import { IHistoryModel } from 'src/types';

const URI_HISTORY_SVC = `${process.env.URI_HISTORY_SVC || 'http://localhost:8003'}/api/history`;

export const getUserHistory = async (username: string | undefined) => {
  let name = username ? username : '';
  try {
    let { data } = await axios.get<{ data: IHistoryModel }>(`${URI_HISTORY_SVC}/${name}`);
    return data;
  } catch (err) {
    return {
      data: {
        me: username,
        historyInfo: [],
      },
    };
  }
};

type TStatistic = {
  numberOfEasyAttempted: number;
  totalNumberOfEasy: number;
  numberOfMediumAttempted: number;
  totalNumberOfMedium: number;
  numberOfHardAttempted: number;
  totalNumberOfHard: number;
  languagesAttempted: Array<String>;
};

export const getUserStatistics = async (username: string): Promise<{ data: TStatistic }> => {
  try {
    const { data } = await axios.get<{ data: TStatistic }>(`${URI_HISTORY_SVC}/statistic/${username}`, { withCredentials: true });
    return data;
  } catch {
    return {
      data: {
        numberOfEasyAttempted: 0,
        totalNumberOfEasy: 0,
        numberOfMediumAttempted: 0,
        totalNumberOfMedium: 0,
        numberOfHardAttempted: 0,
        totalNumberOfHard: 0,
        languagesAttempted: [],
      },
    };
  }
};
