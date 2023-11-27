import React from "react";
import { useLocation } from "react-router-dom";
import level1 from "../assets/level1.png";
import level2 from "../assets/level2.png";
import level3 from "../assets/level3.png";
import level4 from "../assets/level4.png";
import level5 from "../assets/level5.png";
import "./PlantImage.css";

const style_home = {
  width: "50vw",
};

const style_account = {
  width: "30vw",
};

function PlantImage({ level }) {
  const location = useLocation();

  let style;
  if (location.pathname === "/plant1") {
    style = style_home;
  } else if (location.pathname === "/plant2") {
    style = style_account;
  }

  let image;
  switch (level) {
    case 1:
      image = level1;
      break;
    case 2:
      image = level2;
      break;
    case 3:
      image = level3;
      break;
    case 4:
      image = level4;
      break;
    case 5:
      image = level5;
      break;
    default:
      image = level1; // 디폴트 이미지
  }

  return (
    <div style={style} className="plantImage">
      <img src={image} alt="Profile" />
    </div>
  );
}

export default PlantImage;
