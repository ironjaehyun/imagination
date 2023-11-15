import useMypage from '../hooks/useMypage';

const EditUser = () => {
  const {
    modalBubbling,
    profileUpload,
    backgroundUpload,
    EditStatusMsg,
    EditUserName,
    handleEditUser,
    handleEditModalClose,
    profileInput,
    backgroundInput,
  } = useMypage();

  return (
    <div className="edit-modal" onClick={modalBubbling()}>
      <section className="edit-modal-box">
        <div>
          <div className="edit-modal-upload-bg">
            <input
              type="file"
              accept="image/*"
              onChange={backgroundUpload}
              className="edit-modal-upload--hidden-bg"
            />
            <div>
              <img src="mypage/add.png" />
              <span>배경 이미지</span>
            </div>
          </div>
          <img src={backgroundInput} className="edit-modal-background"></img>
        </div>

        <div className="edit-modal-white">
          <img src={profileInput} className="edit-modal-photo"></img>
          <input
            type="file"
            accept="image/*"
            onChange={profileUpload}
            className="edit-modal-upload--hidden"
          />
          <div className="edit-modal-upload">
            <img src="mypage/add.png" />
            <span>프로필 이미지</span>
          </div>
        </div>
        <div className="edit-modal-inputs">
          <input type="text" placeholder="이름 변경" onChange={EditUserName} />
          <input
            type="text"
            placeholder="상태메시지 변경하기"
            onChange={EditStatusMsg}
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
            <button className="edit-modal-change" onClick={handleEditUser}>
              정보변경
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditUser;
