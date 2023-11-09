import Feed from '../../../feed/Feed';
import useLogin from '../hooks/useLogin';
import { LoginForm } from './LoginForm';
import { LoginQuestionBox } from './LoginQuestionBox';
const Login = () => {
  const { cookies } = useLogin();
  return (
    <div>
      {cookies.token ? (
        <div>
          <Feed/>
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
