import React from "react";
import AccountNav from "../components/AccountNav";
import { Input1, Input2 } from "../components/AccountInput";
import { useState } from "react";
import BlueBtn from "../components/BlueBtn";
import BigBtn from "../components/BigBtn";

function Page6(props) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [vertificationCode, setvertificationCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const button1 = () => {};
  const button2 = () => {};
  const button3 = () => {};

  return (
    <div>
      <h1>page6</h1>
      <AccountNav text1="비밀번호 재설정" text2=" " link1="/" />
      <Input1
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="전화번호"
      />
      <BlueBtn onClick={button1} text="전화번호 발송" />
      <Input1
        type="text"
        value={vertificationCode}
        onChange={(e) => setvertificationCode(e.target.value)}
        placeholder="인증번호"
      />
      <BlueBtn onClick={button2} text="인증하기" />
      <Input2
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
      />
      <Input2
        type="password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        placeholder="비밀번호 확인"
      />
      <BigBtn onClick={button3} text="비밀번호 재설정" />
    </div>
  );
}

export default Page6;
