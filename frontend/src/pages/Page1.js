import React from "react";
import logo from "../assets/logo.png";
import Btn from "../components/Btn";
import "./Page1.css";
import AvatarList from "../components/AvatarList";

function Page1(props) {
  return (
    <div className="page1div">
      <div className="logo">
        <img src={logo} alt="로고" />
      </div>
      <Btn text="가입하기" link="/2" />
      <Btn text="로그인하기" link="/5" />
    </div>
  );
}

export default Page1;
