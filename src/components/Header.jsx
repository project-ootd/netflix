import React from "react";
import logo from "../img/logo.png";
import "../styles/Header.scss";
import { FaSearch } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const Header = () => {
  return (
    <div
      classnames="Header"
      style={{
        display: "inline-block",
        width: "100%",
        padding: "10px 0",
        color: "white",
        backgroundColor: "black",
        zIndex: "99999",
      }}
    >
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
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="main-logo" style={{ width: "10%" }}>
            <ul>
              <li>
                <div className="img-box" style={{ width: "100%" }}>
                  <img
                    src={logo}
                    alt=""
                    style={{ width: "70%", marginTop: "10px" }}
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="nav-main" style={{ width: "60%" }}>
            <ul
              style={{
                display: "flex",
                // justifyContent: "space-around",
                width: "100%",
                height: "100%",
                alignItems: "center",
              }}
            >
              <li style={{ margin: "0 20px", fontWeight: "bold" }}>
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
          <div className="extra-service" style={{ width: "30%" }}>
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "100%",
                height: "100%",
              }}
            >
              <li style={{ marginRight: "20px", fontSize: "30px" }}>
                <a href="/">
                  <FaSearch />
                </a>
              </li>
              <li style={{ marginRight: "20px" }}>
                <a href="/">키즈</a>
              </li>
              <li style={{ marginRight: "20px", fontSize: "30px" }}>
                <a href="/">
                  <BsBellFill />
                </a>
              </li>
              <li style={{ marginRight: "20px" }}>
                로그인 프로필 <GoTriangleDown />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
