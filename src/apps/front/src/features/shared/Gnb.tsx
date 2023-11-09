import { Link } from 'react-router-dom';

const Gnb = () => {
  return (
    <div>
      <nav className="Gnb">
        <div className="Gnb-main">
          <div className="Gnb-icon">
            <img src="./img/I.png" alt="" className="Gnb-i"></img>
          </div>
          <div>
            <img
              src="https://i.namu.wiki/i/xl7WXBmp2VQ7mQRz53DlZ_7S1O4CEA_6RERhydKMTPYsdK9oXAcvqhtijh_rHQNw1fYt7skGA4vnMOJNg40jQA.webp"
              alt=""
              className="Gnb-profile-img"
            ></img>
          </div>
          <Link to={'/feed'}>
            <div className="Gnb-hoverwhite">
              <img src="./img/feed.png" className="Gnb-nav-icon" />
            </div>
          </Link>
          <Link to={'/leader'}>
            <div className="Gnb-hoverwhite">
              <img src="./img/rank.png" className="Gnb-nav-icon" />
            </div>
          </Link>
            <Link to={'/explore'}>
          <div className="Gnb-hoverwhite">
              <img src="./img/explore.png" className="Gnb-nav-icon" />
          </div>
            </Link>
            <Link to={'/imagination'}>
          <div className="Gnb-hoverwhite">
              <img src="./img/ai.png" className="Gnb-nav-icon" />
          </div>
            </Link>
        </div>
        <div className="Gnb-footer">
          <div className="Gnb-line"></div>
          <div className="setting Gnb-hoverwhite">
            <Link to={'/setting'}>
              <img src="./img/setting.png" className="Gnb-nav-icon" />
            </Link>
          </div>
          <div className="Gnb-hoverwhite">
            <img src="./img/logout.png" className="Gnb-nav-icon" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Gnb;
