import React from "react";
import "./Feed.scss";
import jelmi_profile from "../images/jel_profile.jpg";
import jelmi_feed from "../images/jeolmi.jpg";
import icon_heart from "../images/heart.png";
import icon_comment from "../images/comment.png";
import icon_share from "../images/share.png";
import icon_bookmark from "../images/bookmark.png";
import icon_more from "../images/more.png";

export class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      content: "",
      isActive: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleOnChange = (event) => {
    this.setState({
      content: event.target.value,
      isActive: true,
    });
  };

  handleOnClick = () => {
    const arr = this.state.comments;
    const new_arr = arr.concat(this.state.content);

    this.setState(
      {
        comments: new_arr,
        content: "",
      },

      () => {
        console.log(this.content);
      }
    );
  };

  render() {
    const commentValue = this.state.comments;
    const commentList = commentValue.map((content, index) => (
      <li key={index} className="new">
        x.xiaori {content}
      </li>
    ));

    return (
      <article className="Feed">
        <div className="profile">
          <div className="profile-left">
            <img
              alt="profile img"
              className="profile-img"
              src={jelmi_profile}
            />
            <span className="profile-id">zzangjeolmi</span>
          </div>
          <img alt="" className="profile-more" src={icon_more} />
        </div>

        <img alt="feed img" className="feed-img" src={jelmi_feed} />
        <div className="icons">
          <div className="icons-left">
            <img alt="heart icon" src={icon_heart} />
            <img alt="comment icon" src={icon_comment} />
            <img alt="share icon" src={icon_share} />
          </div>
          <div className="icons-right">
            <img alt="bookmark icon" src={icon_bookmark} />
          </div>
        </div>
        <div className="like">
          <p>좋아요 10개</p>
        </div>
        <div className="description">
          <p className="desc-id">zzangjeolmi</p>
          <p className="desc-blah">사이좋게 노나먹는</p>
        </div>
        <div className="comments">
          <p className="comment-id">x.xiaori</p>
          <p className="comment-blah">절미야 엘사야 사랑해 💖</p>
        </div>

        <ul className="comments-list">{commentList}</ul>

        <div className="time">48분전</div>

        <form className="comments-form" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleOnChange}
            className="no-outline"
            type="text"
            placeholder="댓글달기..."
          />
          <div className="btn-wrapper">
            <button
              onClick={this.handleOnClick}
              className={this.state.isActive ? "coBtn activeBtn" : "coBtn"}
            >
              게시
            </button>
          </div>
        </form>
      </article>
    );
  }
}

export default Feed;
