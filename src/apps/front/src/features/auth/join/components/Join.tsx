import { Link } from 'react-router-dom';
import useJoin from '../hooks/useJoin';

const Join = () => {
  const { handleJoin, setId, alertJoin, handleAlertMsg, alertMsg, setJoinBtn } = useJoin();

  return (
    <div className="center-box">
      <form onSubmit={handleJoin} className="join">
        <h1 className="join-title">Imagination</h1>
        <h4 className="join-desc">
          당신이 원하는 이미지를 생성하고<br></br>
          공유해보세요
        </h4>
        <Link to={'google'} className="google">
          <img src="join/google.jpg" alt="" />
          구글로 회원가입
        </Link>
        <div className="or">
          <hr className="or-line" />
          <div className="or-text">OR</div>
        </div>
        <div className="join-main">
          <span id="join-check">중복체크</span>
          <input
            type="id"
            placeholder="아이디"
            onChange={(event) => {
              setId(event.target.value);
            }}
            style={alertJoin()}
          />
          <input type="password" placeholder="비밀번호" />
          <div className="password-check"></div>
          <input type="password" placeholder="비밀번호 확인" />
          <input type="text" placeholder="이름  ex) leechi" />
          <span className="join-alert">{alertMsg}</span>
          <span className="join-pass">{}</span>
          <button
            className="join-btn"
            onClick={() => {
              setJoinBtn(true), handleAlertMsg();
            }}
          >
            회원가입
          </button>
        </div>
      </form>
      <section className="question-box">
        <p>이미 계정을 가지고 계신가요?</p>
        <Link to="/login">로그인</Link>
      </section>
    </div>
  );
};

export default Join;
