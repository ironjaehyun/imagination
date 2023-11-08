import ChatList from './components/ChatList';
import ChatRoom from './components/ChatRoom';
import './components/_chatList.scss';

const Chat = () => {
  return (
    <div className="chatpage">
      <ChatList></ChatList>
      <ChatRoom></ChatRoom>
    </div>
  );
};

export default Chat;
