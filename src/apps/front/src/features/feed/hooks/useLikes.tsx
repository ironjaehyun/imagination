import { useState } from 'react';

const useLikes = (posts: Array<{ id: string }>) => {
  // 모든 id값의 좋아요 상태를 false로 둔다
  const [isLiked, setIsLiked] = useState<Record<string, boolean>>(
    posts.reduce((acc, post) => ({ ...acc, [post.id]: false }), {}),
  );

  // 좋아요 상태를 바꾸는 작업
  const handleLike = (id: string) => {
    setIsLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return [isLiked, handleLike] as const;
};

export default useLikes;
