import React from "react";
import Btn2 from "../components/Btn2";
import TopNav from "../components/TopNav";
import no_icon from "../assets/non_icon.png";
import setting_icon from "../assets/Setting_Icon.png";
import MainNav from "../components/MainNav";
import AccountBox from "../components/AccountBox";
import Profileimg1 from "../assets/on_Bell_Icon.png";
import Profileimg2 from "../assets/Setting_Icon.png";
import Profileimg3 from "../assets/Gallery_Icon.png";
import Profileimg4 from "../assets/Home_Icon.png";
import { useState } from "react";
import styles from "./AccounthomePage.module.css";

function Accounthome() {
  const [isInvited, setisInvited] = useState(false);
  const handleInviteFamily = () => {
    setisInvited(!isInvited);
  };

  return (
    <div>
      <TopNav
        text="우리 가족"
        link1="undefined"
        link2="/setting"
        icon1={no_icon}
        icon2={setting_icon}
      />
      <div>
        <AccountBox
          className={styles.accountbox}
          src={Profileimg1}
          peoplename="이윤금"
          nickname="이 집 최고 권력자"
        />
        <Btn2 text="내 프로필 수정" link="/accountmodify" />
        <div className={styles.graybox}></div>
        <h4>연결된 가족</h4>
        <AccountBox
          className={styles.accountbox}
          src={Profileimg2}
          peoplename="박지한"
          nickname="귀염둥이"
        />
        <AccountBox
          className={styles.accountbox}
          src={Profileimg3}
          peoplename="박하영"
          nickname="재롱둥이"
        />
        <AccountBox
          className={styles.accountbox}
          src={Profileimg4}
          peoplename="윤동하"
          nickname="막내"
        />
      </div>
      <div className={styles.graybox}></div>
      <button onClick={handleInviteFamily}>가족 초대하기</button>
      {isInvited && <p>화분번호</p>}
      <MainNav />
    </div>
  );
}

export default Accounthome;
