import React from 'react';
import { Link } from 'react-router-dom';

const Lnb = () => {
  return (
    <div>
      <Link to={'/create'}>create</Link>
      <button>알림창</button>
      <Link to={'/chat'}>chat</Link>
    </div>
  );
};

export default Lnb;
