import axios from '../../api/auth';
import { useState } from 'react';

const useLogin = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  console.log(id, pw);
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post('/', { id: id, password: pw });
  };

  return {
    handleLogin,
    setId,
    setPw,
  };
};

export default useLogin;
