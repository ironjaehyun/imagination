import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
interface LnbRightProps {
  onClick?: () => void;
}
const LnbRight: FunctionComponent<LnbRightProps> = ({ onClick }) => {
  return (
    <div className="Lnb-right">
      <button className="Lnb-create-btn">
        <Link to={'/create'}>
          <span className="Lnb-create-btn-plus">+</span>Create
        </Link>
      </button>
      <div className="Lnb-allim">
        <img
          src="./img/alarm.png"
          alt=""
          className="Lnb-alarm"
          onClick={onClick}
        />
        <span>6</span>
        <Link to={'/chat'} className="Lnb-chat">
          <img src="./img/share.png" alt="" />
        </Link>
        <span>6</span>
      </div>
    </div>
  );
};

export default LnbRight;
