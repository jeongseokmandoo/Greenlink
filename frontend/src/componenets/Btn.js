import React from "react";
import styles from "./Btn.module.css";
import { Link } from "react-router-dom";

function Btn({ text, link }) {
  return (
    <div>
      <Link to={link} className={styles.Btn}>
        {text}
      </Link>
    </div>
  );
}

export default Btn;
