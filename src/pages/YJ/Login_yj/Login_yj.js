import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Login_yj.scss";
import biglogo from "../../../images/YJ/logo_text.png";

class Login_yj extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idValue: "",
      pwValue: "",
      btnActive: false
    };
  }

  changeIdValue = (event) => {
    this.setState({
      idValue: event.target.value,
    });
  };

  changePwValue = (event) => {
    this.setState({
      pwValue: event.target.value,
    });
  };
  showValue = () => {
    console.log("ID : ", this.state.idValue, "Password : ", this.state.pwValue);
    this.state.idValue.includes("@") && this.state.pwValue.length >= 5
      ? this.props.history.push("/main_yj")
      : alert("다시 입력해 주새요!");
  };
  changeBtnColor = () => {
    this.state.idValue.includes("@") && this.state.pwValue.length >= 5
      ? this.setState({ btnActive: true })
      : this.setState({ btnActive: false });
  };

  render() {
    return (
      <main className="Login">
        <article className="articles">
          <div className="loginWrap">
            <img className="westaLogo" alt="Logo" src={biglogo} />
            <form className="inputWrapper">
              <div className="inputWrap">
                <input
                  className="inputBox"
                  id="idInput"
                  onChange={this.changeIdValue}
                  onKeyUp={(this.changeBtnColor, this.enterGo)}
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
              </div>
              <div className="inputWrap">
                <input
                  className="inputBox"
                  id="psInput"
                  onChange={this.changePwValue}
                  onKeyUp={this.changeBtnColor}
                  type="password"
                  placeholder="비밀번호"
                />
              </div>
              <div className="loginBtnWrap">
                <button
                  className={`loginBtn ${
                    this.state.btnActive ? "btnActive" : ""
                  }`}
                  onClick={this.showValue}
                  type="button"
                >
                  로그인
                </button>
              </div>
            </form>
            <div className="facebookLogin">
              <p>또는</p>
              <button className="facebookLoginBtn">
                <span className="facebookGo">Facebook 으로 로그인</span>
              </button>
            </div>
            <div className="forgotPassword">
              <p>
                <span>비밀번호를 잊으셨나요?</span>
              </p>
            </div>
          </div>
          <div className="signUpWrap">
            <p>계정이 없으신가요?</p>
            <Link to="signup_yj">
              <span> 가입하기</span>
            </Link>
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

export default withRouter(Login_yj);
