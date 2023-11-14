import React from 'react';
interface AlarmModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const AlarmModal: React.FC<AlarmModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="AlarmModal">
      <div className="AlarmModal-Size">
        <div className="AlarmModal-alarm">
          <div className="AlarmModal-alarm-pad">
            <img src="./img/Rectangle 17.png" alt="" className="alarm-img" />
            <p>leechi님이 좋아요를 누르셨습니다</p>
            <img src="./img/enter.png" alt="" className="alarm-enter" />
          </div>
        </div>
        <button onClick={onClose} className="alarm-close">
          닫기
        </button>
      </div>
    </div>
  );
};

export default AlarmModal;
