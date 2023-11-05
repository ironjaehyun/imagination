import { useState } from 'react';
import axios from '../../api/auth';

const useJoin = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [joinBtn, setJoinBtn] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [duplication, setDuplication] = useState(false);
  const [idPassMsg, setIdPassMsg] = useState('');

  const handleJoin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleAlertMsg = () => {
    if (id.length === 0) {
      setAlertMsg('아이디를 입력해주세요');
    } else if (pw.length === 0) {
      setAlertMsg('비밀번호를 입력해주세요');
    } else if (name.length === 0) {
      setAlertMsg('닉네임을 입력해주세요');
    } else if (pwCheck.length === 0) {
      setAlertMsg('비밀번호 확인해주세요');
    } else if (
      !pw.match(/[0-9]/) ||
      !pw.match(/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/) ||
      pw.length < 8 ||
      !pw.match(/[A-Z]/)
    ) {
      setAlertMsg('비밀번호 기준을 맞춰주세요');
    } else if (pw !== pwCheck) {
      setAlertMsg('비밀번호를 다시 확인해주세요');
    } else if (!duplication) {
      setAlertMsg('아이디 중복체크 해주세요');
    } else {
      setAlertMsg('');
    }
  };

  const alertJoin = (target: string) => {
    return {
      borderColor:
        (target == 'id' && id.length === 0 && joinBtn) ||
        (target == 'pw' && pw.length === 0 && joinBtn) ||
        (target == 'name' && name.length === 0 && joinBtn) ||
        (target == 'pw-check' && pwCheck.length === 0 && joinBtn)
          ? '#f86d7d'
          : '#e0e0e0',
    };
  };

  const checkPassword = (target: string) => {
    return {
      color:
        (target == 'more-8' && pw.length >= 8) ||
        (target == 'number' && pw.match(/[0-9]/)) ||
        (target == 'special' && pw.match(/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/)) ||
        (target == 'upper' && pw.match(/[A-Z]/))
          ? '#00C853'
          : '#e0e0e0',
    };
  };
    const duplicateId = () => {
    setDuplication(true);
    axios.post('join/checkId', {
      id : id
    })
    setAlertMsg('존재하는 아이디입니다.');
    setIdPassMsg('사용가능한 아이디입니다.');
  };

  return {
    handleJoin,
    handleAlertMsg,
    alertJoin,
    setJoinBtn,
    alertMsg,
    setId,
    setPw,
    setName,
    setPwCheck,
    checkPassword,
    setDuplication,
    duplicateId,
    idPassMsg,
  };
};

export default useJoin;
