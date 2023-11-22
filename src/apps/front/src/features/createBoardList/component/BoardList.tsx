import useCreatList from '../hooks/useCreateList';

const Boardlist: React.FC = () => {
  const {
    input,
    hashtags,
    removeHashtag,
    boardMaxText,
    onChange,
    onKeyUp,
    openModal,
    selectedData,
    createPost,
    handlePostTitle,
    handlePostContent,
    postDisable,
  } = useCreatList();

  return (
    <div className="board-main">
      <section className="bring-art">
        <div className="bring-art-content">
          <h3 className="bring-art-title">작품 전시를 해주세요</h3>

          <div className="bring-art-list">
            <div className="bring-art-image" onClick={openModal}>
              <img src={selectedData.img1} />
              <h1 className="image-plus">+</h1>
            </div>
            <div className="bring-art-prompt">
              <div className="bring-art-prompt-positive">
                <h4>positive prompt</h4>

                {selectedData && (
                  <p className="ellipsis">{selectedData.prompt}</p>
                )}
              </div>
              <div className="bring-art-prompt-negative">
                <h4>negative prompt</h4>
                {selectedData && (
                  <p className="ellipsis">{selectedData.negative_prompt}</p>
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
            onChange={handlePostTitle}
          ></input>
        </div>
        <div className="art-detail">
          <textarea
            maxLength={1500}
            onChange={handlePostContent}
            className="art-detail-textarea-details"
            placeholder="작품을 설명해 주세요"
          ></textarea>
          <p>{boardMaxText}/1500자</p>
          <div className="hashtag-div">
            {hashtags.map((hashtag, index) => (
              <button
                key={index}
                onClick={() => removeHashtag(index)}
              >{`#${hashtag}`}</button>
            ))}
            <input
              className="art-detail-textarea-hashtag"
              placeholder="해쉬태그 입력"
              value={input}
              onChange={onChange}
              onKeyUp={onKeyUp}
            />
          </div>
          <button
            onClick={createPost}
            className="art-button"
            disabled={postDisable}
          >
            게시하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Boardlist;
