import mongoose, { Schema } from 'mongoose';
import QuestionDifficulty from '../../common/QuestionDifficulty';

export type HistoryData = {
  partner: String;
  startTime: Number;
  duration: String;
  questionDifficulty: QuestionDifficulty;
  questionID: String;
  questionURL: String;
  code: String;
  questionName: String;
  questionContent: String;
  language: String;
};

export type IHistoryModel = {
  me: String;
  historyInfo: HistoryData[];
};

const HistoryModel = new Schema<IHistoryModel>(
  {
    me: String,
    historyInfo: [
      {
        partner: String,
        startTime: Number,
        duration: String,
        questionDifficulty: {
          type: String,
          enum: [QuestionDifficulty.EASY, QuestionDifficulty.MEDIUM, QuestionDifficulty.HARD],
          default: QuestionDifficulty.EASY,
        },
        questionID: String,
        questionURL: String, // maybe not need but just save it first ba!
        code: String, // might be a good feature to add to get the free nice to have
        questionName: String,
        questionContent: String,
        language: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('History', HistoryModel);
