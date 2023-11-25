import React, { useState } from "react";
import MainNav from "../componenets/MainNav";
import UpdateBox from "../componenets/UpdateBox";
import { Link } from "react-router-dom";
import BigBtn from "../componenets/BigBtn";

function GroupPage2(props) {
  const [humanName, sethumanName] = useState("");
  const [myRole, setmyRole] = useState("");

  const button = () => {};

  return (
    <div>
      <h1>group2</h1>
      <Link to="/group1">&lt; 돌아가기</Link>
      <UpdateBox
        title="이름"
        type="text"
        value={humanName}
        onChange={(e) => sethumanName(e.target.value)}
        placeholder="이름"
      />
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
