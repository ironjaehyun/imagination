import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';

const Login = () => {
  const {
    handleLogin,
    setId,
    setPw,
    cookies,
    msgLogin,
    msgPassword,
    isDisable,
    handleLogout,
    user,
  } = useLogin();
  return (
    <div>
      {cookies.token ? (
        <div>
          <h1>{user?.id}</h1>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <div className="center-box">
          <form className="login" onSubmit={handleLogin}>
            <h1 className="login-title">Imagination</h1>
            <input
              type="text"
              placeholder="아이디"
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="비밀번호"
              onChange={(e) => {
                setPw(e.target.value);
              }}
            />
            <div className="login-alert">
              {msgLogin}
              {msgPassword}
            </div>

            <button className="login-button" disabled={isDisable}>
              로그인
            </button>
            <div className="or">
              <hr className="or-line" />
              <div className="or-text">OR</div>
            </div>
            <div className="social-login">
              <Link to={'/google'} className="google">
                <img src="join/google.jpg" alt="" />
                <span>구글로 로그인</span>
              </Link>
              <Link to={'/kakao'} className="kakao">
                <img src="join/kakao.png" alt="" />
                <span>카카오로 로그인</span>
              </Link>
              <Link to={'/naver'} className="naver">
                <img src="join/naver.png" alt="" />
                <span>네이버로 로그인</span>
              </Link>
            </div>
          </form>

          <section className="question-box">
            <p>계정이 없으신가요?</p>
            <Link to="/join">회원가입</Link>
          </section>
        </div>
      )}
    </div>
  );
};

export default Login;
