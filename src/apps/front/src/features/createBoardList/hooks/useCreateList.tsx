import { ChangeEvent, KeyboardEvent } from 'react';

import axios from 'axios';
import { atom, useAtom } from 'jotai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const data = atom({
  _id: '',
  img1: '',
  prompt: '',
  negative_prompt: '',
  owner: '',
});
interface Image {
  id: string;
  img1: string;
  prompt: string;
  negative_prompt: string;
  _id: string;
}
const imgAtom = atom<Image[]>([]);
const modalAtom = atom(false);
interface Item {
  _id: string;
  img1: string;
  prompt: string;
  negative_prompt: string;
  owner: string;
  // ... (다른 필드들)
}

const useCreatList = () => {
  const [isModalOpen, setIsModalOpen] = useAtom(modalAtom);
  const [savedImg, setSavedImg] = useAtom(imgAtom);
  const [selectedData, setSelectedData] = useAtom(data);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState(selectedData); // 선택한 아이템을 임시로 저장하는 상태
  const [input, setInput] = useState<string>('');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [boardMaxText, setBoardMaxText] = useState<number>(0);
  const [postTitle, setPostTitle] = useState<string>('');
  const [postContent, setPostContent] = useState<string>('');
  const navigate = useNavigate();
  console.log(postContent);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      setHashtags([...hashtags, input.trim()]);
      setInput('');
    }
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

  console.log('선택완료', selectedData);
  const createMockData = () => {
    axios.post('http://localhost:3000/create/savedimg', {
      img1: 'https://img.freepik.com/premium-photo/cool-wolf-illustration-design_780593-1864.jpg',
      prompt: 'wolf',
      negative_prompt: 'hi',
      _id: '655835c6cd751e3a72064897',
    });
  };

  const openModal = async () => {
    setIsModalOpen(true);

    await axios
      .get('http://localhost:3000/create/getsavedimg', {
        params: {
          _id: '655835c6cd751e3a72064897',
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
    post_title: postTitle,
    post_content: postContent,
    post_prompt: selectedData.prompt,
    post_negative_prompt: selectedData.negative_prompt,
    post_hashtag: [],
    post_img1: selectedData.img1,
    post_img2: '',
    post_img3: '',
    post_img4: '',
    owner: selectedData._id,
  };

  const createPost = async () => {
    const result = await axios.post(
      'http://localhost:3000/create/post',
      postData,
    );
    if (result.data.msg === 'create post') {
      navigate('/');
    }
  };

  return {
    createMockData,
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
  };
};

export default useCreatList;
