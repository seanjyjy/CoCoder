import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import errorController from './controller/error-controller';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // config cors so that front-end can use
app.options('*', cors());
import { createUser } from './controller/user-controller';

const router = express.Router();

app.use('/api/user', router);
// app.use(cookieParser());

// Controller will contain all the User-defined Routes
router.get('/', (_, res) => res.send('Hello World from user-service'));
router.post('/', createUser);

router.all('/', (_, res) => {
  res.setHeader('content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
});

app.use(errorController);

app.listen(8000, () => console.log('user-service listening on port 8000'));
