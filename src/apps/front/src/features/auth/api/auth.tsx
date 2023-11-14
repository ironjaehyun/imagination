import axios from 'axios';
import { PORT } from '../../../../../../packages/models/port';

const instance = axios.create({
  baseURL: `http://localhost:${PORT}`,
  headers: {
    accept: 'application/json',
    credentials: 'include',
  },
  withCredentials: true,
});

export default instance;
