import Lnb from '../shared/Lnb';
import BigGnb from '../shared/BigGnb';
import Post from './components/Post';
import Alertpop from '../shared/Alertpop';
import useModalAlert from './hooks/useModalAlert';
import AlarmModal from '../shared/AlarmModal';
import useAlarmModal from './hooks/useAlarmModal';
const Feed = () => {
  const { isAlertOpen, handleOpenAlert, handleCloseAlert } = useModalAlert();
  const { isOpen, handleOpen, handleClose } = useAlarmModal();
  return (
    <div>
      <section className="gnb-bug-protector">
        <Lnb onClick={handleOpen} />
        <AlarmModal isOpen={isOpen} onClose={handleClose} />
        <Post onImageClick={handleOpenAlert} />
      </section>
      <BigGnb />
      <Alertpop isOpen={isAlertOpen} onClose={handleCloseAlert} />
    </div>
  );
};

export default Feed;
