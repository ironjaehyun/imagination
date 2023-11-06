import React from 'react';

const BigGnb = () => {
    return (
        <div>
            <div className="open-sidebar">
                <div className="open-nav-main">
                    <div className="image-icon">
                        <img src="./img/Imagination.png" alt="" className="imagination"></img>
                    </div>
                    <div className="fropile">
                        <img src="./img/Rectangle 17.png" alt="" className="Rectangle"></img>
                        <p>Leechi</p>
                        <div className="fropile-cnt">
                            <div>
                                <p>0</p>
                                <p>게시물</p>
                            </div>
                            <div className="fropile-cnt-div">
                                <p>0</p>
                                <p>팔로우</p>
                            </div>
                            <div>
                                <p>0</p>
                                <p>팔로워</p>
                            </div>
                        </div>
                    </div>
                    <div className="open-nav-icon">
                            <div className="hoverwhite">
                                <img src="./img/feed.png" className="nav-icon" />
                                <span>Feed</span>
                            </div>
                            <div className="hoverwhite">
                                <img src="./img/rank.png" className="nav-icon" />
                                <span>Rank</span>
                            </div>
                        <div className="hoverwhite">
                            <img src="./img/explore.png" className="nav-icon" />
                            <span>Explore</span>
                        </div>
                        <div className="hoverwhite">
                            <img src="./img/ai.png" className="nav-icon" />
                            <span>AI</span>
                        </div>
                    </div>
                </div>

                <div className="open-nav-battom">
                    <div className="line"></div>
                    <div className="hoverwhite setting" style={{ paddingRight: 20 }}>
                        <img src="./img/setting.png" className="nav-icon" />
                        <span>설정</span>
                    </div>
                    <div className="hoverwhite" style={{ marginBottom: 13 }}>
                        <img src="./img/logout.png" className="nav-icon" />
                        <span>로그아웃</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigGnb;
