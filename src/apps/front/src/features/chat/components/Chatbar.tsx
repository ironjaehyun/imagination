import React, { useState } from 'react';
import Chatingroom from './Chatingroom';
import ChatInvite from './ChatInvite';

const Chatbar: React.FC = () => {
  const [showChatingroom, setShowChatingroom] = useState(false);
  const [showChatInvite, setShowChatInvite] = useState(false)

  const toggleChatingroom = () => {
    setShowChatingroom(!showChatingroom);
  }
  const toggleChatInvite =()=>{
    setShowChatInvite(!showChatInvite)
  }

  return (
    <div>
      <div className='chatbar-container'>
        <div className='chatbar-topcontainer'>
          <strong>Messages</strong>
          <img
            src='./chatimg/add_circle.svg'
            alt="Add Circle"
            onClick={toggleChatInvite}
          />
        </div>

        <div className="chatbar-contents" onClick={toggleChatingroom}>
          <img src='./chatimg/Rectangle 17.png' alt="Profile Picture" />
          <div className='chat-detail'>
            <span className='chat-id'>Leechi</span>
            <br />
            <span className='chat-comments'>어떻게 그런 프롬프트를 생각하셨나요?</span>
          </div>
        </div>
      </div>
      {showChatingroom && <Chatingroom />}
      {showChatInvite && <ChatInvite/>} 
    </div>
  );
};

export default Chatbar;
