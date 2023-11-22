import React, { useState } from 'react';
import axios from './../auth/api/auth';
import LnbRight from './LnbRight';

const Lnb = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('/Lnb/Postssearch', { inputValue });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Lnb">
      <form action="" className="Lnb-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="Lnb-search-input"
          value={inputValue}
          onChange={handleInputChange}
        />
      </form>
      <LnbRight />
    </div>
  );
};

export default Lnb;
