import axios from '../../api/auth';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const navigate = useNavigate();
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post('/', { id: id, password: pw }).then((res) => {
      const newToken = res.data.token;

      setCookie('token', newToken, { path: '/' });
      cookies.token ? navigate('/feed') : null;
    });
  };

  const handleLogout = () => {
    removeCookie('token');
  };

  return {
    handleLogin,
    setId,
    setPw,
    cookies,
    handleLogout,
  };
};

export default useLogin;
