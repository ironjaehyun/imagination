// useModalAlert.tsx
import { useState } from 'react';
import { PostType } from '../../shared/types/PostType';

const useModalAlert = () => {
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);

  const handleOpenAlert = (post: PostType) => {
    setSelectedPost(post);
    setIsAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
    setSelectedPost(null); // 모달이 닫힐 때 선택된 post를 초기화
  };

  return { isAlertOpen, handleOpenAlert, handleCloseAlert, selectedPost };
};

export default useModalAlert;
