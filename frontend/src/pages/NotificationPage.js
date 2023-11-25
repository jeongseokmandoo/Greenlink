import React from "react";
import TopNav from "../componenets/TopNav";
import setting_icon from "../assets/Setting_Icon.png";
import x_icon from "../assets/X_Icon.png";
import MainNav from "../componenets/MainNav";
import NotifiBox from "../componenets/NotifiBox";
import items from "../mock2.json";

function NotificationPage() {
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
      <div>
        {items.map((item) => {
          return <NotifiBox min={item.min} text={item.text} />;
        })}
      </div>

      <MainNav />
    </div>
  );
}

export default NotificationPage;
