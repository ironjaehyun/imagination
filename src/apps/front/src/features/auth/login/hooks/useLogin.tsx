import axios from '../../api/auth';
import { useState } from 'react';
import { useCookies } from 'react-cookie';

const useLogin = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post('/', { id: id, password: pw }).then((res) => {
      const newToken = res.data.token;

      setCookie('token', newToken, { path: '/' });
    });
  };

  axios.get('/api/some-protected-r');

  return {
    handleLogin,
    setId,
    setPw,
    cookies,
    removeCookie,
  };
};

export default useLogin;
