// ProfileImage.js
import React from "react";
import { useLocation } from "react-router-dom";
// import "./PlantImage.css";
import rabit1 from "../assets/rabit1.png";

const style_home = {
  width: "69vw",
  height: "69vw",
};

const style_account = {
  width: "30vw",
  height: "30vw",
};

function PlantImage({ className }) {
  const location = useLocation();

  let style;
  if (location.pathname === "/plant1") {
    style = style_home;
  } else if (location.pathname === "/plant2") {
    style = style_account;
  }

  return (
    <div style={style} className={className}>
      <img src={rabit1} alt="Profile" />
    </div>
  );
}

export default PlantImage;
