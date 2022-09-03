import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import errorController from './controller/error-controller';
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
import { checkUsername, createUser, loginUser, logoutUser, verifyToken } from './controller/user-controller';

const router = express.Router();

app.use('/api/user', router);

router.get('/', verifyToken);
router.post('/', createUser);

router.get('/username/:username', checkUsername);

router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.all('/', (req, res) => {
  res.setHeader('content-type', 'application/json');
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
  // const reqHeaders = req.header('access-control-request-headers');
  // if (reqHeaders) {
  //   res.setHeader('Access-Control-Allow-Headers', reqHeaders);
  // }
  // res.setHeader('Access-Control-Allow-Credentials', 'true');
});

app.use(errorController);

app.listen(8000, () => console.log('user-service listening on port 8000'));
