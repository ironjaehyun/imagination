import { useState, useEffect, FormEventHandler } from 'react';
import axios from 'axios';
import { REST_API_KEY } from './constants';

interface Image {
  image: string;
}

interface ResponseData {
  images: Image[];
}

const Imagination = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [prompt, setPrompt] = useState('');
  const [negative, setNegative] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [settingOption, setSettingOption] = useState('flex');
  const [rotationState, setRotationState] = useState('rotate(0deg)');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [buttonBg, setButtonBg] = useState('');
  const [imgSrc, setImgSrc] = useState('imagination/Geneal.png');
  const [btnText, setbtnText] = useState('Generate');
  const [selectedsamples, setSelectedSamples] = useState(1);
  // const [size1, setSize1] = useState<number>(512);
  // const [size2, setSize2] = useState<number>(512);

  const generateImage: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      setButtonDisabled(true);
      setButtonBg('#f5f5f6');
      setImgSrc('imagination/loading-loader.gif');
      setbtnText('');

      const response = await axios.post<ResponseData>(
        'https://api.kakaobrain.com/v2/inference/karlo/t2i',
        {
          prompt: prompt,
          negative_prompt: negative,
          image_format: 'png',
          samples: selectedsamples,
          // width : size1,
          // height : size2,
        },
        {
          headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      );

      setImageUrls(response.data.images.map((image) => image.image));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setButtonDisabled(false);
      setButtonBg('#0288D1');
      setImgSrc('imagination/Geneal.png');
      setbtnText('Generate');
    }
  };

  useEffect(() => {
    setButtonDisabled(isLoading);
  }, [isLoading]);

  const handleButtonClick = () => {
    setSettingOption(settingOption === 'flex' ? 'none' : 'flex');
    setRotationState(
      rotationState === 'rotate(0deg)' ? 'rotate(-180deg)' : 'rotate(0deg)',
    );
  };

  const handleNumberClick = (num: number) => {
    setSelectedSamples(num);
  };

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
              onClick={() => setButtonDisabled(isLoading)}
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
