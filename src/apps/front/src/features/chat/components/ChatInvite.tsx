import React, { MouseEvent, useState } from 'react';
import { atom, useAtom } from 'jotai'; // jotai 라이브러리에서 필요한 부분 추가
import axios from 'axios';

// Jotai atom을 사용하여 전체 사용자 목록을 관리합니다.
const userListAtom = atom([]); // Jotai atom 추가

const ChatInvite: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [userList, setUserList] = useAtom(userListAtom); // Jotai atom 사용
  const objectId = sessionStorage.getItem('_id');
  console.log(objectId);
  const [user] = useState('655ab5699b1f5147511a5afb');

  const createChatRoom = () => {
    axios.post('http://localhost:3000/chat/room', {
      user: user,
      me: objectId,
      string: 'hihi',
    });
  };

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

  const handleChatButtonClick = async () => {
    // 선택된 사용자를 가져오는 로직
    const selectedUserElement = document.querySelector(
      'input[type="radio"]:checked + label',
    );

    if (selectedUserElement) {
      const selectedUserName = selectedUserElement.textContent;
      console.log('선택한 사용자:', selectedUserName);

      try {
        // 서버로 선택된 사용자 정보를 전송
        await axios.post('http://localhost:3000/chat/invite', {
          selectedUserName,
        });
        console.log('초대가 성공적으로 전송되었습니다!');

        // 나중에 채팅방 생성 및 초대 로직을 추가하세요.

        // 채팅 목록 업데이트
        const updatedUserList = await axios.get('http://localhost:3000/chat');
        setUserList(updatedUserList.data);
      } catch (error) {
        console.error('초대 전송 중 오류:', error);
      }
    } else {
      console.warn('사용자가 선택되지 않았습니다!');
    }
  };

  // useEffect(() => {
  //   const fetchUserList = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/chat');
  //       setUserList(response.data);
  //     } catch (error) {
  //       console.error('Error fetching user list:', error);
  //     }
  //   };

  //   fetchUserList();
  // }, [setUserList]);

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
                <span></span>
                <input type="radio" />
                <label>{user}</label>
              </div>
            ))}
          </div>
          <button onClick={createChatRoom}>chatroom생성</button>
          <div className="chat-invite-btn">
            <button onClick={handleChatButtonClick}>Chat</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ChatInvite;
