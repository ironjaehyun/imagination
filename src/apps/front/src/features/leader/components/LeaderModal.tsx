//LeaderModal.tsx
import { Link } from 'react-router-dom';
import useCopy from '../../shared/hooks/useCopy';
// import { PostType } from '../../shared/types/PostType';
import useLikes from '../../feed/hooks/useLikes';
import './_leaderModal.scss';
// import { PUBLIC_URL } from '../../../../../../../packages/models/port';

interface LeaderModalProps {
  isOpen: boolean;
  onClose: () => void;

  data: // Allow null as a possible type
  {
    // Define the structure of 'data' here
    // userProfileImg: string
    img: string;
    title: string;
    content: string;
    likeCount: number;
    prompt: string;
    Nprompt: string;
    dt: string;
  };
}

// const data = post && {
//     userProfileImg: post.owner.user_profile_img,
//     userName: post.owner.id,
//     objectId: post.owner._id,
//     MainImg: [post.post_img1, post.post_img2, post.post_img3, post.post_img4],
//     title: post.post_title,
//     content: post.post_content,
//     hashtags: post.post_hashtag,
//     likeCount: post.likes,
//     prompt: post.post_prompt,
//     Nprompt: post.post_negative_prompt,
// };

const LeaderModal: React.FC<LeaderModalProps> = ({ isOpen, onClose, data }) => {
  // if (!data || typeof data._id !== 'string') {
  //     console.error("The 'data' object must have an '_id' property of type string.");
  //     return null;
  // }

  const { isCopied: promptCopied, handleCopy: handleCopyPrompt } = useCopy();
  const {
    isCopied: negativePromptCopied,
    handleCopy: handleCopyNegativePrompt,
  } = useCopy();
  // const objectId = sessionStorage.getItem('_id');

  const { isLiked, handleLike } = useLikes(
    data
      ? [
          // data
        ]
      : [],
  );
  // const [isLiked, handleLike] = useLikes([{ _id: data._id, ...data }]);

  if (!isOpen || !data) {
    return null;
  }

  // const targetPost = post.find(
  //     (postItem: { _id: string }) => postItem._id === postId,
  // );

  return (
    <div className="leader-modal-bg" onClick={onClose}>
      <div className="leader-modal" onClick={(e) => e.stopPropagation()}>
        <div className="leader-modal-user">
          <Link
            to={`/explore
                        `}
            // /userpage/${targetPost.owner._id}
            //   <Link to={`/userpage/${data.title}`}>

            // onClick={handlePostModalClose}
          >
            <div>
              <img
                className="user-profile"
                src={'./public/img/card-img.png'}
                // src={targetPost.owner.user_profile_img}
                alt="profile"
              />
              <h5>
                imagination
                {/* {targetPost.owner.id} */}
              </h5>
            </div>
          </Link>

          <button className="close-button" onClick={onClose}>
            <img
              src={
                // PUBLIC_URL +
                './public/img/close.png'
              }
              // onClick={handlePostModalClose}
              alt="close"
            />
          </button>
        </div>
        <hr className="modal-line" />

        <div className="leader-modal-info">
          <img src={data.img} alt={data.title} className="main-img" />
          <div className="info">
            <h1 className="title">{data.title}</h1>
            <p className="desc">{data.content}</p>
            <span className="hashtag">
              #imagination
              {/* {data.post_hashtag} */}
            </span>
            <div className="btns">
              <button
                className="like"
                // onClick={() => handleLike(post._id)}
                onClick={() => handleLike(data.title)}
              >
                <img
                  className="top-three-like"
                  src={
                    // "./public/img/like.png"
                    isLiked[data.title]
                      ? './public/img/filledlike.png'
                      : './public/img/like.png'
                  }
                  alt="Like"
                  // onClick={() => openModal(value)}
                />

                {data.likeCount}
              </button>
              <Link to={'/imagination'}>
                <button className="create">
                  <img
                    src={
                      // PUBLIC_URL +
                      '/img/CreateImage.png'
                    }
                    alt=""
                  />
                  <span>Create Image</span>
                </button>
              </Link>
              {/* Add more buttons or content as needed */}
            </div>
          </div>
        </div>
        <hr className="modal-line" />
        <div className="modal-prompt">
          <div className="prompt">
            <div className="top">
              <h1>Prompt</h1>
              <span
                className="copy"
                onClick={() => handleCopyPrompt(data.prompt)}
              >
                <img
                  src={
                    // PUBLIC_URL +
                    '/img/copy.png'
                  }
                  alt="prompt"
                />{' '}
                <span>copy</span>
                {promptCopied && (
                  <span className="copy-tooltip">✓ Copied!</span>
                )}
              </span>
            </div>
            <div className="bottom">
              <p>{data.prompt}</p>
              {/* {targetPost.post_prompt} */}
              {/* <p>catcatcatcatcatcatcatcatcatcat</p> */}
            </div>
          </div>
          <div className="negative">
            <div className="top">
              <h1>Negative Prompt</h1>
              <span
                className="copy"
                onClick={() => handleCopyNegativePrompt(data.Nprompt)}
              >
                <img
                  src={
                    // PUBLIC_URL +
                    '/img/copy.png'
                  }
                  alt="negative"
                />{' '}
                <span>copy</span>
                {negativePromptCopied && (
                  <span className="copy-tooltip">✓ Copied!</span>
                )}
              </span>
            </div>
            <div className="bottom">
              <p>{data.Nprompt}</p>
              {/* {targetPost.post_negative_prompt} */}
              {/* <p>dogdogdogdogdogdogdogdogdogdog</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderModal;
