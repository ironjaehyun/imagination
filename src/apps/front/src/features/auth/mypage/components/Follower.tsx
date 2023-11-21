import classNames from 'classnames';
import useMypage from '../hooks/useMypage';
const Follower = () => {
  const {
    handleFollowerClose,
    modalBubbling,
    follow,
    handleFollowBtn,
    unfollow,
    query: { data },
  } = useMypage();
  return (
    <div className="follow-modal-bg" onClick={modalBubbling()}>
      <div className="follow-modal">
        <div>
          <div></div>
          <h3>follower</h3>
          <button onClick={handleFollowerClose}>X</button>
        </div>
        <hr />
        <ul>
          {data?.follower?.map((item) => (
            <li key={item.follower._id} className="follow-list">
              <div>
                <img src={item.follower.user_profile_img} alt="" />
                <div className="follow-list-left">
                  <h5>{item.follower.id}</h5>
                  <div>나는 최고다!</div>
                </div>
              </div>
              <button
                onClick={handleFollowBtn}
                className={classNames('mypage-follow-btn', {
                  'mypage-follow-btn-unfollow': unfollow,
                })}
              >
                {follow}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Follower;
