import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../../../../../packages/models/port';
import useMypage from '../hooks/useMypage';

const MypageModal = () => {
  const {
    modalBubbling,
    handlePostModalClose,
    query: { data },
  } = useMypage();
  const post = data.posts;
  return (
    <div className="mypage-modal-bg" onClick={modalBubbling()}>
      <div className="mypage-modal">
        <div className="mypage-modal-user">
          <div>
            <img
              className="user-profile"
              src={data.user_profile_img}
              alt="profile"
            />
            <h5>{data.id}</h5>
          </div>
          <img
            src={PUBLIC_URL + '/img/close.png'}
            onClick={handlePostModalClose}
            alt=""
          />
        </div>
        <hr className="modal-line" />
        <div className="mypage-modal-info">
          <img src={post[0].post_img1} alt="" className="main-img" />
          <div className="info">
            <h1 className="title">{post[0].post_title}</h1>
            <p className="desc">{post[0].post_content}</p>
            <span className="hashtag">{post[0].post_hashtag}</span>
            <div className="btns">
              <button className="like">
                <img src={PUBLIC_URL + '/img/like.png'} alt="" />
                <span>하트</span>
              </button>
              <Link to={'/imagination'}>
                <button className="create">
                  <img src={PUBLIC_URL + '/img/CreateImage.png'} alt="" />
                  <span>Create Image</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <hr className="modal-line" />
        <div className="modal-prompt">
          <div className="prompt">
            <div className="top">
              <h1>Prompt</h1>
              <span className="copy">
                <img src={PUBLIC_URL + '/img/copy.png'} alt="" />{' '}
                <span>copy</span>
              </span>
            </div>
            <div className="bottom">
              <p>{post[0].post_prompt}</p>
            </div>
          </div>
          <div className="negative">
            <div className="top">
              <h1>Negative Prompt</h1>
              <span className="copy">
                <img src={PUBLIC_URL + '/img/copy.png'} alt="" />{' '}
                <span>copy</span>
              </span>
            </div>
            <div className="bottom">
              <p>{post[0].post_negative_prompt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypageModal;
