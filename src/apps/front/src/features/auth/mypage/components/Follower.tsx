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
          {data.follower.map((item, i) => (
            <li key={i} className="follow-list">
              <div>
                <img
                  src="https://e0.pxfuel.com/wallpapers/868/601/desktop-wallpaper-cool-top-95-best-cool-background-awesome-mobile.jpg"
                  alt=""
                />
                <div className="follow-list-left">
                  <h5>{item}</h5>
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
