import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from communication service');
});

export default router;
