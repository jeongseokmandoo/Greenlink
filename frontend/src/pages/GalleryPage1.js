import React from "react";
import TopNav from "../components/TopNav";
import no_icon from "../assets/non_icon.png";
import MainNav from "../components/MainNav";
import Btn from "../components/Btn";
import GalleryPic from "../components/GalleryPic";
import GalleryPic1 from "../assets/GalleryPic1.png";
import GalleryPic2 from "../assets/GalleryPic2.png";
import GalleryPic3 from "../assets/GalleryPic3.png";
import GalleryPic4 from "../assets/GalleryPic4.png";
import GalleryPic5 from "../assets/GalleryPic5.png";

function GalleryPage1(props) {
  return (
    <div>
      <h1>gallery1</h1>
      <TopNav text="퉁퉁이 사진" icon1={no_icon} icon2={no_icon} />
      <p>2023.11.18</p>
      <GalleryPic img={GalleryPic1} />
      <GalleryPic img={GalleryPic2} />
      <p>2023.11.01</p>
      <GalleryPic img={GalleryPic3} />
      <GalleryPic img={GalleryPic4} />
      <p>2023.10.28</p>
      <GalleryPic img={GalleryPic5} />
      <Btn text="사진 올리기" link="/gallery2" />
      <MainNav />
    </div>
  );
}

export default GalleryPage1;
