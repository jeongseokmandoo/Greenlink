import React, { useState } from "react";
import AccountNav from "../components/AccountNav";
import { Input2 } from "../components/AccountInput";
import { useNavigate } from "react-router-dom";
import BigBtn from "../components/BigBtn";

// 토큰 관련된 건 대부분 백에서 만들어주면 프론트에서 받아서 설정

const ptag1 = {
  display: "flex",
  justifyContent: "center",
  fontSize: "calc(1.5vh + 1.25vw)",
  fontWeight: "bold",
  marginTop: "10vh",
  marginBottom: "2.5vh",
};

const ptag2 = {
  display: "flex",
  justifyContent: "center",
  fontSize: "calc(1vh + 1.25vw)",
  marginBottom: "2.5vh",
};

function SignupPage(props) {
  const [plantnumber, setPlantnumber] = useState(""); //화분번호 state
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");

  // 가입하기 버튼 누르면 시행되는 함수
  const start = () => {
    // 화분번호가 없으면
    if (!plantnumber) {
      alert("화분번호를 입력해주세요.");
    } else if (!plantnumber == 8) {
      alert("화분번호는 8자리 입니다.");
    } else if (!/^[A-Z]{4}[0-9]{4}$/.test(plantnumber)) {
      alert("화분번호 양식을 지켜주세요.");
    } // 화분번호가 있으면
    else {
      //로컬 스토리지에 데이터 저장 (왼쪽: 키, 오른쪽: 데이터)
      localStorage.setItem("flower_pot", plantnumber);
      localStorage.setItem("nickname", nickname);

      //백에 보낼 data 정의
      const signupdata = {
        korean_name: localStorage.getItem("korean_name"),
        password: localStorage.getItem("password"),
        username: localStorage.getItem("username"),
        profile_picture: localStorage.getItem("profile_picture"),
        flower_pot: localStorage.getItem("flower_pot"),
        nickname: localStorage.getItem("nickname"),
      };
      console.log(signupdata); // data 양식 확인
      // 백에 회원가입 데이터 보내는 부분 !!URL 추가해야 함.
      fetch("http://127.0.0.1:8000/api/signup/", {
        method: "POST",
        headers: {
          // headers는 HTTP 요청 헤더를 설정. 헤더는 클라이언트와 서버 간의 통신에서 추가적인 정보를 전달하기 위해 사용.
          "Content-Type": "application/json", // 본문에 포함된 데이터가 JSON형식으로 전달됨을 나타냄
        },
        body: JSON.stringify(signupdata), // 보낼 데이터 json으로 변형
        mode: "cors", // 보안 때문에 붙이기!!
      })
        // 중복하는 전화번호 있을 때 회원가입 안되도록 하는 로직 추가 필요
        .then((response) => {
          //성공적으로 백에 데이터 보냈을 때
          if (response.ok) {
            response.json().then((data) => {
              if (data.token && data.token.access) {
                alert(data.message); // 회원가입 성공
                navigate("/api/login");
                localStorage.setItem("data", data);
              } else {
                throw new Error("회원가입에 실패하셨습니다."); //회원가입 실패
              }
            });
          }
          // 데이터 보내기 실패했을 때
          else {
            throw new Error("데이터를 백엔드로 보내는데 실패했습니다.");
          }
        })
        .catch((error) => {
          console.error(error);
          alert("죄송합니다. 회원가입을 다시 해주세요.");
          navigate("/signupstep1");
        });
    }
  };

  return (
    <div>
      <AccountNav text1="계정만들기" text2="로그인" link1="/api/login/" />
      <p style={ptag1}>화분 하단의 번호를 입력해주세요.</p>
      {/* plantnumber 작성 input */}
      <Input2
        type="text"
        value={plantnumber}
        onChange={(e) => setPlantnumber(e.target.value)}
        placeholder="화분번호"
      />
      <p style={ptag2}>아직 화분이 없어요.</p>
      <BigBtn onClick={start} text="시작하기" />
    </div>
  );
}

export default SignupPage;
