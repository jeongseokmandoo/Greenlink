import React from "react";
import Btn from "../componenets/Btn";
import AccountNav from "../componenets/AccountNav";
import { Input3 } from "../componenets/AccountInput";
import { useState, useRef } from "react";
import styles from "./Page3.module.css";
import defaultImage from "../assets/default_image.png";

function Page3(props) {
  const [File, setFile] = useState(null);

  const button3 = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFile(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const ImageInput = useRef();

  const OnClickImageUpload = () => {
    if (ImageInput.current) {
      console.log("Clicking Input");
      ImageInput.current.click();
    }
  };

  return (
    <div>
      <h1>page3</h1>
      <AccountNav text1="계정만들기" text2="로그인" link1="/5" />
      <label htmlFor="file-input">
        {File ? (
          <img src={File} alt="uploaded file" className={styles.img} />
        ) : (
          <div>
            <img
              src={defaultImage}
              className={styles.img}
              onClick={OnClickImageUpload}
            />
          </div>
        )}
      </label>
      <Input3
        id="file-input"
        type="file"
        accept="image/"
        onChange={button3}
        ref={ImageInput}
      />
      <p>내 이미지를 등록하세요!</p>
      <Btn text="가입하기" link="/4" />
    </div>
  );
}

export default Page3;
