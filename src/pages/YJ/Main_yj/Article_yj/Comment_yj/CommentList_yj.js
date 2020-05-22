import React from 'react';
import Comment_yj from './Comment_yj';

class CommentList_yj extends React.Component {
    render() {
        const { commentswrap } = this.props;
        console.log(this.props)
        const commentList = commentswrap && commentswrap.map((post, idx) => (
                <Comment_yj key={idx} text={post.content} userI={post.username} />
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