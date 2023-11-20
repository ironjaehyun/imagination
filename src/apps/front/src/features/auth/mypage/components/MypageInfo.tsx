import { PUBLIC_URL } from '../../../../../../../packages/models/port';
import useMypage from '../hooks/useMypage';
import classNames from 'classnames';

const MypageInfo = () => {
  const {
    handleEditModalOpen,
    handleFollower,
    handleFollow,
    query: { data, isLoading },
    id,
    objectId,
    handleFollowBtn,
    follow,
    unfollow,
  } = useMypage();

  if (isLoading) return <div>Loding</div>;
  return (
    <div>
      <header className="mypage-header">
        <img src={data.user_background_img} className="mypage-background"></img>
        <section className="mypage-profile">
          <img
            src={data.user_profile_img}
            className="mypage-profile-photo"
          ></img>
          {id !== objectId ? (
            <button
              onClick={handleFollowBtn}
              className={classNames('mypage-follow-btn', {
                'mypage-follow-btn-unfollow': unfollow,
              })}
            >
              {follow}
            </button>
          ) : (
            <button className="mypage-edit" onClick={handleEditModalOpen}>
              <img src={PUBLIC_URL + '/mypage/edit.png'} alt="" />
            </button>
          )}
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
