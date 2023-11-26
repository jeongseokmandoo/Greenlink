import React from "react";
import { Link } from "react-router-dom";
import AccountNav from "../components/AccountNav";
import { Input2 } from "../components/AccountInput";
import { useState } from "react";
import BigBtn from "../components/BigBtn";

function Page5(props) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const button1 = () => {};

  return (
    <div>
      <h1>page5</h1>
      <AccountNav text1="로그인" text2="가입하기" link1="/2" />
      <Input2
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="전화번호"
      />
      <Input2
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
      />
      <BigBtn onClick={button1} text="로그인하기" />
      <Link to="/6">비밀번호를 잊어버리셨나요?</Link>
    </div>
  );
}

export default Page5;
