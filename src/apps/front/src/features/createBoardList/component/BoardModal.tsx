import useCreatList from '../hooks/useCreateList';

const BoardModal = () => {
  const {
    closeModal,
    handleRadioChange,
    handleSelectSureClick,
    ModalBgClose,
    savedImg,
    isSelected,
  } = useCreatList();

  return (
    <div className="board-modal-black-bg" onClick={ModalBgClose}>
      <div className="board-modal-bg">
        <div className="modal-close-button-space">
          <button className="modal-close-button" onClick={closeModal}>
            ❌
          </button>
        </div>
        {/* 여기서부터는 map 함수로 데이터를 가져올 생각입니다. */}
        {savedImg.map((item) => (
          <div className="modal-list" key={item.id}>
            <input
              className="modal-select-button"
              type="radio"
              name="modalDataGroup"
              onChange={(e) => handleRadioChange(e, item)}
            />
            <div className="modal-list-img ">
              <img src={item.img1} />
            </div>
            <div className="modal-prompt-list">
              <div className="modal-prompt-positive">
                <h4 onClick={() => console.log(item)}>Prompt</h4>
                <p className="ellipsis">{item.prompt}</p>
              </div>
              <div className="modal-prompt-negative">
                <h4>Negative Prompt</h4>
                <p className="ellipsis">{item.negative_prompt}</p>
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
