import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./SignUp_sr.scss";
import biglogo from "../../../images/YJ/logo_text.png";

class SignUp_sr extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <main className="SignUp">
        <article className="articles">
          <div className="loginWrap">
            <img className="westaLogo" alt="Logo" src={biglogo} />
            <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>
            <form className="inputWrapper">
              <div className="inputWrap">
                <input
                  className="inputBox"
                  id="idInput"
                  onChange={this.changeIdValue}
                  onKeyUp={(this.changeBtnColor, this.enterGo)}
                  type="text"
                  placeholder="휴대폰 번호 또는 이메일 주소"
                />
              </div>
              <div className="inputWrap">
                <input
                  className="inputBox"
                  id="psInput"
                  onChange={this.changePwValue}
                  onKeyUp={this.changeBtnColor}
                  type="password"
                  placeholder="성명"
                />
              </div>
              <div className="inputWrap">
                <input
                  className="inputBox"
                  id="idInput"
                  onChange={this.changeIdValue}
                  onKeyUp={(this.changeBtnColor, this.enterGo)}
                  type="text"
                  placeholder="사용자 이름"
                />
              </div>
              <div className="inputWrap">
                <input
                  className="inputBox"
                  id="idInput"
                  onChange={this.changeIdValue}
                  onKeyUp={(this.changeBtnColor, this.enterGo)}
                  type="text"
                  placeholder="비밀번호"
                />
              </div>
              <div className="loginBtnWrap">
                <button className="loginBtn btnActive">가입</button>
              </div>
              <p className="contract">
                가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게
                됩니다.
              </p>
            </form>
          </div>
          <div className="signUpWrap">
            <p>
              계정이 있으신가요?{" "}
              <Link to="/">
                <span>로그인</span>
              </Link>
            </p>
          </div>
          <div className="downloadAppWrap">
            <p className="downloadApp">앱을 다운로드 하세요</p>
            <div className="downloadIconWrap">
              <img
                alt="appstore-install-badges-ios"
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
              />
              <img
                alt="appstore-install-badges-android"
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
              />
            </div>
          </div>
        </article>
      </main>
    );
  }
}
export default withRouter(SignUp_sr);
