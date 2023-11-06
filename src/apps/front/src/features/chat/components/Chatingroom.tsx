import React from 'react';

const Chatingroom: React.FC = () => {
  return (
    <div className="chatingroom-container">
      <div className="chatingroom-topcontainer">
        <img
          className="chattopcontainer-profileimg"
          src="./chatimg/Rectangle 17.png"
          alt="Profile Picture"
        />
        <span className="chattopcontainer-id">Leechi</span>
        <img
          className="chattopcontainer-logout-btn"
          src="./chatimg/logout.svg"
        />
      </div>

      <div className="chatingroom-chatcontents">dd</div>

      <div className="chatingroom-inputcontainer">
        <input className="chatingroom-input"></input>
        <button className="chatingroom-inputbtn">send</button>
      </div>
    </div>
  );
};

export default Chatingroom;
