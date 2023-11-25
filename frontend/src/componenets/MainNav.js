import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainNav.module.css";
import home_icon from "../assets/Home_Icon.png";
import gallery_icon from "../assets/Gallery_Icon.png";
import user_icon from "../assets/User_Icon.png";

const icontest_style = {
  width: "3vw",
  height: "3vh",
};

function MainNav(props) {
  return (
    <div className={styles.mainnav}>
      <Link to="/gallery1">
        <img src={gallery_icon} alt="icon1" style={icontest_style} />
      </Link>
      <Link to="/plant1">
        <img src={home_icon} alt="icon2" style={icontest_style} />
      </Link>
      <Link to="/group1">
        <img src={user_icon} alt="icon3" style={icontest_style} />
      </Link>
    </div>
  );
}

export default MainNav;
