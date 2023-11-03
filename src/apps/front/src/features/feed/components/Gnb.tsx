import React from 'react';
import { Link } from 'react-router-dom';

const Gnb = () => {
  return (
    <div>
      <nav className="sidebar">
        <div className="nav-main">
          <div className="icon">
            <img src="./img/I.png" alt="" className="i"></img>
          </div>
          <div>
            <img
              src="./img/Rectangle 17.png"
              alt=""
              className="Rectangle"
            ></img>
          </div>
          <div className="white_hover">
            <Link to={'/feed'}>
              <img src="./img/feed.png" className="nav-i" />
            </Link>
          </div>
          <div className="white_hover">
            <Link to={'/leader'}></Link>
            <img src="./img/rank.png" className="nav-i" />
          </div>
          <div className="white_hover">
            <Link to={'/explore'}>
              <img src="./img/explore.png" className="nav-i" />
            </Link>
          </div>
          <div className="white_hover">
            <Link to={'/ai'}>
              <img src="./img/ai.png" className="nav-i" />
            </Link>
          </div>
        </div>
        <div className="nav-battom">
          <div className="line"></div>
          <div className="setting white_hover">
            <Link to={'/setting'}>
              <img src="./img/setting.png" className="nav-i" />
            </Link>
          </div>
          <div className="white_hover">
            <img src="./img/logout.png" className="nav-i" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Gnb;
