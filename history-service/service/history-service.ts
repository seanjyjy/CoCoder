import QuestionDifficulty from '../../common/QuestionDifficulty';
import { HistoryData as THistoryData } from '../model/history-model';
import {
  initHistory as _initHistory,
  updateUserHistory as _updateUserHistory,
  getAllHistory as _getAllHistory,
  getUserHistory as _getUserHistory,
  deleteUserHistory as _deleteUserHistory,
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

export async function updateUserHistory(username: string, history: THistoryData) {
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

export async function deleteUserHistory(username: string) {
  try {
    const user = await _deleteUserHistory(username);
    return {
      user,
      msg: null,
    };
  } catch {
    return {
      user: null,
      msg: `Error in delete history for ${username}`,
    };
  }
}

type TStatistic = {
  numberOfEasyAttempted: number;
  totalNumberOfEasy: number;
  numberOfMediumAttempted: number;
  totalNumberOfMedium: number;
  numberOfHardAttempted: number;
  totalNumberOfHard: number;
  languagesAttempted: Array<String>;
};

export async function getUserHistoryStatistic(username: string) {
  try {
    const data = await getUserHistory(username);
    let statistic: TStatistic = {
      numberOfEasyAttempted: 0,
      totalNumberOfEasy: 597, // hard coded ba assume lc wont change often
      numberOfMediumAttempted: 0,
      totalNumberOfMedium: 1298, // hard coded ba assume lc wont change often
      numberOfHardAttempted: 0,
      totalNumberOfHard: 536, // hard coded ba assume lc wont change often
      languagesAttempted: [],
    };
    let easyQuestionSet = new Set();
    let mediumQuestionSet = new Set();
    let hardQuestionSet = new Set();
    let languagesAttempted = new Set<String>();
    if (data) {
      data?.data?.historyInfo.forEach((history) => {
        const difficulty = history.questionDifficulty.toUpperCase(); // this is just incase same old data is not in correct casing
        if (difficulty === QuestionDifficulty.EASY) {
          easyQuestionSet.add(history.questionID);
        } else if (difficulty === QuestionDifficulty.MEDIUM) {
          mediumQuestionSet.add(history.questionID);
        } else if (difficulty === QuestionDifficulty.HARD) {
          hardQuestionSet.add(history.questionID);
        }

        languagesAttempted.add(history.language);
      });
    }
    statistic.numberOfEasyAttempted = easyQuestionSet.size;
    statistic.numberOfMediumAttempted = mediumQuestionSet.size;
    statistic.numberOfHardAttempted = hardQuestionSet.size;
    statistic.languagesAttempted = Array.from<String>(languagesAttempted) as Array<String>;
    return {
      data: statistic,
      msg: null,
    };
  } catch {
    return {
      data: null,
      msg: `Unable to extract statistic for ${username}`,
    };
  }
}
