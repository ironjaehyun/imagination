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

type ChatRoomProps = {
  invitedUser: UserItem;
};

const ChatRoom: FunctionComponent<ChatRoomProps> = ({ invitedUser }) => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);
  const [isFetching, setIsFetching] = useState(false); // 새로 추가된 상태
  const chatContainer = useRef<HTMLDivElement>(null);

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    if (message.trim() === '') return;
    setMessages([...messages, message]);
    setMessage('');
    setIsFetching(false);
  };

  useEffect(() => {
    scrollToBottom();

    const handleScroll = () => {
      const { current: chatDiv } = chatContainer;
      if (!chatDiv) return;
      setShowScrollToTopButton(chatDiv.scrollTop > 0);
    };
    chatContainer.current?.addEventListener('scroll', handleScroll);

    return () => {
      chatContainer.current?.removeEventListener('scroll', handleScroll);
    };
  }, [messages, isFetching]);

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
                <img src="../chatimg/talking.gif" />
              </p>
            </div>
          )}
        </div>
        <div
          className={`chatroom-btn ${showScrollToTopButton ? 'visible' : ''}`}
          onClick={handleScrollToTop}
        >
          <span>
            <img src="../chatimg/whitearrow.png" alt="Scroll To Top"></img>
          </span>
        </div>
      </div>

      <div className="chatroom-inputarea">
        <div className="chatroom-inputbox">
          <img src="../chatimg/smile.svg" />
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
