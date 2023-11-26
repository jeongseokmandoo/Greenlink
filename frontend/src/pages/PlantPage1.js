import React, { useEffect, useState } from "react";
import Btn2 from "../componenets/Btn2";
import TopNav from "../componenets/TopNav";
import on_bell_icon from "../assets/on_Bell_Icon.png";
import setting_icon from "../assets/Setting_Icon.png";
import MainNav from "../componenets/MainNav";
import "./Setting.css";
import PlantImage from "../componenets/PlantImage";
import HumidiBar from "../componenets/HumiBar";

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

function PlantPage1({ userId }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("data/user.json")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find((user) => user.id === userId);
        console.log(user);
        setUserData(user);
      })
      .catch((error) => console.error(error));
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

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
      <h1>
        🌱 {userData.korean_name}와 함께한지 {userData.start_date}일 차
      </h1>
      <NotifiHome />
      <NotifiHome />
      <div>
        <PlantImage />
        <p>{userData.nickname} Lv. 3</p>
      </div>
      <HumidiBar humidity={userData.moisture_level} />
      <Btn2 text="사용 정보 수정" link="/plant2" />
      <MainNav className="mainNav" />
    </div>
  );
}

export default PlantPage1;
