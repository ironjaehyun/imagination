// import { useRef, useState } from 'react';
import { useState } from 'react';
import BoardModal from './BoardModal'; // 모달 컴포넌트 임포트

const Boardlist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [boardMaxText, setBoardMaxText] = useState(0);

  const HandleMaxtext = (e) => {
    setBoardMaxText(Array.from(e.target.value).length);
  };
  return (
    <div className="board-main">
      <section className="bring-art">
        <div className="bring-art-content">
          <h3 className="bring-art-title">작품 전시를 해주세요</h3>
          {isModalOpen && <BoardModal onClose={closeModal} />}
          <div className="bring-art-list">
            <div className="bring-art-image" onClick={openModal}>
              <p>작품 이미지 가져오기</p>
            </div>
            <div className="bring-art-prompt">
              <div className="bring-art-prompt-positive">prompt</div>
              <div className="bring-art-prompt-negative">negative-prompt</div>
            </div>
          </div>
        </div>
      </section>
      <div className="board-content">
        <div className="board-title">
          <input
            className="art-detail-textarea-title"
            placeholder="아티스트님의 작품의 제목을 입력하세요"
          ></input>
        </div>
        <div className="art-detail">
          <textarea
            maxLength={50}
            onChange={HandleMaxtext}
            className="art-detail-textarea-details"
            placeholder="작품을 설명해 주세요"
          ></textarea>
          <p>{boardMaxText}/50자</p>
          <textarea
            className="art-detail-textarea-hashtag"
            placeholder="# 해쉬태그 입력"
          ></textarea>
          {/* <p># 해쉬태그 입력</p> */}
          <button className="art-button">게시하기</button>
        </div>
      </div>
    </div>
  );
};

export default Boardlist;
