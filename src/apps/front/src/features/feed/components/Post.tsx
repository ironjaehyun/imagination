import { useQuery } from '@tanstack/react-query';
import useLikes from '../hooks/useLikes';
import axios from './../api/auth';
import { useState, useEffect } from 'react';
import { PostType } from '../../shared/types/PostType';

// 서버로부터 게시물 데이터를 가져오는 함수입니다.
const fetchPosts = async () => {
  const response = await axios.get('/Feed/userpostslike');
  return response.data;
};

const Post = ({ onImageClick }: { onImageClick: (post: PostType) => void }) => {
  // 게시물 데이터를 관리하기 위한 state입니다.
  const [posts, setPosts] = useState<PostType[]>([]);
  // react-query를 사용하여 서버로부터 게시물 데이터를 가져옵니다.
  const { data, error, isLoading } = useQuery({
    queryKey: ['postsAll'],
    queryFn: fetchPosts,
  });

  // 서버로부터 받아온 데이터를 posts state에 저장합니다.
  useEffect(() => {
    if (data && Array.isArray(data)) {
      setPosts(data);
    }
  }, [data]);

  const [isLiked, handleLike] = useLikes(posts);

  if (isLoading) return <p>'Loading...'</p>;
  if (error) return <p>An error has occurred: {error.message}</p>;

  return (
    <div className="feed-cards">
      {posts.map((post, index) => (
        <div className="post-card" key={index}>
          <div className="post-card-img">
            <img
              src={post.post_img1}
              alt=""
              onClick={() => onImageClick(post)}
            />
          </div>
          <div className="post-card-footer">
            <div>
              <img
                src={post.owner?.user_profile_img}
                alt=""
                className="post-card-proflieImg"
              />
              <span>{post.owner?.id}</span>
            </div>
            <div>
              <img
                src={
                  isLiked[post._id] ? './img/filledlike.png' : './img/like.png'
                }
                alt=""
                onClick={() => handleLike(post._id)}
              />
              <span>{/*post.likeCount*/}0</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
