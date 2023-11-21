import React, { MouseEvent, useEffect, useState } from 'react';
import { atom, useAtom } from 'jotai';

import axios from 'axios';

const userListAtom = atom([]);

const ChatInvite: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [userList, setUserList] = useAtom(userListAtom);

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

  // const handleChatButtonClick = async () => {
  //   const selectedUserElement = document.querySelector(
  //     'input[type="radio"]:checked + label',
  //   );

  //   if (selectedUserElement) {
  //     const selectedUserName = selectedUserElement.textContent;
  //     console.log('Selected User:', selectedUserName);

  //     try {
  //       // 클라이언트 콘솔에 사용자 아이디 출력
  //       const userId = sessionStorage.getItem('id');
  //       console.log('User ID:', userId);

  //       // 서버로 선택된 사용자 정보를 전송
  //       await axios.post('http://localhost:3000/chat/invite', {
  //         selectedUserName,
  //         userId,
  //       }, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${userId}`, // 여기서 'Bearer'는 사용자를 인증하는 방법에 따라 달라질 수 있습니다.
  //         },
  //       });

  //       console.log('Invitation sent successfully!');
  //       // 나중에 채팅방 생성 및 초대 로직을 추가하세요.
  //     } catch (error) {
  //       console.error('Error sending invitation:', error);
  //     }
  //   } else {
  //     console.warn('No user selected!');
  //   }
  // };

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get('http://localhost:3000/chat');
        setUserList(response.data);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };

    fetchUserList();
  }, [setUserList]);

  const createChatRoom = () => {
    axios.post('http://localhost:3000/chat/room', {
      user: '655ab5699b1f5147511a5afb', // Replace with the appropriate user
      me: sessionStorage.getItem('_id'),
      string: 'hihi',
    });
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
              <div key={user} className="chat-invite-elements">
                <input type="radio" />
                <label>{user}</label>
              </div>
            ))}
          </div>

          <button onClick={createChatRoom}>chatroom 생성</button>
          <div className="chat-invite-btn">
            <button>Chat</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ChatInvite;
