import React from 'react';
import { Link } from 'react-router-dom';

const Gnb = () => {
  return (
    <div>
      <Link to={'/mypage'}>프로필</Link>
      <Link to={'/feed'}>피드</Link>
      <Link to={'/explore'}>explore</Link>
      <Link to={'/leader'}>leader</Link>
      <Link to={'/imagination'}>AI</Link>
    </div>
  );
};

export default Gnb;
