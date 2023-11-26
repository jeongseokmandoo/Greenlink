import React, { useState } from "react";
import BigBtn from "../components/BigBtn";
import AccountNav from "../components/AccountNav";
import { Input2 } from "../components/AccountInput";

function Page4(props) {
  const [plantnumber, setPlantnumber] = useState("");
  const button1 = () => {};

  return (
    <div>
      <h1>page4</h1>
      <AccountNav text1="계정만들기" text2="로그인" link1="/5" />
      <h1>화분 하단의 번호를 입력해주세요.</h1>
      <Input2
        type="text"
        value={plantnumber}
        onChange={(e) => setPlantnumber(e.target.value)}
        placeholder="화분번호"
      />
      <BigBtn onClick={button1} text="시작하기" />
      <p>아직 화분이 없어요.</p>
    </div>
  );
}

export default Page4;
