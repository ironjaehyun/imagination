import React from 'react';
import Gnb from './components/Gnb';
import Lnb from './components/Lnb';

const Feed = () => {
  return (
    <div>
      <main className="MainContainer">
        <Lnb></Lnb>
      </main>
      <Gnb></Gnb>
    </div>
  );
};

export default Feed;
