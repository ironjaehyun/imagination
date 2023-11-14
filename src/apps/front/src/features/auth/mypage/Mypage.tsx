import MypageInfo from './components/MypageInfo';
import Gnb from '../../shared/Gnb';
import EditUser from './components/EditUser';
import useMypage from './hooks/useMypage';

const Mypage = () => {
  const { myPageModal, handleEditModalClose, handleEditModalOpen } =
    useMypage();

  return (
    <div>
      <div className="mypage-box">
        <Gnb />
        {myPageModal && <EditUser close={handleEditModalClose} />}
        <div className="mypage">
          <MypageInfo open={handleEditModalOpen} />
          <hr className="mypage-line" />
          <div className="mypage-tab">
            <ul className="mypage-tab-list">
              <li>게시물</li>
              <li>좋아요</li>
              <li>저장된 이미지</li>
            </ul>
          </div>
          <div className="mypage__footer"></div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
