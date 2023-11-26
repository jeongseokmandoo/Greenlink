import React from "react";
import TopNav from "../components/TopNav";
import no_icon from "../assets/non_icon.png";
import x_icon from "../assets/X_Icon.png";
import MainNav from "../components/MainNav";
import "./Setting.css";

const ChangePwBtn = ({ className = "" }) => {
  const handleClick = () => {
    // 비밀번호 변경 로직을 여기에 작성하시면 됩니다.
  };

  return (
    <div className={className} onClick={handleClick}>
      비밀번호 변경하기
    </div>
  );
};

const LogoutBtn = ({ className = "" }) => {
  const handleClick = () => {
    // 로그아웃 로직을 여기에 작성하시면 됩니다.
  };

  return (
    <div className={className} onClick={handleClick}>
      로그아웃
    </div>
  );
};

const DelAccountBtn = ({ className = "" }) => {
  const handleClick = () => {
    // 계정 탈퇴 로직을 여기에 작성하시면 됩니다.
  };

  return (
    <div className={className} onClick={handleClick}>
      탈퇴하기
    </div>
  );
};

function PersonalPage(props) {
  return (
    <div className="setting">
      <h1>personal</h1>
      <TopNav
        className="topNav"
        text="개인/보안"
        link1={undefined}
        link2="/setting"
        icon1={no_icon}
        icon2={x_icon}
      />
      <div className="contents">
        <ChangePwBtn className="clickbox" />
        <LogoutBtn className="clickbox" />
        <DelAccountBtn className="clickbox" />
      </div>
      <MainNav />
    </div>
  );
}

export default PersonalPage;
