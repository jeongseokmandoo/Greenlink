// ProfileImage.js
import React from "react";
import on_bell_icon from "../assets/on_Bell_Icon.png";
import "./ProfileImage.css";

function ProfileImage() {
  return (
    <div className="profileImage">
      <img src={on_bell_icon} alt="Profile" />
    </div>
  );
}

export default ProfileImage;
