import { useState, useEffect, FormEventHandler } from 'react';
import axios from 'axios';
import { REST_API_KEY } from '../components/constants';

interface Image {
  image: string;
}

interface ResponseData {
  images: Image[];
}

export const useImagination = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [prompt, setPrompt] = useState('');
  const [negative, setNegative] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [settingOption, setSettingOption] = useState('none');
  const [rotationState, setRotationState] = useState('rotate(0deg)');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [buttonBg, setButtonBg] = useState('');
  const [imgSrc, setImgSrc] = useState('imagination/Geneal.png');
  const [buttonText, setButtonText] = useState('Generate');
  const [selectedsamples, setSelectedSamples] = useState(1);
  // const [sizeWidth, setSizeWidth] = useState(512);
  // const [sizeHeight, setSizeHeight] = useState(512);
  const buttonList = [1, 2, 3, 4];
  const [selectedSize, setSelectedSize] = useState<[number, number]>([
    512, 512,
  ]);
  const sizeList: [number, number][] = [
    [512, 512],
    [384, 640],
    [640, 384],
  ];
  const userId = sessionStorage.getItem('_id');

  const generateImage: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      setButtonDisabled(true);
      setButtonBg('#f5f5f6');
      setImgSrc('imagination/loading-loader.gif');
      setButtonText('');

      const response = await axios.post<ResponseData>(
        'https://api.kakaobrain.com/v2/inference/karlo/t2i',
        {
          prompt: prompt,
          negative_prompt: negative,
          image_format: 'webp',
          samples: selectedsamples,
          width: selectedSize[0],
          height: selectedSize[1],
          upscale: true,
        },
        {
          headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`,
            'Content-Type': 'application/json',
          },
        },
      );

      const newImageUrls = response.data.images.map((image) => image.image);

      console.log('Sending request to server');
      await axios.post('http://localhost:3000/imagination', {
        images: newImageUrls,
        userId: userId,
        negative: negative,
        prompt: prompt,
      });

      // Call getSavedImages function after the new images have been saved to the server
      getSavedImages();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setButtonDisabled(false);
      setButtonBg('#0288D1');
      setImgSrc('imagination/Geneal.png');
      setButtonText('Generate');
    }
  };

  const getSavedImages = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/imagination`, {
        params: { userId: userId },
      });

      // Sort the data by date in descending order
      const sortedData = response.data.sort(
        (a, b) =>
          new Date(b.saved_at).getTime() - new Date(a.saved_at).getTime(),
      );

      const transformedData = sortedData.map((item) => ({
        date: item.saved_at,
        images: [item.img1, item.img2, item.img3, item.img4].filter(Boolean),
        prompt: item.prompt,
      }));

      setImageUrls(transformedData);
      console.log(transformedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setButtonDisabled(isLoading);
    getSavedImages();
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

  const handleSizeClick = (size: [number, number]) => {
    setSelectedSize(size); // 선택된 크기를 selectedSize 상태에 설정
  };

  return {
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
    buttonList,
    selectedSize,
    sizeList,
  };
};
