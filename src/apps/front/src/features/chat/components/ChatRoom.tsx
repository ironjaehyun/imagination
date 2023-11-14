import { useState, FormEvent, ChangeEvent, useEffect } from 'react';

const ChatRoom = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() !== '') {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  useEffect(() => {
    // 새로운 메시지가 추가될 때마다 스크롤을 최하단으로 이동
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    const chatContainer = document.querySelector(
      '.chatroom-scroll-box',
    ) as HTMLElement | null;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  return (
    <div className="chatroom">
      <div className="chatroom-info">
        <div>
          <img src="../chatimg/Rectangle 17.png" alt="User Avatar" />
          <span>Leechi</span>
        </div>
        <img src="../chatimg/logout.svg" alt="Logout" />
      </div>

      <div className="chatroom-contents">
        <div className="chatroom-scroll-box">
          {messages.map((message, index) => (
            <div className="chat-bubble-right" key={index}>
              <p>{message}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <form className="chatroom-inputbox" onSubmit={handleSend}>
          <input
            className="chat-input"
            type="text"
            placeholder="메시지를 입력해주세요"
            value={message}
            onChange={handleMessageChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
