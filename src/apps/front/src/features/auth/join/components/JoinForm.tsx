import useJoin from '../hooks/useJoin';
import PasswordRequirements from './PasswordRequirements';
import classNames from 'classnames';
import { AuthOrDiv } from '../../components/AuthOrDiv';
import GoogleLogin from '../../components/GoogleLogin';

export const JoinForm = () => {
  const {
    handleJoin,
    handleId,
    handlePw,
    handlePwCheck,
    handleName,
    handleAlertMsg,
    alertMsg,
    setJoinBtn,
    duplicateId,
    idPassMsg,
    isValid,
    isNumber,
    isSpe,
    isUpper,
    isZero,
  } = useJoin();
  return (
    <form onSubmit={handleJoin} className="join">
      <h1 className="join-title">Imagination</h1>
      <h4 className="join-desc">
        당신이 원하는 이미지를 생성하고<br></br>
        공유해보세요
      </h4>
      <GoogleLogin />
      <AuthOrDiv />
      <div className="join-main">
        <span id="join-check" onClick={duplicateId}>
          중복체크
        </span>
        <input
          type="id"
          placeholder="아이디"
          className={classNames('join-alert-off', { 'join-alert-on': isZero })}
          onChange={handleId}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={handlePw}
          className={classNames('join-alert-off', { 'join-alert-on': isZero })}
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
          onChange={handlePwCheck}
          className={classNames('join-alert-off', { 'join-alert-on': isZero })}
        />
        <input
          type="text"
          placeholder="닉네임"
          className={classNames('join-alert-off', { 'join-alert-on': isZero })}
          onChange={handleName}
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
