import classNames from 'classnames';

interface PasswordRequirementsProps {
  isValid: boolean;
  isNumber: RegExpMatchArray | null;
  isSpe: RegExpMatchArray | null;
  isUpper: RegExpMatchArray | null;
}

const PasswordRequirements: React.FC<PasswordRequirementsProps> = ({
  isValid,
  isNumber,
  isSpe,
  isUpper,
}) => {
  return (
    <div className="password-check">
      <span
        className={classNames('password-check-off', {
          'password-check-on': isValid,
        })}
      >
        <img src="join/check.png" alt="" />
        8자 이상
      </span>
      <span
        className={classNames('password-check-off', {
          'password-check-on': isNumber,
        })}
      >
        <img src="join/check.png" alt="" />
        숫자
      </span>
      <span
        className={classNames('password-check-off', {
          'password-check-on': isSpe,
        })}
      >
        <img src="join/check.png" alt="" />
        특수문자
      </span>
      <span
        className={classNames('password-check-off', {
          'password-check-on': isUpper,
        })}
      >
        <img src="join/check.png" alt="" />
        대문자
      </span>
    </div>
  );
};

export default PasswordRequirements;
