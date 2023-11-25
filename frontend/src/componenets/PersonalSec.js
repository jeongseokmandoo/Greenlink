import React from "react";
import { useNavigate } from "react-router-dom";

const PersonalSec = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/personal");
  };

  return (
    <div className={className} onClick={handleClick}>
      개인 / 보안
    </div>
  );
};

export default PersonalSec;
