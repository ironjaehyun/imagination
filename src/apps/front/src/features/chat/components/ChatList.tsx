import React, { useState } from 'react';
import ChatRoom from './ChatRoom';
import ChatInvite from './ChatInvite';

const ChatList: React.FC = () => {
  const [chatRoomOpen, setChatRoomOpen] = useState(false);
  const [chatInviteOpen, setChatInviteOpen] = useState(false);

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
          <div className="chat-list-elements">
            <img src="./chatimg/Rectangle 17.png" alt="User Avatar" />
            <div>
              <h4>Leechi</h4>
              <span>어떻게 그런 프롬프트를 생각하셨나요?</span>
            </div>
          </div>
        </div>
      </div>

      {chatRoomOpen && <ChatRoom />}
      {chatInviteOpen && <ChatInvite />}
    </>
  );
};

export default ChatList;
