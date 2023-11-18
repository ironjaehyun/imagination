import { useAtom } from 'jotai';
import { editModal, followAtom, followerAtom } from './MypageAtom';
import { useState } from 'react';
import axios from 'axios';
const useMypage = () => {
  const [myPageModal, setMyPageModal] = useAtom(editModal);
  const [followModal, setFollowModal] = useAtom(followAtom);
  const [followerModal, setFollowerModal] = useAtom(followerAtom);
  const [clickTab, setClickTab] = useState(0);
  const [statusMsg, setStatusMsg] = useState('');
  const [bgImage, setBgImage] = useState({
    preview: '',
    data: '',
  });
  const [profileImage, setProfileImage] = useState({
    preview: '',
    data: '',
  });
  const statusStorage = sessionStorage.getItem('status');

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

  const handleProfileFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setProfileImage(img);
  };

  const handleBgFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setBgImage(img);
  };

  const handleStatusMsg = (e) => {
    setStatusMsg(e.target.value);
  };

  const imgUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const id = sessionStorage.getItem('id') ?? '';

    formData.append('bgImage', bgImage.data);
    formData.append('profileImage', profileImage.data);
    formData.append('id', id);
    formData.append('status', statusMsg);
    sessionStorage.setItem('status', statusMsg);
    try {
      await axios
        .post('http://localhost:3000/mypage/submit', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log(res);
          sessionStorage.setItem('profile', res.data.profile);
          sessionStorage.setItem('background', res.data.background);
          sessionStorage.setItem('status', res.data.status);
        });
    } catch (err) {
      console.error('Error during request:', err);
    }

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
    handleFollower,
    handleFollow,
    followModal,
    followerModal,
    handleFollowerClose,
    handleFollowClose,
    backgroundimg,
    userId,
    profileimg,
    imgUpload,
    handleBgFileChange,
    handleProfileFileChange,
    bgImage,
    handleStatusMsg,
    statusStorage,
    profileImage,
  };
};
export default useMypage;
