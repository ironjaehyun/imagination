import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import joinRoute from './features/auth/routes/joinRoute';
import loginRoute from './features/auth/routes/loginRoute';
<<<<<<< HEAD
import mypageRoute from './features/auth/routes/mypageRoute';
=======
import imageRoute from './features/imagination/routes/imageRoute';
>>>>>>> feat/imaginations
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
<<<<<<< HEAD
  app.use('/mypage', mypageRoute);
=======
  app.use('/imagination', imageRoute);
>>>>>>> feat/imaginations
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
