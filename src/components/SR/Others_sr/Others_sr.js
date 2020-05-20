import React from "react";
import sewoon from "../images/SR/sewoon.jpg";
import "./Others_sr.scss";

export class Others_sr extends React.Component {
  render() {
    return (
      <div className="Others">
        <div className="other-left">
          <img className="otherImg" alt="sewoon" src={sewoon} />
          <div className="others-desc">
            <div className="profile-id">sewoon_j</div>
            <div className="profile-desc">회원님을 팔로우합니다.</div>
          </div>
        </div>
        <div className="follow">팔로우</div>
      </div>
    );
  }
}

export default Others_sr;
