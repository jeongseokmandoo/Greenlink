import React from "react";
import Btn2 from "../components/Btn2";
import TopNav from "../components/TopNav";
import on_bell_icon from "../assets/on_Bell_Icon.png";
import setting_icon from "../assets/Setting_Icon.png";
import MainNav from "../components/MainNav";
import "./Setting.css";
<<<<<<< HEAD
import PlantImage from "../components/PlantImage";
=======
import PlantImage from "../componenets/PlantImage";
import HumidiBar from "../componenets/HumiBar";
>>>>>>> 288c15cf7ea86fff725f2f94195d86ee6bc7c34f

function NotifiHome({ min = "3분전", context = "알림 내용" }) {
  return (
    <div className="NotifiHome">
      <div>{min}</div>
      <NotifiText context={context} />
    </div>
  );
}

export function NotifiText({ context = "알림 내용 들어감요" }) {
  return <div className="NotifiText">{context}</div>;
}

function PlantPage1(props) {
  return (
    <div className="Main">
      <TopNav
        className="topNav"
        text={undefined}
        link1="/notification"
        link2="/setting"
        icon1={on_bell_icon}
        icon2={setting_icon}
      />
      <h1>🌱 통통이와 함께한지 100일 차</h1>
      <NotifiHome />
      <NotifiHome />
      <div>
        <PlantImage />
        <p>퉁퉁이 Lv. 3</p>
      </div>
      <HumidiBar humidity={80} />
      <Btn2 text="사용 정보 수정" link="/plant2" />
      <MainNav className="mainNav" />
    </div>
  );
}

export default PlantPage1;
