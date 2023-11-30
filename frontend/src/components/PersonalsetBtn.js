import React from "react";

function PersonalsetBtn({ text, onClick }) {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
}

export default PersonalsetBtn;
