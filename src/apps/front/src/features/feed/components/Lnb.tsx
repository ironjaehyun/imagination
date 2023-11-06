import React from 'react';
import { Link } from 'react-router-dom';

const Lnb = () => {
  return (
    <div className='Lnb'>
      <form action="" className='form'>
        <input type="text" className='search-input' />
      </form>
      <button className='create-btn'>
        <Link to={'/create'}>+ Create</Link>
      </button>
      <div className='allim'>
        <img src="./img/alarm.png" alt="" className='alarm' />
        <img src="./img/share.png" alt="" className='chat'/>
      </div>
    </div>
  );
};

export default Lnb;
