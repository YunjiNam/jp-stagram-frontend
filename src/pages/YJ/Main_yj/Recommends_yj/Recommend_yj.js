import React from 'react';
import './Recommend_yj.scss'

class Recommend_yj extends React.Component {
    render() {
        return(
            <div className="Recommend">
                <span className="recommendsImg">
                    <img alt="jejubeerofficial" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/91933099_242760747110457_2301125283991781376_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=_CVJGWghKOoAX8qY8H6&oh=922ad5f63262e61d1ac71ff21f5ee4a8&oe=5ED1BA3A" />
                </span>
                <div className="recommendsBox">
                    <div className="recommendsName">
                        <span>jejubeerofficial</span>
                    </div>
                    <div className="recommendsTime">
                        <span>iammingki님 외 6명이 팔로우..</span>
                    </div>
                </div>
                <div className="recommendsButton">
                    <button className="recommendsBtn" type="button">팔로우</button>
                </div>
            </div>
        );
    }
}

export default Recommend_yj;