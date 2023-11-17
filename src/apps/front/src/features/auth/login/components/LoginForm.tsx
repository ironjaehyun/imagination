import { AuthOrDiv } from '../../components/AuthOrDiv';
import GoogleLogin from '../../components/GoogleLogin';
import useLogin from '../hooks/useLogin';

export const LoginForm = () => {
  const {
    handleLogin,
    handleLoginId,
    handleLoginPw,
    msgLogin,
    msgPassword,
    isDisable,
  } = useLogin();
  return (
    <form className="login" onSubmit={handleLogin}>
      <h1 className="login-title">Imagination</h1>

      <input type="text" placeholder="아이디" onChange={handleLoginId} />
      <input type="password" placeholder="비밀번호" onChange={handleLoginPw} />
      <div className="login-alert">
        {msgLogin}
        {msgPassword}
      </div>

      <button className="login-button" disabled={isDisable}>
        로그인
      </button>
      <AuthOrDiv />
      <div className="social-login">
        <GoogleLogin />
      </div>
    </form>
  );
};
