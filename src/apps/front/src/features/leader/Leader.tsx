//Leader.tsx
import React from 'react';
import Topheader from './components/Topheader';
import Topthree from './components/Topthree';
import Topten from './components/Topten';
import Toptail from './components/Toptail';
import BigGnb from '../shared/BigGnb';
import './components/_topten.scss';

const Leader: React.FC = () => {
  return (
    <>
      <BigGnb />
      <div className="Leader">
        <Topheader />
        <Topthree />
        <Topten />
        <Toptail />
      </div>
    </>
  );
};

export default Leader;
