import useJoin from '../hooks/useJoin';
import PasswordRequirements from './PasswordRequirements';
import { AuthOrDiv } from '../../components/AuthOrDiv';
import GoogleLogin from '../../components/GoogleLogin';
import classNames from 'classnames';

export const JoinForm = () => {
  const {
    handleJoin,
    handleId,
    handlePw,
    handlePwCheck,
    alertMsg,
    duplicateId,
    idPassMsg,
    isValid,
    isNumber,
    isSpe,
    isUpper,
    isDisable,
    duplication,
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
        <span
          className={classNames('join-check', {
            'join-check-true': duplication,
          })}
          onClick={duplicateId}
        >
          중복체크
        </span>
        <input type="id" placeholder="아이디" onChange={handleId} />
        <input type="password" placeholder="비밀번호" onChange={handlePw} />
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
        />
        <div className="join-msg">
          <span className="join-alert">{alertMsg}</span>
          <span className="join-pass">{idPassMsg}</span>
        </div>
        <button className="join-btn" disabled={isDisable}>
          회원가입
        </button>
      </div>
    </form>
  );
};
