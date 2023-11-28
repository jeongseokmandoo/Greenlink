import React from "react";
import TopNav from "../components/TopNav";
import no_icon from "../assets/non_icon.png";
import MainNav from "../components/MainNav";
import x_icon from "../assets/X_Icon.png";
import NotifiBar from "../components/NotifiBar";
import "./Setting.css";
import { useNavigate } from "react-router-dom";
import PersonalsetBtn from "../components/PersonalsetBtn";

function SettingPage(props) {
  const navigate = useNavigate("/personal");
  3;
  const personallock = () => {
    navigate("/personal");
  };

  return (
    <div className="main">
      <TopNav
        className="topNav"
        text="설정"
        link1={undefined}
        link2="/"
        icon1={no_icon}
        icon2={x_icon}
      />

      <div className="contents">
        <PersonalsetBtn text="개인/보안" onClick={personallock} />
        <NotifiBar className="clickbox" />
        {/* <ChangePot className="clickbox" /> */}
      </div>

      <MainNav className="mainNav" />
    </div>
  );
}

export default SettingPage;
