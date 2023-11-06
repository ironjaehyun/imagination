const ChatInvite = () => {
  return (
    <div className="modal-bg">
      <div className="invitemodal-container">
        <div className="invitemodal-topcontainer">
          <strong>New Messages</strong>
          <img src="./chatimg/close.svg" alt="" />
        </div>
        <div className="inviteinput-container">
          <input className="invitemodal-search" placeholder="search"></input>
          <img src="./chatimg/Vector.svg" />
        </div>
        <div className="chat-container">
          <button className="invitemodal-chatbtn">Chat</button>
        </div>
      </div>
    </div>
  );
};

export default ChatInvite;
