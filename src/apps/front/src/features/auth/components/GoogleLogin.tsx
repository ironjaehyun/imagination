import { Link } from 'react-router-dom';

export const GoogleLogin = () => {
  return (
    <Link to={'google'} className="google">
      <img src="join/google.jpg" alt="" />
      구글로 로그인
    </Link>
  );
};

export default GoogleLogin;
