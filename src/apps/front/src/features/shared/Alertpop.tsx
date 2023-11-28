import { FunctionComponent, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import useCopy from './hooks/useCopy';
import { PostType } from './types/PostType';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import { useState } from 'react';
// Carousel responsive 설정
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export type AlertpopProps = {
  isOpen: boolean;
  onClose: () => void;
  post: PostType | null;
};

const Alertpop: FunctionComponent<AlertpopProps> = ({
  isOpen,
  onClose,
  post,
}) => {
  // copy
  const { isCopied: promptCopied, handleCopy: handleCopyPrompt } = useCopy();
  const {
    isCopied: negativePromptCopied,
    handleCopy: handleCopyNegativePrompt,
  } = useCopy();

  const handleBgClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    onClose();
  };

  const handleContentClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  const data = post && {
    userProfileImg: post.owner.user_profile_img,
    userName: post.owner.id,
    objectId: post.owner._id,
    MainImg: [post.post_img1, post.post_img2, post.post_img3, post.post_img4],
    title: post.post_title,
    content: post.post_content,
    hashtags: post.post_hashtag,
    likeCount: post.like.length,
    prompt: post.post_prompt,
    Nprompt: post.post_negative_prompt,
  };
  const objectId = sessionStorage.getItem('_id');

  const handleLike = (postId: string) => {
    const isLiked = likeImage === './img/like.png';
    const res = axios.post('http://localhost:3000/Feed/likes', {
      userId: objectId,
      postId: postId,
      isLiked: isLiked,
    });
    console.log(res);
    if (isLiked) {
      setLikeImage('./img/filledlike.png');
    } else {
      setLikeImage('./img/like.png');
    }
  };
  const [likeImage, setLikeImage] = useState('./img/like.png');
  return (
    <div className={`alertpop ${isOpen ? 'open' : ''}`} onClick={handleBgClick}>
      {isOpen && data && (
        <div className="modal-bg">
          <div className="modal-white" onClick={handleContentClick}>
            <div className="modal-header">
              <a
                href={
                  data.objectId === objectId
                    ? `/mypage/${objectId}`
                    : `/userpage/${data.objectId}`
                }
              >
                <div className="modal-header-profile">
                  <img
                    src={data.userProfileImg}
                    alt=""
                    className="modal-header-img"
                  />
                  <span>{data.userName}</span>
                </div>
              </a>
              <button onClick={onClose}>
                <img src="./img/close.png" alt="" />
              </button>
            </div>
            <div className="modal-main">
              <Carousel responsive={responsive} className="modal-main-img">
                {data.MainImg.filter(Boolean).map((img, index) => (
                  <div key={index} className="modal-main-imgcnt">
                    <img src={img} alt="" />
                  </div>
                ))}
              </Carousel>
              <div className="modal-main-right-div">
                <div className="modal-main-right">
                  <h3>{data.title}</h3>
                  <p>{data.content}</p>
                </div>
                <div className="modal-main-right-battom">
                  <h5>{data.hashtags.map((tag) => `#${tag}`).join(', ')}</h5>
                  <div className="modal-Btn">
                    <button
                      className="modal-LikeBtn"
                      onClick={() => {
                        handleLike(post._id);
                      }}
                    >
                      <img src={likeImage} alt="" />
                      <span>{data.likeCount}</span>
                    </button>
                    <button className="modal-CreateImage">
                      <Link to={'/imagination'}>
                        <img src="./img/CreateImage.png" alt="" />
                        <span>Create Image</span>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <div>
                <div className="modal-footer-prompt">
                  <h4>prompt</h4>
                  <div
                    onClick={() => handleCopyPrompt(data.prompt)}
                    className="modal-copy"
                  >
                    <img src="./img/copy.png" alt="" />
                    <span>copy</span>
                    {promptCopied && (
                      <span className="copy-tooltip">✓ Copied!</span>
                    )}
                  </div>
                </div>
                <div className="modal-footer-text">
                  <p>{data.prompt}</p>
                </div>
              </div>
              <div className="prompt-div">
                <div className="modal-footer-Nagative">
                  <h4>Negatice Prompt</h4>
                  <div
                    onClick={() => handleCopyNegativePrompt(data.Nprompt)}
                    className="modal-copy"
                  >
                    <img src="./img/copy.png" alt="" />
                    <span>copy</span>
                    {negativePromptCopied && (
                      <span className="copy-tooltip">✓ Copied!</span>
                    )}
                  </div>
                </div>
                <div className="modal-footer-text">
                  <p>{data.Nprompt}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alertpop;
