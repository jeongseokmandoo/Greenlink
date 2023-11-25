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
    <div>
      <img src={src} alt={alt} className={styles.profileImage2} />
    </div>
  );
}

export { ProfileImg, ProfileImg2 };
