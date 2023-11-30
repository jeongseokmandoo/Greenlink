import React, { useState } from "react";
import AccountNav from "../components/AccountNav";
import styles from "./Page3.module.css";
import Avatar1 from "../assets/avatar/avatar1.png";
import AvatarList from "../components/AvatarList";
import SignupBtn from "../components/SignupBtn";
import { useNavigate } from "react-router-dom";

function Page3() {
  const [previewImage, setPreviewImage] = useState(null);
  const [fileListstyle, setFileListstyle] = useState(false); // 선택할 이미지 리스트 처음에 display: none으로
  const navigate = useNavigate();

  const ptag = {
    display: "flex",
    justifyContent: "center",
    fontSize: "calc(1.25vw + 1.25vh)",
    marginBottom: "0",
  };

  const storelocalP3 = () => {
    // 프로필 선택 안했다면
    if (previewImage == null) {
      alert("프로필을 선택해주세요.");
    } //프로필 선택했다면 로컬 스토리지에 데이터 저장 후 url 이동
    else {
      localStorage.setItem("profile_picture", previewImage);
      navigate("/4");
    }
  };

  //이미지 클릭하면 이미지 선택 리스트 열고, 닫는 함수
  const handleAvatarList = () => {
    setFileListstyle(!fileListstyle);
  };

  //이미지 선택 리스트의 이미지 선택하면 해당 이미지로 설정하는 함수
  const handleImageItemClick = (item) => {
    setPreviewImage(item.target.src);
  };

  return (
    <div>
      <AccountNav text1="계정 만들기" text2="로그인" link1="/5" />
      <label htmlFor="file-input">
        {previewImage ? (
          <div>
            {/* 이미지 선택 안한 상태에서 기본 avatar1 이미지 보여주기 */}
            <img
              src={previewImage}
              alt="uploaded file"
              className={styles.img}
              onClick={handleAvatarList}
            />
          </div>
        ) : (
          <div>
            {/* 선택한 아바타 이미지 보여주기*/}
            <img
              src={Avatar1}
              className={styles.img}
              onClick={handleAvatarList}
              alt="basic file"
            />
          </div>
        )}
      </label>
      <p style={ptag}>이미지를 클릭해서 선택해주세요 !</p>
      {/* 아바타 선택 리스트 */}
      {fileListstyle && <AvatarList onClick={handleImageItemClick} />}
      <SignupBtn text="가입하기" onClick={storelocalP3} />
    </div>
  );
}

export default Page3;
