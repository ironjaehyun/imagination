import { useState } from 'react';

const Post = () => {
  const posts = [
    {
      image: './img/card-img.png',
      profileImage: './img/Rectangle 17.png',
      username: 'leechi',
      likeCount: 23,
    },
    {
      image: './img/card-img.png',
      profileImage: './img/Rectangle 17.png',
      username: 'leechi',
      likeCount: 23,
    },
    {
      image: './img/card-img.png',
      profileImage: './img/Rectangle 17.png',
      username: 'leechi',
      likeCount: 23,
    },
    {
      image: './img/card-img.png',
      profileImage: './img/Rectangle 17.png',
      username: 'leechi',
      likeCount: 23,
    },
    {
      image: './img/card-img.png',
      profileImage: './img/Rectangle 17.png',
      username: 'leechi',
      likeCount: 23,
    },
  ];

  const [isLiked, setIsLiked] = useState(
    Array.from({ length: posts.length }, () => false),
  );

  const handleLike = (index: number) => {
    const newIsLiked = [...isLiked];
    newIsLiked[index] = !newIsLiked[index];
    setIsLiked(newIsLiked);
  };

  return (
    <div className="feed-cards">
      {posts.map((post, index) => (
        <div className="post-card" key={index}>
          <div className="post-card-img">
            <img src={post.image} alt="" />
          </div>
          <div className="post-card-footer">
            <div>
              <img src={post.profileImage} alt="" />
              <span>{post.username}</span>
            </div>
            <div>
              <img
                src={isLiked[index] ? './img/filledlike.png' : './img/like.png'}
                alt=""
                onClick={() => handleLike(index)}
              />
              <span>{post.likeCount}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
