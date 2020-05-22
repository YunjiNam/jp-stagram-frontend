import React from 'react';
import './Comment_yj.scss';


class Comment_yj extends React.Component {
   
    render() {
        const { text, userI } = this.props;
        return(
            <div className="userCommentBox" >
                <a className="goUser">{userI}</a>
                <span className="userCommentText">{text}</span>
                <img className="heartSize" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"></img>
            </div>
        );
    }
}



export default Comment_yj;