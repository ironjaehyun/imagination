import { Link, useLocation } from 'react-router-dom';
import useLogin from '../auth/login/hooks/useLogin';

const BigGnb = () => {
  const location = useLocation();
  // checkActive 함수는 경로를 인자로 받는다
  const checkActive = (path: string) => {
    return location.pathname === path
      ? 'BigGnb-hoverwhite active'
      : 'BigGnb-hoverwhite';
  };

  const userObjectId = sessionStorage.getItem('_id');
  // const profileImg = sessionStorage.getItem('profile') ?? '';

  const { handleLogout, profileImg, userId } = useLogin();

  return (
    <div>
      <div className="BigGnb">
        <div className="BigGnb-main">
          <Link to={'/feed'}>
            <div className="BigGnb-imagination-icon">
              <img src="./img/Imagination.png" className="imagination"></img>
            </div>
          </Link>
          <div className="BigGnb-profile">
            <Link to={`/mypage/${userObjectId}`}>
              <img src={profileImg} alt="" className="BigGnb-profile-img"></img>
              <p>{userId}</p>
            </Link>
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
            <button onClick={handleLogout}>로그아웃</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigGnb;
