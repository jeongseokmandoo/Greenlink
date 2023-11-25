// ProfileImage.js
import React from "react";
import { useLocation } from "react-router-dom";
import on_bell_icon from "../assets/on_Bell_Icon.png";
import "./PlantImage.css";

const style_home = {
  width: "50vw",
};

const style_account = {
  width: "30vw",
};

function PlantImage() {
  const location = useLocation();

  let style;
  if (location.pathname === "/plant1") {
    style = style_home;
  } else if (location.pathname === "/plant2") {
    style = style_account;
  }

  return (
    <div style={style} className="plantImage">
      <img src={on_bell_icon} alt="Profile" />
    </div>
  );
}

export default PlantImage;
