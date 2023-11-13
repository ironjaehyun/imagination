import { FunctionComponent, useState } from 'react';
import BoardData from '../constatns/BoardData';

interface BoardModalProps {
  onClose: () => void;
  onSelect: (data: unknown) => void;
}

const BoardModal: FunctionComponent<BoardModalProps> = ({
  onClose,
  onSelect,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // 선택한 아이템을 임시로 저장하는 상태

  const handleRadioChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: unknown,
  ) => {
    setIsSelected(e.target.checked);
    if (e.target.checked) {
      setSelectedItem(item); // 라디오 버튼이 선택되었을 때 선택한 아이템을 저장
    }
  };

  const handleSelectSureClick = () => {
    if (isSelected && selectedItem) {
      onSelect(selectedItem);
      onClose(); // 선택완료 버튼을 눌렀을 때 모달 창을 닫음
    }
  };

  const ModalBgClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      // 배경 클릭 시 모달을 닫음
      onClose();
    }
  };

  return (
    <div className="board-modal-black-bg" onClick={ModalBgClose}>
      <div className="board-modal-bg">
        <div className="modal-close-button-space">
          <button className="modal-close-button" onClick={onClose}>
            ❌
          </button>
        </div>
        {/*여기서부터는 map 함수로 데이터를 가져올 생각입니다. */}
        {BoardData.map((item, i) => (
          <div className="modal-list" key={item.id}>
            <input
              className="modal-select-button"
              type="radio"
              name="modalDataGroup"
              onChange={(e) => handleRadioChange(e, item)}
            />
            <div className="modal-list-img ">
              <img src={item.ima} alt="description" />
            </div>
            <div className="modal-prompt-list">
              <div className="modal-prompt-positive">
                <h4 onClick={() => console.log(item)}>
                  Prompt{i} 작성자 {item.title}
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
        <button
          onClick={handleSelectSureClick} // 선택완료 버튼을 눌렀을 때 handleSelectSureClick 함수를 호출
          className={`modal-select-sure ${isSelected ? 'enabled' : 'disabled'}`}
          disabled={!isSelected}
        >
          선택완료
        </button>
      </div>
    </div>
  );
};

export default BoardModal;
