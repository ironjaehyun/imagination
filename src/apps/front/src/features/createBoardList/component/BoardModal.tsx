import useCreatList from '../hooks/useCreateList';
import { PUBLIC_URL } from '../../../../../../packages/models/port';
import { Link } from 'react-router-dom';

const BoardModal = () => {
  const {
    closeModal,
    handleRadioChange,
    handleSelectSureClick,
    ModalBgClose,
    savedImg,
    isSelected,
    responsive,
    Carousel,
  } = useCreatList();

  return (
    <div className="board-modal-black-bg" onClick={ModalBgClose}>
      <div className="board-modal-bg">
        <div className="modal-close-button-space">
          <button className="modal-close-button" onClick={closeModal}>
            <img src={PUBLIC_URL + '/img/close.png'} />
          </button>
        </div>
        {/* 여기서부터는 map 함수로 데이터를 가져올 생각입니다. */}
        <div className="modal-content">
          {' '}
          {/* Add this wrapper */}
          {savedImg
            .slice()
            .reverse()
            .map((item) => (
              <div className="modal-list" key={item.id}>
                <input
                  className="modal-select-button"
                  type="radio"
                  name="modalDataGroup"
                  onChange={(e) => handleRadioChange(e, item)}
                />
                <Carousel className="modal-list-img" responsive={responsive}>
                  {[item.img1, item.img2, item.img3, item.img4] // 이미지 URL들을 배열에 담기
                    .filter(Boolean) // 무효한 값들 제거
                    .map((img, idx) => (
                      <img key={idx} src={img} />
                    ))}
                </Carousel>

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
        </div>
        <div className="modal-select-sure-div">
          {savedImg.length != 0 ? (
            <button
              onClick={handleSelectSureClick} // 선택완료 버튼을 눌렀을 때 handleSelectSureClick 함수를 호출
              className={`modal-select-sure ${
                isSelected ? 'enabled' : 'disabled'
              }`}
              disabled={!isSelected}
            >
              선택완료
            </button>
          ) : (
            <Link to={'/imagination'}>
              <button className="modal-create-button">이미지 만들기</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardModal;
