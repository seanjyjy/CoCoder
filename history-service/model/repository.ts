import HistoryModel, { HistoryData as THistoryData } from './history-model';
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

export async function getUserHistory(username: string) {
  return await HistoryModel.findOne({ username });
}

export async function deleteUserHistory(username: string) {
  return await HistoryModel.remove({ me: username });
}
