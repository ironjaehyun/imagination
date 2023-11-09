const Alertpop = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
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
            <div className="modal-header">
              <div className="modal-header-profile">
                <img
                  src="https://i.namu.wiki/i/xl7WXBmp2VQ7mQRz53DlZ_7S1O4CEA_6RERhydKMTPYsdK9oXAcvqhtijh_rHQNw1fYt7skGA4vnMOJNg40jQA.webp"
                  alt=""
                  className="modal-header-img"
                />
                <span>leechi</span>
              </div>
              <button onClick={onClose}>
                <img src="./img/close.png" alt="" />
              </button>
            </div>
            <div className="modal-main">
              <img src="./img/card-img.png" alt="" className="modal-main-img" />
              <div className="modal-main-right-div">
                <div className="modal-main-right">
                  <h3>물감으로 만든 화려한 바다</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    consequatur commodi sequi sit architecto, ex nulla
                    reiciendis modi quaerat quisquam autem officiis recusandae
                    ullam labore, aut quae harum? Perferendis, asperiores!
                  </p>
                </div>
                <div className="modal-main-right-battom">
                  <h5>#물감,#사랑,#바다</h5>
                  <div className="modal-Btn">
                    <button className="modal-LikeBtn">
                      <img src="./img/like.png" alt="" />
                      <span>22</span>
                    </button>
                    <button className="modal-CreateImage">
                      <img src="./img/CreateImage.png" alt="" />
                      <span>Create Image</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div>
                <div className="modal-footer-prompt">
                  <h4>prompt</h4>
                  <div>
                    <img src="./img/copy.png" alt="" />
                    <span>copy</span>
                  </div>
                </div>
                <div className="modal-footer-prompt-text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corrupti facere, illo accusantium quibusdam unde vitae qui
                    libero. Fugiat maxime ea unde neque illo at. Eveniet quod
                    dolor recusandae sed sit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alertpop;
