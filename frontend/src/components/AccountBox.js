import { ProfileImg2 } from "./ProfileImg";
import React from "react";

const style = {
  // display: "inline-flex",
  width: "100vw",
};

const contentstyle = {
  diplay: "flex",
  flexDirection: "column",
};

const namestyle = {
  fontSize: "2.5em",
  fontWeight: "800",
  marginTop: "1vh",
};

const nicknamestyle = {
  fontSize: "1.5em",
  fontWeight: "600",
  marginTop: "0.5vh",
  opacity: "40%",
};

function AccountBox({ className, src, peoplename, nickname }) {
  return (
    <div className={className} style={style}>
      <ProfileImg2 src={src} alt="프로필 이미지" />
      <div style={contentstyle}>
        <div style={namestyle}>{peoplename}</div>
        <div style={nicknamestyle}>{nickname}</div>
      </div>
    </div>
  );
}

export default AccountBox;
