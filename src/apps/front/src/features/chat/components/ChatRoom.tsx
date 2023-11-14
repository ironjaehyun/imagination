import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';

const ChatRoom: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
          <div className="chatroom-btn">
            <span>↑</span>
          </div>
        </div>
      </div>

      <div className="chatroom-inputarea">
        <form className="chatroom-inputbox" onSubmit={handleSend}>
          <img src="../chatimg/sentiment_satisfied_alt.svg" alt="Emoji" />
          <textarea
            className="chat-input"
            placeholder="메시지를 입력해주세요"
            value={message}
            onChange={handleMessageChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                handleSend(event);
              }
            }}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
