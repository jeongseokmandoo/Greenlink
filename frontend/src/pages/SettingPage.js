import React, { useState } from "react";
import TopNav from "../components/TopNav";
import no_icon from "../assets/non_icon.png";
import MainNav from "../components/MainNav";
import x_icon from "../assets/X_Icon.png";
import styles from "./Setting.module.css";
import { useNavigate } from "react-router-dom";
import PersonalsetBtn from "../components/PersonalsetBtn.js";

const NotifiBar = ({ className = "" }) => {
  const [notification, setNotification] = useState(true);

  const handleNotification = () => {
    setNotification(!notification);
  };

  return (
    <div className={className}>
      알림
      <button onClick={handleNotification}>
        {notification ? "알림 끄기" : "알림 켜기"}
      </button>
    </div>
  );
};

function SettingPage() {
  const navigate = useNavigate("/personal");
  const personallock = () => {
    navigate("/personal");
  };

  return (
    <div className={styles.main}>
      <TopNav
        text="설정"
        link1={undefined}
        link2="/plant1"
        icon1={no_icon}
        icon2={x_icon}
      />
      <div className={styles.contents}>
        <PersonalsetBtn text="개인/보안" onClick={personallock} />
        <NotifiBar className={styles.clickbox} />
      </div>
      <MainNav />
    </div>
  );
}

export default SettingPage;
