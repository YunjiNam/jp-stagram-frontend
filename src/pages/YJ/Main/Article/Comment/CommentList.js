import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
    render() {
        const { comments } = this.props;
        const commentList = comments.map(
            ({id, text }) => (
                <Comment
                    text={text}
                    key={id}
                />
            )
        );
        return(
            <div>
                {commentList}
            </div>
        );
    }
}

export default CommentList;