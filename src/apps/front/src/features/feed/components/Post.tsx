import { useQuery } from '@tanstack/react-query';
import useLikes from '../hooks/useLikes';
import axios from './../api/auth';
import { useState, useEffect } from 'react';
import { PostType } from '../../shared/types/PostType';

const fetchPosts = async () => {
  const response = await axios.get('/Feed/postsImg');
  return response.data;
};

const Post = ({ onImageClick }: { onImageClick: (post: PostType) => void }) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const { data, error, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

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
                /*src={post.profileImage}*/ alt=""
                className="post-card-proflieImg"
              />
              <span>{/*post.username*/}</span>
            </div>
            <div>
              <img
                src={
                  isLiked[post._id] ? './img/filledlike.png' : './img/like.png'
                }
                alt=""
                onClick={() => handleLike(post._id)}
              />
              <span>{/*post.likeCount*/}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
