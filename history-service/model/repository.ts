import HistoryModel, { HistoryData as THistoryData, IHistoryModel } from './history-model';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

let uri = process.env.ENV == 'PROD' ? process.env.DB_PROD : process.env.DB_TEST;

const init = async () => {
  try {
    await mongoose.connect(uri!);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

init();

export async function initHistory(username: string) {
  return await HistoryModel.create({ me: username, historyInfo: [] });
}

export async function updateUserHistory(username: string, history: THistoryData) {
  return await HistoryModel.findOneAndUpdate({ me: username }, { $push: { historyInfo: history } }, { new: true, upsert: true });
}

export async function getAllHistory() {
  return await HistoryModel.find();
}

export async function getUserHistory(username: string): Promise<IHistoryModel | null> {
  // somehow nested fields like array cant be sorted???? issit dk if should use aggregate but. will just use normal js sort
  let data = await HistoryModel.findOne({ me: username });
  if (!data) return data;
  data.historyInfo.sort((infoa, infob) => new Date(infob.date).getTime() - new Date(infoa.date).getTime());
  return data;
}

export async function deleteUserHistory(username: string) {
  return await HistoryModel.remove({ me: username });
}
