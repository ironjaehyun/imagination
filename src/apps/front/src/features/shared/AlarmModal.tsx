import { FunctionComponent } from 'react';

interface AlarmModalProps {
  isOpen: boolean;
  onClose: () => void;
}
interface AlarmData {
  user: string;
  img: string;
}
const AlarmModal: FunctionComponent<AlarmModalProps> = ({
  isOpen,
  onClose,
}) => {
  const alarmData: AlarmData[] = [
    { user: 'leechi님이 좋아요를 누르셨습니다', img: './img/Rectangle 17.png' },
    { user: 'leechi님이 댓글을 남겼습니다', img: './img/Rectangle 17.png' },
    // 필요한 만큼 데이터 추가
  ];

  if (!isOpen) {
    return null;
  }
  return (
    <div className="AlarmModal">
      <div className="AlarmModal-Size">
        {alarmData.map((data, index) => (
          <div key={index} className="AlarmModal-alarm">
            <div className="AlarmModal-alarm-pad">
              <img src={data.img} alt="" className="alarm-img" />
              <p>{data.user}</p>
              <img src="./img/enter.png" alt="" className="alarm-enter" />
            </div>
          </div>
        ))}
        <button onClick={onClose} className="alarm-close">
          닫기
        </button>
      </div>
    </div>
  );
};

export default AlarmModal;
