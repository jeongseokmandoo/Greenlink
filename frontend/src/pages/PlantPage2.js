import React, { useState } from "react";
import TopNav from "../componenets/TopNav";
import on_bell_icon from "../assets/on_Bell_Icon.png";
import setting_icon from "../assets/Setting_Icon.png";
import UpdateBox from "../componenets/UpdateBox";

function PlantPage2(props) {
  const [plantName, setPlantName] = useState("");
  const [plantSort, setPlantSort] = useState("");
  const [plantDate, setPlantDate] = useState("");

  return (
    <div>
      <h1>plantpage2</h1>
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
    </div>
  );
}

export default PlantPage2;
