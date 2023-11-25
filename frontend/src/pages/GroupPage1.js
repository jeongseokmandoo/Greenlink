import React from "react";
import Btn2 from "../componenets/Btn2";
import TopNav from "../componenets/TopNav";
import no_icon from "../assets/non_icon.png";
import setting_icon from "../assets/Setting_Icon.png";
import MainNav from "../componenets/MainNav";

function GroupPage1(props) {
  return (
    <div>
      <h1>group1</h1>
      <TopNav
        text="우리 가족"
        link1="undefined"
        link2="/setting"
        icon1={no_icon}
        icon2={setting_icon}
      />
      <Btn2 text="내 프로필 수정" link="/group2" />
      <MainNav />
    </div>
  );
}

export default GroupPage1;
