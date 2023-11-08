import BoardData from './BoardData';

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

  const ModalData = BoardData;

  return (
    <div className="board-modal-black-bg" onClick={ModalBgClose}>
      <div className="board-modal-bg">
        <div className="modal-close-button-space">
          <button className="modal-close-button" onClick={onClose}>
            ❌
          </button>
        </div>
        {/*여기서부터는 map 함수로 데이터를 가져올 생각입니다. */}
        {ModalData.map((item, i) => (
          <div className="modal-list">
            <input
              className="modal-select-button"
              type="radio"
              name="modalDataGroup"
            />
            <div className="modal-list-img ">
              <img src={item.id} alt="description" />
            </div>
            <div className="modal-prompt-list">
              <div className="modal-prompt-positive">
                <h4 onClick={() => console.log(item.id)}>
                  Prompt{i} 작성자 {item.title}{' '}
                </h4>
                <p className="ellipsis">{item.detail}</p>
              </div>
              <div className="modal-prompt-negative">
                <h4>Negative Prompt</h4>
                <p className="ellipsis">{item.negavibeDetail}</p>
              </div>
            </div>
          </div>
        ))}
        <button className="modal-select-sure">선택완료</button>
      </div>
    </div>
  );
};

export default BoardModal;
