import React, { useState, MouseEvent, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: string;
  name: string;
}

const ChatInvite: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [userList, setUserList] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

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
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/chat');
        setUserList(response.data);

        // 유저가 원하는 버튼이 클릭되게끔 선택된 유저의 ID를 설정
        const initialSelectedUserId = '원하는 유저의 ID'; // 여기에 원하는 유저의 ID를 입력
        setSelectedUser(initialSelectedUserId);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (userId: string) => {
    setSelectedUser(userId);
  };

  const handleChatButtonClick = () => {
    // onChatInvite(selectedUser); // prop 사용하지 않음
    handleClose();
  };

  return isOpen ? (
    <div className={`alertpop ${isOpen ? 'open' : ''}`}>
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
              <div className="chat-invite-elements" key={user.id}>
                <span>{JSON.stringify(user, null, 2).replace(/"/g, '')}</span>
                <input
                  type="radio"
                  id={`radio-${user.id}`}
                  name={`userRadio-${user.id}`}
                  checked={selectedUser === user.id}
                  onChange={() => handleCheckboxChange(user.id)}
                />
              </div>
            ))}
          </div>

          <div className="chat-invite-btn">
            <button onClick={handleChatButtonClick}>Chat</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ChatInvite;
