import express from 'express';
import cors from 'cors';
import historyRoutes from './routes/routes';

const app = express();
const port = process.env.PORT || 8003;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })); // config cors so that front-end can use
// @ts-ignore
app.options('*', cors());

app.use('/api/history', historyRoutes);

app.listen(port, () => console.log('history-service listening on port 8003'));
