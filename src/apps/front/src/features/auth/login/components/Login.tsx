import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="center-box">
      <form className="login">
        <h1 className="login__title">leechi</h1>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button className="login__button">로그인</button>
        <div className="or">
          <hr className="or-line" />
          <div className="or-text">OR</div>
        </div>
        <div className="social__login">
          <Link to={'/google'} className="google">
            <img src="google.jpg" alt="" />
            <span>구글로 로그인</span>
          </Link>
          <Link to={'/kakao'} className="kakao">
            <img src="kakao.png" alt="" />
            <span>카카오로 로그인</span>
          </Link>
          <Link to={'/naver'} className="naver">
            <img src="naver.png" alt="" />
            <span>네이버로 로그인</span>
          </Link>
        </div>
      </form>

      <section className="question-box">
        <p>계정이 없으신가요?</p>
        <Link to="/join">회원가입</Link>
      </section>
    </div>
  );
};

export default Login;
