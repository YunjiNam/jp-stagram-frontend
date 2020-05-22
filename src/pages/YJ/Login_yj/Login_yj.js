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
      btnActive: false,
      email_or_phone_Value: ""
    };
  }
  
  //로그인 
  SaveLogin = () => {
    fetch('http://10.58.0.163:8000/account/sign-in', {
      method: "POST",       
      body: JSON.stringify({       
        email_or_phone: this.state.email_or_phone_Value,  
        username: this.state.idValue,
        password: this.state.pwValue  
      })
    })
      .then(res => res.json())
      // .then(res => console.log(res))
      .then(res => {
        if (res.message == 'login successful!') {
          alert('로그인되었습니다');
          localStorage.setItem('access_token', res.token)
          this.props.history.push("/main_yj")
        } else {
          alert("아이디, 비밀번호를 확인하세요");
        }
      })
  }

  changeIdValue = (event) => {
    if(event.target.value.includes('@') || event.target.value.match(/^[0-9]+$/) != null ) {
      this.setState({
        email_or_phone_Value: event.target.value,
        idValue: ""
      });
    } else if(!(event.target.value.includes('@') || event.target.value.match(/^[0-9]+$/) != null )) {
        this.setState({
          idValue: event.target.value,
          email_or_phone_Value: ""
        });
    }
    // this.setState({
    //   email_or_phone_Value: event.target.value
    // });
  };

  changePwValue = (event) => {
      this.setState({
        pwValue: event.target.value
      });
    
  };
  showValue = () => {
    console.log("ID : ", this.state.idValue, "Password : ", this.state.pwValue);
    this.state.email_or_phone_Value.includes("@") && this.state.pwValue.length >= 5
      ? this.props.history.push("/main_yj")
      : alert("다시 입력해 주새요!");
  };
  changeBtnColor = () => {
    (this.state.email_or_phone_Value.includes("@") && this.state.pwValue.length >= 5) || (this.state.idValue != "" && this.state.pwValue.length >= 5)
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
                  onKeyUp={this.changeBtnColor}
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
                  // onClick={this.showValue}
                  onClick={this.SaveLogin}
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
