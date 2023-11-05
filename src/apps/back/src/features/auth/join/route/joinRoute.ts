import express from 'express';
import { joinId, checkId } from '../controller/joinController';

const router = express.Router();

router.post('/checkId', checkId);

router.post('/', joinId);

export default router;
