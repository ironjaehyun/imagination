import express from 'express';
import { Postssearch } from './../controller/userSearchController';
const router = express.Router();

router.get('/findAlarmMsg');
router.get('/findAlarmCnt');
router.post('/Postssearch', Postssearch);

export default router;
