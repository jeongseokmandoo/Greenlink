import React from "react";
import Btn2 from "../components/Btn2";
import TopNav from "../components/TopNav";
import on_bell_icon from "../assets/on_Bell_Icon.png";
import setting_icon from "../assets/Setting_Icon.png";
import MainNav from "../components/MainNav";
import "./Setting.css";
import PlantImage from "../components/PlantImage";

function NotifiHome({ min = "3분전", context = "알림 내용" }) {
  return (
    <div className="NotifiHomeDiv">
      <div>{min}</div>
      <NotifiText context={context} />
    </div>
  );
}

function NotifiText({ context = "알림 내용 들어감요" }) {
  return <div className="NotifiText">{context}</div>;
}

function PlantPage1(props) {
  return (
    <div className="Main">
      <h1>🌱 통통이와 함께한지 100일 차</h1>

      <TopNav
        className="topNav"
        text={undefined}
        link1="/notification"
        link2="/setting"
        icon1={on_bell_icon}
        icon2={setting_icon}
      />
      <NotifiHome />
      <NotifiHome />
      <PlantImage />
      <Btn2 text="사용 정보 수정" link="/plant2" />
      <MainNav className="mainNav" />
    </div>
  );
}

export default PlantPage1;
