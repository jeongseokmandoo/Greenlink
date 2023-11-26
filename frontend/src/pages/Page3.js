import React, { useState, useRef } from "react";
import AccountNav from "../components/AccountNav";
import styles from "./Page3.module.css";
import Avatar1 from "../assets/avatar/avatar1.png";
import AvatarList from "../components/AvatarList";
import SignupBtn from "../components/SignupBtn";
import { useNavigate } from "react-router-dom";

function Page3() {
  const [previewImage, setPreviewImage] = useState(null);
  const [fileListstyle, setFileListstyle] = useState(false);
  const navigate = useNavigate();

  const storelocalP3 = () => {
    if (previewImage == null) {
      alert("프로필을 선택해주세요.");
    } else {
      localStorage.setItem("Profile_picture", previewImage);
      navigate("/4");
    }
  };

  const handleAvatarList = () => {
    setFileListstyle(!fileListstyle);
  };

  const handleImageItemClick = (item) => {
    setPreviewImage(item.target.src);
  };

  const imageInputRef = useRef();

  return (
    <div>
      <AccountNav text1="계정만들기" text2="로그인" link1="/5" />
      <label htmlFor="file-input">
        {previewImage ? (
          <div>
            <img
              src={previewImage}
              alt="uploaded file"
              className={styles.img}
              onClick={handleAvatarList}
            />
          </div>
        ) : (
          <div>
            <img
              src={Avatar1}
              className={styles.img}
              onClick={handleAvatarList}
            />
          </div>
        )}
      </label>
      <p>내 이미지를 등록하세요!</p>
      {fileListstyle && <AvatarList onClick={handleImageItemClick} />}
      <SignupBtn text="가입하기" onClick={storelocalP3} />
    </div>
  );
}

export default Page3;
