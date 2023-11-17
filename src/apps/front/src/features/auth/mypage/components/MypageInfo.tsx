import { PUBLIC_URL } from '../../../../../../../packages/models/port';
import useLogin from '../../login/hooks/useLogin';
import useMypage from '../hooks/useMypage';

const MypageInfo = () => {
  const {
    backgroundImageSrc,
    profileImageSrc,
    userName,
    statusMsg,
    handleEditModalOpen,
    handleFollower,
    handleFollow,
  } = useMypage();
  const { userData } = useLogin();
  return (
    <div>
      <header className="mypage-header">
        <img src={backgroundImageSrc} className="mypage-background"></img>
        <section className="mypage-profile">
          <img src={profileImageSrc} className="mypage-profile-photo"></img>
          <button className="mypage-edit" onClick={handleEditModalOpen}>
            <img src={PUBLIC_URL + '/mypage/edit.png'} alt="" />
          </button>
        </section>
        <section className="mypage-info">
          <div className="mypage-info-header">
            <h1 className="mypage-username">{userName}</h1>
            <span className="mypage-desc">{statusMsg} </span>
          </div>
          <div className="mypage-info-footer">
            <div className="mypage-info-post">
              <span>{userData.posts.length}</span>
              <span>Posts</span>
            </div>
            <div onClick={handleFollower} className="mypage-info-follow">
              <span>{userData.follower.length}</span>
              <span>Followers</span>
            </div>
            <div onClick={handleFollow} className="mypage-info-follower">
              <span>{userData.follow.length}</span>
              <span>Following</span>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default MypageInfo;
