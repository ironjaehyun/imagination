import MypageInfo from './components/MypageInfo';
import Gnb from '../../shared/Gnb';
import EditUser from './components/EditUser';
import useMypage from './hooks/useMypage';
import classNames from 'classnames';

const Mypage = () => {
  const {
    myPageModal,
    handleEditModalClose,
    handleEditModalOpen,
    clickTab,
    setClickTab,
    handleCheckTab,
  } = useMypage();

  const imageData = [
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
    {
      post_id: 4,
      img: 'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148901163.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697500800&semt=sph',
    },
  ];
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

  return (
    <div>
      <div className="mypage-box">
        <Gnb />
        {myPageModal && <EditUser close={handleEditModalClose} />}
        <div className="mypage">
          <MypageInfo open={handleEditModalOpen} />
          <div className="mypage-line-box">
            <hr className="mypage-line" />
          </div>
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
                {imageData.map((img) => {
                  return <img src={img.img} key={img.post_id} />;
                })}
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
                {savedImgData.map((img) => {
                  return <img src={img.img} key={img.post_id} />;
                })}
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
