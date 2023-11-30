import React, { useState } from "react";
import MainNav from "../components/MainNav";
import UpdateBox from "../components/UpdateBox";
import { Link } from "react-router-dom";
import BigBtn from "../components/BigBtn";
import { ProfileImg } from "../components/ProfileImg";
import Profileimg from "../assets/rabit1.png";
import styles from "./GroupPage2.module.css";

function GroupPage2(props) {
  const [humanName, sethumanName] = useState("");
  const [myRole, setmyRole] = useState("");

  const button = () => {};

  return (
    <div className={styles.main}>
      <div class={styles.container}>
        <Link className={styles.back} to="/group1">
          &lt; 돌아가기
        </Link>
        <ProfileImg src={Profileimg} alt="프로필 이미지" />
        <div className={styles.updatebox}>
          <UpdateBox
            className={styles.updatebox1}
            title="이름"
            type="text"
            value={humanName}
            onChange={(e) => sethumanName(e.target.value)}
            placeholder="홍길동"
          />
          <div className={styles.warn}>이름은 ５글자를 넘을 수 없습니다.</div>
          <UpdateBox
            className={styles.updatebox2}
            title="우리집에서 나는？（선택）"
            type="text"
            value={myRole}
            onChange={(e) => setmyRole(e.target.value)}
            placeholder="귀염둥이 막내"
          />
        </div>
        <BigBtn text="완료" onClick={button} />
      </div>
      <MainNav />
    </div>
  );
}

export default GroupPage2;
