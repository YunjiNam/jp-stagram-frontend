import React from "react";
import Feed from "../../components/Feed";
import MainRight from "../../components/MainRight";
import { withRouter } from "react-router-dom";
import "./Main.scss";
import logo from "../../images/logo_text.png";
import explore from "../../images/explore.png";
import heart from "../../images/heart.png";
import profile from "../../images/profile.png";

export class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <nav>
          <div className="nav-container">
            <div className="left">
              <img alt="logo" className="logo" src={logo} />
            </div>
            <div className="center">
              <input type="text" placeholder="Search" />
            </div>
            <div className="right">
              <img alt="explore icon" src={explore} />
              <img alt="heart icon" src={heart} />
              <img alt="profile icon" src={profile} />
            </div>
          </div>
        </nav>
        <main>
          <div className="feeds">
            <Feed />
          </div>
          <MainRight />
        </main>
      </div>
    );
  }
}

export default withRouter(Main);
