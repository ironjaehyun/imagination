

const Alertpop = ({isOpen,onClose,}: {isOpen: boolean;onClose: () => void;}) => {
  
  // 배경 클릭 시 모달을 닫는 함수
  const handleBgClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    onClose(); // 모달 닫기 함수 호출
  };
  // 모달 내용 클릭 시 이벤트 전파를 막는 함수
  const handleContentClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.stopPropagation(); // 이벤트 전파를 막음
  };

  return (
    <div className={`alertpop ${isOpen ? 'open' : ''}`} onClick={handleBgClick}>
      {isOpen && (
        <div className="modal-bg">
          <div className="modal-white" onClick={handleContentClick}>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alertpop;
