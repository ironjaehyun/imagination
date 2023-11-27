import { PUBLIC_URL } from '../../../../../../../packages/models/port';
import useMypage from '../hooks/useMypage';

const EditUser: React.FC = () => {
  const {
    modalBubbling,
    handleEditModalClose,
    profileimg,
    backgroundimg,
    userId,
    handleBgFileChange,
    bgImage,
    imgUpload,
    handleProfileFileChange,
    handleStatusMsg,
    profileImage,
  } = useMypage();

  return (
    <div className="edit-modal" onClick={modalBubbling()}>
      <section className="edit-modal-box">
        <div>
          <div className="edit-modal-upload-bg">
            <input
              type="file"
              accept="image/*"
              className="edit-modal-upload--hidden-bg"
              onChange={handleBgFileChange}
            />
            <div>
              <img src={PUBLIC_URL + '/mypage/add.png'} />
              <span>배경 이미지</span>
            </div>
          </div>
          <img
            src={bgImage.preview === '' ? backgroundimg : bgImage.preview}
            className="edit-modal-background"
          ></img>
        </div>

        <div className="edit-modal-white">
          <img
            src={
              profileImage.preview === '' ? profileimg : profileImage.preview
            }
            className="edit-modal-photo"
          ></img>
          <input
            type="file"
            accept="image/*"
            className="edit-modal-upload--hidden"
            onChange={handleProfileFileChange}
          />
          <div className="edit-modal-upload">
            <img src={PUBLIC_URL + '/mypage/add.png'} />
            <span>프로필 이미지</span>
          </div>
        </div>
        <div className="edit-modal-inputs">
          <h3>{userId}</h3>
          <input
            type="text"
            onChange={handleStatusMsg}
            placeholder="상태메시지를 입력해주세요"
          />
        </div>
        <div className="edit-modal-footer">
          <button className="edit-modal-reset">초기화하기</button>
          <div>
            <button
              className="edit-modal-cancel"
              onClick={handleEditModalClose}
            >
              취소하기
            </button>
            <button className="edit-modal-change" onClick={imgUpload}>
              정보변경
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditUser;
