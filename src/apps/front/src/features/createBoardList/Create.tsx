import BigGnb from '../shared/BigGnb';
import BoardModal from './component/BoardModal'; // 모달 컴포넌트 임포트
import BoardList from './component/BoardList';
import useCreatList from './hooks/useCreateList';

const Create = () => {
  const { isModalOpen } = useCreatList();
  return (
    <div className="create-list">
      {isModalOpen && <BoardModal />}
      <BigGnb />
      <BoardList />
    </div>
  );
};

export default Create;
