import Lnb from '../shared/Lnb';
import BigGnb from '../shared/BigGnb';
import FeedLayout from './components/FeedLayout';
import Alertpop from '../shared/Alertpop';
import useModalAlert from './hooks/useModalAlert';

const Explore = () => {
  const { isAlertOpen, handleOpenAlert, handleCloseAlert, selectedPost } =
    useModalAlert();

  return (
    <div>
      <section className="gnb-bug-protector">
        <Lnb />
        <FeedLayout onImageClick={handleOpenAlert} />
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
