import { useState } from 'react';

const useMypage = () => {
  const [myPageModal, setMyPageModal] = useState<boolean>(false);

  const handleEditModalOpen = () => {
    setMyPageModal(true);
  };
  const handleEditModalClose = () => {
    setMyPageModal(false);
  };
  const modalBubbling = (close) => (e) => {
    if (e.target.classList.contains('edit-modal')) return close();
  };

  return {
    myPageModal,
    handleEditModalClose,
    handleEditModalOpen,
    modalBubbling,
  };
};

export default useMypage;
