import axios from '../../api/auth';
import { useState, useEffect, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { atom, useAtom } from 'jotai';

const profileImgAtom = atom('');
const userIdAtom = atom('');

const useLogin = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [msgLogin, setMsgLogin] = useState('');
  const [msgPassword, setMsgPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [profileImg, setProfileImg] = useAtom(profileImgAtom);
  const [userId, setUserId] = useAtom(userIdAtom);
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await axios
      .post('/', { id: id, password: pw }, { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          navigate('/feed');
        }
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
    const loginSuccess = async () => {
      const response = await axios.get('/login/success');
      sessionStorage.setItem('id', response.data.id);
      sessionStorage.setItem('_id', response.data._id);
      setProfileImg(response.data.user_profile_img);
      setUserId(response.data.id);
      sessionStorage.setItem('profile', response.data.user_profile_img);
      sessionStorage.setItem('background', response.data.user_background_img);
    };
    loginSuccess();
  }, []);

  const handleLogout = () => {
    axios.post('/logout').then((result) => {
      if (result.status === 200) {
        navigate('/');
        sessionStorage.clear();
      }
    });
  };

  useEffect(() => {
    if (id.length > 0 && pw.length > 0) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [id, pw]);

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
    handleLogout,
    msgLogin,
    msgPassword,
    isDisable,
    profileImg,
    userId,
  };
};

export default useLogin;
