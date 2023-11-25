import React from "react";
import TopNav from "../componenets/TopNav";
import on_bell_icon from "../assets/on_Bell_Icon.png";
import setting_icon from "../assets/Setting_Icon.png";

function PlantPage2(props) {
  return (
    <div>
      <h1>plantpage2</h1>
      <TopNav
        text={undefined}
        link1="/notification"
        link2="/setting"
        icon1={on_bell_icon}
        icon2={setting_icon}
      />
    </div>
  );
}

export default PlantPage2;
