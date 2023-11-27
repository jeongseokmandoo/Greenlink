import React from "react";
import TopNav from "../components/TopNav";
import no_icon from "../assets/non_icon.png";
import MainNav from "../components/MainNav";
import "./Setting.css";
import PersonalsetBtn from "../components/PersonalsetBtn";
import { useNavigate } from "react-router-dom";

function PersonalPage(props) {
  const navigate = useNavigate();

  const changepassword = () => {
    navigate("/6");
  };

  const logout = () => {
    // 로컬스트리지에서 토큰 삭제
    localStorage.removeItem("token");
    navigate("/");
  };

  const deleteaccount = () => {
    fetch("백엔드_URL", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        //요청이 성공적으로 이루어졌다면,
        if (response.ok) {
          localStorage.removeItem("token");
          alert("계정이 성공적으로 삭제되었습니다.");
          navigate("/");
        } else {
          throw new Error("계정을 삭제하는데 실패했습니다.");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("계정을 삭제하는데 실패했습니다.");
      });
  };

  return (
    <div className="setting">
      <TopNav
        className="topNav"
        text="개인/보안"
        link1={undefined}
        link2="/setting"
        icon1={no_icon}
        icon2={no_icon}
      />
      <div className="contents"></div>
      <PersonalsetBtn text="비밀번호 변경하기" onClick={changepassword} />
      <PersonalsetBtn text="로그아웃" onClick={logout} />
      <PersonalsetBtn text="탈퇴하기" onClick={deleteaccount} />
      <MainNav />
    </div>
  );
}

export default PersonalPage;
