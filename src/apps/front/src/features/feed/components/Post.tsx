import React from 'react';

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
  ];

  return (
    <div className="feed-cards">
      {posts.map((post, index) => (
        <div className="card" key={index}>
          <div className="card-img">
            <img src={post.image} alt="" />
          </div>
          <div className="card-bottom">
            <div>
              <img src={post.profileImage} alt="" />
              <span>{post.username}</span>
            </div>
            <div>
              <img src="./img/like.png" alt="" />
              <span>{post.likeCount}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
