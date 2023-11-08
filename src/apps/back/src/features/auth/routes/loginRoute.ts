import express from 'express';
import { handleLogin } from '../controller/userController';

const router = express.Router();

router.post('/', handleLogin);

export default router;
