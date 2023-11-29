import React, { useEffect, useState } from "react";
import Btn2 from "../components/Btn2";
import TopNav from "../components/TopNav";
import on_bell_icon from "../assets/on_Bell_Icon.png";
import setting_icon from "../assets/Setting_Icon.png";
import MainNav from "../components/MainNav.js";
import styles from "./PlantPage1.module.css";
import PlantImage from "../components/PlantImage";
import HumidiBar from "../components/HumiBar";
import { NotifiText } from "./NotifiPage.js";

function NotifiHomeBox({ className, item }) {
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
    <div className={styles.container}>
      <div className={styles.time}>{calculateTime(item.created_at)}</div>
      <div className={className}>
        <NotifiText className={styles.notifitext} message={item.message} />
      </div>
    </div>
  );
}

function NotifiHomeList({ className }) {
  const [items, setItems] = useState([]); // 초기값을 빈 배열로 설정

  useEffect(() => {
    fetch("data/notifi.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={className}>
      {items
        .slice(-3)
        .reverse()
        .map((item) => {
          return <NotifiHomeBox className={styles.notifihomebox} item={item} />;
        })}
    </div>
  );
}

function PlantPage1() {
  // const [potData, setPotData] = useState({});
  // const [userData, setUserData] = useState({});

  // const potNumber = localStorage.getItem('plantId'); // localStorage에서 plantId 가져오기
  // const userId = localStorage.getItem('userId'); // localStorage에서 plantId 가져오기
  const pot = {
    pot_number: 1,
    plant_name: "식물1",
    start_date: "2023-01-01",
    plant_type: "유형1",
    moisture_level: 80,
  };
  const user = {
    id: 1,
    username: "user1",
    email: "user1@example.com",
    korean_name: "사용자1",
    profile_picture: 1,
    flower_pot: 1,
    notifications_enabled: true,
    nickname: "별명1",
  };

  // const fetchData = async () => {
  //   try {
  //     const response = fetch("data/user.json");
  //     const data = response.json();
  //     const user = data.find((user) => user.id === userId);
  //     console.log(user);
  //     setUserData(user);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, [userId]);

  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);

  // useEffect(() => {
  //   localStorage.setItem("accessToken", "temporary-token");
  // }, []);

  // useEffect(() => {
  //   fetch(`data/pot.json?id=${potNumber}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // 토큰이 필요한 경우
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const pot = data.find((pot) => pot.pot_number === potNumber);
  //       console.log(pot);
  //       setPotData(pot);
  //     })
  //     .catch((error) => console.error(error));
  // }, [potNumber]);

  const calculateDays = (startDate) => {
    console.log(startDate);
    const start = new Date(startDate);
    const now = new Date(); // 현재 날짜와 시간
    const diffTime = Math.abs(now - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays);
    return diffDays;
  };

  return (
    <div className={styles.main}>
      <TopNav
        className="topNav"
        text={undefined}
        link1="/notification"
        link2="/setting"
        icon1={on_bell_icon}
        icon2={setting_icon}
      />
      <div className={styles.titlebox}>
        <div className={styles.title}>
          🌱 {user.korean_name}와 함께한지 {calculateDays(pot.start_date)}일째
        </div>
        <div className={styles.titleback}></div>
      </div>
      <NotifiHomeList className={styles.notifihomelist} />
      <div>
        <PlantImage className={styles.plantimage} level={3} />
        <div className={styles.potnamebox}>
          <div className={styles.potname}>{pot.plant_name}</div>
          <div className={styles.level}>Lv. 3</div>
        </div>
      </div>
      <HumidiBar humidity={pot.moisture_level} />
      <Btn2 text="식물 정보 수정" link="/plant2" />
      <MainNav className="mainNav" />
    </div>
  );
}

export default PlantPage1;
