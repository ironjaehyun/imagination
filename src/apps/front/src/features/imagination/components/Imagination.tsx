import { useImagination } from '../hooks/useImagination';

const Imagination = () => {
  const {
    imageUrls,
    setPrompt,
    setNegative,
    buttonDisabled,
    buttonBg,
    imgSrc,
    btnText,
    generateImage,
    handleButtonClick,
    handleNumberClick,
    rotationState,
    settingOption,
    selectedsamples,
    isLoading,
    setButtonDisabled,
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
            <p>Samples</p>
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
            <p>Size</p>
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
              <p>{btnText}</p>
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
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Imagination;
