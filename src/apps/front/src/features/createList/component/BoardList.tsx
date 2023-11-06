// import { useRef, useState } from 'react';

const Boardlist = () => {
  return (
    <div className="Board-main">
      <section className="bring-art">
        <div className="bring-art-content">
          <h3 className="bring-art-title">작품 전시를 해주세요</h3>
          <div className="briang-art-list">
            <div className="bring-art-image">
              <p>작품 이미지 가져오기</p>
            </div>
            <div className="bring-art-prompt">
              <div className="bring-art-prompt-positive">prompt</div>
              <div className=" bring-art-prompt-negative">negative-prompt</div>
            </div>
          </div>
        </div>
      </section>
      <div className="Board-content">
        <div className="Board-title">
          <textarea
            className="art-title-textarea"
            style={{ width: '100%', height: '80%' }}
            placeholder="아티스트님의 작품의 제목을 입력하세요"
          ></textarea>
        </div>
        <div className="art-detail">
          <textarea
            className="art-detail-textarea"
            style={{ width: '100%', height: '80%' }}
            placeholder="작품을 설명해 주세요"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Boardlist;
