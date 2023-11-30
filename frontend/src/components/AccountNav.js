import { Link } from "react-router-dom";
import styles from "./AccountNav.module.css";

function AccountNav({ text1, text2, link1 }) {
  return (
    <div className={styles.nav}>
      <Link to="/" className={styles.link}>
        <div
          style={{
            fontSize: "calc(1.25vh + 1.25vw)",
            fontWeight: "bold",
            color: "Red",
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;❌&nbsp;&nbsp;&nbsp;
          <br />
          <br />
        </div>
      </Link>
      <h2
        style={{
          fontSize: "calc(2vh + 2.5vw)",
          fontWeight: "bold",
          display: "flex",
        }}
      >
        {text1}
      </h2>
      <Link to={link1} className={styles.link}>
        <div
          style={{
            fontSize: "calc(1.25vh + 1.25vw)",
            color: "black",
            fontWeight: "bold",
          }}
        >
          {text2}
          <br />
          <br />
        </div>
      </Link>
    </div>
  );
}

export default AccountNav;
