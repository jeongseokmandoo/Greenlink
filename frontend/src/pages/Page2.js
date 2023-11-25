import AccountNav from "../componenets/AccountNav";
import Btn from "../componenets/Btn";
import { Input1, Input2 } from "../componenets/AccountInput";
import { useState } from "react";
import BlueBtn from "../componenets/BlueBtn";

function Page2(props) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [vertificationCode, setvertificationCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const button1 = () => {};
  const button2 = () => {};

  return (
    <div className="page2div">
      <h1>page 2</h1>
      <AccountNav text1="계정만들기" text2="로그인" link1="/5" />
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
      <Btn text="가입하기" link="/3" />
    </div>
  );
}

export default Page2;