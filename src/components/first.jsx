import React from "react";
import "../css/First.css";
import logo from "../img/logo.png";

const First = () => {
  return (
    <div>
      <div className="first_wrap">
        <div className="top_wrap flex flex_jc_sb">
          <div className="logo">
            <img src={logo} alt="LOGO" />
          </div>

          <div className="icon">
            <div className="login">로그인</div>
          </div>
        </div>
        <div className="style_box1"></div>
        <div className="style_box2"></div>

        <div className="center_box flex felx_jc_c flex_ai_c">
          <h1 className="center_h1">
            영화와 시리즈를 <br></br>무제한으로.
          </h1>
          <p className="center_p1">
            다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
          </p>
          <p className="center_p2">
            시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일
            주소를 입력하세요.
          </p>
          <div className="tour_box flex flex_jc_c">
            <div className="email">
              <input type="text" size="50" placeholder="이메일 주소" />
            </div>
            <div className="btn flex flex_jc-c flex_ai_c">시작하기 > </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
