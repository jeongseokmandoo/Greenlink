import React, { useState } from "react";
import MainNav from "../components/MainNav";
import UpdateBox from "../components/UpdateBox";
import { Link, useNavigate } from "react-router-dom";
import BigBtn from "../components/BigBtn";
import { ProfileImg } from "../components/ProfileImg";
import Profileimg from "../assets/on_Bell_Icon.png";

function Accountmodify(props) {
  const [humanName, sethumanName] = useState("");
  const [mynickname, setMynickname] = useState("");
  const navigate = useNavigate();

  const updateProfile = () => {
    // 유효성 검사: 이름이 5글자를 넘을 경우
    if (humanName.length > 5) {
      alert("이름은 5글자를 넘을 수 없습니다.");
    } else if (!humanName) {
      alert("이름을 입력해주세요.");
    } else {
      localStorage.setItem("korean_name", humanName);
      localStorage.setItem("nickname", mynickname);

      const data = {
        humanName: localStorage.getItem("korean_name"),
        myRole: localStorage.getItem("nickname"),
        profile_picture: localStorage.getItem("profile_picture"),
      };
      console.log(data);

      fetch("백엔드_URL", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        mode: "cors",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("프로필 수정에 실패했습니다.");
          }
        })
        .then((data) => {
          // 받아온 데이터를 문자열로 변환하여 localStorage에 저장
          localStorage.setItem("data", JSON.stringify(data));
          alert("프로필 수정이 완료되었씁니다.");
          navigate("/accounthome");
        })
        .catch((error) => {
          console.error(error);
          alert("프로필 수정 과정에서 오류가 발생했습니다.");
        });
    }
  };
  return (
    <div>
      <Link to="/accounthome">&lt; 돌아가기</Link>
      <ProfileImg src={Profileimg} alt="프로필 이미지" />
      <UpdateBox
        title="이름"
        type="text"
        value={humanName}
        onChange={(e) => sethumanName(e.target.value)}
        placeholder="이름"
      />
      <p>이름은 5글자를 넘을 수 없습니다.</p>
      <UpdateBox
        title="우리집에서 나는? (선택)"
        type="text"
        value={mynickname}
        onChange={(e) => setMynickname(e.target.value)}
        placeholder="우리집에서 나는?"
      />
      <BigBtn text="완료" onClick={updateProfile} />
      <MainNav />
    </div>
  );
}

export default Accountmodify;
