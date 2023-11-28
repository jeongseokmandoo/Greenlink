import React from "react";
import styles from "./Btn.module.css";

function SignupBtn({ text, onClick }) {
  return (
    <div>
      <button className={styles.Btn} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default SignupBtn;
