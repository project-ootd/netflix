import React from "react";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <div style={{ display: "inline-block", width: "100%", marginTop: "10px" }}>
      {" "}
      <div
        className="header-top"
        style={{
          display: "inline-block",
          width: "100%",
        }}
      >
        <div
          className="nav-box"
          style={{
            display: "flex",
          }}
        >
          <div className="main-logo" style={{ width: "10%" }}>
            <ul>
              <li>
                <div
                  className="img-box"
                  style={{ border: "3px solid gold", width: "100%" }}
                >
                  <img src={logo} alt="" style={{ width: "100%" }} />
                </div>
              </li>
            </ul>
          </div>
          <div className="nav-main" style={{}}>
            <ul
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <li style={{ margin: "0 20px" }}>
                <a href="/">홈</a>
              </li>
              <li style={{ marginRight: "20px" }}>
                <a href="/">시리즈</a>
              </li>
              <li style={{ marginRight: "20px" }}>
                <a href="/">영화</a>
              </li>
              <li style={{ marginRight: "20px" }}>
                <a href="/">NEW! 요즘 대세 컨텐츠</a>
              </li>
              <li style={{ marginRight: "20px" }}>
                <a href="/">내가 찜한 콘텐츠</a>
              </li>
              <li style={{ marginRight: "20px" }}>
                <a href="/">언어 별로 찾아보기</a>
              </li>
            </ul>
          </div>
          <div className="extra-service">
            <ul style={{}}>
              <li>
                <a href="/">검색 아이콘</a>
              </li>
              <li>
                <a href="/">키즈</a>
              </li>
              <li>
                <a href="/">알림 아이콘</a>
              </li>
              <li>
                <a href="/">로그인 프로필</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
