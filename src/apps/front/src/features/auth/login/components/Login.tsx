import { LoginForm } from './LoginForm';
import { LoginQuestionBox } from './LoginQuestionBox';

const Login = () => {
  return (
    <div>
      <div className="center-box">
        <LoginForm />
        <LoginQuestionBox />
      </div>
    </div>
  );
};

export default Login;
