import React from "react";
import "../styles/Login.css";

const Join = () => {
  return (
    <div>
      <div className="bc_opacity"></div>
      <div className="bc_img"></div>

      <div className="login_box">
        <h1>로그인</h1>
        <div className="login_form">
          <form action="post" autocomplete="off">
            <input
              type="text"
              name="userid"
              id="userid"
              className="userid"
              placeholder="이메일 주소 또는 전화번호"
            />
            <input
              type="text"
              name="userpw"
              id="userpw"
              className="userpw"
              placeholder="비밀번호"
            />
          </form>
          <button className="login_btn">로그인</button>
          <div className="help_box">
            <div className="login_info_save flex flex_jc_sb">
              <div className="login_save_box">
                <input
                  type="checkbox"
                  name="LoginSave"
                  id="LoginSave"
                  className="LoginSave"
                />
                <label for="LoginSave"></label>
                <a href="/">로그인 정보 저장</a>
              </div>
              <div className="help">
                <a href="/">도움이 필요하신가요?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
