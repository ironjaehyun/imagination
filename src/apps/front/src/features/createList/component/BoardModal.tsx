import React from 'react';

interface BoardModalProps {
  onClose: () => void;
}

const BoardModal: React.FC<BoardModalProps> = ({ onClose }) => {
  const ModalBgClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      // 배경 클릭 시 모달을 닫음
      onClose();
    }
  };

  return (
    <div className="board-modal-black-bg" onClick={ModalBgClose}>
      <div className="board-modal-bg">
        <button onClick={onClose}>닫기</button>
        {/* 모달 내용을 원하는 대로 추가 */}
        <h2>모달 제목</h2>
      </div>
    </div>
  );
};

export default BoardModal;
