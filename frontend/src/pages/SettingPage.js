import React from "react";
import TopNav from "../componenets/TopNav";
import no_icon from "../assets/non_icon.png";
import MainNav from "../componenets/MainNav";
import x_icon from "../assets/X_Icon.png";
import PersonalSec from "../componenets/PersonalSec";
import NotifiBar from "../componenets/NotifiBar";
import ChangePot from "../componenets/ChangePot";
import "./Setting.css";

function SettingPage(props) {
  return (
    <div className="main">
      <h1>SettingPage</h1>
      <TopNav
        className="topNav"
        text="설정"
        link1={undefined}
        link2="/"
        icon1={no_icon}
        icon2={x_icon}
      />

      <div className="contents">
        <PersonalSec className="clickbox" />
        <NotifiBar className="clickbox" />
        <ChangePot className="clickbox" />
      </div>

      <MainNav className="mainNav" />
    </div>
  );
}

export default SettingPage;
