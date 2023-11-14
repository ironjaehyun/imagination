import useMypage from '../hooks/useMypage';

const EditUser = ({ close }) => {
  const { modalBubbling } = useMypage();
  return (
    <div className="edit-modal" onClick={modalBubbling(close)}>
      <section className="edit-modal-box">
        <img
          src="https://img.freepik.com/free-photo/flowing-purple-mountain-spiral-a-bright-imagination-generated-by-ai_188544-9853.jpg"
          className="edit-modal-background"
        ></img>
        <div className="edit-modal-white">
          <img
            src="https://img.freepik.com/premium-photo/cool-wolf-illustration-design_780593-1864.jpg"
            className="edit-modal-photo"
          ></img>
          <input type="file" className="edit-modal-upload--hidden" />
          <div className="edit-modal-upload">
            <img src="mypage/add.png" alt="" />
            <span>프로필 이미지</span>
          </div>
        </div>
        <div className="edit-modal-inputs">
          <input type="text" placeholder="이름 변경" />
          <input type="text" placeholder="상태메시지 변경하기" />
        </div>
        <div className="edit-modal-footer">
          <button className="edit-modal-reset">초기화하기</button>
          <div>
            <button className="edit-modal-cancel" onClick={close}>
              취소하기
            </button>
            <button className="edit-modal-change">정보변경</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditUser;
