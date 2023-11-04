import '../App';
import React, { useRef, useState } from 'react';

const Board_list = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef();

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const handleOverlayClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    }
    const [modalButton, setModalButton] = useState(false)

    const modal_button_activate = (index) => {
        setModalButton(!modalButton); // 현재 상태의 반대값으로 설정
        if (index === selectedCheck) {
            // 이미 선택된 상태에서 다시 클릭하면 선택 해제
            setSelectedCheck(null);
        } else {
            // 다른 `modal_check`를 선택하면 해당 인덱스로 업데이트
            setSelectedCheck(index);
        }
    }

    const a = [1, 2, 3]

    const [selectedCheck, setSelectedCheck] = useState(null);

    return (
        <div className="Board_main">
            <header className='select_art'>
                <div className='select_art_content'>
                    <h3 className='select_title'>작품 전시를 해주세요 </h3>
                    <div className='art_list'>
                        <div className='art_plus' onClick={openModal}>
                            <h5>작품 이미지 추가</h5>
                        </div>
                        {/* 모달창이 뜨는 곳 입니다. */}
                        {isModalOpen && (
                            <div className="modal" onClick={handleOverlayClick}>
                                <h3>여기부터</h3>
                                <div className="modal_content" ref={modalRef}>
                                    <button className='modal_close' onClick={closeModal}>닫기</button>
                                    {a.map((a, i) => {
                                        return (
                                            <div className='modal_contetn_list'>
                                                <input className='modal_check' type='checkbox' checked={selectedCheck === 0}
                                                    onClick={() => { modal_button_activate(0) }} />
                                                <div className='modla_image'>대충 그림 가로세로 20%로할 예정</div>
                                                <div className='modal_prompt'>
                                                    <div className='modal_prompt_up'>
                                                        <h5 className='prompt__title'>위에 프롬프트</h5>
                                                        <p className='prompt__detail'>hyper-detailed front medium shot of Black short-haired girl, front view, center composition, dress shirt, by loish, trending on artstation hd, photorealistic anime girl render, artgeem, highly detailed face, digital art, impressionism,deep gaze, school background</p>
                                                    </div>
                                                    <div className='modal_prompt_down'>
                                                        <h5 className='prompt__title'>위에 프롬프트</h5>
                                                        <p className='prompt__detail'>hyper-detailed front medium shot of Black short-haired girl, front view, center composition, dress shirt, by loish, trending on artstation hd, photorealistic anime girl render, artgeem, highly detailed face, digital art, impressionism,deep gaze, school background</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <div className='modal__select_sure'>
                                        <button
                                            disabled={!modalButton}
                                            className='modal__select__sure__button'
                                            onClick={() => console.log(a)}
                                        >선택완료</button>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className='art_prompt'>
                            <div className='art_prt_S'>pormpt</div>
                            <div className='art_prt_S'>Negative</div>
                        </div>
                    </div>
                </div>
            </header>
            <footer className='Board_content'>
                <div className='Board_title'>
                    <textarea className='art_title_textarea' style={{ width: '100%', height: '80%' }} placeholder="아티스트님의 작품의 제목을 입력하세요"></textarea>
                </div>
                <div className='art_detail'>
                    <textarea className='art_detail_textarea' style={{ width: '100%', height: '80%' }} placeholder="작품을 설명해 주세요"></textarea>
                </div>
            </footer>
        </div>
    )
}

export default Board_list