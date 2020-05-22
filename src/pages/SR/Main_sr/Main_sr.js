import React from "react";
import Feed_sr from "../../../components/SR/Feed_sr/Feed_sr";
import MainRight_sr from "../../../components/SR/MainRight_sr/MainRight_sr";
import { withRouter } from "react-router-dom";
import "./Main_sr.scss";
import logo from "../../../images/SR/logo_text.png";
import explore from "../../../images/SR/explore.png";
import heart from "../../../images/SR/heart.png";
import profile from "../../../images/SR/profile.png";

export class Main_sr extends React.Component {
  render() {
    return (
      <div className="Main_sr">
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
            <Feed_sr />
          </div>
          <MainRight_sr />
        </main>
      </div>
    );
  }
}

export default withRouter(Main_sr);
