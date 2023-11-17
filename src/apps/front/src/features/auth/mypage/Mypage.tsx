import MypageInfo from './components/MypageInfo';
import Gnb from '../../shared/Gnb';
import EditUser from './components/EditUser';
import useMypage from './hooks/useMypage';
import MypageTab from './components/MypageTab';
import Follower from './components/Follower';
import Follow from './components/follow';

const Mypage = () => {
  const { myPageModal, followerModal, followModal } = useMypage();

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
          <MypageTab />
        </div>
      </div>
    </div>
  );
};

export default Mypage;
