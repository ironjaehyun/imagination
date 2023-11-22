import classNames from 'classnames';
import useMypage from '../hooks/useMypage';

const Follow = () => {
  const {
    handleFollowClose,
    modalBubbling,
    follow,
    handleFollowBtn,
    unfollow,
    query: { data },
  } = useMypage();
  const objectId = sessionStorage.getItem('_id');
  return (
    <div className="follow-modal-bg" onClick={modalBubbling()}>
      <div className="follow-modal">
        <div>
          <div></div>
          <h3>follow</h3>
          <button onClick={handleFollowClose}>X</button>
        </div>
        <hr />
        <ul>
          {data?.follow?.map((item) => (
            <li key={item._id} className="follow-list">
              <a
                href={
                  objectId === item.follow._id
                    ? `/mypage/${objectId}`
                    : `/userpage/${item.follow._id}`
                }
                onClick={handleFollowClose}
              >
                <div>
                  <img src={item.follow.user_profile_img} alt="" />
                  <div className="follow-list-left">
                    <h5>{item.follow.id}</h5>
                  </div>
                </div>
              </a>
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

export default Follow;
