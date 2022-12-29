import React, { useState } from "react";
import logo from "../img/logo.png";
import "../styles/RegForm.css";
import axios from "axios";
import { BACKEND_URL } from "../utils";
import AllContents from "./AllContents";
import { useNavigate } from "react-router-dom";
import IntroHeader from "./IntroHeader";
import IntroFooter from "./IntroFooter";
import { useEffect } from "react";

const RegForm = () => {
  // const { username, setUsername } = useState("");
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onNav = () => {
    navigate(`/login`);
  };

  // useEffect(() => {
  //   sessionStorage.removeItem("email");
  //   // sessionStorage.clear();
  // }, []);

  return (
    <div style={{ background: "#f3f3f3" }}>
      <IntroHeader />

      <div className="contain_wrap">
        <div className="contain_box">
          <p>1/3단계</p>
          <h1>비밀번호를 설정해 멤버십을 시작하세요.</h1>
          <div className="contain_text">
            몇 단계만 더 거치면 넷플릭스 가입 완료 ! <br />
            복잡한 단계는 모두 없앴습니다.
          </div>
          <form
            className="login_form"
            // action="http://localhost:8084/login_form"
            onSubmit={async (e) => {
              e.preventDefault();
              if (!useremail || !password) {
                alert("입력값이 없습니다.");
              } else {
                try {
                  const data = await axios({
                    url: `${BACKEND_URL}/api/v1/join`,
                    method: "POST",
                    data: {
                      useremail,
                      password,
                    },
                  });
                  setUseremail("");
                  setPassword("");
                  console.log(data);
                  alert("회원가입 성공");
                  onNav();
                } catch (e) {
                  alert("회원가입 실패");
                }
              }
            }}
          >
            <input
              type="email"
              placeholder="이메일 주소"
              className="email"
              name="email"
              id="email"
              value={useremail}
              onChange={(e) => {
                setUseremail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="비밀번호를 추가하세요"
              className="pw"
              name="pw"
              id="pw"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="check_box_wrap">
              <div className="check_box1 flex flex_jc_c">
                <input
                  type="checkbox"
                  className="checkBox1"
                  id="checkBox1"
                  name="checkBox1"
                />
                <label htmlFor="checkBox1"></label>
                <div className="check_text1">
                  예, 저는 <a href="#">개인정보 처리방침</a>에 따른 개인정보
                  수집 및 활용에 동의합니다.
                </div>
              </div>
              <div className="check_box2 flex flex_jc_c">
                <input
                  type="checkbox"
                  className="checkBox2"
                  id="checkBox2"
                  name="checkBox2"
                />
                <label htmlFor="checkBox2"></label>
                <div className="check_text2">
                  예, 넷플릭스 특별 할인 알림 이메일을 보내주세요. (선택 사항)
                </div>
              </div>
            </div>
            <button className="submit_btn">동의하고 계속</button>
          </form>
        </div>
      </div>

      <IntroFooter />
    </div>
  );
};

export default RegForm;
