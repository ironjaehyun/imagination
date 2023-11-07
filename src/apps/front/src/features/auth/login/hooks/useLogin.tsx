import axios from '../../api/auth';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [msgLogin, setMsgLogin] = useState('');
  const [msgPassword, setMsgPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      axios
        .post('/', { id: id, password: pw })
        .then((res) => {
          const newToken = res.data.token;
          setCookie('token', newToken, { path: '/' });
          cookies.token ? navigate('/feed') : null;
        })
        .catch((error) => {
          console.log(error.response.data);
          if (error.response.data === 'user not found') {
            setMsgLogin('없는 아이디입니다.');
            setMsgPassword('');
          } else if (error.response.data === 'wrong password') {
            setMsgPassword('비밀번호가 틀렸습니다.');
            setMsgLogin('');
          }
        });
    } catch (error) {
      console.error('로그인 요청 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    if (id.length > 0 && pw.length > 0) {
      setIsDisable(false);
    }
  }, [id, pw]);

  const handleLogout = () => {
    removeCookie('token');
  };

  return {
    handleLogin,
    setId,
    setPw,
    cookies,
    handleLogout,
    msgLogin,
    msgPassword,
    isDisable,
  };
};

export default useLogin;
