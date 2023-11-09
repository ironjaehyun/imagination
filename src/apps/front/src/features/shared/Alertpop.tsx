import { FunctionComponent, MouseEventHandler } from 'react';

export type AlertpopProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Alertpop: FunctionComponent<AlertpopProps> = ({ isOpen, onClose }) => {
  const handleBgClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    onClose();
  };

  const handleContentClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  const data = 
    {
      userProfileImg: "https://i.namu.wiki/i/xl7WXBmp2VQ7mQRz53DlZ_7S1O4CEA_6RERhydKMTPYsdK9oXAcvqhtijh_rHQNw1fYt7skGA4vnMOJNg40jQA.webp",
      userName: "leechi",
      MainImg: "./img/card-img.png",
      title: "물감으로 만든 화려한 바다",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti facere, illo accusantium quibusdam unde vitae qui libero. Fugiat maxime ea unde neque illo at. Eveniet quod dolor recusandae sed sit.",
      hashtags: "#물감,#사랑,#바다",
      likeCount: 22,
      prompt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti facere, illo accusantium quibusdam unde vitae qui libero. Fugiat maxime ea unde neque illo at. Eveniet quod dolor recusandae sed sit.",
      Nprompt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti facere, illo accusantium quibusdam unde vitae qui libero. Fugiat maxime ea unde neque illo at. Eveniet quod dolor recusandae sed sit."
    }




  return (
    <div className={`alertpop ${isOpen ? 'open' : ''}`} onClick={handleBgClick}>
      {isOpen && (
        <div className="modal-bg">
          <div className="modal-white" onClick={handleContentClick}>
            <div className="modal-header">
              <div className="modal-header-profile">
                <img
                  src={data.userProfileImg}
                  alt=""
                  className="modal-header-img"
                />
                <span>{data.userName}</span>
              </div>
              <button onClick={onClose}>
                <img src="./img/close.png" alt="" />
              </button>
            </div>
            <div className="modal-main">
              <img src={data.MainImg} alt="" className="modal-main-img" />
              <div className="modal-main-right-div">
                <div className="modal-main-right">
                  <h3>{data.title}</h3>
                  <p>{data.content}</p>
                </div>
                <div className="modal-main-right-battom">
                  <h5>{data.hashtags}</h5>
                  <div className="modal-Btn">
                    <button className="modal-LikeBtn">
                      <img src="./img/like.png" alt="" />
                      <span>{data.likeCount}</span>
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
                <div className="modal-footer-text">
                  <p>{data.prompt}</p>
                </div>
              </div>
              <div className="prompt-div">
                <div className="modal-footer-Nagative">
                  <h4>Negatice Prompt</h4>
                  <div>
                    <img src="./img/copy.png" alt="" />
                    <span>copy</span>
                  </div>
                </div>
                <div className="modal-footer-text">
                  <p>{data.Nprompt}</p>
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
