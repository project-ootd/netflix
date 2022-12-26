import React, { useState } from "react";
import "../styles/Login.css";
import logo from "../img/logo.png";
import axios from "axios";
import { BACKEND_URL } from "../utils";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../recoil";
import { useEffect } from "react";
import { Buffer } from "buffer";
import { authenticationState } from "../recoil/store";

const Login = () => {
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [authenticated, setAuthenticated] = useRecoilState(authenticationState);

  const navigate = useNavigate();
  const choiceprofile = () => {
    navigate(`/choiceprofile`);
  };

  const payinfo = () => {
    navigate(`/payinfo`);
  };

  const [user, setUser] = useRecoilState(userState);

  return (
    <div>
      <div className="bc_opacity"></div>
      <div className="bc_img"></div>
      <a href="/" className="logo_box">
        <div className="img_box">
          <img src={logo} alt="LOGO" />
        </div>
      </a>
      <div className="login_box">
        <h1>로그인</h1>
        <div className="login_form">
          <form
            autoComplete="off"
            onSubmit={async (e) => {
              e.preventDefault();
              if (!useremail || !password) {
                alert("입력값이 없습니다.");
              } else {
                try {
                  const data = await axios({
                    url: `${BACKEND_URL}/api/v1/login`,
                    method: "POST",
                    data: {
                      useremail,
                      password,
                    },
                  });
                  if (data.headers.authorization) {
                    const payload = JSON.parse(
                      Buffer.from(
                        data.headers.authorization.split(" ")[1].split(".")[1],
                        "base64"
                      ).toString("ascii")
                    );
                    setUser(payload);
                    setUserId(payload.username);
                    sessionStorage.setItem("email", payload.username);
                    sessionStorage.setItem("userId", payload.userId);
                  }

                  setUseremail("");
                  setPassword("");
                  alert("로그인 성공");
                  const payChk = await axios({
                    url: `${BACKEND_URL}/api/v1/getLastPayDate`,
                    method: "POST",
                    headers: {
                      Authorization: data.headers.authorization,
                    },
                    data: {
                      useremail,
                    },
                  });
                  console.log("payChk: ", payChk);

                  // console.log("payChk" + payChk.data.lastPaymentDate);
                  if (payChk.data.lastPaymentDate) {
                    choiceprofile();
                  } else {
                    payinfo();
                  }
                  // onNav();
                  // console.log("data : " + data.data);
                } catch (e) {
                  alert("로그인 실패");
                }
              }
            }}
          >
            <input
              type="email"
              name="userid"
              id="userid"
              className="userid"
              placeholder="이메일 주소 또는 전화번호"
              value={useremail}
              onChange={(e) => {
                setUseremail(e.target.value);
              }}
            />
            <input
              type="password"
              name="userpw"
              id="userpw"
              className="userpw"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="login_btn">로그인</button>
          </form>
          <div className="help_box">
            <div className="login_info_save flex flex_jc_sb">
              <div className="login_save_box flex">
                <input
                  type="checkbox"
                  name="LoginSave"
                  id="LoginSave"
                  className="LoginSave"
                />
                <label htmlFor="LoginSave"></label>
                <a>로그인 정보 저장</a>
              </div>

              <div className="help flex">
                <a href="/" className="help_text">
                  도움이 필요하신가요?
                </a>
              </div>
            </div>
          </div>

          <div className="login_form_other">
            <div className="join">
              Netflix 회원이 아닌가요? <a href="/">지금 가입하세요.</a>
            </div>

            <div className="google_btn">
              이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
              확인합니다. <a href="/">자세히 알아보기.</a>
            </div>
          </div>
        </div>
      </div>

      <div className="login_footer_wrap">
        <div className="footer_box flex flex_jc_c">
          <div className="footer_text">
            <h4>질문이 있으신가요? 문의 전화: 010-1234-1234</h4>
            <ul className="item_box flex">
              <li className="footer_item">
                <a href="/">자주 묻는 질문</a>
              </li>
              <li className="footer_item">
                <a href="/">고객 센터</a>
              </li>
              <li className="footer_item">
                <a href="/">이용 약관</a>
              </li>
              <li className="footer_item">
                <a href="/">개인정보</a>
              </li>
              <li className="footer_item">
                <a href="/">쿠키 설정</a>
              </li>
              <li className="footer_item">
                <a href="/">회사 정보</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy_right_box">
          <h5>넷플릭스 대한민국</h5>
          <div className="text">
            넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
            제2018-서울종로-0426호 전화번호: 080-001-9587
            <br />
            대표: 레지널드 숀 톰프슨 <br />
            이메일 주소: korea@netflix.com 주소: 대한민국 서울특별시 종로구
            우정국로 26, 센트로폴리스 A동 20층 우편번호 03161 <br />
            사업자등록번호: 165-87-00119 <br />
            클라우드 호스팅: Amazon Web Services Inc. <br />
            공정거래위원회 웹사이트
          </div>
        </div>
      </div>
    </div>

    // 안녕
  );
};

export default Login;
