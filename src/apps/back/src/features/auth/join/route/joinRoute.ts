import express from 'express';
import checkId from '../controller/joinController';

const router = express.Router();

router.post('/checkId', checkId);

export default router;
