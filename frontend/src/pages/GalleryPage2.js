import React from "react";
import TopNav from "../components/TopNav";
import no_icon from "../assets/non_icon.png";
import MainNav from "../components/MainNav";
import Btn from "../components/Btn";
import GalleryPage2Pic from "../assets/GalleryPage2Pic.png";
import GalleryPic from "../components/GalleryPic";

function GalleryPage2(props) {
  return (
    <div>
      <h1>gallery2</h1>
      <TopNav text="퉁퉁이 사진" icon1={no_icon} icon2={no_icon} />
      <p>2023.11.18</p>
      <GalleryPic img={GalleryPage2Pic} />
      <Btn text="사진 올리기" link="/gallery1" />
      <MainNav />
    </div>
  );
}

export default GalleryPage2;
