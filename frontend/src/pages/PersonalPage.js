import React from "react";
import TopNav from "../componenets/TopNav";
import no_icon from "../assets/non_icon.png";
import MainNav from "../componenets/MainNav";

function PersonalPage(props) {
  return (
    <div>
      <h1>personal</h1>
      <TopNav
        text="개인/보안"
        link1={undefined}
        link2={undefined}
        icon1={no_icon}
        icon2={no_icon}
      />
      <MainNav />
    </div>
  );
}

export default PersonalPage;
