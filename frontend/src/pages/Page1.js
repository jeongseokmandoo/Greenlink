import React from "react";
import test from "../assets/test.jpg";
import Btn from "../componenets/Btn";

const imgstyle = {
  width: "50vw",
  height: "30vh",
  marginLeft: "25vw",
  marginRight: "25vw",
  marginTop: "10vh",
};

function Page1(props) {
  return (
    <div className="page1div">
      <h1>page 1</h1>
      <img src={test} alt="로고" style={imgstyle} />
      <Btn text="가입하기" link="/2" />
      <Btn text="로그인하기" link="/5" />
    </div>
  );
}

export default Page1;
