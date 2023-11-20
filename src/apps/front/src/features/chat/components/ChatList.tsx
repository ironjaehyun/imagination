import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatRoom from './ChatRoom';
import ChatInvite from './ChatInvite';

const ChatList: React.FC = () => {
  const [chatRoomOpen, setChatRoomOpen] = useState(false);
  const [chatInviteOpen, setChatInviteOpen] = useState(false);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    // 서버로부터 사용자 목록을 받아옴
    const fetchUserList = async () => {
      try {
        const response = await axios.get('http://localhost:3000/chat');
        setUserList(response.data);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };

    fetchUserList();
  }, []);

  const handleChatInviteToggle = () => {
    setChatInviteOpen(!chatInviteOpen);
  };

  const handleChatRoomToggle = () => {
    setChatRoomOpen(!chatRoomOpen);
  };

  return (
    <>
      <div className="chat-list">
        <div className="chat-list-title">
          <span>Message</span>
          <img
            onClick={handleChatInviteToggle}
            src="./chatimg/add_circle.svg"
            alt="Add"
          />
        </div>

        <div className="chat-list-contents" onClick={handleChatRoomToggle}>
          {userList.map((user) => (
            <div key={user} className="chat-list-elements">
              <img src="../chatimg/Rectangle 17.png" alt="User Avatar" />
              <div>
                <h4>{user}</h4>
                <span>어떻게 그런 프롬프트를 생각하셨나요?</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {chatRoomOpen && <ChatRoom />}
      {chatInviteOpen && <ChatInvite />}
    </>
  );
};

export default ChatList;
