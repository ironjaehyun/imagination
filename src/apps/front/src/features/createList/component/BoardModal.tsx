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
        <button className="Modal-close-button" onClick={onClose}>
          ❌
        </button>
        {/* 모달 내용을 원하는 대로 추가 */}
        <div className="Modal-list">
          <input className="Modla-select-button" type="radio" />
          <div className="Modal-list-img">+</div>
          <div className="Modal-prompt-list">
            <div className="Modal-prompt-positive">
              <h4>Prompt</h4>
              <p>
                hyper-detailed front medium shot of Black short-haired girl,
                front view, cente r composition, dress shirt, by loish, trending
                on artstation hd, photorealistic anime girl render, artgee m,
                highly detailed face, digital art, impressionism,deep gaze,
                school background
              </p>
            </div>
            <div className="Modal-prompt-negative">
              <h4>Negative Prompt</h4>
              <p>
                hyper-detailed front medium shot of Black short-haired girl,
                front view, cente r composition, dress shirt, by loish, trending
                on artstation hd, photorealistic anime girl render, artgee m,
                highly detailed face, digital art, impressionism,deep gaze,
                school background
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardModal;
