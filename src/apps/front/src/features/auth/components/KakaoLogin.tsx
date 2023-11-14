import { Link } from 'react-router-dom';

export const KakaoLogin = () => {
  return (
    <Link to={'/kakao'} className="kakao">
      <img src="join/kakao.png" alt="" />
      <span>카카오로 로그인</span>
    </Link>
  );
};

export default KakaoLogin;
