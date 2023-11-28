import React, { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import setting_icon from "../assets/Setting_Icon.png";
import x_icon from "../assets/X_Icon.png";
import MainNav from "../components/MainNav";
import styles from "./NotifiPage.module.css";

export function NotifiText({ className, message = "알림 내용 들어감요" }) {
  return <div className={className}>{message}</div>;
}

function NotifiBox({ item }) {
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
    <div className={styles.notifibox} key={item.id}>
      <div className={styles.noti}></div>
      <div className={styles.content}>
        <div>{calculateTime(item.created_at)}</div>
        <NotifiText message={item.message} />
      </div>
    </div>
  );
}

function NotifiList({ items }) {
  return (
    <div className={styles.notiilist}>
      {items.map((item) => {
        return <NotifiBox item={item} />;
      })}
    </div>
  );
}

function NotifiPage() {
  const [items, setItems] = useState([]); // 초기값을 빈 배열로 설정

  useEffect(() => {
    fetch("data/notifi.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((item) => item.pot === 1);
        setItems(filteredData);
      })
      .catch((error) => console.error(error));
  }, []); // 빈 의존성 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div>
      <TopNav
        text="알림"
        link1="/setting"
        link2="/plant1"
        icon1={setting_icon}
        icon2={x_icon}
      />
      <NotifiList items={items} />

      <MainNav />
    </div>
  );
}

export default NotifiPage;
