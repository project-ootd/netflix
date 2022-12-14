import React, { useEffect, useRef, useState } from "react";
import "../styles/Header.css";
import logo from "../img/logo.png";
import { FaSearch } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { serachState } from "../recoil/search";
import { useRecoilState } from "recoil";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";
import { BACKEND_URL } from "../utils";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hide, SetHide] = useState(
    location?.state?.fromUrl === "/browse" ? true : false
  );
  const [search, setSearch] = useRecoilState(serachState);
  const [keyword, setKeyword] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const searchInput = useRef();
  const userEmail = sessionStorage.getItem("email");
  const [profileUser, setProfileUser] = useState({});
  const profileIndex = sessionStorage.getItem("profile");

  useEffect(() => {
    const getProfile = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/api/v1/user/getProfile`,
        method: "GET",
        params: {
          useremail: sessionStorage.getItem("email"),
        },
      });
      // console.log("profileUser", data.data);
      setProfileUser(data.data);
    };
    getProfile();
  }, [userEmail]);

  console.log("profileUser", profileUser);

  useEffect(() => {
    searchInput?.current?.focus();
  }, [searchInput]);

  const handleScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  const onSearch = (e) => {
    if (e.target.value === "") {
      navigate(`/browse`);
    } else {
      navigate(`/search?${e.target.value}`);
    }
    setSearch(e.target.value);
  };

  const onClick = () => {
    if (hide === true) {
      SetHide(false);
    } else {
      SetHide(true);
    }
  };

  const onMove = (keyword) => {
    navigate(`/search/${keyword}`, { state: { fromUrl: location.pathname } });
  };

  if (
    !(
      location.pathname === "/browse" ||
      location.pathname.startsWith("/search") ||
      location.pathname.startsWith("/browse") ||
      location.pathname.startsWith("/original") ||
      location.pathname.startsWith("/latest") ||
      location.pathname.startsWith("/genre")
    )
  ) {
    return <></>;
  }

  return (
    <div
      classnames="Header App"
      style={
        scrollPosition > 10
          ? {
              display: "inline-block",
              width: "100%",
              padding: "10px 0",
              color: "white",
              zIndex: "9",
              position: "fixed",
              top: "0",
              // left: "35px",
              left: "0",
              backgroundColor: "black",
            }
          : {
              display: "inline-block",
              width: "100%",
              padding: "10px 0",
              color: "white",
              zIndex: "9",
              position: "fixed",
              top: "0",
              // left: "35px",
              left: "0",
              backgroundColor: "rgba(20,20,20,0)",
            }
      }
    >
      {/* {profileUser.profileNameList[0].id} */}{" "}
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
                  <a href="/browse">
                    <img
                      src={logo}
                      alt=""
                      style={{ width: "70%", marginTop: "1vh" }}
                    />
                  </a>
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
              <li style={{ margin: "0 2vw", fontWeight: "bold" }}>
                <a href="/browse">홈</a>
              </li>
              <li style={{ marginRight: "2vw" }}>
                <a href="/genre/series">시리즈</a>
              </li>
              <li style={{ marginRight: "2vw" }}>
                <a href="/genre/movie">영화</a>
              </li>
              <li style={{ marginRight: "2vw" }}>
                <a href="/latest">NEW! 요즘 대세 컨텐츠</a>
              </li>
              <li style={{ marginRight: "2vw" }}>
                <a href="/browse/my-list">내가 찜한 콘텐츠</a>
              </li>
              <li style={{ marginRight: "2vw" }}>
                <a href="/original-audio">언어 별로 찾아보기</a>
              </li>
            </ul>
          </div>
          <div className="extra-service" style={{ width: "30%" }}>
            <div
              className="service_box"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "90%",
                height: "100%",
              }}
            >
              <div
                style={{
                  marginRight: "1vw",
                  fontSize: "1.2vw",
                }}
              >
                {hide ? (
                  <div
                    style={{
                      position: "relative",
                      width: "250px",
                      height: "40px",
                      background: "rgba(0,0,0,0.1)",
                      border: "1px solid white",
                    }}
                  >
                    <FaSearch
                      onClick={onClick}
                      style={{
                        position: "absolute",
                        zIndex: "23",
                        fontSize: "1.2vw",
                        top: "1vh",
                        marginLeft: "0.5vw",
                      }}
                    />

                    <input
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          onMove();
                        }
                      }}
                      onChange={onSearch}
                      value={search}
                      className="search-input"
                      type="search"
                      ref={searchInput}
                      style={{
                        height: "4vh",
                        zIndex: "2",
                        background: "none",
                        width: "11vw",
                        marginTop: "-30px",
                        position: "absolute",
                        top: "3.3vh",
                        right: "0vw",
                        border: "none",
                        outline: "none",
                        padding: "5px 10px ",
                        color: "white",
                        fontSize: "0.75vw",
                      }}
                      placeholder={"제목, 사람, 장르"}
                    />
                  </div>
                ) : (
                  <FaSearch onClick={onClick} />
                )}
              </div>
              <div style={{ marginRight: "20px" }}>
                <a href="/">키즈</a>
              </div>
              <div style={{ marginRight: "20px", fontSize: "30px" }}>
                <BsBellFill />
              </div>
              <div
                className="view-more-controller"
                style={{ marginRight: "20px" }}
              >
                <div style={{ displya: "flex" }}>
                  {/* <img
                    src={
                      profileIndex
                        ? profileUser?.profileNameList[profileIndex].img
                        : profileUser?.profileNameList[0].img
                      // profileIndex
                      //   ? profileUser?.profileNameList[profileIndex]?.img
                      //   : profileUser?.profileNameList[0].img
                    }
                    alt=""
                    style={{ width: "32px" }}
                  /> */}
                  <GoTriangleDown
                    className="view-more-button"
                    style={{ marginLeft: "10px" }}
                  />
                </div>
                <div className="view-item-arrow">
                  <GoTriangleUp className="" />
                </div>
                <ul className="sub-menu-list ">
                  <li className="sub-menu-item" style={{ paddingTop: "10px" }}>
                    <a
                      href="/"
                      style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      {/* <img
                        src={profileUser.profileNameList[profileIndex].img}
                        alt=""
                        style={{ width: "32px" }}
                      /> */}
                      <div style={{ marginLeft: "10px" }}>
                        {userEmail}
                        {/* anoter porfile */}
                      </div>
                    </a>
                  </li>
                  <hr />
                  <li className="sub-menu-item">
                    <a href="/profile">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="Hawkins-Icon Hawkins-Icon-Standard"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>{" "}
                      <span style={{ marginLeft: "10px" }}>프로필 관리</span>
                    </a>{" "}
                  </li>
                  <li className="sub-menu-item">
                    <a href="/">
                      <BiUser style={{ fontSize: "28px" }} />{" "}
                      <span style={{ marginLeft: "5px" }}>계정</span>
                    </a>{" "}
                  </li>
                  <li className="sub-menu-item">
                    <a href="/">
                      <span className="material-symbols-outlined">help</span>
                      <span style={{ marginLeft: "12px" }}>고객 센터</span>
                    </a>
                  </li>
                  <hr />
                  <li style={{ paddingBottom: "10px" }}>
                    <a href="/">넷플릭스 로그아웃</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
