import { Link, useLocation } from 'react-router-dom';

const BigGnb = () => {
  const location = useLocation();
  // checkActive 함수는 경로를 인자로 받는다
  const checkActive = (path: string) => {
    return location.pathname === path ? 'Gnb-hoverwhite active' : 'Gnb-hoverwhite';
  };
  return (
    <div>
      <div className="Gnb">
        <div className="Gnb-main">
          <div className="Gnb-imagination-icon">
            <img
              src="./img/Imagination.png"
              className="imagination"
            ></img>
          </div>
          <div className="Gnb-profile">
            <img
              src="https://user-images.githubusercontent.com/134245586/280886621-3114e7a5-0beb-483c-b038-6ca2a4e08176.png"
              alt=""
              className="profile-img"
            ></img>
            <p>Leechi</p>
            <div className="profile-status">
              <div>
                <p>0</p>
                <p>게시물</p>
              </div>
              <div className="profile-status-middle">
                <p>0</p>
                <p>팔로우</p>
              </div>
              <div>
                <p>0</p>
                <p>팔로워</p>
              </div>
            </div>
          </div>
          <div className="Gnb-btn">
            <Link to={'/feed'}>
              <div className={checkActive('/feed')}>
                <img src="./img/feed.png" className="Gnb-icon" />
                <span>Feed</span>
              </div>
            </Link>
            <Link to={'/leader'}>
              <div className={checkActive('/leader')}>
                <img src="./img/rank.png" className="Gnb-icon" />
                <span>Rank</span>
              </div>
            </Link>
            <Link to={'/explore'}>
              <div className={checkActive('/explore')}>
                <img src="./img/explore.png" className="Gnb-icon" />
                <span>Explore</span>
              </div>
            </Link>
            <Link to={'/imagination'}>
              <div className={checkActive('/imagination')}>
                <img src="./img/ai.png" className="Gnb-icon" />
                <span>AI</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="Gnb-footer">
          <div className="Gnb-line"></div>
          <div className="Gnb-hoverwhite Gnb-setting" style={{ paddingRight: 20 }}>
            <img src="./img/setting.png" className="Gnb-icon" />
            <span>설정</span>
          </div>
          <div className="Gnb-hoverwhite">
            <img src="./img/logout.png" className="Gnb-icon" />
            <span>로그아웃</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigGnb;
