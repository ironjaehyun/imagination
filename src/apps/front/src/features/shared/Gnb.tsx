import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../../../packages/models/port';
import useLogin from '../auth/login/hooks/useLogin';
const Gnb = () => {
  const profileImg = sessionStorage.getItem('profile') ?? '';
  const objcetId = sessionStorage.getItem('_id');
  const { handleLogout } = useLogin();
  return (
    <div>
      <nav className="Gnb">
        <div className="Gnb-main">
          <Link to={'/feed'}>
            <div className="Gnb-icon">
              <img
                src={PUBLIC_URL + '/img/I.png'}
                alt=""
                className="Gnb-i"
              ></img>
            </div>
          </Link>
          <div>
            <Link to={`/mypage/${objcetId}`}>
              <img src={profileImg} alt="" className="Gnb-profile-img"></img>
            </Link>
          </div>
          <Link to={'/feed'}>
            <div className="Gnb-hoverwhite">
              <img
                src={PUBLIC_URL + '/img/feed.png'}
                className="Gnb-nav-icon"
              />
            </div>
          </Link>
          <Link to={'/leader'}>
            <div className="Gnb-hoverwhite">
              <img
                src={PUBLIC_URL + '/img/rank.png'}
                className="Gnb-nav-icon"
              />
            </div>
          </Link>
          <Link to={'/explore'}>
            <div className="Gnb-hoverwhite">
              <img
                src={PUBLIC_URL + '/img/explore.png'}
                className="Gnb-nav-icon"
              />
            </div>
          </Link>
          <Link to={'/imagination'}>
            <div className="Gnb-hoverwhite">
              <img src={PUBLIC_URL + '/img/ai.png'} className="Gnb-nav-icon" />
            </div>
          </Link>
        </div>
        <div className="Gnb-footer">
          <div className="Gnb-line"></div>
          <div className="setting Gnb-hoverwhite">
            <Link to={'/setting'}>
              <img
                src={PUBLIC_URL + '/img/setting.png'}
                className="Gnb-nav-icon"
              />
            </Link>
          </div>
          <div onClick={handleLogout} className="Gnb-hoverwhite">
            <img
              src={PUBLIC_URL + '/img/logout.png'}
              className="Gnb-nav-icon"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Gnb;
