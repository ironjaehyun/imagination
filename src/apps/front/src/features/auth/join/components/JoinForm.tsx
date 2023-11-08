import useJoin from '../hooks/useJoin';
import PasswordRequirements from './PasswordRequirements';
import { Link } from 'react-router-dom';
export const JoinForm = () => {
  const {
    handleJoin,
    alertJoin,
    handleAlertMsg,
    alertMsg,
    setJoinBtn,
    setId,
    setPw,
    setPwCheck,
    setName,
    duplicateId,
    idPassMsg,
    isValid,
    isNumber,
    isSpe,
    isUpper,
  } = useJoin();
  return (
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
        <span id="join-check" onClick={duplicateId}>
          중복체크
        </span>
        <input
          type="id"
          placeholder="아이디"
          onChange={(event) => {
            setId(event.target.value);
          }}
          style={alertJoin('id')}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(event) => {
            setPw(event.target.value);
          }}
          style={alertJoin('pw')}
        />
        <PasswordRequirements
          isValid={isValid}
          isNumber={isNumber}
          isSpe={isSpe}
          isUpper={isUpper}
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          onChange={(event) => {
            setPwCheck(event.target.value);
          }}
          style={alertJoin('pw-check')}
        />
        <input
          type="text"
          placeholder="닉네임"
          onChange={(event) => setName(event.target.value)}
          style={alertJoin('name')}
        />
        <div className="join-msg">
          <span className="join-alert">{alertMsg}</span>
          <span className="join-pass">{idPassMsg}</span>
        </div>
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
  );
};
