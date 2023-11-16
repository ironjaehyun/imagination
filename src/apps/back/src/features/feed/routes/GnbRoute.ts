import express from 'express';

const router = express.Router();

router.post('/findIdProfile');
router.post('/findPostsCnt');
router.post('/findFollow');

export default router;
