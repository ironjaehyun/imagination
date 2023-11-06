import justifiedLayout from 'justified-layout';

type Box = {
  top: number;
  left: number;
  width: number;
  height: number;
};

const FeedLayout = () => {
  // 각각의 이미지에 대한 가로세로 비율
  const aspectRatios = [0.5, 1.5, 1, 1.8, 0.4, 0.7, 0.9, 1.1, 1.7];

  // 이미지의 URL들
  const images = [
    'https://picsum.photos/500?r=0',
    'https://picsum.photos/500?r=1',
    'https://picsum.photos/500?r=2',
    'https://picsum.photos/500?r=3',
    'https://picsum.photos/500?r=4',
    'https://picsum.photos/500?r=5',
    'https://picsum.photos/500?r=6',
    'https://picsum.photos/500?r=7',
    'https://picsum.photos/500?r=8',
    'https://picsum.photos/500?r=9',
    'https://picsum.photos/500?r=10',
    'https://picsum.photos/500?r=11',
    'https://picsum.photos/500?r=12',
    'https://picsum.photos/500?r=13',
    'https://picsum.photos/500?r=14',
  ];

  // 이미지가 더 많을 경우를 대비해 가로세로 비율을 계속 반복
  const extendedAspectRatios = Array(images.length)
    .fill(null)
    .map((_, index) => aspectRatios[index % aspectRatios.length]);

  // JustifiedLayout 라이브러리를 사용하여 이미지의 배치를 계산
  // containerWidth는 레이아웃의 전체 너비를 설정
  const geometry = justifiedLayout(extendedAspectRatios, {
    containerWidth: 1600, // 컨테이너의 너비를 1300px로 설정
    containerPadding: 123, 
    targetRowHeight: 300, // 각 행의 높이를 300px로 설정
  });

  return (
    // 외부 div. 페이지의 중앙에 레이아웃을 배치하기 위한 스타일 적용
    <div
      style={{
        display: 'flex',
        justifyContent: 'left',
        height: '100vh', // 뷰포트 높이를 100%로 설정, 페이지의 전체 높이를 차지
      }}
    >
      {/* 이미지 레이아웃이 위치할 div. 레이아웃의 너비와 위치를 설정 */}
      <div className="layout-position">
        {geometry.boxes.map((box: Box, index: number) => (
          <img
            key={index}
            src={images[index]}
            style={{
              position: 'absolute',
              top: `${box.top}px`, // 상단 위치 설정
              left: `${box.left}px`, // 왼쪽 위치 설정
              width: `${box.width }px`, // 너비 설정
              height: `${box.height}px`, // 높이 설정
              objectFit: 'cover', // 이미지가 잘리지 않도록 설정
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedLayout;
