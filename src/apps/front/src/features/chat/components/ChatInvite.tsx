import { useState, MouseEvent, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: string;
  name: string;
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
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/chat');
        setUserList(response.data);
        console.log('chicken', userList);
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

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
                <input type="checkbox" id="myCheckbox" name="myCheckbox" />
              </div>
            ))}
          </div>

          <div className="chat-invite-btn">
            <button>Chat</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ChatInvite;
