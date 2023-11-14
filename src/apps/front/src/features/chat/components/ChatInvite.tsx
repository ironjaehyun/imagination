import { useState, MouseEvent, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: string;
}

const ChatInvite = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [userList, setUserList] = useState<User[]>([]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    e.stopPropagation();
    handleClose();
  };

  const handleClickInside = (e: MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get('/api/users'); // 서버의 /api/users 엔드포인트로 GET 요청을 보냅니다.
        setUserList(response.data); // 가져온 아이디 목록을 상태에 저장합니다.
      } catch (error) {
        console.error('Failed to fetch user list:', error);
      }
    };

    fetchUserList();
  }, []);

  return isOpen ? (
    <div className="chat-invite-bg" onClick={handleClickOutside}>
      <div className="chat-invite-box" onClick={handleClickInside}>
        <div className="chat-invite-title">
          <span>New Messages</span>
          <img src="../chatimg/close.svg" onClick={handleClose} />
        </div>

        <div className="chat-invite-search">
          <textarea placeholder="search"></textarea>
          <img src="../chatimg/Vector.svg" />
        </div>

        <div className="chat-invite-list">
          {userList.map((user) => (
            <div key={user.id}>{user.id}</div> // 아이디 목록을 동적으로 렌더링합니다.
          ))}
        </div>

        <div className="chat-invite-btn">
          <button>Chat</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ChatInvite;
