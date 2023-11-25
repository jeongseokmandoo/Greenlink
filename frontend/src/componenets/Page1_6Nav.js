import { Link } from "react-router-dom";
import styles from "./Page1_6Nav.module.css";

function Page1_6Nav({ text1, text2, link1 }) {
  return (
    <div className={styles.nav}>
      <Link to="/">X </Link>
      <h2>{text1}</h2>
      <Link to={link1}>{text2}</Link>
    </div>
  );
}

export default Page1_6Nav;
