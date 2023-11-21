import useMypage from '../hooks/useMypage';
import classNames from 'classnames';
import { Key } from 'react';
import MypageModal from './MypageModal';
import { Link } from 'react-router-dom';

const MypageTab = () => {
  const {
    setClickTab,
    handleCheckTab,
    clickTab,
    query: { data, isLoading },
    postModal,
    handlePostModalOpen,
  } = useMypage();
  const likeData = [
    {
      post_id: 1,
      img: 'https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=sph',
    },
    {
      post_id: 2,
      img: 'https://images.unsplash.com/photo-1484542603127-984f4f7d14cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  if (isLoading) return <div>Loding</div>;
  return (
    <>
      {postModal === true ? <MypageModal /> : null}
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
            {data.posts.map(
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
            {likeData.map((img) => {
              return <img src={img.img} key={img.post_id} />;
            })}
          </section>
        ) : null}
        {clickTab === 2 ? (
          <section className="mypage-images">
            {data.saved_images.map((img) => {
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
