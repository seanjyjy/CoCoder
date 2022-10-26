import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import errorController from './controller/error-controller';
import router from './routes/routes';

const jwtSecret = process.env.ACCESS_TOKEN_SECRET;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser(jwtSecret));
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);

app.use('/api/user', router);

app.use(errorController);

app.listen(8000, () => console.log('user-service listening on port 8000'));
