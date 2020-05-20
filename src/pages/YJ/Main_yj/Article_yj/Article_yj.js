import React from 'react';
import CommentList_yj from './Comment_yj/CommentList_yj';
import './Article_yj.scss';

class Article_yj extends React.Component {

    id = 1
    constructor() {
        super()
        this.state = {        
            input: '',   
            comments : [
                { id: 0, text: 'test comment' }
            ],
            activeCommentBtn : false
        }
    }

    activeBtn = (event) => {
        (event.target.value).length > 0 
        ? this.setState({ activeCommentBtn : true}) 
        : this.setState({ activeCommentBtn : false}) 
        
    }

    handleChange = (e) => {
        this.setState({
            input : e.target.value
        })
    }

    handleCreate = () => {
        const { input, comments } = this.state;
        this.setState({
            input: '',
            comments: comments.concat({
                id: this.id++,
                text: input
            })
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleCreate();
        }
    }
 
    render() {
        // 비구조화 할당
        const { input, comments } = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress
        } = this;

        return(
            <div className="Article">
                <article>
                    <header className="headerWrap">
                        <div className="feedProfileImg">
                            <span className="feedProfileImgCut">
                                <img alt="profile" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/91933099_242760747110457_2301125283991781376_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=_CVJGWghKOoAX8qY8H6&oh=922ad5f63262e61d1ac71ff21f5ee4a8&oe=5ED1BA3A" />
                            </span>
                        </div>
                        <div className="feedProfileName">
                            <h1>chrishemsworth</h1>
                        </div>
                        <div className="moreBtn">
                            <img alt ="more button" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" />
                        </div>
                    </header>
                    <div className="imageArea">
                        <img alt="Filming a movie" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/95327031_534402874180705_4639342074206727486_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=rj98_XYriqsAX9mVVXj&oh=a75076577de0e123fa8bf4f28a1b5cb1&oe=5ECFFAB8" />
                    </div>
                    <div className="contentsArea">
                        <section className="contentsIconBar">
                            <span className="contentsIcon heartIcon">
                                <img alt="heart icon" className="heartIconDefault" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                            </span>
                            <span className="contentsIcon">
                                <img alt="comment icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" />
                            </span>
                            <span className="contentsIcon">
                                <img alt="share icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" />
                            </span>
                            <span className="contentsIcon">
                                <img alt="bookmark icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" />
                            </span>
                        </section>
                        <section className="likeUsersWrap">
                            <div className="likeUsers">
                                <p><a className="goLikeUser" href="https://www.instagram.com/wecode_bootcamp/">wecode</a> 님외 <a className="goLikeUser" href="https://www.instagram.com/chrishemsworth/">여러 명</a>이 좋아합니다</p>
                            </div>
                        </section>
                        <div className="userComment">
                            <div className="commentTitle">
                                <p><a className="goUser" href="https://www.instagram.com/wecode_bootcamp/">chrishemsworth</a> 촬영중!</p>
                            </div>
                            <div className="showComments">
                                <a href="https://www.instagram.com/wecode_bootcamp/">댓글 <span>113</span>개 모두 보기</a>
                            </div>
                            <div className="userCommentBox">
                                <a className="goUser" href="https://www.instagram.com/chrishemsworth/">chrishemsworth</a>
                                <span className="userCommentText">Love these shots</span>
                                <img alt="heart icon" className="heartSize" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                            </div>
                            <div className="userCommentBox">
                                <a className="goUser" href="https://www.instagram.com/chrishemsworth/">Netflix</a>
                                <span className="userCommentText">Quality Netflix’s!</span>
                                <img alt="heart icon" className="heartSize" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                            </div>
                            <div id="addCommentArea">
                               
                                <CommentList_yj comments={comments} />
                            </div>
                        </div>
                        <div className="uploadTime">
                            <p>10시간 전</p>
                        </div>
                        <section className="commentArea">
                            <div className="inputCommentBox">
                                <input className="inputComment" onKeyUp={this.activeBtn} value={input} 
                                    onKeyPress={handleKeyPress} onChange={handleChange} onCreate={handleCreate} 
                                    placeholder="댓글 달기..." />
                            </div>
                            <button className={`inputCommentBtn ${this.state.activeCommentBtn ? "commentBtnActive" : ""}`} onClick={handleCreate}>게시</button>

                        </section>
                    </div>
                </article>
            </div>
        );
    }
}

export default Article_yj;