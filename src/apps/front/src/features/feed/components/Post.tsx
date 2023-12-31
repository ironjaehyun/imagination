import { useQuery } from '@tanstack/react-query';
import axios from './../api/auth';
import { useState, useEffect } from 'react';
import { PostType } from '../../shared/types/PostType';
import Loading from '../../shared/Loading';

// 서버로부터 게시물 데이터를 가져오는 함수입니다.
const fetchPosts = async (inputValue: string) => {
  let response;
  if (inputValue) {
    response = await axios.post('/Lnb/Postssearch', { inputValue });
  } else {
    response = await axios.get('/Feed/userpostslike');
  }
  console.log('Server response:', response.data);
  return response.data;
};

const Post = ({
  onImageClick,
  inputValue,
}: {
  onImageClick: (post: PostType) => void;
  inputValue: string;
}) => {
  // 게시물 데이터를 관리하기 위한 state입니다.
  const [posts, setPosts] = useState<PostType[]>([]);
  // react-query를 사용하여 서버로부터 게시물 데이터를 가져옵니다.
  const { data, error, isLoading } = useQuery({
    queryKey: ['postsData', inputValue],
    queryFn: () => fetchPosts(inputValue),
  });

  // 서버로부터 받아온 데이터를 posts state에 저장합니다.
  useEffect(() => {
    if (data && Array.isArray(data)) {
      setPosts(data);
    }
  }, [data]);

  if (isLoading) return <Loading />;
  if (error) return <p>An error has occurred: {error.message}</p>;
  const objectId = sessionStorage.getItem('_id');

  return (
    <div className="feed-cards">
      {posts
        .slice()
        .reverse()
        .map((post, index) => (
          <div className="post-card" key={index}>
            <div className="post-card-img">
              <img
                src={post.post_img1}
                alt=""
                onClick={() => onImageClick(post)}
              />
            </div>
            <div className="post-card-footer">
              <a
                href={
                  post.owner._id === objectId
                    ? `/mypage/${objectId}`
                    : `/userpage/${post.owner._id}`
                }
              >
                <div className="post-card-userProfile">
                  <img
                    src={post.owner?.user_profile_img}
                    alt=""
                    className="post-card-proflieImg"
                  />
                  <span>{post.owner?.id}</span>
                </div>
              </a>
              <div>
                <img src="./img/like.png" alt="" />
                <span>{post.like.length}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Post;
