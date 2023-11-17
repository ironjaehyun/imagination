import useLikes from '../hooks/useLikes';
import axios from './../api/auth';
import {useState,useEffect} from 'react'
// export const posts = [
//   {
//     id: '1',
//     image: 'https://i.namu.wiki/i/xvoxl-3a4LfDwVO1j77XN702Cbj8xZv2wbKt3f4tZmPT_jb7ig4ffGCa0Xcg2B2n7gxkiYrp45LvAIX4V4rQ3qVd7AOW6w7XKsTPWWhkVb02xXJNPKtv6xZ56uyA__QmhT4EPvpQNmQwfjh9d2-2Vw.webp',
//     profileImage: './img/Rectangle 17.png',
//     username: 'leechi',
//     likeCount: 23,
//   },
//   {
//     id: '2',
//     image: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/undefined/image0.webp',
//     profileImage: './img/Rectangle 17.png',
//     username: 'leechi',
//     likeCount: 23,
//   },
//   {
//     id: '4',
//     image: './img/card-img.png',
//     profileImage: './img/Rectangle 17.png',
//     username: 'leechi',
//     likeCount: 23,
//   },
//   {
//     id: '5',
//     image: './img/card-img.png',
//     profileImage: './img/Rectangle 17.png',
//     username: 'leechi',
//     likeCount: 23,
//   },
// ];


const Post = ({ onImageClick }: { onImageClick: () => void }) => {
  const [posts, setPosts] = useState([]);
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
            <img /*src={post.post_img1}*/ alt="" onClick={onImageClick} />
          </div>
          <div className="post-card-footer">
            <div>
              <img /*src={post.profileImage}*/ alt="" className='post-card-proflieImg'/>
              <span>{/*post.username*/}</span>
            </div>
            <div>
              <img
                /*src={
                  isLiked[post._id] ? './img/filledlike.png' : './img/like.png'
                }*/
                alt=""
                /*onClick={() => handleLike(post._id)}*/
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
