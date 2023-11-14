import { useState } from 'react';
import MypageInfo from './components/MypageInfo';
import Gnb from '../../shared/Gnb';
import EditUser from './components/EditUser';
import useMypage from './hooks/useMypage';

const Mypage = () => {
  const { myPageModal, handleEditModalClose, handleEditModalOpen } =
    useMypage();
  console.log(myPageModal);
  const [id] = useState<string>('hi');
  return (
    <div>
      <div className="page">
        <Gnb />
        {myPageModal && <EditUser close={handleEditModalClose} />}
        <div className="mypage">
          <MypageInfo open={handleEditModalOpen} />
          <hr />
          <ul>
            <li>posts</li>
            <li>like</li>
            <li>save</li>
          </ul>
          <footer className="mypage__footer">
            <h1>{id}</h1>
            {/* post가 클릭되면 post관련 나오고 like 나오고 등등등 나온다. */}
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
