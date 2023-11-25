import React, { useState } from "react";

const NotifiBar = ({ className = "" }) => {
  const [notification, setNotification] = useState(true);

  const handleNotification = () => {
    setNotification(!notification);
  };

  return (
    <div className={className}>
      알림
      <button onClick={handleNotification}>
        {notification ? "알림 끄기" : "알림 켜기"}
      </button>
    </div>
  );
};

export default NotifiBar;
