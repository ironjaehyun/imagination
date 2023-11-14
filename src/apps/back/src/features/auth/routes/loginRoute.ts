import express from 'express';
import {
  handleLogin,
  loginSuccess,
  logout,
} from '../controller/userController';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('main');
});

router.get('/login/success', loginSuccess);

router.post('/', handleLogin);
router.post('/logout', logout);
export default router;
