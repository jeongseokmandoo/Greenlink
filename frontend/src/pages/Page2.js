import AccountNav from "../components/AccountNav";
import SignupBtn from "../components/SignupBtn";
import { Input2 } from "../components/AccountInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Page2(props) {
  const [korean_name, setKorean_name] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const storelocalP2 = () => {
    if (!korean_name || !phoneNumber || !password || !passwordConfirm) {
      alert("모든 값을 입력해주세요.");
    } else if (phoneNumber.length !== 11 || !phoneNumber.startsWith("010")) {
      alert("전화번호를 올바른 형식으로 입력해주세요.");
    } else if (password.length < 8 || password.length > 13) {
      alert("비밀번호는 8자 이상, 12자 이하여야 합니다.");
    } else if (
      !/[!@#$%^&*(),.?":{}|<>]/.test(password) ||
      !/[A-Z]/.test(password)
    ) {
      alert(
        "비밀번호에 특수문자와 대문자가 최소 하나 이상 포함되어야 합니다. "
      );
    } else if (password !== passwordConfirm) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    } else {
      // 가입하기 버튼 클릭시 실행, 입력된 데이터를 로컬 스토리지에 저장
      localStorage.setItem("namebox", korean_name);
      localStorage.setItem("phoneNumber", phoneNumber);
      localStorage.setItem("password", password);
      localStorage.setItem("passwordConfirm", passwordConfirm);
      navigate("/3");
    }
  };

  return (
    <div className="page2div">
      <AccountNav text1="계정만들기" text2="로그인" link1="/5" />
      <Input2
        type="text"
        value={korean_name}
        onChange={(e) => setKorean_name(e.target.value)}
        placeholder="성명"
      />
      <Input2
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="전화번호(010XXXXXXXX)"
      />
      <Input2
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
      />
      <Input2
        type="password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        placeholder="비밀번호 확인"
      />
      <SignupBtn text="가입하기" onClick={storelocalP2} />
    </div>
  );
}

export default Page2;
