import React, { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import ChatRoom from './ChatRoom';
import ChatInvite, { UserItem } from './ChatInvite';

const ChatList: React.FC = () => {
  const [invitedUser, setInvitedUser] = useState<UserItem>();
  const [chatInviteOpen, setChatInviteOpen] = useState(false);
  const [roomList, setRoomList] = useState<
    { members?: UserItem[]; _id: string; createdAt: string }[]
  >([]);

  const fetchUserList = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/chat/list?id=${sessionStorage.getItem('_id')}`,
      );
      setRoomList([...response.data].reverse());
    } catch (error) {
      console.error('Error fetching user list:', error);
    }
  };

  useLayoutEffect(() => {
    const socket = io('http://localhost:5545', { transports: ['websocket'] });
    socket.on('ping', () => console.log('pong'));

    fetchUserList();
  }, []);

  const handleChatInviteToggle = () => {
    setInvitedUser(undefined);
    setChatInviteOpen(!chatInviteOpen);
  };

  const handleChatRoomToggle = (user: UserItem, roomId: string) => {
    setChatInviteOpen(false);
    setInvitedUser({ ...user, roomId });
  };

  const handleInviteClose = () => {
    setChatInviteOpen(false);
  };
  const handleInvited = (data: UserItem) => {
    setChatInviteOpen(false);
    setInvitedUser(data);
    // TODO: axios 통해서 fetchList를 한번더 호출 해야함.
    // NOTE: RQ 캐시로 관리하면 훨씬 편해짐
    fetchUserList();
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
        <div className="chat-list-contents">
          {roomList.map(({ members, _id }) => {
            if (!members) return <div />;
            return (
              <div
                key={_id}
                className="chat-list-elements"
                onClick={() => handleChatRoomToggle(members[0], _id)}
              >
                <img src={members[0].user_profile_img} alt="User Avatar" />
                <div>
                  <h4>{members[0].id}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {invitedUser?._id && <ChatRoom invitedUser={invitedUser} />}
      {chatInviteOpen && (
        <ChatInvite onClose={handleInviteClose} onInvited={handleInvited} />
      )}
    </>
  );
};

export default ChatList;
