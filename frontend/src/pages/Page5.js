import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountNav from "../components/AccountNav";
import { Input2 } from "../components/AccountInput";
import { useState } from "react";
import BigBtn from "../components/BigBtn";

const to6 = {
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  fontSize: "calc(1vh + 1.25vw)",
};

function Page5(props) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //로그인하기 누르면 시행되는 함수
  const login = () => {
    //양식 잘못 입력하면
    if (!phoneNumber || !password) {
      alert("모든 값을 입력해주세요");
    } else if (phoneNumber.length !== 11 || !phoneNumber.startsWith("010")) {
      alert("전화번호를 올바른 형식으로 입력해주세요.");
    } else if (password.length < 8 || password.length > 12) {
      alert("비밀번호는 8자 이상, 12자 이하여야 합니다.");
    } else if (
      !/[!@#$%^&*(),.?":{}|<>]/.test(password) ||
      !/[A-Z]/.test(password)
    ) {
      alert(
        "비밀번호에 특수문자와 대문자가 최소 하나 이상 포함되어야 합니다. "
      );
    } //양식 잘 입력하면
    else {
      localStorage.setItem("username", phoneNumber);
      localStorage.setItem("password", password);
      // 로그인 버튼 클릭시 보낼 데이터
      const data = {
        phoneNumber: localStorage.getItem("username"),
        password: localStorage.getItem("password"),
      };
      console.log(data); //data 양식 확인
      // 백에 회원가입 데이터 보내는 부분 !!URL 추가해야 함.
      fetch("백엔드_URL", {
        method: "POST",
        headers: {
          // headers는 HTTP 요청 헤더를 설정. 헤더는 클라이언트와 서버 간의 통신에서 추가적인 정보를 전달하기 위해 사용.
          "Content-Type": "application/json", // 본문에 포함된 데이터가 JSON형식으로 전달됨을 나타냄
        },
        body: JSON.stringify(data), // 보낼 데이터 json으로 변형
        mode: "cors", // 보안 때문에 붙이기!!
      })
        //로그인 정보 확인 로직 필요
        .then((response) => {
          //성공적으로 로그인할 때
          if (response.ok) {
            alert("로그인에 성공하셨습니다.");
            navigate("/plant1");
          }
          //로그인 실패했을 때
          else {
            throw new Error("데이터를 백엔드로 보내는데 실패했습니다.");
          }
        })
        .catch((error) => {
          console.error(error);
          alert("죄송합니다. 로그인에 실패하셨습니다.");
          navigate("/5");
        });
    }
  };

  return (
    <div>
      <AccountNav text1="로그인" text2="가입하기" link1="/2" />
      <div style={{ marginTop: "25vh" }}>
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
      </div>
      <Link to="/6" style={to6}>
        <div style={{ textDecoration: "none", color: "#517849" }}>
          {" "}
          🗝️&nbsp; 비밀번호를 잊어버리셨나요？
        </div>
      </Link>
      <BigBtn onClick={login} text="로그인하기" />
    </div>
  );
}

export default Page5;
