import { useState, ChangeEvent, SetStateAction } from 'react';
import { useAtom } from 'jotai';
import {
  editModal,
  profileImage,
  backgroundImage,
  nameAtom,
  statusMsgAtom,
  followAtom,
  followerAtom,
} from './MypageAtom';
const useMypage = () => {
  const [myPageModal, setMyPageModal] = useAtom(editModal);
  const [followModal, setFollowModal] = useAtom(followAtom);
  const [followerModal, setFollowerModal] = useAtom(followerAtom);
  const [clickTab, setClickTab] = useState(0);

  const [backgroundImageSrc, setBackgroundImageSrc] = useAtom(backgroundImage);
  const [profileImageSrc, setProfileImageSrc] = useAtom(profileImage);
  const [userName, setUserName] = useAtom(nameAtom);
  const [statusMsg, setStatusMsg] = useAtom(statusMsgAtom);
  const [nameInput, setNameInput] = useState('');
  const [msgInput, setMsgInput] = useState('');
  const [profileInput, setProfileInput] = useState(profileImageSrc);
  const [backgroundInput, setBackgroundInput] = useState(backgroundImageSrc);

  const handleFollower = () => {
    setFollowerModal(true);
  };

  const handleFollowerClose = () => {
    setFollowModal(false);
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
    };
  const handleCheckTab = (number: number) => {
    return number === clickTab;
  };

  const onBackgroundImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = async () => {
        setBackgroundInput(reader.result as string);
      };
    } else {
      console.error('올바른 형식의 파일이 아닙니다.');
    }
  };
  const onProfileImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setProfileInput(reader.result as string);
      };
    } else {
      console.error('올바른 형식의 파일이 아닙니다.');
    }
  };

  const profileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    onProfileImageUpload(e);
  };

  const backgroundUpload = (e: ChangeEvent<HTMLInputElement>) => {
    onBackgroundImageUpload(e);
  };

  const handleEditUser = () => {
    setUserName(nameInput);
    setStatusMsg(msgInput);
    setProfileImageSrc(profileInput);
    setBackgroundImageSrc(backgroundInput);
    setMyPageModal(false);
  };

  const EditUserName = (e: { target: { value: SetStateAction<string> } }) => {
    setNameInput(e.target.value);
  };

  const EditStatusMsg = (e: { target: { value: SetStateAction<string> } }) => {
    setMsgInput(e.target.value);
  };

  return {
    myPageModal,
    handleEditModalClose,
    handleEditModalOpen,
    modalBubbling,
    clickTab,
    setClickTab,
    handleCheckTab,
    onBackgroundImageUpload,
    onProfileImageUpload,
    backgroundImageSrc,
    profileImageSrc,
    backgroundUpload,
    profileUpload,
    userName,
    setUserName,
    statusMsg,
    setStatusMsg,
    EditStatusMsg,
    EditUserName,
    handleEditUser,
    profileInput,
    backgroundInput,
    handleFollower,
    handleFollow,
    followModal,
    followerModal,
    handleFollowerClose,
    handleFollowClose,
  };
};
export default useMypage;
