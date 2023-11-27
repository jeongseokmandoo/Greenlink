import React, { useEffect, useState } from "react";
import Btn2 from "../componenets/Btn2";
import TopNav from "../componenets/TopNav";
import on_bell_icon from "../assets/on_Bell_Icon.png";
import setting_icon from "../assets/Setting_Icon.png";
import MainNav from "../componenets/MainNav";
import "./Setting.css";
import PlantImage from "../componenets/PlantImage";
import HumidiBar from "../componenets/HumiBar";
import { NotifiText } from "./NotifiPage";

function NotifiHomeBox({ item }) {
  function calculateTime(created_at) {
    const now = new Date();
    const createdTime = new Date(created_at);
    const diffInSeconds = Math.floor((now - createdTime) / 1000);

    if (diffInSeconds < 0) {
      alert("알림 오류: 미래의 알림입니다.");
      throw new Error("알림 오류: 미래의 알림입니다.");
    } else if (diffInSeconds < 60) {
      return "지금";
    } else if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)}분 전`;
    } else if (diffInSeconds < 86400) {
      return `${Math.floor(diffInSeconds / 3600)}시간 전`;
    } else if (diffInSeconds < 2592000) {
      return `${Math.floor(diffInSeconds / 86400)}일 전`;
    } else {
      return `${Math.floor(diffInSeconds / 2592000)}달 전`;
    }
  }

  return (
    <div className="NotifiHome">
      <div>{calculateTime(item.created_at)}</div>
      <NotifiText message={item.message} />
    </div>
  );
}

function NotifiHomeList() {
  const [items, setItems] = useState([]); // 초기값을 빈 배열로 설정

  useEffect(() => {
    fetch("data/notifi.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {items.slice(-2).map((item) => {
        return <NotifiHomeBox item={item} />;
      })}
    </div>
  );
}

function PlantPage1() {
  const [potData, setPotData] = useState({});
  const [userData, setUserData] = useState({});

  // const potNumber = localStorage.getItem('plantId'); // localStorage에서 plantId 가져오기
  // const userId = localStorage.getItem('userId'); // localStorage에서 plantId 가져오기
  const potNumber = 1;
  const userId = 1;

  useEffect(() => {
    fetch("data/user.json")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find((user) => user.id === userId); // 이 부분 수정
        console.log(user);
        setUserData(user);
      })
      .catch((error) => console.error(error));
  }, [userId]);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  useEffect(() => {
    localStorage.setItem("accessToken", "temporary-token");
  }, []);

  useEffect(() => {
    fetch(`data/pot.json?id=${potNumber}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // 토큰이 필요한 경우
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const pot = data.find((pot) => pot.pot_number === potNumber);
        console.log(pot);
        setPotData(pot);
      })
      .catch((error) => console.error(error));
  }, [potNumber]);

  const calculateDays = (startDate) => {
    const start = new Date(startDate);
    const now = new Date(); // 현재 날짜와 시간
    const diffTime = Math.abs(now - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays);
    return diffDays;
  };

  if (!potData) {
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
        🌱 {userData.korean_name}와 함께한지{" "}
        {calculateDays(userData.start_date)}일 차
      </h1>
      <NotifiHomeList />
      <div>
        <PlantImage level={1} />
        <p>{userData.nickname} Lv. 3</p>
      </div>
      <HumidiBar humidity={userData.moisture_level} />
      <Btn2 text="사용 정보 수정" link="/plant2" />
      <MainNav className="mainNav" />
    </div>
  );
}

export default PlantPage1;
