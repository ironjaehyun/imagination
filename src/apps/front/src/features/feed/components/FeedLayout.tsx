import { useQuery } from '@tanstack/react-query';
import axios from './../api/auth';
import { useMemo } from 'react';
import { useFeedHover } from '../hooks/useFeedHover';
import { PostType } from '../../shared/types/PostType';
import justifiedLayout from 'justified-layout';
import Loading from '../../shared/Loading';
type Box = {
  top: number;
  left: number;
  width: number;
  height: number;
};

// 서버로부터 게시물 데이터를 가져오는 함수입니다.
const fetchPosts = async (inputValue: string) => {
  let response;
  if (inputValue) {
    response = await axios.post('/Lnb/Postssearch', { inputValue });
  } else {
    response = await axios.get('/Feed/userpostslike');
  }
  return response.data;
};

const FeedLayout = ({
  onImageClick,
  inputValue,
}: {
  onImageClick: (post: PostType) => void;
  inputValue: string;
}) => {
  const { hoverIndex, handleMouseOver, handleMouseOut } = useFeedHover();
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<PostType[]>({
    queryKey: ['postsAll', inputValue],
    queryFn: () => fetchPosts(inputValue),
  });

  // 각각의 이미지에 대한 가로세로 비율
  const aspectRatios = [1, 1.5, 1, 1.8, 1, 0.7, 0.9, 1.1, 1.7];

  // 이미지가 더 많을 경우를 대비해 가로세로 비율을 계속 반복
  const extendedAspectRatios = useMemo(() => {
    return Array(posts?.length)
      .fill(null)
      .map((_, index) => aspectRatios[index % aspectRatios.length]);
  }, [posts?.length]);

  // JustifiedLayout 라이브러리를 사용하여 이미지의 배치를 계산
  const geometry = justifiedLayout(extendedAspectRatios, {
    containerWidth: 1400, // 컨테이너의 너비
    containerPadding: 123,
    targetRowHeight: 200, // 각 행의 높이
  });

  if (isLoading) return <Loading />;
  if (error) return <p>An error has occurred: {error.message}</p>;

  return (
    <div className="layout-container">
      <div className="layout-position">
        {posts &&
          geometry.boxes
            .slice()
            .reverse()
            .map((box: Box, index: number) => (
              <div
                onClick={() => onImageClick(posts[index])}
                key={index}
                className={`image-box ${hoverIndex === index ? 'hover' : ''}`}
                style={{
                  top: `${box.top}px`,
                  left: `${box.left}px`,
                  width: `${box.width}px`,
                  height: `${box.height}px`,
                  backgroundImage: `url(${posts[index].post_img1})`,
                }}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={handleMouseOut}
              >
                <div className="Feed-overlay">
                  <img src="./img/whitelike.png" alt="" />
                  <span className="Feed-like-count">
                    {posts[index].like.length}
                  </span>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default FeedLayout;
