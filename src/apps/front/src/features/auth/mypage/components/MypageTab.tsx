import useMypage from '../hooks/useMypage';
import classNames from 'classnames';
import { Key } from 'react';
import MypageModal from './MypageModal';
import { Link } from 'react-router-dom';
import LikeModal from './LikeModal';

const MypageTab = () => {
  const {
    setClickTab,
    handleCheckTab,
    clickTab,
    query: { data, isLoading },
    postModal,
    handlePostModalOpen,
    handleLikeModalOpen,
    likeModal,
  } = useMypage();
  if (isLoading) return <div>Loding</div>;
  return (
    <>
      {postModal === true ? <MypageModal /> : null}
      {likeModal === true ? <LikeModal /> : null}
      <div className="mypage-tab">
        <ul className="mypage-tab-list">
          <li
            onClick={() => {
              setClickTab(0);
            }}
            className={classNames('tab-uncheck', {
              'tab-check': handleCheckTab(0),
            })}
          >
            게시물
          </li>
          <li
            onClick={() => {
              setClickTab(1);
            }}
            className={classNames('tab-uncheck', {
              'tab-check': handleCheckTab(1),
            })}
          >
            좋아요
          </li>
          <li
            onClick={() => {
              setClickTab(2);
            }}
            className={classNames('tab-uncheck', {
              'tab-check': handleCheckTab(2),
            })}
          >
            저장된 이미지
          </li>
        </ul>
      </div>
      <div className="mypage-footer">
        {clickTab === 0 ? (
          <section className="mypage-posts">
            {data.posts
              .reverse()
              .map(
                (item: {
                  post_img1: string | undefined;
                  _id: Key | null | undefined;
                }) => {
                  return (
                    <img
                      onClick={() => handlePostModalOpen(item._id)}
                      src={item.post_img1}
                      key={item._id}
                    />
                  );
                },
              )}
          </section>
        ) : null}
        {clickTab === 1 ? (
          <section className="mypage-likes">
            {data.like.reverse().map((img) => {
              return (
                <img
                  onClick={() => handleLikeModalOpen(img._id)}
                  src={img.post_img1}
                  key={img._id}
                />
              );
            })}
          </section>
        ) : null}
        {clickTab === 2 ? (
          <section className="mypage-images">
            {data.saved_images.reverse().map((img) => {
              return (
                <Link to={'/imagination'}>
                  <img src={img.img1} key={img.post_id} />
                </Link>
              );
            })}
          </section>
        ) : null}
      </div>
    </>
  );
};

export default MypageTab;
