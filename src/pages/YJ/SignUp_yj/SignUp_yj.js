import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./SignUp_yj.scss";
import biglogo from "../../../images/YJ/logo_text.png";

class SignUp_yj extends React.Component {
  constructor() {
    super()
    this.state = {
      // emailValue: "",
      // PhoneValue:"",
      email_or_phone_Value:"",
      userName: "",
      userId: "",
      pwValue: "",
    }
  }

  handleSignUp = () => {
    fetch('http://10.58.3.147:8000/account/sign-up', {
      method: "POST",     
      body: JSON.stringify({        
        email_or_phone: this.state.email_or_phone_Value,    
        realname: this.state.userName,   
        username: this.state.userId,    
        password: this.state.pwValue    
      })
    })
    .then(res => res.json())
    .then(res => console.log(res))
  }

  changePhoneEmailValue = (event) => {
   
    this.setState({
      email_or_phone_Value: event.target.value
    });
  }
  changeNameValue = (event) => {
    this.setState({
      userName: event.target.value,
    });
  }
  changeIdValue = (event) => {
    this.setState({
      userId: event.target.value,
    });
  };

  changePwValue = (event) => {
    this.setState({
      pwValue: event.target.value,
    });
  };
  
  changeBtnColor = () => {
    (this.state.email_or_phone_Value.includes("@") && this.state.pwValue.length >= 5) || (this.state.email_or_phone_Value !== "" && this.state.pwValue.length >= 5)
      ? this.setState({ btnActive: true })
      : this.setState({ btnActive: false });
  };

  render() {
    return (
      <main className="SignUp">
        <article className="articles">
          <div className="loginWrap">
            <img className="westaLogo" alt="Logo" src={biglogo} />
            <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>
            <div className="inputWrapper">
              <div className="inputWrap">
                <input
                  className="inputBox"
                  id="emailInput"
                  onChange={this.changePhoneEmailValue}
                  onKeyUp={this.changeBtnColor}
                  type="text"
                  placeholder="휴대폰 번호 또는 이메일 주소"
                />
              </div>
              <div className="inputWrap">
                <input
                  className="inputBox"
                  id="nameInput"
                  onChange={this.changeNameValue}
                  onKeyUp={this.changeBtnColor}
                  type="text"
                  placeholder="성명"
                />
              </div>
              <div className="inputWrap">
                <input
                  className="inputBox"
                  id="idInput"
                  onChange={this.changeIdValue}
                  onKeyUp={this.changeBtnColor}
                  type="text"
                  placeholder="사용자 이름"
                />
              </div>
              <div className="inputWrap">
                <input
                  className="inputBox"
                  id="pwInput"
                  onChange={this.changePwValue}
                  onKeyUp={this.changeBtnColor}
                  type="password"
                  placeholder="비밀번호"
                />
              </div>
              <div className="loginBtnWrap">
                <button onClick={this.handleSignUp} className={`loginBtn ${
                    this.state.btnActive ? "btnActive" : ""
                  }`}>가입</button>
              </div>
              <p className="contract">
                가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게
                됩니다.
              </p>
            </div>
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
export default withRouter(SignUp_yj);
