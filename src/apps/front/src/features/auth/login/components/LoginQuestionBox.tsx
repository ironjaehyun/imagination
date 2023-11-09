import { Link } from 'react-router-dom';

export const LoginQuestionBox = () => {
  return (
    <section className="question-box">
      <p>계정이 없으신가요?</p>
      <Link to="/join">회원가입</Link>
    </section>
  );
};
