import { PUBLIC_URL } from '../../../../../../../packages/models/port';
import Loading from '../../../shared/Loading';
import useMypage from '../hooks/useMypage';

const MypageInfo: React.FC = () => {
  const {
    handleEditModalOpen,
    handleFollower,
    handleFollow,
    mainProfile,
    mainBackground,
    query: { data, isLoading },
  } = useMypage();

  if (isLoading) return <Loading />;
  return (
    <div>
      <header className="mypage-header">
        <img
          src={
            mainBackground === '' ? data.user_background_img : mainBackground
          }
          className="mypage-background"
        ></img>
        <section className="mypage-profile">
          <img
            src={mainProfile === '' ? data.user_profile_img : mainProfile}
            className="mypage-profile-photo"
          ></img>
          <button className="mypage-edit" onClick={handleEditModalOpen}>
            <img src={PUBLIC_URL + '/mypage/edit.png'} alt="" />
          </button>
        </section>
        <section className="mypage-info">
          <div className="mypage-info-header">
            <h1 className="mypage-username">{data.id}</h1>
            <span className="mypage-desc">{data.user_status_msg}</span>
          </div>
          <div className="mypage-info-footer">
            <div className="mypage-info-post">
              <span>{data.posts.length}</span>
              <span>Posts</span>
            </div>
            <div onClick={handleFollower} className="mypage-info-follow">
              <span>{data.follower.length}</span>
              <span>Followers</span>
            </div>
            <div onClick={handleFollow} className="mypage-info-follower">
              <span>{data.follow.length}</span>
              <span>Following</span>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default MypageInfo;
