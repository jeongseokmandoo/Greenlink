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

function RefreshButton() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <button className={styles.refresh} onClick={refreshPage}>
      !!습도 확인하기!!
    </button>
  );
}

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
    <div className={styles.container} key={item.id}>
      <div className={styles.time}>{calculateTime(item.created_at)}</div>
      <div className={className}>
        <NotifiText className={styles.notifitext} message={item.message} />
      </div>
    </div>
  );
}

function NotifiHomeList({ className, items }) {
  return (
    <div className={className}>
      {items
        .slice(-2)
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
  // const [plantInfo, setPlantInfo] = useState(null);

  // const potNumber = localStorage.getItem('plantId'); // localStorage에서 plantId 가져오기
  // const userId = localStorage.getItem('userId'); // localStorage에서 plantId 가져오기

  const userInfo = {
    user: {
      id: 8,
      username: "01024242424",
      korean_name: "이보름보름",
      profile_picture:
        "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2F736x%2F47%2F63%2Fd1%2F4763d159c22b4256cfbb9c284613008f.jpg&type=sc960_832",
      flower_pot: {
        pot_number: 1234,
        plant_name: "둘째매화",
        start_date: "2023-11-29",
        plant_type: "매화",
        moisture_level: 90,
      },
      nickname: "해피캣",
    },
    message: "login success",
    token: {
      access:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMyODEwOTY0LCJpYXQiOjE3MDEyNzQ5NjQsImp0aSI6ImVmOWU4NDJkZDdkMzQ2Njk5ODkzOWVlYzZjYmQ1ZDUyIiwidXNlcl9pZCI6OH0.zsSMFFhBioXLPuSmFlpZIyxRSfY1aji7VgcpHoDq-TE",
    },
  };
  const accessToken = userInfo.token.access;
  const potNumber = userInfo.user.flower_pot.pot_number;

  // const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  // const accessToken = userInfo.token.access;

  // useEffect(() => {
  //   localStorage.setItem("accessToken", "temporary-token");
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://127.0.0.1:8000/api/home/', {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       setPlantInfo(data);
  //     } catch (error) {
  //       console.error('Fetching data failed', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const plantInfo = {
    flower_pot: {
      pot_number: 1234,
      plant_name: "둘째매화",
      start_date: "2023-11-29",
      plant_type: "매화",
      moisture_level: 90,
    },
    notifications: [
      {
        id: 1,
        message: "박경빈님을 환영합니다.",
        created_at: "2023-11-29T13:59:45.989172Z",
        flower_pot: 1234,
      },
      {
        id: 2,
        message: "박경빈님을 환영합니다.",
        created_at: "2023-11-29T15:07:40.225241Z",
        flower_pot: 1234,
      },
      {
        id: 3,
        message: "물 주세요!!",
        created_at: "2023-11-29T15:50:35.300359Z",
        flower_pot: 1234,
      },
      {
        id: 4,
        message: "물 주세요!!",
        created_at: "2023-11-29T15:52:50.258988Z",
        flower_pot: 1234,
      },
      {
        id: 5,
        message: "NEXT님이 식물에 물을 주었습니다!",
        created_at: "2023-11-29T15:53:05.981619Z",
        flower_pot: 1234,
      },
      {
        id: 6,
        message: "물 주세요!!",
        created_at: "2023-11-29T15:53:27.988244Z",
        flower_pot: 1234,
      },
      {
        id: 7,
        message: "NEXT님이 식물에 물을 주었습니다!",
        created_at: "2023-11-29T15:53:34.853738Z",
        flower_pot: 1234,
      },
    ],
    message: "complete",
  };

  const plantName = plantInfo.flower_pot.plant_name;
  const startDate = plantInfo.flower_pot.start_date;
  const moistureLevel = plantInfo.flower_pot.moisture_level;
  const notifications = plantInfo.notifications;

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
        text={undefined}
        link1="/notification"
        link2="/setting"
        icon1={on_bell_icon}
        icon2={setting_icon}
      />
      <div className={styles.titlebox}>
        <div className={styles.title}>
          🌱 {plantName}와 함께한지 {calculateDays(startDate)}일째
        </div>
        <div className={styles.titleback}></div>
      </div>
      <NotifiHomeList className={styles.notifihomelist} items={notifications} />
      <div>
        <PlantImage className={styles.plantimage} level={3} />
        <div className={styles.potnamebox}>
          <div className={styles.potname}>{plantName}</div>
          <div className={styles.level}>Lv. 2</div>
        </div>
      </div>
      <RefreshButton />
      <HumidiBar humidity={moistureLevel} />
      <Btn2 text="식물 정보 수정" link="/plant2" />
      <MainNav className="mainNav" />
    </div>
  );
}

export default PlantPage1;
