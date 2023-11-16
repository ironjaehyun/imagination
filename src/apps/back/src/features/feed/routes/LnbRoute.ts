import express from 'express';
import { Postssearch } from './../controller/userSearchController';
const router = express.Router();

router.post('/findAlarmMsg');
router.post('/findAlarmCnt');
router.post('/Postssearch', Postssearch);

export default router;
