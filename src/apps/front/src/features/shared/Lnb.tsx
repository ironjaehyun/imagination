import React, { Dispatch } from 'react';
import axios from './../auth/api/auth';
import LnbRight from './LnbRight';
import { SetStateAction } from 'jotai';
interface LnbProps {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}
const Lnb = ({ inputValue, setInputValue }: LnbProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('/Lnb/Postssearch', { inputValue });
      setInputValue('');
      return response.data;
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
