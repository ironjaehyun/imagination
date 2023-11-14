const ChatInvite = () => {
  return (
    <div className="chat-invite-bg">
      <div className="chat-invite-box">
        <div className="chat-invite-title">
          <span>New Messages</span>
          <img src="../chatimg/close.svg" />
        </div>

        <div className="chat-invite-search">
          <input></input>
        </div>

        <div className="chat-invite-list"></div>

        <div className="chat-invite-btn">
          <button>Chat</button>
        </div>
      </div>
    </div>
  );
};

export default ChatInvite;
