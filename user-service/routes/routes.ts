import express from 'express';
import { checkUsername, createUser, loginUser, logoutUser, isLoggedIn, deleteUser, getUserPublicInfo, editUserInfo } from '../controller/user-controller';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World from user service');
});

router.get('/auth', isLoggedIn);

router.post('/user', createUser);
router.get('/user/:user', getUserPublicInfo);
router.put('/user/:user', editUserInfo);
router.delete('/user/:user', deleteUser);

router.get('/username/:username', checkUsername);

router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.all('/', (req, res) => {
  res.setHeader('content-type', 'application/json');
});

export default router;
