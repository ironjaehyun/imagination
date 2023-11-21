import { atom, useAtom } from 'jotai';
import { editModal, followAtom, followerAtom, imageAtom } from './MypageAtom';
import { SetStateAction, useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from './constants';
import { useParams } from 'react-router-dom';

const followBtnAtom = atom<boolean>(true);
const postIdAtom = atom('');

const useMypage = () => {
  const [myPageModal, setMyPageModal] = useAtom(editModal);
  const [followModal, setFollowModal] = useAtom(followAtom);
  const [followerModal, setFollowerModal] = useAtom(followerAtom);
  const [postModal, setPostModal] = useAtom(imageAtom);
  const [clickTab, setClickTab] = useState(0);
  const [statusMsg, setStatusMsg] = useState('');
  const { id } = useParams();
  const [bgImage, setBgImage] = useState({
    preview: '',
    data: '',
  });
  const [profileImage, setProfileImage] = useState({
    preview: '',
    data: '',
  });
  const statusStorage = sessionStorage.getItem('status');
  const [postId, setPostId] = useAtom(postIdAtom);
  const backgroundimg = sessionStorage.getItem('background') ?? '';
  const profileimg = sessionStorage.getItem('profile') ?? '';
  const userId = sessionStorage.getItem('id') ?? '';
  const objectId = sessionStorage.getItem('_id') ?? '';

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

  const handlePostModalOpen = (postId: string) => {
    setPostId(postId);

    setPostModal(true);
  };

  const handlePostModalClose = () => {
    setPostModal(false);
  };

  const modalBubbling =
    () => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('edit-modal')) return setMyPageModal(false);
      if (
        target.classList.contains('follow-modal-bg') ||
        target.classList.contains('mypage-modal-bg')
      ) {
        setFollowModal(false);
        setFollowerModal(false);
        setPostModal(false);
      }
    };

  const handleCheckTab = (number: number) => {
    return number === clickTab;
  };

  const handleProfileFileChange = (e: { target: { files: never[] } }) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setProfileImage(img);
  };

  const handleBgFileChange = (e: { target: { files: never[] } }) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setBgImage(img);
  };

  const handleStatusMsg = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setStatusMsg(e.target.value);
  };

  const imgUpload = async (e: { preventDefault: () => void }) => {
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
          sessionStorage.setItem('profile', res.data.profile);
          sessionStorage.setItem('background', res.data.background);
          sessionStorage.setItem('status', res.data.status);
        });
    } catch (err) {
      console.error('Error during request:', err);
    }

    setMyPageModal(false);
  };

  const [follow, setFollow] = useState('follow');
  const [unfollow, setUnFollow] = useAtom(followBtnAtom);
  const handleFollowBtn = async () => {
    if (unfollow === true) {
      setFollow('unfollow');
      setUnFollow(false);
    } else {
      setFollow('follow');
      setUnFollow(true);
    }
    // 데이터 연결할거 넣어두기
    // git config 확인
    await axios.post('http://localhost:3000/mypage/follow', {
      owner: objectId,
      follow: id,
      unfollow: unfollow,
    });
  };

  const query = useQuery({
    queryKey: [QUERY_KEY.user],
    queryFn: async () => {
      const res = await axios.get('http://localhost:3000/mypage/user', {
        params: { _id: objectId, id: id },
      });
      return res.data;
    },
  });

  return {
    postId,
    follow,
    unfollow,
    handleFollowBtn,
    query,
    // userQuery,
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
    id,
    objectId,
    handlePostModalOpen,
    handlePostModalClose,
    postModal,
  };
};
export default useMypage;
