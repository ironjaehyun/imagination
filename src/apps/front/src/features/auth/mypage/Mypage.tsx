import MypageInfo from './components/MypageInfo';
import Gnb from '../../shared/Gnb';
import EditUser from './components/EditUser';
import useMypage from './hooks/useMypage';
import MypageTab from './components/MypageTab';
import Follower from './components/Follower';
import Follow from './components/Follow';
import axios from 'axios';
import { useState } from 'react';
const Mypage = () => {
  const { myPageModal, followerModal, followModal } = useMypage();
  const [image, setImage] = useState({
    preview: '',
    data: '',
  });
  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const id = sessionStorage.getItem('id');

    formData.append('file', image.data);
    formData.append('id', id);

    await axios.post('http://localhost:3000/mypage/submit', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setImage(img);
  };

  return (
    <div>
      <div className="mypage-box">
        <Gnb />
        {followModal && <Follow />}
        {followerModal && <Follower />}
        {myPageModal && <EditUser />}
        <div className="mypage">
          <MypageInfo />
          <div className="mypage-line-box">
            <hr className="mypage-line" />
          </div>
          <input type="file" accept="Images/*" onChange={handleFileChange} />
          <button onClick={submit}>submit</button>
          <MypageTab />
        </div>
      </div>
    </div>
  );
};

export default Mypage;
