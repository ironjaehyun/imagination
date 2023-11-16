import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import BoardModal from './BoardModal'; // 모달 컴포넌트 임포트
import axios from 'axios';
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
  const [description, setDescription] = useState<string>(''); // 상태 추가
  const [responseData, setResponseData] = useState<ResponseType | null>(null);

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBoardMaxText(Array.from(e.target.value).length);
    setDescription(e.target.value); // textarea의 내용 저장
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
  // 서버 3000에 데이터를 보냄 post임
  const handleClick = () => {
    axios
      .post('http://localhost:3000/create', {
        post_title: artTitle,
        post_img1: selectedData?.ima,
        post_prompt: selectedData?.detail,
        post_negative_prompt: selectedData?.negavibeDetail,
        post_content: description, // 서버에 전송
      })
      .then((response) => {
        console.log(response.data);
      });
  };
  const handleDbClick = () => {
    axios.get('http://localhost:3000/create/getImage').then((response) => {
      console.log(response.data); // 서버에서 받은 데이터
      setResponseData(response.data);
    });
  };

  const handlePostClick = async () => {
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
    handleDbClick(); // 모달이 열릴 때 handleDbClick 함수를 호출
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
          {/* {isModalOpen && (
            <BoardModal onClose={closeModal} onSelect={setSelectedData} responseData={responseData} />
          )} */}
          <div className="bring-art-list">
            <div className="bring-art-image" onClick={openModal}>
              <img src={selectedData?.ima} />
              <h1 className="image-plus">+</h1>
            </div>
            <div className="bring-art-prompt">
              <div className="bring-art-prompt-positive">
                <h4>positive prompt</h4>
                {isModalOpen && (
                  <BoardModal
                    onClose={closeModal}
                    onSelect={setSelectedData}
                    // responseData={responseData}  // responseData prop을 전달
                  />
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
        {/* {responseData ? JSON.stringify(responseData) : 'Loading...'}  // state에 저장된 데이터를 보여줌 */}
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
              <button
                key={index}
                onClick={() => {
                  setHashtags(hashtags.filter((tag, i) => i !== index));
                }}
              >
                {`#${hashtag}`}
              </button>
            ))}
            <button onClick={handleClick}>db 전송</button>
            {/* <button onClick={handleDbClick}>db 수신</button> */}
            {responseData}
            <input
              className="art-detail-textarea-hashtag"
              placeholder="해쉬태그 입력"
              value={input}
              onChange={onChange}
              onKeyUp={onKeyUp}
            />
          </div>
          {hashtags}
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
