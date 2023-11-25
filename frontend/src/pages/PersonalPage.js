import React from "react";
import TopNav from "../componenets/TopNav";
import no_icon from "../assets/non_icon.png";
import x_icon from "../assets/X_Icon.png";
import MainNav from "../componenets/MainNav";
import "./Setting.css";

const ChangePasswordButton = ({ className = "" }) => {
  const handleClick = () => {
    // 비밀번호 변경 로직을 여기에 작성하시면 됩니다.
  };

  return (
    <div className={className} onClick={handleClick}>
      비밀번호 변경하기
    </div>
  );
};

const LogoutButton = ({ className = "" }) => {
  const handleClick = () => {
    // 로그아웃 로직을 여기에 작성하시면 됩니다.
  };

  return (
    <div className={className} onClick={handleClick}>
      로그아웃
    </div>
  );
};

const DeleteAccountButton = ({ className = "" }) => {
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
        <ChangePasswordButton className="clickbox" />
        <LogoutButton className="clickbox" />
        <DeleteAccountButton className="clickbox" />
      </div>
      <MainNav />
    </div>
  );
}

export default PersonalPage;
