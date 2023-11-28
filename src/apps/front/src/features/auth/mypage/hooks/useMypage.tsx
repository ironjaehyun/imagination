import { atom, useAtom } from 'jotai';
import {
  editModal,
  followAtom,
  followerAtom,
  imageAtom,
  likeAtom,
} from './MypageAtom';
import { SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from './constants';
import { useParams } from 'react-router-dom';

const followBtnAtom = atom<boolean>(true);
const postIdAtom = atom('');
const mainProfileAtom = atom('');
const mainBackgroundAtom = atom('');

const useMypage = () => {
  const [myPageModal, setMyPageModal] = useAtom(editModal);
  const [followModal, setFollowModal] = useAtom(followAtom);
  const [followerModal, setFollowerModal] = useAtom(followerAtom);
  const [postModal, setPostModal] = useAtom(imageAtom);
  const [mainProfile, setMainProfile] = useAtom(mainProfileAtom);
  const [mainBackground, setMainBackground] = useAtom(mainBackgroundAtom);
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
  const [likeModal, setLikeModal] = useAtom(likeAtom);

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

  const handleLikeModalOpen = (postId: string) => {
    setPostId(postId);
    setLikeModal(true);
  };
  const handleLikeModalClose = () => {
    setLikeModal(false);
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
          setMainProfile(res.data.profile);
          setMainBackground(res.data.background);
        });
    } catch (err) {
      console.error('Error during request:', err);
    }

    setMyPageModal(false);
  };

  const [follow, setFollow] = useState('follow');
  const [unfollow, setUnFollow] = useAtom(followBtnAtom);
  const handleFollowBtn = async () => {
    const response = await axios.post('http://localhost:3000/mypage/follow', {
      owner: objectId,
      follow: id,
      unfollow: unfollow,
    });
    if (response.data.follow === 'true') {
      window.location.reload();
    }
  };
  // useSuspenseQuery를 사용하게 mypage 들어갔을때 _id값이 아닌 null값이 뜨게 됨
  // atom으로 해결을 했지만 무한로딩 에러가 생겨남 useEffect 문제인 거 같음
  const query = useQuery({
    queryKey: [QUERY_KEY.user],
    queryFn: async () =>
      await axios.get('http://localhost:3000/mypage/user', {
        params: { _id: objectId, id: id },
      }),
    select: (data) => data.data,
  });

  // 만약에 이 데이터가 있다면?
  useEffect(() => {
    if (query?.data?.follower) {
      // some이 무엇이냐.. find는 undefind를 반환하지만 some은 true false를 반환한다.
      const isFollowing = query.data.follower.some(
        (follower: { follower: { _id: string } }) =>
          follower.follower?._id === objectId,
      );
      if (isFollowing) {
        setFollow('unfollow');
        setUnFollow(false);
      } else {
        setFollow('follow');
        setUnFollow(true);
      }
    }
  }, [query.data, objectId]);

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
    handleLikeModalOpen,
    handleLikeModalClose,
    likeModal,
    mainProfile,
    mainBackground,
  };
};
export default useMypage;
