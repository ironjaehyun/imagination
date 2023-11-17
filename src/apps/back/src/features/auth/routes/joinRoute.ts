import express from 'express';
import { joinId, checkId, userId } from '../controller/userController';

const router = express.Router();

router.post('/checkId', checkId);

router.post('/', joinId);

router.get('/userid', userId);

export default router;
