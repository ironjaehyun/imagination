import { useState } from 'react';
import { Link } from 'react-router-dom';
import AlarmModal from './AlarmModal';

const LnbRight = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleImageClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="Lnb-right">
      <Link to={'/create'}>
        <button className="Lnb-create-btn">
          <span className="Lnb-create-btn-plus">+</span>Create
        </button>
      </Link>
      <div className="Lnb-allim">
        <img
          src="./img/alarm.png"
          alt=""
          className="Lnb-alarm"
          onClick={handleImageClick}
        />
        {isModalVisible && (
          <AlarmModal isOpen={isModalVisible} onClose={handleClose} />
        )}
        <span onClick={handleImageClick}>6</span>
        <Link to={'/chat'} className="Lnb-chat">
          <img src="./img/share.png" alt="" />
        </Link>
        <span>6</span>
      </div>
    </div>
  );
};

export default LnbRight;
