import ChatList from './components/ChatList';
import Gnb from '../shared/Gnb';
import './components/_chatList.scss';

const Chat: React.FC = () => {
  return (
    <div>
      <Gnb></Gnb>
      <div className="chatpage">
        <ChatList />
      </div>
    </div>
  );
};

export default Chat;
