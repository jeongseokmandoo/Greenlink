import React from "react";
import TopNav from "../components/TopNav";
import setting_icon from "../assets/Setting_Icon.png";
import x_icon from "../assets/X_Icon.png";
import MainNav from "../components/MainNav";

function NotificationPage(props) {
  return (
    <div>
      <h1>notification</h1>
      <TopNav
        text="알림"
        link1="/setting"
        link2="/plant1"
        icon1={setting_icon}
        icon2={x_icon}
      />
      <MainNav />
    </div>
  );
}

export default NotificationPage;
