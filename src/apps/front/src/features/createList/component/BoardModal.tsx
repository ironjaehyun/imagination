const BoardModal = ({ onClose }) => {
  return (
    <div className="board-modal-black-bg" onClick={console.log(1)}>
      <div className="board-modal-bg">
        <button onClick={onClose}>닫기</button>
        {/* 모달 내용을 원하는 대로 추가 */}
        <h2>모달 제목</h2>
      </div>
    </div>
  );
};

export default BoardModal;
