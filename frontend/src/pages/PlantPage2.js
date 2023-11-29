import React, { useState } from "react";
import TopNav from "../components/TopNav";
import on_bell_icon from "../assets/on_Bell_Icon.png";
import setting_icon from "../assets/Setting_Icon.png";
import UpdateBox from "../components/UpdateBox";
import PlantImage from "../components/PlantImage";
import { Link } from "react-router-dom";
import BigBtn from "../components/BigBtn";
import styles from "./PlantPage2.module.css";

function PlantPage2(props) {
  const [plantName, setPlantName] = useState("");
  const [plantSort, setPlantSort] = useState("");
  const [plantDate, setPlantDate] = useState("");

  const button = () => {};

  return (
    <div>
      <Link to="/plant1">&lt; 돌아가기</Link>
      <PlantImage className={styles.plantimage} level={3} />
      <TopNav
        text={undefined}
        link1="/notification"
        link2="/setting"
        icon1={on_bell_icon}
        icon2={setting_icon}
      />
      <UpdateBox
        title="식물 이름"
        type="text"
        value={plantName}
        onChange={(e) => setPlantName(e.target.value)}
        placeholder="식물 이름"
      />
      <p>이름은 5글자를 넘을 수 없습니다.</p>
      <UpdateBox
        title="가족이 된 날"
        type="Date"
        value={plantDate}
        onChange={(e) => setPlantDate(e.target.value)}
        placeholder="가족이 된 날"
      />
      <UpdateBox
        title="식물 종류 (선택)"
        type="text"
        value={plantSort}
        onChange={(e) => setPlantSort(e.target.value)}
        placeholder="식물 종류"
      />
      <BigBtn text="완료" onClick={button} />
    </div>
  );
}

export default PlantPage2;
