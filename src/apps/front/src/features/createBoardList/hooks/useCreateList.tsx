import { ChangeEvent, KeyboardEvent, useEffect } from 'react';

import axios from 'axios';
import { atom, useAtom } from 'jotai';
import { atomWithReset, useResetAtom } from 'jotai/utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const initialData = {
  _id: '',
  img1: '',
  img2: '',
  img3: '',
  img4: '',
  prompt: '',
  negative_prompt: '',
  owner: '',
};

const postDataSets = atomWithReset({ ...initialData });

interface Image {
  id: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  prompt: string;
  negative_prompt: string;
  _id: string;
}
const imgAtom = atom<Image[]>([]);
const modalAtom = atom(false);
interface Item {
  _id: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  prompt: string;
  negative_prompt: string;
  owner: string;
}

const useCreatList = () => {
  const [isModalOpen, setIsModalOpen] = useAtom(modalAtom);
  const [savedImg, setSavedImg] = useAtom(imgAtom);
  const [selectedData, setSelectedData] = useAtom(postDataSets);
  const resetData = useResetAtom(postDataSets);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState(selectedData); // 선택한 아이템을 임시로 저장하는 상태
  const [input, setInput] = useState<string>('');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [boardMaxText, setBoardMaxText] = useState<number>(0);
  const [postTitle, setPostTitle] = useState<string>('');
  const [postContent, setPostContent] = useState<string>('');
  const navigate = useNavigate();
  const objectId = sessionStorage.getItem('_id') ?? '';

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      setHashtags([...hashtags, input.trim()]);
      setInput('');
    }
  };
  const removeHashtag = (index: number) => {
    setHashtags(hashtags.filter((_, i) => i !== index));
  };

  const handleRadioChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    item: Item,
  ) => {
    setIsSelected(e.target.checked);
    if (e.target.checked) {
      setSelectedItem(item); // 라디오 버튼이 선택되었을 때 선택한 아이템을 저장
    }
  };

  const handleSelectSureClick = () => {
    if (isSelected && selectedItem) {
      setSelectedData(selectedItem);
      closeModal(); // 선택완료 버튼을 눌렀을 때 모달 창을 닫음
    }
  };

  const ModalBgClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      // 배경 클릭 시 모달을 닫음
      closeModal();
    }
  };

  const openModal = async () => {
    setIsModalOpen(true);

    await axios
      .get('http://localhost:3000/create/getsavedimg', {
        params: {
          _id: objectId,
        },
      })
      .then((res) => {
        setSavedImg(res.data);
      });
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePostTitle = (e) => {
    setPostTitle(e.target.value);
  };
  const handlePostContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
    setBoardMaxText(Array.from(e.target.value).length);
  };

  const postData = {
    post_id: selectedData._id,
    post_title: postTitle,
    post_content: postContent,
    post_prompt: selectedData.prompt,
    post_negative_prompt: selectedData.negative_prompt,
    post_hashtag: hashtags,
    post_img1: selectedData.img1,
    post_img2: selectedData.img2,
    post_img3: selectedData.img3,
    post_img4: selectedData.img4,
    owner: selectedData.owner,
  };

  const createPost = async (event) => {
    event.preventDefault();

    const result = await axios.post(
      'http://localhost:3000/create/post',
      postData,
    );
    if (result.data.msg === 'create post') {
      navigate('/feed');
      resetData();
    }
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [postDisable, setPostDisable] = useState(true);
  useEffect(() => {
    if (postTitle.length > 0 && postContent.length > 0 && selectedData.img1) {
      setPostDisable(false);
    } else {
      setPostDisable(true);
    }
  });

  return {
    postDisable,
    openModal,
    closeModal,
    isModalOpen,
    savedImg,
    selectedData,
    setSelectedData,
    handleRadioChange,
    handleSelectSureClick,
    ModalBgClose,
    isSelected,
    onChange,
    onKeyUp,
    boardMaxText,
    hashtags,
    input,
    createPost,
    handlePostTitle,
    handlePostContent,
    removeHashtag,
    responsive,
    Carousel,
  };
};

export default useCreatList;
