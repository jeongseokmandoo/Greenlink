import React from "react";
import AvatarIcon from "./AvatarIcon";
import avatar1 from "../assets/avatar/avatar1.png";
import avatar2 from "../assets/avatar/avatar2.png";
import avatar3 from "../assets/avatar/avatar3.png";
import avatar4 from "../assets/avatar/avatar4.png";
import avatar5 from "../assets/avatar/avatar5.png";
import avatar6 from "../assets/avatar/avatar6.png";
import avatar7 from "../assets/avatar/avatar7.png";
import avatar8 from "../assets/avatar/avatar8.png";
import avatar9 from "../assets/avatar/avatar9.png";
import avatar10 from "../assets/avatar/avatar10.png";
import avatar11 from "../assets/avatar/avatar11.png";
import avatar12 from "../assets/avatar/avatar12.png";
import avatar13 from "../assets/avatar/avatar13.png";
import avatar14 from "../assets/avatar/avatar14.png";
import avatar15 from "../assets/avatar/avatar15.png";

function AvatarList({ onClick }) {
  return (
    <div>
      <AvatarIcon src={avatar1} alt="1" onClick={onClick} />
      <AvatarIcon src={avatar2} alt="2" onClick={onClick} />
      <AvatarIcon src={avatar3} alt="3" onClick={onClick} />
      <AvatarIcon src={avatar4} alt="4" onClick={onClick} />
      <AvatarIcon src={avatar5} alt="5" onClick={onClick} />
      <AvatarIcon src={avatar6} alt="6" onClick={onClick} />
      <AvatarIcon src={avatar7} alt="7" onClick={onClick} />
      <AvatarIcon src={avatar8} alt="8" onClick={onClick} />
      <AvatarIcon src={avatar9} alt="9" onClick={onClick} />
      <AvatarIcon src={avatar10} alt="10" onClick={onClick} />
      <AvatarIcon src={avatar11} alt="11" onClick={onClick} />
      <AvatarIcon src={avatar12} alt="12" onClick={onClick} />
      <AvatarIcon src={avatar13} alt="13" onClick={onClick} />
      <AvatarIcon src={avatar14} alt="14" onClick={onClick} />
      <AvatarIcon src={avatar15} alt="15" onClick={onClick} />
    </div>
  );
}

export default AvatarList;
