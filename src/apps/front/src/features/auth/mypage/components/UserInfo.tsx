import Loading from '../../../shared/Loading';
import useMypage from '../hooks/useMypage';
import classNames from 'classnames';

const UserInfo = () => {
  const {
    handleFollower,
    handleFollow,
    query: { data, isLoading },
    handleFollowBtn,
    follow,
    unfollow,
  } = useMypage();

  if (isLoading) return <Loading />;
  return (
    <div>
      <header className="mypage-header">
        <img src={data.user_background_img} className="mypage-background"></img>
        <section className="mypage-profile">
          <img
            src={data.user_profile_img}
            className="mypage-profile-photo"
          ></img>
          <button
            onClick={handleFollowBtn}
            className={classNames('mypage-follow-btn', {
              'mypage-follow-btn-unfollow': unfollow,
            })}
          >
            {follow}
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

export default UserInfo;
