import { useState } from 'react';

const useLikes = (initialState: boolean[]) => {
  const [isLiked, setIsLiked] = useState<boolean[]>(initialState);

  const handleLike = (index: number) => {
    const newIsLiked = [...isLiked];
    newIsLiked[index] = !newIsLiked[index];
    setIsLiked(newIsLiked);
  };

  return [isLiked, handleLike] as const;
};

export default useLikes;
