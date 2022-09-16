import express from 'express';
import { getRandomLeetcodeQuestionBasedOnDifficulty } from '../controller/question-controller';

const router = express.Router();

router.route('/').get(getRandomLeetcodeQuestionBasedOnDifficulty);

export default router;
