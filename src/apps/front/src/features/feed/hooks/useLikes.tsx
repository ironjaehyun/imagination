import { useState } from 'react';
import axios from './../api/auth';

const useLikes = (post: Array<{ _id: string }>) => {
  // 모든 id값의 좋아요 상태를 false로 둔다
  const [isLiked, setIsLiked] = useState<Record<string, boolean>>(
    post.reduce((acc, post) => ({ ...acc, [post._id]: false }), {}),
  );

  // 좋아요 상태를 바꾸는 작업
  const objectId = sessionStorage.getItem('_id');
  const handleLike = async (post_id: string) => {
    const currentIsLiked = !isLiked[post_id];
    setIsLiked((prev) => ({ ...prev, [post_id]: !prev[post_id] }));
    try {
      axios.post('http://localhost:3000/Feed/likes', {
        _id: objectId,
        postId: post_id,
        isLiked: currentIsLiked,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return { isLiked, handleLike };
};

export default useLikes;
