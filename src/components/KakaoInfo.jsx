import React, { useEffect, useState } from "react";
import logo from "../img/logo.png";
import "../styles/RegForm.css";
import { useNavigate } from "react-router-dom";
import { BiLock } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";

import axios from "axios";
import { BACKEND_URL } from "../utils";

import IntroHeader from "./IntroHeader";
import IntroFooter from "./IntroFooter";
import "../styles/KakaoInfo.css";
import kakaoIcon from "../img/payment_icon.png";

import { useRecoilState } from "recoil";
import { userState } from "../recoil";
import Moment from "moment";
import "moment/locale/ko"; // Locale Setting

const KakaoInfo = () => {
  // const { username, setUsername } = useState("");
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onNav = () => {
    navigate(`/login`);
  };

  const [user, setUser] = useRecoilState(userState);

  const day = Moment().format("YYYY-MM-DD");
  console.log(day);

  return (
    <>
      <div style={{ background: "#f3f3f3" }}>
        <IntroHeader />

        <div className="kakao_wrap">
          <div className="kakao_box">
            <div className="lock_icon">
              <BiLock
                style={{
                  fontSize: "40px",
                  color: "#e50914",
                  border: "3px solid #e50914",
                  borderRadius: "50%",
                  padding: "8px",
                }}
              />
            </div>
            <p>2/3단계</p>
            <h1>결제 정보 확인</h1>
            <ul className="payment_text">
              <li className="pay_list">
                <AiOutlineCheck /> 광고 없이 무제한으로 시청.
              </li>
              <li className="pay_list">
                <AiOutlineCheck /> 취향에 꼭 맞는 콘텐츠를 추천해 드립니다.
              </li>
              <li className="pay_list">
                <AiOutlineCheck /> 멤버십은 언제든지 변경 또는 해지 가능.
              </li>
            </ul>
          </div>
          <div className="pay_info_box">
            <div className="pay_tier">스탠다드</div>
            <div className="pay_info">
              <ul className="first_box">
                <li className="first_list info_list">월 요금</li>
                <li className="first_list info_list">영상 화질</li>
                <li className="first_list info_list">해상도</li>
                <li className="first_list info_list">
                  TV, 컴퓨터, 스마트폰, 태블릿으로 시청
                </li>
              </ul>
              <ul className="second_box">
                <li className="second_list info_list">13,500원</li>
                <li className="second_list info_list">매우 좋음</li>
                <li className="second_list info_list">1080p</li>
                <li className="second_list info_list">
                  <AiOutlineCheck />
                </li>
              </ul>
            </div>
          </div>

          <form
            className="kakaoForm"
            action="http://localhost:8084/kakaoPay"
            method="POST"
            // onSubmit={async (e) => {
            //   try {
            //     const data = await axios({
            //       url: `http://localhost:8084/kakaoPay`,
            //       method: "POST",
            //     });
            //   } catch (e) {
            //     alert("결제 실패");
            //   }
            // }}
          >
            <input type="hidden" name="nowdate" value={day} />
            <input type="hidden" name="useremail" value={user.useremail} />
            <button className="pay_btn" id="pay_btn">
              결제하기
            </button>
          </form>
        </div>

        <IntroFooter />
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://service.iamport.kr/js/iamport.payment-1.1.5.js"
        ></script>
      </div>
    </>
  );
};

export default KakaoInfo;
