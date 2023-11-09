import { useState, MouseEvent } from 'react';

const ChatInvite = () => {
  const [isOpen, setIsOpen] = useState(true);

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

        <div className="chat-invite-list"></div>

        <div className="chat-invite-btn">
          <button>Chat</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ChatInvite;
