import React from 'react';
import Article_yj from './Article_yj/Article_yj';
import Story_yj from './Stories_yj/Story_yj';
import Recommend_yj from './Recommends_yj/Recommend_yj';
import './Main_yj.scss'
import logo from "../../../images/YJ/logo_text.png"
class Main_yj extends React.Component {

        
        render() {
            
            return(
                <div className="Main_yj">
                    <nav className="navBar">
                        <div className="navBox">
                            <div className="smallLogoWrap">
                                <img className="smallLogo1" alt="logo" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" />
                                <img className="smallLogo2" alt="logo" src={logo} />
                            </div>
                            <div className="searchBox">
                                <input type="text" placeholder="검색" />
                            </div>
                            <div className="sideIcons">
                                <div className="explorIcon">
                                    <img className="icons" alt="explor Icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
                                </div>
                                <div className="likeIcon">
                                    <img className="icons" alt="like Icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                                </div>
                                <div className="ProfileIcon">
                                    <img className="iconsL" alt="profile Icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
                                </div>
                            </div>
                        </div>
                    </nav>
                    <main className="Main">
                        <div className="feedWrap">
                            <Article_yj />
                            <Article_yj />
                        </div>
                        <div className="main-right">
        
                            <div className="profileArea">
                                <div className="profileAreaImg">
                                    <img alt="profile" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/91933099_242760747110457_2301125283991781376_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=_CVJGWghKOoAX8qY8H6&oh=922ad5f63262e61d1ac71ff21f5ee4a8&oe=5ED1BA3A" />
                                </div>
                                <div className="profileAreaName">
                                    <p>chrishemsworth</p>
                                </div>
                            </div>
        
        
                            <div className="storyArea">
                                <div className="storyAreaTitleWrap">
                                    <div className="storyAreaTitle">
                                        <p>스토리</p>
                                    </div>
                                    <div className="storyAreaMore">
                                        <p><a href="https://www.instagram.com/chrishemsworth/">모두 보기</a></p>
                                    </div>
                                </div>
                                <div className="storyAreaStories">
                                    <Story_yj />
                                    <Story_yj />
                                    <Story_yj />
                                </div>
                            </div>
        
                            <div className="recommendArea">
                                <div className="recommendAreaTitleWrap">
                                    <div className="recommendAreaTitle">
                                        <p>회원님을 위한 추천</p>
                                    </div>
                                    <div className="recommendAreaMore">
                                        <p><a>모두 보기</a></p>
                                    </div>
                                </div>
                                <div className="recommendWrap">
                                    <Recommend_yj />
                                    <Recommend_yj />
                                    <Recommend_yj />
                                </div>
                            </div>
        
                            <div className="infoArea">
                                <nav className="infoContentsWrap">
                                    <ul>
                                        <li className="infoContents"><a target="_blank">소개</a></li>
                                        <li className="infoContents"><a target="_blank">도움말</a></li>
                                        <li className="infoContents"><a target="_blank">홍보센터</a></li>
                                        <li className="infoContents"><a target="_blank">API</a></li>
                                        <li className="infoContents"><a target="_blank">채용 정보</a></li>
                                        <li className="infoContents"><a target="_blank">개인정보처리방침</a></li>
                                        <li className="infoContents"><a target="_blank">약관</a></li>
                                        <li className="infoContents"><a target="_blank">위치</a></li>
                                        <li className="infoContents"><a target="_blank">인기 계정</a></li>
                                        <li className="infoContents"><a target="_blank">해시태그</a></li>
                                        <li className="infoContents"><a target="_blank">언어</a></li>
                                    </ul>
                                </nav>
                                <span className="infoText">© 2020 Instagram from Facebook</span>
                            </div>
                        </div>
                    </main>
                </div>
            );
        }
}


export default Main_yj;