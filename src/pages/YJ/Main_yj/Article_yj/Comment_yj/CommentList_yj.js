import React from 'react';
import Comment_yj from './Comment_yj';

class CommentList_yj extends React.Component {
    render() {
        const { comments } = this.props;
        const commentList = comments.map(
            ({id, text }) => (
                <Comment_yj text={text} key={id} />
            )
        );
        return(
            <div>
                {commentList}
            </div>
        );
    }
}

export default CommentList_yj;