import express from 'express';
import { createHistory, updateUserHistory, getAllHistory, getUserHistory } from '../service/history-service';

const router = express.Router();

router.route('/').get(getStudents).post(createStudent).put(errorThrowForUnsupportedApi).delete(errorThrowForUnsupportedApi);
router.route('/:id').put(updateStudent).delete(deleteStudent).get(getStudent).post(errorThrowForUnsupportedApi);

export default router;
