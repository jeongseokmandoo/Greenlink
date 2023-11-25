import React from "react";
import TopNav from "../componenets/TopNav";
import no_icon from "../assets/non_icon.png";
import MainNav from "../componenets/MainNav";

function GalleryPage2(props) {
  return (
    <div>
      <h1>gallery2</h1>
      <TopNav text="퉁퉁이 사진" icon1={no_icon} icon2={no_icon} />
      <MainNav />
    </div>
  );
}

export default GalleryPage2;
