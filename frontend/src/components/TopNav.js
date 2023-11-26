import React from "react";
import { Link } from "react-router-dom";
import styles from "./TopNav.module.css";

const icontest_style = {
  width: "3vw",
  height: "3vh",
};

function TopNav({ text, link1, link2, icon1, icon2 }) {
  return (
    <div className={styles.topNav}>
      <h3 className={styles.h3}>{text}</h3>
      <Link to={link1}>
        <img src={icon1} alt="icon1" style={icontest_style} />
      </Link>
      <Link to={link2}>
        <img src={icon2} alt="icon2" style={icontest_style} />
      </Link>
    </div>
  );
}

export default TopNav;
