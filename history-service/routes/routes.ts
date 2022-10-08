import express from 'express';
import { createHistory, updateUserHistory, getAllHistory, getUserHistory, deleteUserHistory, getUserHistoryStatistic } from '../controller/history-controller';

const router = express.Router();

router.route('/').get(getAllHistory);
router.route('/:username').get(getUserHistory).put(updateUserHistory).post(createHistory).delete(deleteUserHistory);
router.route('/statistic/:username').get(getUserHistoryStatistic);

export default router;
