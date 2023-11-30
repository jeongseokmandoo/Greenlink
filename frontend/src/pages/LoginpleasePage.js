import React from "react";
import { Link } from "react-router-dom";

function Loginplease(prop) {
  return (
    <>
      <h1>로그인 후 이용해주세요.</h1>
      <Link to={"/2"}> 로그인 페이지로 이동</Link>
    </>
  );
}

export default Loginplease;
