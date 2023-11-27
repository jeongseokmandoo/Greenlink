import React from "react";
import styles from "./HumiBar.module.css";

function HumidiBar({ humidity = 60 }) {
  const gaugeHeight = ((100 - humidity) * 30) / 100; // 습도에 비례하여 게이지 바의 높이를 결정합니다.

  return (
    <div className={styles.gaugeContainer}>
      <div className={styles.gauge} style={{ height: `${gaugeHeight}vh` }} />
    </div>
  );
}

export default HumidiBar;
