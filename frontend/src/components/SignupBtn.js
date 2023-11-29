import React from "react";
import styles from "./SignupBtn.module.css";

function SignupBtn({ text, onClick }) {
  return (
    <div>
      <button className={styles.SignupBtn} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default SignupBtn;
