import { PUBLIC_URL } from '../../../../../../../packages/models/port';
import useMypage from '../hooks/useMypage';

const MypageInfo = () => {
  const {
    handleEditModalOpen,
    handleFollower,
    handleFollow,
    profileimg,
    backgroundimg,
    userId,
    statusStorage,
    query: { data, isFetching },
  } = useMypage();
  console.log(data);
  if (isFetching) return <div>Loding</div>;
  return (
    <div>
      <h1>{data[0].title}</h1>
      <header className="mypage-header">
        <img src={backgroundimg} className="mypage-background"></img>
        <section className="mypage-profile">
          <img src={profileimg} className="mypage-profile-photo"></img>
          <button className="mypage-edit" onClick={handleEditModalOpen}>
            <img src={PUBLIC_URL + '/mypage/edit.png'} alt="" />
          </button>
        </section>
        <section className="mypage-info">
          <div className="mypage-info-header">
            <h1 className="mypage-username">{userId}</h1>
            <span className="mypage-desc">{statusStorage}</span>
          </div>
          <div className="mypage-info-footer">
            <div className="mypage-info-post">
              <span>0</span>
              <span>Posts</span>
            </div>
            <div onClick={handleFollower} className="mypage-info-follow">
              <span>0</span>
              <span>Followers</span>
            </div>
            <div onClick={handleFollow} className="mypage-info-follower">
              <span>0</span>
              <span>Following</span>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default MypageInfo;
