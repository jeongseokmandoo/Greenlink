import { Link } from "react-router-dom";
import styles from "./AccountNav.module.css";

function AccountNav({ text1, text2, link1 }) {
  return (
    <div className={styles.nav}>
      <Link to="/" className={styles.link}>
        {" "}
        <div style={{ fontSize: "65px" }}> ↩️ </div>{" "}
      </Link>
      <h2 style={{ fontSize: "60px", fontWeight: "bold" }}>{text1}</h2>
      <Link to={link1} className={styles.link}>
        <div style={{ fontSize: "35px", color: "#000000" }}>{text2}</div>
      </Link>
    </div>
  );
}

export default AccountNav;
