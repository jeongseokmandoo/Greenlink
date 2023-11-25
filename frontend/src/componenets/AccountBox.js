import { ProfileImg2 } from "./ProfileImg";
import React from "react";
import styles from "./AccountBox.module.css";

function AccountBox({ src, peoplename, nickname }) {
  return (
    <div className={styles.accountbox}>
      <ProfileImg2 src={src} alt="프로필 이미지" />
      <h5>{peoplename}</h5>
      <p>{nickname}</p>
    </div>
  );
}

export default AccountBox;
