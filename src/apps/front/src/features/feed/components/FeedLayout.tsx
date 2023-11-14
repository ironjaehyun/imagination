import justifiedLayout from 'justified-layout';
import { useMemo } from 'react';
import { useFeedHover } from '../hooks/useFeedHover';

type Box = {
  top: number;
  left: number;
  width: number;
  height: number;
};

const FeedLayout = ({ onImageClick }: { onImageClick: () => void }) => {
  // 각각의 이미지에 대한 가로세로 비율
  const aspectRatios = [1, 1.5, 1, 1.8, 1, 0.7, 0.9, 1.1, 1.7];

  const { hoverIndex, handleMouseOver, handleMouseOut } = useFeedHover();

  // 이미지의 URL들
  const images = [
    { url: 'https://picsum.photos/500?r=0', likes: 100 },
    { url: 'https://picsum.photos/500?r=1', likes: 101 },
    { url: 'https://picsum.photos/500?r=2', likes: 102 },
    { url: 'https://picsum.photos/500?r=3', likes: 103 },
    { url: 'https://picsum.photos/500?r=4', likes: 104 },
    { url: 'https://picsum.photos/500?r=5', likes: 105 },
    { url: 'https://picsum.photos/500?r=6', likes: 106 },
    { url: 'https://picsum.photos/500?r=7', likes: 107 },
    { url: 'https://picsum.photos/500?r=8', likes: 108 },
    { url: 'https://picsum.photos/500?r=9', likes: 109 },
    { url: 'https://picsum.photos/500?r=10', likes: 110 },
    { url: 'https://picsum.photos/500?r=11', likes: 120 },
    { url: 'https://picsum.photos/500?r=12', likes: 130 },
    { url: 'https://picsum.photos/500?r=13', likes: 140 },
    { url: 'https://picsum.photos/500?r=14', likes: 140 },
    { url: 'https://picsum.photos/500?r=15', likes: 140 },
    { url: 'https://picsum.photos/500?r=16', likes: 140 },
    { url: 'https://picsum.photos/500?r=17', likes: 140 },
  ];

  // 이미지가 더 많을 경우를 대비해 가로세로 비율을 계속 반복
  const extendedAspectRatios = useMemo(() => {
    return Array(images.length)
      .fill(null)
      .map((_, index) => aspectRatios[index % aspectRatios.length]);
  }, [images.length, aspectRatios]);

  // JustifiedLayout 라이브러리를 사용하여 이미지의 배치를 계산
  const geometry = justifiedLayout(extendedAspectRatios, {
    containerWidth: 1400, // 컨테이너의 너비
    containerPadding: 123,
    targetRowHeight: 200, // 각 행의 높이
  });

  return (
    <div className="layout-container">
      <div className="layout-position">
        {geometry.boxes.map((box: Box, index: number) => (
          <div
            onClick={onImageClick}
            key={index}
            className={`image-box ${hoverIndex === index ? 'hover' : ''}`}
            style={{
              top: `${box.top}px`,
              left: `${box.left}px`,
              width: `${box.width}px`,
              height: `${box.height}px`,
              backgroundImage: `url(${images[index].url})`,
            }}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          >
            <div className="Feed-overlay">
              <img src="./img/whitelike.png" alt="" />
              <span className="Feed-like-count">{images[index].likes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedLayout;
