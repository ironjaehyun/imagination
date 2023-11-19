import useMypage from '../hooks/useMypage';
import classNames from 'classnames';
import useModalAlert from '../../../feed/hooks/useModalAlert';
import Alertpop from '../../../shared/Alertpop';
import { Key } from 'react';

const MypageTab = () => {
  const {
    setClickTab,
    handleCheckTab,
    clickTab,
    query: { data, isLoading },
  } = useMypage();
  const { isAlertOpen, handleOpenAlert, handleCloseAlert } = useModalAlert();
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

  const savedImgData = [
    {
      post_id: 1,
      img: 'https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=sph',
    },
    {
      post_id: 2,
      img: 'https://images.unsplash.com/photo-1484542603127-984f4f7d14cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      post_id: 3,
      img: 'https://i.pinimg.com/originals/d2/11/77/d21177861d4c3ee30af8ee649a033b91.jpg',
    },
  ];
  if (isLoading) return <div>Loding</div>;
  return (
    <>
      <Alertpop isOpen={isAlertOpen} onClose={handleCloseAlert} />
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
            {data.map(
              (item: {
                post_img1: string | undefined;
                post_id: Key | null | undefined;
              }) => {
                return (
                  <img
                    src={item.post_img1}
                    onClick={handleOpenAlert}
                    key={item.post_id}
                  />
                );
              },
            )}
          </section>
        ) : null}
        {clickTab === 1 ? (
          <section className="mypage-likes">
            {likeData.map((img) => {
              return (
                <img
                  src={img.img}
                  onClick={handleOpenAlert}
                  key={img.post_id}
                />
              );
            })}
          </section>
        ) : null}
        {clickTab === 2 ? (
          <section className="mypage-images">
            {savedImgData.map((img) => {
              return (
                <img
                  src={img.img}
                  onClick={handleOpenAlert}
                  key={img.post_id}
                />
              );
            })}
          </section>
        ) : null}
      </div>
    </>
  );
};

export default MypageTab;
