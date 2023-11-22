import { Link, useLocation } from 'react-router-dom';
import useLogin from '../auth/login/hooks/useLogin';
import { useQuery } from '@tanstack/react-query';
import axios from './../auth/api/auth';

const BigGnb = () => {
  const location = useLocation();
  // checkActive 함수는 경로를 인자로 받는다
  const checkActive = (path: string) => {
    return location.pathname === path
      ? 'BigGnb-hoverwhite active'
      : 'BigGnb-hoverwhite';
  };

  const userId = sessionStorage.getItem('id');
  const userObjectId = sessionStorage.getItem('_id');
  const profileImg = sessionStorage.getItem('profile') ?? '';

  const { handleLogout } = useLogin();

  const fetchData = async () => {
    const response = await axios.get(`/Gnb/findPostsFollow/${userId}`);
    return response.data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ['fetchData'],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data);
  return (
    <div>
      <div className="BigGnb">
        <div className="BigGnb-main">
          <Link to={'/'}>
            <div className="BigGnb-imagination-icon">
              <img src="./img/Imagination.png" className="imagination"></img>
            </div>
          </Link>
          <div className="BigGnb-profile">
            <Link to={`/mypage/${userObjectId}`}>
              <img src={profileImg} alt="" className="BigGnb-profile-img"></img>
              <p>{userId}</p>
            </Link>
            <div className="profile-status">
              <div>
                <p>{data.posts.length}</p>
                <p>게시물</p>
              </div>
              <div className="profile-status-middle">
                <p>{data.follow.length}</p>
                <p>팔로우</p>
              </div>
              <div>
                <p>{data.follower.length}</p>
                <p>팔로워</p>
              </div>
            </div>
          </div>

          <div className="BigGnb-btn">
            {[
              { to: '/', img: './img/feed.png', text: 'Feed' },
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
