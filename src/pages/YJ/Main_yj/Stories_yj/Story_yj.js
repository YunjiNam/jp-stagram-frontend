import React from 'react';
import './Story_yj.scss'

class Story_yj extends React.Component {
    render() {
        return(
            <div className="Story">
                <span className="storiesImg">
                    <img alt="wecode" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/91933099_242760747110457_2301125283991781376_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=_CVJGWghKOoAX8qY8H6&oh=922ad5f63262e61d1ac71ff21f5ee4a8&oe=5ED1BA3A" />
                </span>
                <div className="storiesBox">
                    <div className="storiesName">
                        <span>wecode_bootcamp</span>
                    </div>
                    <div className="storiesTime">
                        <span>6시간 전</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Story_yj;