import { useImagination } from '../hooks/useImagination';

const Imagination = () => {
  const {
    imageUrls,
    setPrompt,
    setNegative,
    buttonDisabled,
    buttonBg,
    imgSrc,
    buttonText,
    generateImage,
    handleButtonClick,
    handleNumberClick,
    rotationState,
    settingOption,
    selectedsamples,
    isLoading,
    setButtonDisabled,
    handleSizeClick,
    sizeWidth,
  } = useImagination();

  return (
    <div>
      <div className="imagination-main">
        <form onSubmit={generateImage} className="imagination-form">
          <div>
            <div className="prompt">
              <h1>Prompt</h1>
              <textarea
                id="prompt"
                className="prompt-input"
                onChange={(e) => {
                  setPrompt(e.target.value);
                }}
                placeholder="ex. A cute cat in a house"
                cols={15}
                rows={3}
                required
              ></textarea>
            </div>
            <div className="negative">
              <h1>Negative Propmt</h1>
              <textarea
                id="native"
                className="prompt-input"
                onChange={(e) => {
                  setNegative(e.target.value);
                }}
                placeholder="ex. scary, dirty"
                cols={15}
                rows={3}
              ></textarea>
            </div>
          </div>
          <div className="prompt-setting">
            <h3>Setting</h3>
            <img
              src="imagination/expand_less.png"
              alt=""
              onClick={handleButtonClick}
              className="prompt-setting-sample"
              style={{ transform: rotationState }}
            />
            <hr />
          </div>
          <div className="settings-options" style={{ display: settingOption }}>
            <p>Number of Images</p>
            <button
              className={`sample-btn ${
                selectedsamples === 1 ? 'selected' : ''
              }`}
              type="button"
              onClick={() => handleNumberClick(1)}
            >
              1
            </button>
            <button
              className={`sample-btn ${
                selectedsamples === 2 ? 'selected' : ''
              }`}
              type="button"
              onClick={() => handleNumberClick(2)}
            >
              2
            </button>
            <button
              className={`sample-btn ${
                selectedsamples === 3 ? 'selected' : ''
              }`}
              type="button"
              onClick={() => handleNumberClick(3)}
            >
              3
            </button>
            <button
              className={`sample-btn ${
                selectedsamples === 4 ? 'selected' : ''
              }`}
              type="button"
              onClick={() => handleNumberClick(4)}
            >
              4
            </button>
            <div className="settings-options-02">
              <p>Image Dimensions</p>
              <button
                className={`size-btn ${
                  sizeWidth === 512 ? 'selectedSize' : ''
                }`}
                type="button"
                onClick={() => handleSizeClick(512, 512)}
              >
                512 X 512
              </button>
              <button
                className={`size-btn ${
                  sizeWidth === 384 ? 'selectedSize' : ''
                }`}
                type="button"
                onClick={() => handleSizeClick(384, 640)}
              >
                384 X 640
              </button>
              <button
                className={`size-btn ${
                  sizeWidth === 640 ? 'selectedSize' : ''
                }`}
                type="button"
                onClick={() => handleSizeClick(640, 384)}
              >
                640 X 384
              </button>
            </div>
          </div>
          <div className="img-Generate">
            <button
              type="submit"
              className="generate-btn-active"
              disabled={buttonDisabled}
              onClick={() => setButtonDisabled(isLoading)} // Fix the function call
              style={{ background: buttonBg }}
            >
              <img src={imgSrc} alt="image" />
              <p>{buttonText}</p>
            </button>
          </div>
        </form>
      </div>
      <div className="Generated-imgs">
        {isLoading ? (
          <div className="loading-img">
            <img
              src="imagination/funder-the-sea-octopus.gif"
              alt="Loading"
              className="loding-img"
            />
          </div>
        ) : (
          imageUrls &&
          imageUrls.map((imageUrl, index) => (
            <div className="Generated-img" key={index}>
              <img src={imageUrl} alt="Generated" className="img" />
              <a href={imageUrl} download="image.jpg" target="#">
                사진 다운로드
              </a>
              {/* 임시 기능 */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Imagination;
