import Lnb from './components/Lnb';
import BigGnb from './components/BigGnb';
import Post from './components/Post';
import Alertpop from './components/Alertpop';
import useModalAlert from './hooks/useModalAlert';

const Feed = () => {
  const { isAlertOpen, handleOpenAlert, handleCloseAlert } = useModalAlert();

  return (
    <div>
      <main>
        <Lnb />
        <Post onImageClick={handleOpenAlert} /> 
      </main>
      <BigGnb />
      <Alertpop isOpen={isAlertOpen} onClose={handleCloseAlert} />
    </div>
  );
};

export default Feed;
