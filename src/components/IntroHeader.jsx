import React from "react";
import logo from "../img/logo.png";

const IntroHeader = () => {
  return (
    <div style={{ background: "#f3f3f3" }}>
      <div className="regForm_top_wrap flex flex_jc_sb">
        <a href="#" className="logo img_box">
          <img src={logo} alt="LOGO" />
        </a>

        <a href="/login" className="login flex flex_ai_c">
          로그인
        </a>
      </div>
    </div>
  );
};

export default IntroHeader;
