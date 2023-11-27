import React from "react";
import styles from "./PersonalBtn.module.css";

function PersonalsetBtn({ text, onClick }) {
  return (
    <>
      <button onClick={onClick} className={styles.button}>
        {text}
      </button>
    </>
  );
}

export default PersonalsetBtn;
