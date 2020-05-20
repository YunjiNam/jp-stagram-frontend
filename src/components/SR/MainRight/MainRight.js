import React from "react";
import Others from "./Others";
import "./MainRight.scss";
import sori from "../images/sori.jpg";

export class MainRight extends React.Component {
  render() {
    return (
      <div className="MainRight">
        <div className="profile-me">
          <img alt="me" src={sori} />
          <div className="profile-right">
            <div className="profile-id">x.xiaori</div>
            <div className="profile-desc">김소리 Sori Kim (Rosie)</div>
          </div>
        </div>

        <div className="recommendation">
          <div className="reco-title">
            <span className="span-forme">회원님을 위한 추천</span>
            <span className="span-all">모두 보기</span>
          </div>

          <div className="profile-others">
            <Others />
          </div>
        </div>

        <div className="footer">
          <p className="desc">
            소개 . 도움말 . 홍보 센터 . API .채용 정보 . 개인정보처리방침 . 약관
            . 위치 . 인기계정 . 해시태그 . 언어
          </p>
          <p className="copyright">© 2020 INSTAGRAM FROM FACEBOOK</p>
        </div>
      </div>
    );
  }
}

export default MainRight;
