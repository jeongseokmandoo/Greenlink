import React, { useState } from "react";
import MainNav from "../components/MainNav";
import UpdateBox from "../components/UpdateBox";
import { Link } from "react-router-dom";
import BigBtn from "../components/BigBtn";
import { ProfileImg } from "../components/ProfileImg";
import Profileimg from "../assets/on_Bell_Icon.png";

function GroupPage2(props) {
  const [humanName, sethumanName] = useState("");
  const [myRole, setmyRole] = useState("");

  const button = () => {};

  return (
    <div>
      <h1>group2</h1>
      <Link to="/group1">&lt; 돌아가기</Link>
      <ProfileImg src={Profileimg} alt="프로필 이미지" />
      <UpdateBox
        title="이름"
        type="text"
        value={humanName}
        onChange={(e) => sethumanName(e.target.value)}
        placeholder="이름"
      />
      <p>이름은 5글자를 넘을 수 없습니다.</p>
      <UpdateBox
        title="우리집에서 나는? (선택)"
        type="text"
        value={myRole}
        onChange={(e) => setmyRole(e.target.value)}
        placeholder="우리집에서 나는?"
      />
      <BigBtn text="완료" onClick={button} />
      <MainNav />
    </div>
  );
}

export default GroupPage2;
