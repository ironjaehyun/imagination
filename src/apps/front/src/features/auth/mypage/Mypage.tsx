import { useState } from 'react';
import MypageInfo from './components/MypageInfo';

const Mypage = () => {
  const [id] = useState<string>('hi');
  return (
    <div>
      <div className="page">
        <nav className="nav">nav</nav>
        <div className="mypage">
          <MypageInfo></MypageInfo>
          <hr />
          <ul>
            <li>posts</li>
            <li>like</li>
            <li>save</li>
          </ul>
          <footer className="mypage__footer">
            <h1>{id}</h1>
            {/* post가 클릭되면 post관련 나오고 like 나오고 등등등 나온다. */}
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
