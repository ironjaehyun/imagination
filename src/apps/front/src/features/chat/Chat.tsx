import ChatList from './components/ChatList';
import Gnb from '../shared/Gnb';
import './components/_chatList.scss';

const Chat = () => {
  return (
    <div>
      <Gnb></Gnb>
      <div className="chatpage">
        <ChatList></ChatList>
      </div>
    </div>
  );
};

export default Chat;
