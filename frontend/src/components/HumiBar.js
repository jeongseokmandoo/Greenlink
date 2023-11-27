import React from "react";
import "./HumiBar.css";

function HumidiBar({ humidity = 60 }) {
  const gaugeHeight = ((100 - humidity) * 20) / 100; // 습도에 비례하여 게이지 바의 높이를 결정합니다.

  return (
    <div className="gaugeContainer">
      <div className="gauge" style={{ height: `${gaugeHeight}vh` }} />
    </div>
  );
}

export default HumidiBar;
