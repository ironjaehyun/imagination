import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
const BigGnb = () => {
  const location = useLocation();
  // checkActive 함수는 경로를 인자로 받는다
  const checkActive = (path: string) => {
    return location.pathname === path
      ? 'BigGnb-hoverwhite active'
      : 'BigGnb-hoverwhite';
  };

  // 임시 사용자 데이터
  const [userData] = useState({
    profileImg:
      'https://i.namu.wiki/i/xl7WXBmp2VQ7mQRz53DlZ_7S1O4CEA_6RERhydKMTPYsdK9oXAcvqhtijh_rHQNw1fYt7skGA4vnMOJNg40jQA.webp',
    name: 'Leechi',
    posts: 1,
    following: 123,
    followers: 123,
  });

  return (
    <div>
      <div className="BigGnb">
        <div className="BigGnb-main">
          <div className="BigGnb-imagination-icon">
            <img src="./img/Imagination.png" className="imagination"></img>
          </div>
          <div className="BigGnb-profile">
            <Link to={'/mypage'}>
              <img
                src={userData.profileImg}
                alt=""
                className="BigGnb-profile-img"
              ></img>
              <p>{userData.name}</p>
            </Link>
            <div className="profile-status">
              <div>
                <p>{userData.posts}</p>
                <p>게시물</p>
              </div>
              <div className="profile-status-middle">
                <p>{userData.following}</p>
                <p>팔로우</p>
              </div>
              <div>
                <p>{userData.followers}</p>
                <p>팔로워</p>
              </div>
            </div>
          </div>

          <div className="BigGnb-btn">
            {[
              { to: '/feed', img: './img/feed.png', text: 'Feed' },
              { to: '/leader', img: './img/rank.png', text: 'Rank' },
              { to: '/explore', img: './img/explore.png', text: 'Explore' },
              { to: '/imagination', img: './img/ai.png', text: 'AI' },
            ].map(({ to, img, text }) => (
              <Link to={to} key={to}>
                <div className={checkActive(to)}>
                  <img src={img} className="BigGnb-icon" />
                  <span>{text}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="BigGnb-footer">
          <div className="Gnb-line"></div>
          <div
            className="BigGnb-hoverwhite Gnb-setting"
            style={{ paddingRight: 20 }}
          >
            <img src="./img/setting.png" className="BigGnb-icon" />
            <span>설정</span>
          </div>
          <div className="BigGnb-hoverwhite">
            <img src="./img/logout.png" className="BigGnb-icon" />
            <span>로그아웃</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigGnb;
