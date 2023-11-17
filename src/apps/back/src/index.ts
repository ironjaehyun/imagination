import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import joinRoute from './features/auth/routes/joinRoute';
import loginRoute from './features/auth/routes/loginRoute';
import GnbRoute from './features/feed/routes/GnbRoute';
import LnbRoute from './features/feed/routes/LnbRoute';
import FeedRoute from './features/feed/routes/FeedRoute';
import ExploreRoute from './features/feed/routes/ExploreRoute';
import mypageRoute from './features/auth/routes/mypageRoute';
import imageRoute from './features/imagination/routes/imageRoute';
import chatRoute from './features/chat/routes/chatRoute';
import connectToMongoDB from './db';
import { PORT } from '../../../packages/models/port';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const startServer = async () => {
  await connectToMongoDB();
  app.use('/join', joinRoute);
  app.use('/mypage', mypageRoute);
  app.use('/imagination', imageRoute);
  app.use('/join', joinRoute);
  app.use('/chat', chatRoute);
  app.use('/Gnb', GnbRoute);
  app.use('/Lnb', LnbRoute);
  app.use('/Feed', FeedRoute);
  app.use('/Explore', ExploreRoute);
  app.use('/', loginRoute);

  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
    next();
  });

  app.listen(PORT, () => {
    console.log(`Server running... ${PORT}`);
  });
};

startServer();
