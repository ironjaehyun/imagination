import { useState } from 'react';

const useCopy = () => {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  return { isCopied, handleCopy };
};

export default useCopy;
