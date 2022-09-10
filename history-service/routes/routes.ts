import express from 'express';
import { createHistory, updateUserHistory, getAllHistory, getUserHistory, deleteUserHistory } from '../controller/history-controller';

const router = express.Router();

router.route('/').get(getAllHistory);
router.route('/:username').get(getUserHistory).put(updateUserHistory).post(createHistory).delete(deleteUserHistory);

export default router;
