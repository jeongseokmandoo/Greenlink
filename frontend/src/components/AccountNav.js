import { Link } from "react-router-dom";
import styles from "./AccountNav.module.css";

function AccountNav({ text1, text2, link1 }) {
  return (
    <div className={styles.nav}>
      <Link to="/">X </Link>
      <h2>{text1}</h2>
      <Link to={link1}>{text2}</Link>
    </div>
  );
}

export default AccountNav;
