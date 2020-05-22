import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./SignUp_sr.scss";
import biglogo from "../../../images/YJ/logo_text.png";

class SignUp_sr extends React.Component {
  constructor() {
    super();
    this.state = {
      email_or_phone: "",
      name: "",
      id: "",
      pw: "",
    };
  }

  //회원가입 버튼 클릭 시, input에 입력된 모든 정보가 POST요청으로 서버에 보내진다.
  handleOnClick = () => {
    fetch("http://10.58.3.147:8000/account/sign-up", {
      method: "POST",
      headers: {
        "content-type": "aplication/json",
      },
      body: JSON.stringify({
        email_or_phone: this.state.email_or_phone,
        realname: this.state.name,
        username: this.state.id,
        password: this.state.pw,
      }),
    })
      .then((response) => response.json())
      .then(alert("회원가입에 성공했습니다. 👏🏻"));
  };

  changeFirstValue = (event) => {
    this.setState({
      email_or_phone: event.target.value,
    });
  };

  changeNameValue = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  changeIdValue = (event) => {
    this.setState({
      id: event.target.value,
    });
  };
  changePwValue = (event) => {
    this.setState({
      pw: event.target.value,
    });
  };

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
                  onChange={this.changeFirstValue}
                  type="text"
                  placeholder="휴대폰 번호 또는 이메일 주소"
                />
              </div>
              <div className="inputWrap">
                <input
                  className="inputBox"
                  id="psInput"
                  onChange={this.changeNameValue}
                  type="text"
                  placeholder="성명"
                />
              </div>
              <div className="inputWrap">
                <input
                  className="inputBox"
                  id="idInput"
                  onChange={this.changeIdValue}
                  type="text"
                  placeholder="사용자 이름"
                />
              </div>
              <div className="inputWrap">
                <input
                  className="inputBox"
                  id="idInput"
                  onChange={this.changePwValue}
                  type="password"
                  placeholder="비밀번호"
                />
              </div>
              <div className="loginBtnWrap">
                <button
                  className="loginBtn btnActive"
                  onClick={this.handleOnClick}
                >
                  가입
                </button>
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
              <Link to="/login_sr">
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
