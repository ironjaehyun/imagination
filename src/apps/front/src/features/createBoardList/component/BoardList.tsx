import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import BoardModal from './BoardModal'; // 모달 컴포넌트 임포트

type SelectedDataType = {
  ima: string;
  detail: string;
  negavibeDetail: string;
};

const Boardlist: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<SelectedDataType | null>(
    null,
  );
  const [boardMaxText, setBoardMaxText] = useState<number>(0);
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const [artTitle, setArtTitle] = useState<string>('');
  const [titleError, setTitleError] = useState<boolean>(false);
  const [shake, setShake] = useState(false);
  const [shakeImage, setShakeImage] = useState(false);
  const [descriptionError, setDescriptionError] = useState<boolean>(false);
  const [shakeDescription, setShakeDescription] = useState(false);
  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBoardMaxText(Array.from(e.target.value).length);
    if (e.target.value.trim()) {
      setDescriptionError(false);
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArtTitle(e.target.value);
    if (e.target.value.trim()) {
      setTitleError(false);
    }
  };

  const handlePostClick = () => {
    if (!artTitle.trim()) {
      setTitleError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500); // 0.5초 후에 애니메이션 제거
    }
    if (!selectedData?.ima) {
      setShakeImage(true);
      setTimeout(() => setShakeImage(false), 500); // 0.5초 후에 애니메이션 제거
    }
    if (!boardMaxText) {
      setDescriptionError(true);
      setShakeDescription(true);
      setTimeout(() => setShakeDescription(false), 500); // 0.5초 후에 애니메이션 제거
    }
    // ...
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ' && input.trim() !== '') {
      setHashtags([...hashtags, input.trim()]);
      setInput('');
    }
  };

  return (
    <div className="board-main">
      <section className="bring-art">
        <div className="bring-art-content">
          <h3 className={`bring-art-title ${shakeImage ? 'shake' : ''}`}>
            작품 전시를 해주세요
          </h3>
          {isModalOpen && (
            <BoardModal onClose={closeModal} onSelect={setSelectedData} />
          )}
          <div className="bring-art-list">
            <div className="bring-art-image" onClick={openModal}>
              <img src={selectedData?.ima} />
              <h1 className="image-plus">+</h1>
            </div>
            <div className="bring-art-prompt">
              <div className="bring-art-prompt-positive">
                <h4>positive prompt</h4>
                {isModalOpen && (
                  <BoardModal onClose={closeModal} onSelect={setSelectedData} />
                )}
                {selectedData && (
                  <p className="ellipsis">
                    {JSON.stringify(selectedData.detail)}
                  </p>
                )}
              </div>
              <div className="bring-art-prompt-negative">
                <h4>negative prompt</h4>
                {selectedData && (
                  <p className="ellipsis">
                    {JSON.stringify(selectedData.negavibeDetail)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="board-content">
        <div className="board-title">
          <input
            className={`art-detail-textarea-title ${
              titleError ? 'error' : ''
            } ${shake ? 'shake' : ''}`}
            placeholder="아티스트님의 작품의 제목을 입력하세요"
            value={artTitle}
            onChange={handleTitleChange}
          ></input>
        </div>
        <div className="art-detail">
          <textarea
            maxLength={1500}
            onChange={handleDescriptionChange}
            className={`art-detail-textarea-details ${
              descriptionError ? 'error' : ''
            } ${shakeDescription ? 'shake' : ''}`}
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
            {hashtags}
          </div>
          {/* <p># 해쉬태그 입력</p> */}
          <button className="art-button" onClick={handlePostClick}>
            게시하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Boardlist;
