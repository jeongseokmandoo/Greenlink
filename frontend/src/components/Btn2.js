import React from "react";
import styles from "./Btn2.module.css";
import { Link } from "react-router-dom";

function Btn2({ className, text, link }) {
  return (
    <div className={className}>
      <Link to={link} className={styles.Btn2}>
        {text}
      </Link>
    </div>
  );
}

export default Btn2;
