import express from 'express';
import { createRoomRequest } from '../controller/collab-controller';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World from collaboration service');
});

router.post('/createRoom', createRoomRequest);

export default router;
