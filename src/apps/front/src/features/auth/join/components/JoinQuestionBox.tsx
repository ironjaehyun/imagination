import { Link } from 'react-router-dom';
export const JoinQuestionBox = () => {
  return (
    <section className="question-box">
      <p>이미 계정을 가지고 계신가요?</p>
      <Link to="/">로그인</Link>
    </section>
  );
};
