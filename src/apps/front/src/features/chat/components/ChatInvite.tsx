import React, { MouseEvent, useLayoutEffect, useState } from 'react';
import { atom, useAtom } from 'jotai';
import classNames from 'classnames';
import axios from 'axios';

export interface UserItem {
  _id: string;
  id: string;
  user_profile_img: string;
}

const userListAtom = atom<UserItem[]>([]);

const ChatInvite: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [userList, setUserList] = useAtom(userListAtom);
  const [searchValue, setSearchValue] = useState<string>(''); // searchValue 초기화 추가
  const [selected_Id, setSelected_Id] = useState<string>();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    e.stopPropagation();
    handleClose();
  };

  const handleRadioClick = (_id: string) => {
    setSelected_Id(_id);
  };

  const handleChatButtonClick = async () => {
    try {
      const body = {
        user: selected_Id,
        me: sessionStorage.getItem('_id'),
        string: '허걱슨',
      };

      await axios.post('http://localhost:3000/chat/room', body);
      console.log('Invitation sent successfully!');
      setIsOpen(false);
    } catch (error) {
      console.error('Error sending invitation:', error);
    }
  };

  useLayoutEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get('http://localhost:3000/chat/user');
        setUserList(response.data);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };

    fetchUserList();
  }, []);

  const handleClickInside = (e: MouseEvent) => {
    e.stopPropagation();

    const isRadioButtonSelected = userList.some(
      (user) => user._id === selected_Id,
    );
    const buttonClass = classNames({
      'chat-btn-selected': isRadioButtonSelected,
    });
    const buttonElement = document.querySelector(
      '.chat-invite-btn button',
    ) as HTMLButtonElement | null;
    if (buttonElement) {
      buttonElement.className = buttonClass;
      buttonElement.disabled = !isRadioButtonSelected;
    }
  };

  // 사용자 목록 필터링
  const filteredUserList = userList.filter((user) =>
    user.id.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return isOpen ? (
    <div className={`alertpop ${isOpen ? 'open' : ''}`}>
      <div className="chat-invite-bg" onClick={handleClickOutside}>
        <div className="chat-invite-box" onClick={handleClickInside}>
          <div className="chat-invite-title">
            <span>New Messages</span>
            <img src="../chatimg/close.svg" onClick={handleClose} />
          </div>

          <div className="chat-invite-search">
            <input
              type="text"
              placeholder="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <img src="../chatimg/Vector.svg" />
          </div>

          <div className="chat-invite-list">
            {searchValue.trim() !== '' &&
              filteredUserList.map((user) => (
                <div key={user._id} className="chat-invite-elements">
                  <img
                    src={user.user_profile_img}
                    alt={`Profile of ${user.id}`}
                  />
                  <label>{user.id}</label>
                  <div
                    className={classNames('radio', {
                      selected: user._id === selected_Id,
                    })}
                    onClick={() => handleRadioClick(user._id)}
                  ></div>
                </div>
              ))}
          </div>

          <div className="chat-invite-btn">
            <button onClick={handleChatButtonClick} disabled={!selected_Id}>
              Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ChatInvite;
