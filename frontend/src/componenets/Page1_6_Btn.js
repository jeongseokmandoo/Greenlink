import React from "react";
import styles from "./Page1_6_Btn.module.css";

function Page1_6_Btn({ onClick, text }) {
  return (
    <button onClick={onClick} className={styles.Btn}>
      {text}
    </button>
  );
}

export default Page1_6_Btn;
