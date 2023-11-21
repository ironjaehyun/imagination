import Lnb from '../shared/Lnb';
import BigGnb from '../shared/BigGnb';
import Post from './components/Post';
import Alertpop from '../shared/Alertpop';
import useModalAlert from './hooks/useModalAlert';

const Feed = () => {
  const { isAlertOpen, handleOpenAlert, handleCloseAlert, selectedPost } =
    useModalAlert();
  return (
    <div>
      <section className="gnb-bug-protector">
        <Lnb />
        <Post onImageClick={handleOpenAlert} />
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

export default Feed;
