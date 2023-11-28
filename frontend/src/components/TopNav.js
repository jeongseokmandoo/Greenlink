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
      <div className={styles.title}>{text}</div>
      <div className={styles.btnbox}>
        <Link to={link1}>
          <img
            className={styles.btn}
            src={icon1}
            alt="icon1"
            style={icontest_style}
          />
        </Link>
        <Link to={link2}>
          <img
            className={styles.btn}
            src={icon2}
            alt="icon2"
            style={icontest_style}
          />
        </Link>
      </div>
    </div>
  );
}

export default TopNav;
