import express from 'express';
import checkId from '../controller/joinController';

const router = express.Router();

router.post('/checkId', checkId);

router.post('/', (req, res) => {
  console.log(req.body);
  console.log(res.error);
});

export default router;
