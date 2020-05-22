import React from "react";
import logoImg from "../../../images/SR/logo_text.png";
import { Link, withRouter } from "react-router-dom";
import "./Login_sr.scss";

export class Login_sr extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      email_or_phone: "",
      pw: "",
      isActive: false,
    };
  }

  //로그인 버튼 클릭 시, 입력된 id,pw 데이터를 POST요청으로 보내고 토큰을 받아서 LS에 저장하고 메인으로 이동
  handleOnClick = () => {
    this.clickValue();
    fetch("http://10.58.0.163:8000/account/sign-in", {
      method: "POST",
      headers: {
        "content-type": "aplication/json",
      },
      body: JSON.stringify({
        username: this.state.id,
        email_or_phone: this.state.email_or_phone,
        password: this.state.pw,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.message === "login successful!") {
          localStorage.setItem("access_token", response.token);
          this.goToMain.call(this);
        } else {
          alert("입력한 정보가 회원정보와 일치하지 않습니다.");
        }
      });
  };

  goToMain() {
    this.props.history.push("/main_sr");
    console.log("this.props: ", this.props);
  }

  clickValue = () => {
    console.log(this.state.email_or_phone, this.state.id, this.state.pw);
  };

  handlePw = (event) => {
    this.setState({ pw: event.target.value });
  };

  handleId = (event) => {
    if (
      event.target.value.includes("@") ||
      event.target.value.match(/^[0-9]+$/) !== null
    ) {
      this.setState({ email_or_phone: event.target.value, id: "" });
    } else {
      this.setState({ id: event.target.value, email_or_phone: "" });
    }
  };

  activeBtn = () => {
    this.state.pw.length >= 4
      ? this.setState({ isActive: true })
      : this.setState({ isActive: false });
  };

  render() {
    return (
      <main className="Login">
        <div className="login-wrapper" onKeyUp={this.activeBtn}>
          <img className="logo" alt="logo" src={logoImg} />
          <input
            className="id-input login"
            type="text"
            placeholder="전화번호,사용자 이름 또는 이메일"
            onChange={this.handleId}
          />
          <input
            className="password-input login"
            type="password"
            placeholder="비밀번호"
            onChange={this.handlePw}
          />
          <button
            onClick={this.handleOnClick}
            className={
              this.state.isActive ? "login-btn activeBtn" : "login-btn"
            }
          >
            로그인
          </button>

          <Link to="/" className="forget_pw">
            비밀번호를 잊으셨나요?
          </Link>
        </div>

        <div className="signup-wrapper">
          <p>계정이 없으신가요?</p>
          <Link to="signup_sr">
            <span> 가입하기</span>
          </Link>
        </div>
      </main>
    );
  }
}

export default withRouter(Login_sr);
