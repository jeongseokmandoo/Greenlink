import React from "react";
import styles from "./ProfileImg.module.css";

function ProfileImg({ src, alt }) {
  return (
    <div>
      <img src={src} alt={alt} className={styles.profileImage} />
    </div>
  );
}

function ProfileImg2({ src, alt }) {
  return (
    <div className={styles.profileImage2}>
      <img src={src} alt={alt} />
    </div>
  );
}

export { ProfileImg, ProfileImg2 };
