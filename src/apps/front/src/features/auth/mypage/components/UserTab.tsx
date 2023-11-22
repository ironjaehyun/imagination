import useMypage from '../hooks/useMypage';
import MypageModal from './MypageModal';

const UserTab = () => {
  const {
    query: { data },
    postModal,
    handlePostModalOpen,
  } = useMypage();

  return (
    <>
      {postModal === true ? <MypageModal /> : null}
      <div className="mypage-footer">
        <section className="mypage-posts">
          {data?.posts?.map(
            (item: { post_img1: string | undefined; _id: string }) => {
              return (
                <img
                  onClick={() => handlePostModalOpen(item._id)}
                  src={item.post_img1}
                  key={item._id}
                />
              );
            },
          )}
        </section>
      </div>
    </>
  );
};

export default UserTab;
