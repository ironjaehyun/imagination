import Lnb from '../shared/Lnb';
import BigGnb from '../shared/BigGnb';
import FeedLayout from './components/FeedLayout';
import Alertpop from '../shared/Alertpop';
import useModalAlert from './hooks/useModalAlert';
import { useState } from 'react';

const Explore = () => {
  const [inputValue, setInputValue] = useState('');
  const { isAlertOpen, handleOpenAlert, handleCloseAlert, selectedPost } =
    useModalAlert();

  return (
    <div>
      <section className="gnb-bug-protector">
        <Lnb inputValue={inputValue} setInputValue={setInputValue} />
        <FeedLayout onImageClick={handleOpenAlert} inputValue={inputValue} />
      </section>
      <BigGnb />
      <Alertpop
        isOpen={isAlertOpen}
        onClose={handleCloseAlert}
        post={selectedPost}
      />
    </div>
  );
};

export default Explore;
