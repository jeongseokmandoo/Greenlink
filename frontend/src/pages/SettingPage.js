import React from "react";
import TopNav from "../components/TopNav";
import no_icon from "../assets/non_icon.png";
import MainNav from "../components/MainNav";
import x_icon from "../assets/X_Icon.png";
import PersonalSec from "../components/PersonalSec";
import NotifiBar from "../components/NotifiBar";
import ChangePot from "../components/ChangePot";
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
