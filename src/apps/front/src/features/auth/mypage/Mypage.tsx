import MypageInfo from './components/MypageInfo';
import Gnb from '../../shared/Gnb';
import EditUser from './components/EditUser';
import useMypage from './hooks/useMypage';
import { useState } from 'react';
import classNames from 'classnames';
const Mypage = () => {
  const { myPageModal, handleEditModalClose, handleEditModalOpen } =
    useMypage();
  const [clickTab, setClickTab] = useState(0);
  const handleCheckTab = (number: number) => {
    return number === clickTab;
  };
  return (
    <div>
      <div className="mypage-box">
        <Gnb />
        {myPageModal && <EditUser close={handleEditModalClose} />}
        <div className="mypage">
          <MypageInfo open={handleEditModalOpen} />
          <hr className="mypage-line" />
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
                <img
                  src="https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=sph"
                  alt=""
                />
                <img
                  src="https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=sph"
                  alt=""
                />
                <img
                  src="https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=sph"
                  alt=""
                />
              </section>
            ) : null}
            {clickTab === 1 ? (
              <section className="mypage-likes">
                <img
                  src="https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=sph"
                  alt=""
                />
              </section>
            ) : null}
            {clickTab === 2 ? (
              <section className="mypage-images">
                <img
                  src="https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=sph"
                  alt=""
                />
                <img
                  src="https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=sph"
                  alt=""
                />
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
