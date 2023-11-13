// import { useRef, useState } from 'react';
import { useState } from 'react';
import BoardModal from './BoardModal'; // 모달 컴포넌트 임포트

const Boardlist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedData, setSelectedData] = useState(null);

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

  const [hashtags, setHashtags] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ' && input.trim() !== '') {
      setHashtags([...hashtags, input.trim()]);
      setInput('');
    }
  };

  return (
    <div className="board-main">
      <section className="bring-art">
        <div className="bring-art-content">
          <h3 className="bring-art-title">작품 전시를 해주세요</h3>
          {isModalOpen && (
            <BoardModal onClose={closeModal} onSelect={setSelectedData} />
          )}
          <div className="bring-art-list">
            <div className="bring-art-image" onClick={openModal}>
              <p>
                <img src={selectedData?.ima} alt="이미지를 넣어주세요" />
              </p>
            </div>
            <div className="bring-art-prompt">
              <div className="bring-art-prompt-positive">
                {isModalOpen && (
                  <BoardModal onClose={closeModal} onSelect={setSelectedData} />
                )}
                {selectedData && (
                  <div>{JSON.stringify(selectedData.detail)}</div>
                )}
              </div>
              <div className="bring-art-prompt-negative">
                {selectedData && (
                  <div>{JSON.stringify(selectedData.negavibeDetail)}</div>
                )}
              </div>
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
            maxLength={1500}
            onChange={HandleMaxtext}
            className="art-detail-textarea-details"
            placeholder="작품을 설명해 주세요"
          ></textarea>
          <p>{boardMaxText}/1500자</p>
          <div className="hashtag-div">
            {hashtags.map((hashtag, index) => (
              <button key={index}>{`#${hashtag}`}</button>
            ))}
            <input
              className="art-detail-textarea-hashtag"
              placeholder="해쉬태그 입력"
              value={input}
              onChange={onChange}
              onKeyUp={onKeyUp}
            />
          </div>
          {/* <p># 해쉬태그 입력</p> */}
          <button className="art-button">게시하기</button>
        </div>
      </div>
    </div>
  );
};

export default Boardlist;
