import { atom, useAtom } from 'jotai';
import { editModal, followAtom, followerAtom } from './MypageAtom';
import { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from './constants';
import { useParams } from 'react-router-dom';

const followBtnAtom = atom<boolean>(true);

const useMypage = () => {
  const [myPageModal, setMyPageModal] = useAtom(editModal);
  const [followModal, setFollowModal] = useAtom(followAtom);
  const [followerModal, setFollowerModal] = useAtom(followerAtom);
  const [clickTab, setClickTab] = useState(0);
  const [statusMsg, setStatusMsg] = useState('');
  const { id } = useParams();
  console.log(id);
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

  // const userQuery = useQuery({
  //   queryKey: [QUERY_KEY.user],
  //   queryFn: async () =>{
  //     const res = await axios.get('http://localhost:3000/mypage/user', {
  //       params: {_id:objectId},
  //     })
  //     return res.data;
  //   }
  // })

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

    console.log(unfollow);
    const response = await axios.post('http://localhost:3000/mypage/follow', {
      owner: objectId,
      follow: id,
      unfollow: unfollow,
    });
    console.log(response);
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

  const followQuery = useQuery({
    queryKey: [QUERY_KEY.follow],
    queryFn: async () => {
      const res = await axios.get('http://localhost:3000/mypage/follow', {
        params: { owner: objectId, follow: id },
      });
      return res.data;
    },
  });

  console.log(query.data);

  return {
    followQuery,
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
  };
};
export default useMypage;
