import { useState, ChangeEvent } from 'react';
import useMypage from '../hooks/useMypage';

const EditUser = ({ close }: { close: () => void }) => {
  const { modalBubbling } = useMypage();
  const [imageSrc, setImageSrc] = useState<string>(
    'https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=sph',
  );
  const [profileImageSrc, setProfileImageSrc] = useState<string>(
    'https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699833600&semt=sph',
  );

  const onBackgroundImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
    } else {
      console.error('올바른 형식의 파일이 아닙니다.');
    }
  };
  const onProfileImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setProfileImageSrc(reader.result as string);
      };
    } else {
      console.error('올바른 형식의 파일이 아닙니다.');
    }
  };
  return (
    <div className="edit-modal" onClick={modalBubbling(close)}>
      <section className="edit-modal-box">
        <div>
          <div className="edit-modal-upload-bg">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => onBackgroundImageUpload(e)}
              className="edit-modal-upload--hidden-bg"
            />
            <div>
              <img src="mypage/add.png" />
              <span>배경 이미지</span>
            </div>
          </div>
          <img src={imageSrc} className="edit-modal-background"></img>
        </div>

        <div className="edit-modal-white">
          <img src={profileImageSrc} className="edit-modal-photo"></img>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onProfileImageUpload(e)}
            className="edit-modal-upload--hidden"
          />
          <div className="edit-modal-upload">
            <img src="mypage/add.png" />
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
