import React from "react";

const imgstyle = {
  objectFit: "cover",
  marginRight: "5vw",
  height: "17vh",
  width: "25vw",
};

function GalleryPic({ img }) {
  return (
    <div>
      <img src={img} alt="gallerypic" style={imgstyle} />
    </div>
  );
}

export default GalleryPic;
