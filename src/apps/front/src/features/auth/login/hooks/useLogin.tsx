import { useState } from 'react';

const useLogin = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  console.log(id, pw);
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return {
    handleLogin,
    setId,
    setPw,
  };
};

export default useLogin;
