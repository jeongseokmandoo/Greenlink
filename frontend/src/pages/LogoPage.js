import React from "react";
import logo from "../assets/logo.png";
import Btn from "../components/Btn";

function LogoPage(props) {
  return (
    <div>
      <img
        src={logo}
        alt="로고"
        style={{
          width: "80vw",
          height: "45vh",
          marginLeft: "10vw",
          marginRight: "10vw",
          marginTop: "18vh",
        }}
      />

      <Btn text="가입하기" link="/signupstep1" />
      <Btn text="로그인하기" link="/api/login/" />
    </div>
  );
}

export default LogoPage;
