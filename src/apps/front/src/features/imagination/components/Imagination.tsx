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
  const [prompt, setPrompt] = useState<string>('');
  const [negative, setNegative] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [settingOption, setSettingOption] = useState<string>('none');
  const [rotationState, setRotationState] = useState<string>('rotate(0deg)');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [buttonBg, setButtonBg] = useState<string>('');
  const [imgSrc, setImgSrc] = useState<string>('imagination/Geneal.png');
  const [text, setText] = useState<string>('Generate');
  const [selectedsamples, setSelectedSamples] = useState<number>(1);

  const generateImage: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      setButtonDisabled(true);
      setButtonBg('#f5f5f6');
      setImgSrc('imagination/loading-loader.gif');
      setText('');

      const response = await axios.post<ResponseData>(
        'https://api.kakaobrain.com/v2/inference/karlo/t2i',
        {
          prompt: prompt,
          negative_prompt: negative,
          image_format: 'png',
          samples: selectedsamples,
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
      setText('Generate');
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
      <div className="container">
        <form onSubmit={generateImage} className="form">
          <div>
            <div className="prompt">
              <h1>Prompt</h1>
              <textarea
                id="prom"
                className="in-1 fontstyles"
                onChange={(e) => {
                  setPrompt(e.target.value);
                }}
                placeholder="ex. A cute cat in a house"
                cols={15}
                rows={3}
                required
              ></textarea>
            </div>

            <div className="naprompt">
              <h1>Negative Propmt</h1>
              <textarea
                id="native"
                className="in-1 fontstyles"
                onChange={(e) => {
                  setNegative(e.target.value);
                }}
                placeholder="ex. scary, dirty"
                cols={15}
                rows={3}
              ></textarea>
            </div>
          </div>
          <div className="Setting">
            <h3>Setting</h3>
            <img
              src="imagination/expand_less.png"
              alt=""
              onClick={handleButtonClick}
              className="active__img"
              style={{ transform: rotationState }}
            />
            <div></div>
          </div>
          <div className="Setting__opstion" style={{ display: settingOption }}>
            <p>Samples</p>
            <button
              className={`style-btn ${selectedsamples === 1 ? 'selected' : ''}`}
              type="button"
              onClick={() => handleNumberClick(1)}
            >
              1
            </button>
            <button
              className={`style-btn ${selectedsamples === 2 ? 'selected' : ''}`}
              type="button"
              onClick={() => handleNumberClick(2)}
            >
              2
            </button>
            <button
              className={`style-btn ${selectedsamples === 3 ? 'selected' : ''}`}
              type="button"
              onClick={() => handleNumberClick(3)}
            >
              3
            </button>
            <button
              className={`style-btn ${selectedsamples === 4 ? 'selected' : ''}`}
              type="button"
              onClick={() => handleNumberClick(4)}
            >
              4
            </button>
          </div>
          <div className="Api__Generate">
            <button
              type="submit"
              className="Generate-active"
              disabled={buttonDisabled}
              onClick={() => setButtonDisabled(isLoading)}
              style={{ background: buttonBg }}
            >
              <img src={imgSrc} alt="image" />
              <p>{text}</p>
            </button>
          </div>
        </form>
      </div>
      <div className="imgs">
        {isLoading ? (
          <div className="loading">
            <img
              src="imagination/funder-the-sea-octopus.gif"
              alt="Loading"
              className="lodingimg"
            />
          </div>
        ) : (
          imageUrls &&
          imageUrls.map((imageUrl, index) => (
            <div className="img" key={index}>
              <img src={imageUrl} alt="Generated" className="img" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Imagination;
