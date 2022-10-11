import React from "react";

const Header = () => {
  return (
    <div>
      {" "}
      <div className="header-top">
        <div className="nav-box">
          <div className="main-logo">
            <ul>
              <li>로고 사진</li>
            </ul>
          </div>
          <div className="nav-main">
            <ul>
              <li>
                <a href="/">홈</a>{" "}
              </li>
              <li>
                <a href="/">시리즈</a>
              </li>
              <li>
                <a href="/">영화</a>
              </li>
              <li>
                <a href="/">NEW! 요즘 대세 컨텐츠</a>
              </li>
              <li>
                <a href="/">내가 침한 콘텐츠</a>
              </li>
              <li>
                <a href="/">언어 별로 찾아보기</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
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
