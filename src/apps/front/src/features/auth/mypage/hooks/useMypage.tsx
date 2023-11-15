import { useState, ChangeEvent, SetStateAction } from 'react';
import { useAtom } from 'jotai';
import editModal from './MypageAtom';
const useMypage = () => {
  const [myPageModal, setMyPageModal] = useAtom(editModal);
  const [clickTab, setClickTab] = useState(0);
  const [imageSrc, setImageSrc] = useState<string>(
    'https://img.freepik.com/free-photo/flowing-purple-mountain-spiral-a-bright-imagination-generated-by-ai_188544-9853.jpg',
  );
  const [profileImageSrc, setProfileImageSrc] = useState<string>(
    'https://img.freepik.com/premium-photo/cool-wolf-illustration-design_780593-1864.jpg',
  );
  const [userName, setUserName] = useState('leechi');
  const [statusMsg, setStatusMsg] = useState('나는 최고다!');

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
        setImageSrc(reader.result as string);
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
        setProfileImageSrc(reader.result as string);
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
    setMyPageModal(false);
  };

  const EditUserName = (e: { target: { value: SetStateAction<string> } }) => {
    setUserName(e.target.value);
  };

  const EditStatusMsg = (e: { target: { value: SetStateAction<string> } }) => {
    setStatusMsg(e.target.value);
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
    imageSrc,
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
  };
};
export default useMypage;
