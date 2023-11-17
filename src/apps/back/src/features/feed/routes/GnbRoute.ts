import express from 'express';

const router = express.Router();

router.get('/findIdProfile');
router.get('/findPostsCnt');
router.get('/findFollow');

export default router;
