import React from "react";
import "./Feed_sr.scss";
import jelmi_profile from "../../../images/SR/jel_profile.jpg";
import jelmi_feed from "../../../images/SR/jeolmi.jpg";
import icon_heart from "../../../images/SR/heart.png";
import icon_comment from "../../../images/SR/comment.png";
import icon_share from "../../../images/SR/share.png";
import icon_bookmark from "../../../images/SR/bookmark.png";
import icon_more from "../../../images/SR/more.png";

export class Feed_sr extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      text: "",
      username: "",
      isActive: false,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("access_token");
    fetch("http://10.58.0.163:8000/feed/comment", {
      method: "GET",
      headers: {
        "Content-type": "aplicaiton/json",
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        let arr = [];
        response.comments.map((txt) => arr.push(txt));
        this.setState({
          comments: arr,
        });
        console.log(this.state);
      });
  }

  //댓글창에 입력 시 state 변경
  handleValue = (event) => {
    this.setState({
      text: event.target.value,
      isActive: true,
    });
  };

  handleOnClick = () => {
    const comments = this.state.comments;
    const new_arr = comments.concat(this.state.text);
    const token = localStorage.getItem("access_token");

    this.setState({
      comments: new_arr,
      text: "",
    });

    fetch("http://10.58.0.163:8000/feed/comment", {
      method: "POST",
      headers: {
        "content-type": "aplicaiton/json",
        Authorization: token,
      },
      body: JSON.stringify({
        text: this.state.text,
        feed_id: 1,
      }),
    })
      .then((response) => response.json())
      .then((response) => this.setState({ comments: response }));
  };

  handleEnter = (e) => {
    const token = localStorage.getItem("access_token");

    if (e.key === "Enter") {
      fetch("http://10.58.0.163:8000/feed/comment", {
        method: "POST",
        headers: {
          "content-type": "aplicaiton/json",
          Authorization: token,
        },
        body: JSON.stringify({
          text: this.state.text,
          feed_id: 1,
        }),
      })
        .then((response) => response.json())
        .then((response) => this.setState({ comments: response }));
    }
  };

  render() {
    const reply = this.state.comments;

    const commentList = reply.map((element, index) => (
      <li key={index} className="new">
        {element.username} {element.content}
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

        <div className="comments-form">
          <input
            onChange={this.handleValue}
            onKeyPress={this.handleEnter}
            className="no-outline"
            type="text"
            value={this.state.text}
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
        </div>
      </article>
    );
  }
}

export default Feed_sr;
