import React from "react";
import AccountNav from "../components/AccountNav";
import { Input2 } from "../components/AccountInput";
import { useState } from "react";
import BigBtn from "../components/BigBtn";
import { useNavigate } from "react-router-dom";

function Page6(props) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const resetpassword = () => {
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
    } else {
      localStorage.setItem("phoneNumber", phoneNumber);
      localStorage.setItem("password", password);
      localStorage.setItem("passwordConfirm", passwordConfirm);
      const data = {
        phoneNumber: localStorage.getItem("phoneNumber"),
        password: localStorage.getItem("password"),
        passwordConfirm: localStorage.getItem("passwordConfirm"),
      };
      console.log(data);
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
            alert("비밀번호 변경에 성공하셨습니다.");
            navigate("/plant1");
          }
          //로그인 실패했을 때
          else {
            throw new Error("비밀번호 변경에 실패했습니다.");
          }
        })
        .catch((error) => {
          console.error(error);
          alert("죄송합니다. 비밀번호 변경에 실패하셨습니다.");
          navigate("/5");
        });
    }
  };
  return (
    <div>
      <AccountNav text1="비밀번호 재설정" text2=" " link1="/" />
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
        <Input2
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="비밀번호 확인"
        />
      </div>
      <BigBtn onClick={resetpassword} text="비밀번호 재설정" />
    </div>
  );
}

export default Page6;
