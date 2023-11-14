import axios from 'axios';
import { PORT } from '../../../../../../packages/models/port';

axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: `http://localhost:${PORT}`,
  headers: {
    accept: 'application/json',
    credentials: 'include',
  },
});

export default instance;
