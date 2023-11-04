import { useState } from 'react';

const useJoin = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  const [pwCheck, setPwCheck] = useState('');
  const [joinBtn, setJoinBtn] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');

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
  };
};

export default useJoin;
