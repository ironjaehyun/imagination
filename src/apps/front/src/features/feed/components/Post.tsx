import useLikes from '../hooks/useLikes';
import axios from './../api/auth';
import { useState, useEffect } from 'react';

interface PostType {
  _id: string;
  post_img1: string;
}

const Post = ({ onImageClick }: { onImageClick: () => void }) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLiked, handleLike] = useLikes(posts);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('/Feed/postsImg');
      const postsImg = response.data;
      console.log(postsImg);
      setPosts(postsImg);
    };

    fetchPosts();
  }, []);

  return (
    <div className="feed-cards">
      {posts.map((post, index) => (
        <div className="post-card" key={index}>
          <div className="post-card-img">
            <img src={post.post_img1} alt="" onClick={onImageClick} />
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
