import express from 'express';
import { handleLogin } from '../controller/userController';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('main');
});

router.post('/', handleLogin);

export default router;
