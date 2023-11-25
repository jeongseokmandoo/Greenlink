import React from "react";
import TopNav from "../componenets/TopNav";
import no_icon from "../assets/non_icon.png";
import MainNav from "../componenets/MainNav";

function SettingPage(props) {
  return (
    <div>
      <h1>SettingPage</h1>
      <TopNav
        text="설정"
        link1={undefined}
        link2={undefined}
        icon1={no_icon}
        icon2={no_icon}
      />
      <MainNav />
    </div>
  );
}

export default SettingPage;
