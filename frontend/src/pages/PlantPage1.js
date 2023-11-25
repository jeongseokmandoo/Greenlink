import React from "react";
import Btn2 from "../componenets/Btn2";
import TopNav from "../componenets/TopNav";
import on_bell_icon from "../assets/on_Bell_Icon.png";
import setting_icon from "../assets/Setting_Icon.png";

function PlantPage1(props) {
  return (
    <div>
      <h1>plantpage1</h1>
      <TopNav
        text={undefined}
        link1="/notification"
        link2="/setting"
        icon1={on_bell_icon}
        icon2={setting_icon}
      />
      <Btn2 text="사용 정보 수정" link="/plant2" />
    </div>
  );
}

export default PlantPage1;
