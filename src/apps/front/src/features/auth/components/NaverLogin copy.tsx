import { Link } from 'react-router-dom';

export const NaverLogin = () => {
  return (
    <Link to={'/naver'} className="naver">
      <img src="join/naver.png" alt="" />
      <span>네이버로 로그인</span>
    </Link>
  );
};

export default NaverLogin;
