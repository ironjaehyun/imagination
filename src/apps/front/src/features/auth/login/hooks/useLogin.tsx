import axios from '../../api/auth';
import { useState, useEffect, SetStateAction } from 'react';
import { useCookies } from 'react-cookie';

const useLogin = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [msgLogin, setMsgLogin] = useState('');
  const [msgPassword, setMsgPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [user, setUser] = useState();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post('/', { id: id, password: pw })
      .then((res) => {
        const newToken = res.data.token;
        setUser(res.data);
        setCookie('token', newToken, { path: '/' });
      })
      .catch((error) => {
        if (error.response.data === 'user not found') {
          setMsgLogin('없는 아이디입니다.');
          setMsgPassword('');
        } else if (error.response.data === 'wrong password') {
          setMsgPassword('비밀번호가 틀렸습니다.');
          setMsgLogin('');
        }
      });
  };

  useEffect(() => {
    if (id.length > 0 && pw.length > 0) {
      setIsDisable(false);
    }
  }, [id, pw]);

  const handleLogout = () => {
    removeCookie('token');
  };

  const handleLoginId = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setId(event.target.value);
  };
  const handleLoginPw = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPw(event.target.value);
  };

  return {
    handleLogin,
    handleLoginId,
    handleLoginPw,
    setPw,
    cookies,
    handleLogout,
    msgLogin,
    msgPassword,
    isDisable,
    user,
  };
};

export default useLogin;
