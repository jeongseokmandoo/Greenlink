import React from "react";
import TopNav from "../components/TopNav";
import setting_icon from "../assets/Setting_Icon.png";
import x_icon from "../assets/X_Icon.png";
<<<<<<< HEAD
import MainNav from "../components/MainNav";
=======
import MainNav from "../componenets/MainNav";
import NotifiBox from "../componenets/NotifiBox";
import items from "../mock2.json";
>>>>>>> 288c15cf7ea86fff725f2f94195d86ee6bc7c34f

function NotificationPage() {
  return (
    <div>
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
