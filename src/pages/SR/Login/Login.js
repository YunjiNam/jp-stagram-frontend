import React from "react";
import logoImg from "../../images/logo_text.png";
import { Link, withRouter } from "react-router-dom";
import "../../pages/Login/Login.scss";

export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      isActive: false,
    };
  }

  goToMain() {
    this.props.history.push("/main");
    console.log("this.props: ", this.props);
  }

  handleOnClick = () => {
    this.clickValue();
    this.goToMain.call(this);
  };

  clickValue = (event) => {
    console.log(this.state.id, this.state.pw);
  };

  handlePw = (event) => {
    this.setState({ pw: event.target.value });
  };

  handleId = (event) => {
    this.setState({ id: event.target.value });
  };

  activeBtn = () => {
    this.state.id.includes("@") && this.state.pw.length >= 5
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
          <span>가입하기</span>
        </div>
      </main>
    );
  }
}

export default withRouter(Login);
