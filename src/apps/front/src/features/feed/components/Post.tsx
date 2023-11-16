import useLikes from '../hooks/useLikes';
export const posts = [
  {
    id: '1',
    image: './img/card-img.png',
    profileImage: './img/Rectangle 17.png',
    username: 'leechi',
    likeCount: 23,
  },
];

const Post = ({ onImageClick }: { onImageClick: () => void }) => {
  const [isLiked, handleLike] = useLikes(posts);

  return (
    <div className="feed-cards">
      {posts.map((post, index) => (
        <div className="post-card" key={index}>
          <div className="post-card-img">
            <img src={post.image} alt="" onClick={onImageClick} />
          </div>
          <div className="post-card-footer">
            <div>
              <img src={post.profileImage} alt="" />
              <span>{post.username}</span>
            </div>
            <div>
              <img
                src={
                  isLiked[post.id] ? './img/filledlike.png' : './img/like.png'
                }
                alt=""
                onClick={() => handleLike(post.id)}
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
