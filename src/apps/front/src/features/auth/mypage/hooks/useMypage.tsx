import { useState, ChangeEvent } from 'react';

const useMypage = () => {
  const [myPageModal, setMyPageModal] = useState<boolean>(false);
  const [clickTab, setClickTab] = useState(0);
  const [imageSrc, setImageSrc] = useState<string>(
    'https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=sph',
  );
  const [profileImageSrc, setProfileImageSrc] = useState<string>(
    'https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=sph',
  );
  const handleEditModalOpen = () => {
    setMyPageModal(true);
  };
  const handleEditModalClose = () => {
    setMyPageModal(false);
  };
  const modalBubbling =
    (close: () => void) =>
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        target.classList &&
        target.classList.contains('edit-modal')
      ) {
        return close();
      }
    };
  const handleCheckTab = (number: number) => {
    return number === clickTab;
  };

  const onBackgroundImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
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
  };
};

export default useMypage;
