import { useState, useRef, useEffect, FormEventHandler } from 'react';
import axios from 'axios';
// import Side from "./Side";
import { REST_API_KEY } from './components/constants';

const Imagination = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [prompt, setPrompt] = useState('');
  const [negative, setNegative] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const settingOptionRef = useRef('none');
  const rotation = useRef('rotate(0deg)');
  const buttonRef = useRef(null);
  const imgref = useRef();
  const texts = useRef();

  const generateImage: FormEventHandler = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true); // 로딩 상태를 true로 설정
      buttonRef.current.disabled = true; // 버튼 비활성화
      buttonRef.current.style.background = '#f5f5f5';
      imgref.current.src = 'imagination/loading-loader.gif';
      texts.current.innerText = '';

      const response = await axios.post(
        'https://api.kakaobrain.com/v2/inference/karlo/t2i',
        {
          prompt: prompt,
          negative_prompt: negative,
          image_format: 'png',
          // upscale: upsacle,
          // samples: size1,
        },
        {
          headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      );

      // 이미지 인덱스
      setImageUrls(response.data.images.map((image) => image.image));

      // 이미지 저장출력

      console.log('upscale state : ', upsacle);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // 로딩 상태를 false로 설정
      enableButton(); // 버튼 상태 업데이트
      buttonRef.current.style.background = '#0288D1';
      imgref.current.src = 'imagination/Geneal.png';
      texts.current.innerText = 'Generate';
    }
  };

  useEffect(() => {
    enableButton(); // 컴포넌트 렌더링 시에도 버튼 상태를 업데이트하기 위해 enableButton 호출
  }, [isLoading]);

  const handleButtonClick = () => {
    // 버튼 클릭 시 .Setting__opstion 요소의 숨김 상태 변경
    if (!settingOptionRef.current || !rotation.current) return;

    const displayStyle = settingOptionRef.current.style.display;
    const transformStyle = rotation.current.style.transform;
    settingOptionRef.current.style.display =
      displayStyle === 'flex' ? 'none' : 'flex';
    rotation.current.style.transform =
      transformStyle === 'rotate(0deg)' ? 'rotate(-180deg)' : 'rotate(0deg)';
  };

  const enableButton = () => {
    if (buttonRef.current) {
      buttonRef.current.disabled = isLoading;
    }
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
                placeholder="ex. A cute cat in a blue house"
                cols="15"
                rows="3"
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
                cols="15"
                rows="3"
                required
              ></textarea>
            </div>
          </div>
          <div className="Setting">
            <h3>Setting</h3>
            <img
              src="imagination/expand_less.png"
              alt=""
              onClick={handleButtonClick}
              ref={rotation}
              className="active__img"
            />
            <div></div>
          </div>
          <div className="Setting__opstion" ref={settingOptionRef}>
            <p>Image</p>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">4</button>
          </div>
          <div className="Api__Generate">
            <button
              type="submit"
              className="Generate-active"
              ref={buttonRef}
              onClick={enableButton}
            >
              <img src="imagination/Geneal.png" ref={imgref} />
              <p ref={texts}>Generate</p>
            </button>
            {/* <input
            type="checkbox"
            id="upscale"
            onChange={(e) => {
              setupsacle(e.target.checked);
            }}
          /> */}
          </div>
        </form>
      </div>
      <div className="imgs">
        {isLoading ? ( // 로딩 상태에 따라 로딩 이미지 또는 생성된 이미지를 표시
          <div className="loading">
            <img
              src="imagination/funder-the-sea-octopus.gif"
              alt="Loading"
              className="lodingimg"
            />
            {/* <p>Loading...</p> */}
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
