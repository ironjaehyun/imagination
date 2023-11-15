import MypageInfo from './components/MypageInfo';
import Gnb from '../../shared/Gnb';
import EditUser from './components/EditUser';
import useMypage from './hooks/useMypage';
import MypageTab from './components/MypageTab';

const Mypage = () => {
  const { myPageModal } = useMypage();

  return (
    <div>
      <div className="mypage-box">
        <Gnb />
        {myPageModal && <EditUser />}
        <div className="mypage">
          <MypageInfo />
          <div className="mypage-line-box">
            <hr className="mypage-line" />
          </div>
          <MypageTab />
        </div>
      </div>
    </div>
  );
};

export default Mypage;
