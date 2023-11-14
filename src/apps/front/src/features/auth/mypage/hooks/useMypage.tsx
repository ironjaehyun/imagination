import { useState } from 'react';

const useMypage = () => {
  const [myPageModal, setMyPageModal] = useState<boolean>(false);
  const [clickTab, setClickTab] = useState(0);

  const handleEditModalOpen = () => {
    setMyPageModal(true);
  };
  const handleEditModalClose = () => {
    setMyPageModal(false);
  };
  const modalBubbling = (close) => (e) => {
    if (e.target.classList.contains('edit-modal')) return close();
  };
  const handleCheckTab = (number: number) => {
    return number === clickTab;
  };

  return {
    myPageModal,
    handleEditModalClose,
    handleEditModalOpen,
    modalBubbling,
    clickTab,
    setClickTab,
    handleCheckTab,
  };
};

export default useMypage;
