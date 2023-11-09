import useLogin from '../hooks/useLogin';
import { LoginForm } from './LoginForm';
import { LoginQuestionBox } from './LoginQuestionBox';
const Login = () => {
  const { cookies, handleLogout } = useLogin();
  return (
    <div>
      {cookies.token ? (
        <div>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <div className="center-box">
          <LoginForm />
          <LoginQuestionBox />
        </div>
      )}
    </div>
  );
};

export default Login;
