import { Link } from 'react-router-dom';
import { PUBLIC_URL } from '../../../../../../../packages/models/port';
import useMypage from '../hooks/useMypage';

const LikeModal = () => {
  const {
    modalBubbling,
    handleLikeModalClose,
    query: { data },
    postId,
  } = useMypage();
  const post = data.like;

  const targetPost = post.find(
    (postItem: { _id: string }) => postItem._id === postId,
  );

  return (
    <div className="mypage-modal-bg" onClick={modalBubbling()}>
      <div className="mypage-modal">
        <div className="mypage-modal-user">
          <Link
            to={`/userpage/${targetPost.owner._id}`}
            onClick={handleLikeModalClose}
          >
            <div>
              <img
                className="user-profile"
                src={targetPost.owner.user_profile_img}
                alt="profile"
              />
              <h5>{targetPost.owner.id}</h5>
            </div>
          </Link>
          <img
            src={PUBLIC_URL + '/img/close.png'}
            onClick={handleLikeModalClose}
            alt=""
          />
        </div>
        <hr className="modal-line" />
        <div className="mypage-modal-info">
          <img src={targetPost.post_img1} alt="" className="main-img" />
          <div className="info">
            <h1 className="title">{targetPost.post_title}</h1>
            <p className="desc">{targetPost.post_content}</p>
            <span className="hashtag">{targetPost.post_hashtag}</span>
            <div className="btns">
              <button className="like">
                <img src={PUBLIC_URL + '/img/filledlike.png'} alt="" />
                <span>{targetPost.like.length}</span>
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
              <p>{targetPost.post_prompt}</p>
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
              <p>{targetPost.post_negative_prompt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeModal;
