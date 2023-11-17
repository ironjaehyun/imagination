import { SetStateAction, useEffect, useState } from 'react';
import axios from '../../api/auth';
import { useNavigate } from 'react-router-dom';

const useJoin = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [alertMsg, setAlertMsg] = useState('');
  const [duplication, setDuplication] = useState(false);
  const [idPassMsg, setIdPassMsg] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const navigate = useNavigate();

  const handleJoin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post('join', { id: id, password: pw }).then((res) => {
      console.log(res.data);
      if (res.status === 200) {
        navigate('/');
      }
    });
  };

  const duplicateId = async () => {
    setDuplication(true);
    const response = await axios.post('join/checkId', {
      id: id,
    });
    if (response.data.msg === 'User does not exist') {
      setIdPassMsg('사용가능한 아이디입니다.');
      setDuplication(true);
      setAlertMsg('');
    }
    if (response.data.msg === 'User already exists') {
      setAlertMsg('존재하는 아이디입니다.');
      setDuplication(false);
      setIdPassMsg('');
    }
    if (id.length === 0) {
      setAlertMsg('아이디를 입력해주세요');
      setDuplication(false);
      setIdPassMsg('');
    } else if (!id.match(/[a-zA-Z]/)) {
      setAlertMsg('영문으로 입력해주세요');
      setDuplication(false);
      setIdPassMsg('');
    }
  };

  const handleId = (event: { target: { value: SetStateAction<string> } }) => {
    setId(event.target.value);
  };
  const handlePw = (event: { target: { value: SetStateAction<string> } }) => {
    setPw(event.target.value);
  };
  const handlePwCheck = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPwCheck(event.target.value);
  };

  const isValid = pw.length >= 8;
  const isNumber = pw.match(/[0-9]/);
  const isSpe = pw.match(/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/);
  const isUpper = pw.match(/[A-Z]/);

  useEffect(() => {
    const pwDisable =
      pw.length >= 8 &&
      /\d/.test(pw) &&
      /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(pw) &&
      /[A-Z]/.test(pw);
    if (
      id.length > 0 &&
      pw.length > 0 &&
      pwCheck.length > 0 &&
      pwDisable &&
      pw === pwCheck &&
      duplication
    ) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [id, pw, pwCheck, duplication]);

  return {
    handleJoin,
    handleId,
    handlePw,
    handlePwCheck,
    alertMsg,
    isValid,
    setDuplication,
    duplicateId,
    idPassMsg,
    isNumber,
    isSpe,
    isUpper,
    isDisable,
    duplication,
  };
};

export default useJoin;
