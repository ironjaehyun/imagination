import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', // 공통된 주소
  headers: {
    accept: 'application/json',
  },
});

export default instance;
