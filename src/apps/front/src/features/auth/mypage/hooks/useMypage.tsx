import { useAtom } from 'jotai';
import { editModal, followAtom, followerAtom } from './MypageAtom';
import { useState } from 'react';

const useMypage = () => {
  const [myPageModal, setMyPageModal] = useAtom(editModal);
  const [followModal, setFollowModal] = useAtom(followAtom);
  const [followerModal, setFollowerModal] = useAtom(followerAtom);
  const [clickTab, setClickTab] = useState(0);

  const backgroundimg = sessionStorage.getItem('background') ?? '';
  const profileimg = sessionStorage.getItem('profile') ?? '';
  const userId = sessionStorage.getItem('id') ?? '';
  const handleFollower = () => {
    setFollowerModal(true);
  };

  const handleFollowerClose = () => {
    setFollowerModal(false);
  };

  const handleFollow = () => {
    setFollowModal(true);
  };

  const handleFollowClose = () => {
    setFollowModal(false);
  };

  const handleEditModalOpen = () => {
    setMyPageModal(true);
  };
  const handleEditModalClose = () => {
    setMyPageModal(false);
  };

  const modalBubbling =
    () => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('edit-modal')) return setMyPageModal(false);
      if (target.classList.contains('follow-modal-bg')) {
        setFollowModal(false);
        setFollowerModal(false);
      }
    };

  const handleCheckTab = (number: number) => {
    return number === clickTab;
  };

  const handleEditUser = () => {
    setMyPageModal(false);
  };

  return {
    myPageModal,
    handleEditModalClose,
    handleEditModalOpen,
    modalBubbling,
    clickTab,
    setClickTab,
    handleCheckTab,
    handleEditUser,
    handleFollower,
    handleFollow,
    followModal,
    followerModal,
    handleFollowerClose,
    handleFollowClose,
    backgroundimg,
    userId,
    profileimg,
  };
};
export default useMypage;
