import React from "react";
import styles from "./Btn.module.css";

function BigBtn({ onClick, text }) {
  return (
    <button onClick={onClick} className={styles.Btn}>
      {text}
    </button>
  );
}

export default BigBtn;
