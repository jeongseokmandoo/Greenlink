import React, { useEffect, useState } from "react";
import TopNav from "../componenets/TopNav";
import setting_icon from "../assets/Setting_Icon.png";
import x_icon from "../assets/X_Icon.png";
import MainNav from "../componenets/MainNav";
import { NotifiText } from "./PlantPage1";
import styles from "./NotifiPage.module.css";

function NotifiBox({ item }) {
  return (
    <div className={styles.notifibox} key={item.id}>
      <div className={styles.noti}></div>
      <div className={styles.content}>
        <div>{item.min}</div>
        <NotifiText context={item.context} />
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
    fetch("data/mock2.json")
      .then((response) => response.json())
      .then((data) => setItems(data))
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
