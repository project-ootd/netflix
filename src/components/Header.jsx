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
import { authenticationState } from "../recoil/store";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hide, setHide] = useState(
    location?.state?.fromUrl === "/browse" ? true : false
  );
  const [search, setSearch] = useRecoilState(serachState);
  const searchInput = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);
  const userEmail = sessionStorage.getItem("email");
  const profileIndex = sessionStorage.getItem("profile");
  const [profileUser, setProfileUser] = useState({});
  const [keyword, setKeyword] = useState([]);
  const [authenticated, setAuthenticated] = useRecoilState(authenticationState);

  useEffect(() => {
    // if (sessionStorage.getItem("userToken") == null) {
    //   alert("토큰 없음");
    //   navigate(`/login`);
    // } else {
    //   alert("토큰 있음");
    //   return;
    // }

    const getProfile = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/api/v1/getProfile`,
        method: "GET",
        params: {
          useremail: sessionStorage.getItem("email"),
        },
        headers: {
          Authorization: sessionStorage.getItem("userToken"),
        },
      });
      setProfileUser(data.data);
      // sessionStorage.setItem("profileImg", data.imageUrl);
    };
    if (userEmail) {
      getProfile();
    }
  }, [userEmail]);

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
      navigate(`/browse`, { state: { fromUrl: location.pathname } });
    } else {
      navigate(`/search?${e.target.value}`, {
        state: { fromUrl: location.pathname },
      });
    }
    setSearch(e.target.value);
  };

  const onClick = () => {
    if (hide === true) {
      setHide(false);
    } else {
      setHide(true);
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
    <div className="headerContainer">
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
        {" "}
        <div className="header-top">
          <div className="nav-box">
            <div className="main-logo">
              <ul>
                <li>
                  <div className="img-box">
                    <a href="/browse">
                      <img src={logo} alt="" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="nav-main">
              <div className="min-menu-text">
                <div className="min-main">
                  {/* 메뉴
                <GoTriangleDown />
                <ul className="min-nav-box row">
                  <li className="min-menu cell">
                    <div className="callout-arrow">
                      <GoTriangleUp className="hover-menu-arrow" />
                      <div className="whiteline"></div>
                    </div>
                  </li>
                  <li className="min-menu cell min-menu-home">
                    <a href="/browse">홈</a>
                  </li>

                  <li className="min-menu cell">
                    {" "}
                    <a href="/genre/series">시리즈</a>
                  </li>

                  <li className="min-menu cell">
                    <a href="/genre/movie">영화</a>
                  </li>

                  <li className="min-menu cell">
                    {" "}
                    <a href="/latest">NEW! 요즘 대세 컨텐츠</a>
                  </li>

                  <li className="min-menu cell">
                    <a href="/browse/my-list">내가 찜한 콘텐츠</a>
                  </li>

                  <li className="min-menu cell">
                    {" "}
                    <a href="/original-audio">언어 별로 찾아보기</a>
                  </li>
                </ul> */}
                </div>
              </div>
              <ul className="nav-box">
                <li className="main-nav-text">
                  <a href="/browse">홈</a>
                </li>
                <li className="main-nav-text">
                  <a href="/genre/series">시리즈</a>
                </li>
                <li className="main-nav-text">
                  <a href="/genre/movie">영화</a>
                </li>
                <li className="main-nav-text">
                  <a href="/latest">NEW! 요즘 대세 컨텐츠</a>
                </li>
                <li className="main-nav-text">
                  <a href="/browse/my-list">내가 찜한 콘텐츠</a>
                </li>
                <li className="main-nav-text">
                  <a href="/original-audio">언어 별로 찾아보기</a>
                </li>
              </ul>
            </div>
            <div className="extra-service">
              <div className="service_box">
                <div className="search-con">
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
                        className="search-icon"
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
                    <FaSearch onClick={onClick} className="search-icon" />
                  )}
                </div>
                <div className="kids-icon">
                  <a href="/browse">키즈</a>
                </div>
                <div className="bell-box">
                  <BsBellFill />
                </div>
                <div className="view-more-controller">
                  <div className="user-icon">
                    <img
                      src={
                        profileUser.profileNameList?.length > 0 && profileIndex
                          ? profileUser.profileNameList[profileIndex].img
                          : profileUser.id
                      }
                      alt=""
                      style={{ width: "32px" }}
                    />
                    <GoTriangleDown
                      className="view-more-button"
                      style={{ marginLeft: "10px", marginTop: "10px" }}
                    />
                  </div>
                  <div className="view-item-arrow">
                    <GoTriangleUp />
                  </div>
                  <ul className="sub-menu-list ">
                    {profileUser.profileNameList?.map((profile, index) => {
                      return (
                        <li
                          className="sub-menu-item"
                          style={
                            profileIndex == index
                              ? { position: "none", display: "none" }
                              : { paddingTop: "10px" }
                          }
                          key={index}
                        >
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "center",
                            }}
                            onClick={() => {
                              sessionStorage.removeItem("profile");
                              sessionStorage.setItem("profile", index);
                              window.location.reload();
                            }}
                          >
                            <img
                              src={
                                profile.img
                                // profileUser.profileNameList?.length > 0 &&
                                // profileIndex
                                //   ? profileUser.profileNameList[index].img
                                //   : profileUser.id
                              }
                              alt=""
                              style={{ width: "32px" }}
                            />
                            <div style={{ marginLeft: "10px" }}>
                              {profile.nickname}
                            </div>
                          </a>
                        </li>
                      );
                    })}

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
                        <span className="setting-profile">프로필 관리</span>
                      </a>{" "}
                    </li>
                    <li className="sub-menu-item">
                      <a href="#">
                        <BiUser style={{ fontSize: "28px" }} />{" "}
                        <span className="mail-address">계정</span>
                      </a>{" "}
                    </li>
                    <li className="sub-menu-item">
                      <a href="#">
                        <span className="material-symbols-outlined">help</span>
                        <span className="client-center">고객 센터</span>
                      </a>
                    </li>
                    <hr />

                    <li style={{ paddingBottom: "10px" }}>
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          //인증 해제
                          setAuthenticated(false);
                          //로그인 토큰 삭제
                          localStorage.removeItem("userToken");
                          //로그인 페이지로 이동
                          navigate(`/login`);
                        }}
                      >
                        넷플릭스 로그아웃
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
