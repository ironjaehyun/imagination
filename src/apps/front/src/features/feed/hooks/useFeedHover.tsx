import { useState } from 'react';

export const useFeedHover = () => {
  const [hoverIndex, setHoverIndex] = useState<null | number>(null);

  const handleMouseOver = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseOut = () => {
    setHoverIndex(null);
  };

  return { hoverIndex, handleMouseOver, handleMouseOut };
};
