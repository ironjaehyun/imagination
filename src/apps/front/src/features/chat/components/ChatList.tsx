import React, { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import ChatRoom from './ChatRoom';
import ChatInvite, { UserItem } from './ChatInvite';

const ChatList: React.FC = () => {
  const [chatRoomOpen, setChatRoomOpen] = useState(false);
  const [chatInviteOpen, setChatInviteOpen] = useState(false);
  const [userList, setUserList] = useState<UserItem[]>([]);

  useLayoutEffect(() => {
    // 서버로부터 사용자 목록을 받아옴
    const fetchUserList = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/chat/list?id=${sessionStorage.getItem('_id')}`,
        );
        setUserList(response.data);
        console.log(response.data);
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
            <div key={user._id} className="chat-list-elements">
              <img src={user.user_profile_img} alt="User Avatar" />
              <div>
                <h4>{user.id}</h4>
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
