import { useState } from 'react';

const useJoin = () => {
  const [id, setId] = useState('');
  const [joinBtn, setJoinBtn] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');

  const handleJoin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleAlertMsg = () => {
    if (id.length === 0) {
      setAlertMsg('아이디를 입력해주세요');
    }
  };
  const alertJoin = () => {
    return {
      borderColor: id.length === 0 && joinBtn? '#f86d7d' : '#e0e0e0',
    };
  };
  return {
    handleJoin,
    handleAlertMsg,
    alertJoin,
    setId,
    setJoinBtn,
    alertMsg,
  };
};

export default useJoin;
