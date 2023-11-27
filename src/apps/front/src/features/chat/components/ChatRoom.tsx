import {
  useState,
  ChangeEvent,
  useEffect,
  KeyboardEventHandler,
  MouseEventHandler,
  useRef,
  FunctionComponent,
} from 'react';
import { UserItem } from './ChatInvite';
import io from 'socket.io-client';
import axios from 'axios';

type ChatRoomProps = {
  invitedUser: UserItem;
};

const ChatRoom: FunctionComponent<ChatRoomProps> = ({ invitedUser }) => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const chatContainer = useRef<HTMLDivElement>(null);

  const socket = io('http://localhost:5545', { transports: ['websocket'] });

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSend = async () => {
    if (message.trim() === '') return;

    try {
      axios.post('http://localhost:3000/chat/savemsg', {
        chatId: invitedUser.room,
        senderId: sessionStorage.getItem('_id'),
        text: message,
      });

      // 메시지 전송 후 소켓을 통해 실시간으로 메시지 수신하도록
      await socket.emit('chat message', { user: invitedUser.id, message });

      setMessages([...messages, message]);
      setMessage('');
      setIsFetching(false);

      socket.emit('chat message', { user: invitedUser.id, message });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get(
        `/chat/getmsg?chatId=${invitedUser._id}`,
      );
      const messages = response.data;
      setMessages(messages);
    };

    fetchMessages();

    scrollToBottom();

    socket.on('chat message', (data) => {
      // 수신한 메시지를 state에 추가
      setMessages([...messages, data.message]);
      scrollToBottom(); // 화면을 항상 가장 아래로 스크롤
    });

    const handleScroll = () => {
      const { current: chatDiv } = chatContainer;
      if (!chatDiv) return;
      setShowScrollToTopButton(chatDiv.scrollTop > 0);
    };
    chatContainer.current?.addEventListener('scroll', handleScroll);

    return () => {
      chatContainer.current?.removeEventListener('scroll', handleScroll);
      socket.off('chat message');
    };
  }, [messages, isFetching, invitedUser._id]);

  const scrollToBottom = () => {
    const { current: chatDiv } = chatContainer;
    if (!chatDiv) return;
    chatDiv.scrollTo({ top: chatDiv.scrollHeight, behavior: 'smooth' });
  };

  const handleTextareaKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (
    event,
  ) => {
    const {
      key,
      shiftKey,
      nativeEvent: { isComposing },
    } = event;
    if (key === 'Enter' && !shiftKey && !isComposing) {
      event.preventDefault();
      handleSend();
    } else {
      setIsFetching(event.currentTarget.value.trim() !== '');
    }
  };

  const handleSendClick: MouseEventHandler<HTMLButtonElement> = () => {
    handleSend();
  };

  const handleScrollToTop = () => {
    const { current: chatDiv } = chatContainer;
    if (!chatDiv) return;
    chatDiv.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="chatroom">
      <div className="chatroom-info">
        <div>
          <img
            className="chatroom-info-profileimg"
            src={invitedUser.user_profile_img}
            alt="User Avatar"
          />
          <span>{invitedUser.id}</span>
        </div>
        <img src="../chatimg/logout.svg" alt="Logout" />
      </div>

      <div className="chatroom-contents">
        <div ref={chatContainer} className="chatroom-scroll-box">
          {messages.map((message, index) => (
            <div className="chat-bubble-right" key={index}>
              <p>{message}</p>
            </div>
          ))}
          {isFetching && (
            <div className="chat-bubble-right">
              <p>
                <img src="../chatimg/talking.gif" alt="Talking" />
              </p>
            </div>
          )}
        </div>
        <div
          className={`chatroom-btn ${showScrollToTopButton ? 'visible' : ''}`}
          onClick={handleScrollToTop}
        >
          <span>
            <img src="../chatimg/whitearrow.png" alt="Scroll To Top" />
          </span>
        </div>
      </div>

      <div className="chatroom-inputarea">
        <div className="chatroom-inputbox">
          <img src="../chatimg/smile.svg" alt="Smile" />
          <textarea
            className="chat-input"
            placeholder="메시지를 입력해주세요"
            value={message}
            onChange={handleMessageChange}
            onKeyDown={handleTextareaKeyDown}
          />
          <button onClick={handleSendClick}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
