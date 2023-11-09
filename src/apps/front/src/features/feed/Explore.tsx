import Lnb from '../shared/Lnb';
import BigGnb from '../shared/BigGnb';
import FeedLayout from './components/FeedLayout';
import Alertpop from '../shared/Alertpop';
import useModalAlert from './hooks/useModalAlert';

const Explore = () => {
  const { isAlertOpen, handleOpenAlert, handleCloseAlert } = useModalAlert();

  return (
    <div>
      <section>
        <Lnb />
        <FeedLayout onImageClick={handleOpenAlert} />
      </section>
      <BigGnb />
      <Alertpop isOpen={isAlertOpen} onClose={handleCloseAlert} />
    </div>
  );
};

export default Explore;
