import Gnb from '../../shared/Gnb';
import EditUser from './components/EditUser';
import useMypage from './hooks/useMypage';
import Follower from './components/Follower';
import Follow from './components/Follow';
import UserInfo from './components/UserInfo';
import UserTab from './components/Usertab';

const UserPage = () => {
  const { myPageModal, followerModal, followModal } = useMypage();

  return (
    <div>
      <div className="mypage-box">
        <Gnb />
        {followModal && <Follow />}
        {followerModal && <Follower />}
        {myPageModal && <EditUser />}
        <div className="mypage">
          <UserInfo />
          <div className="mypage-line-box">
            <hr className="mypage-line" />
          </div>
          <UserTab />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
