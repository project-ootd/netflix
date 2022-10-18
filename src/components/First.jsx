import React from "react";
import logo from "../img/logo.png";
import "../styles/First.css";
// import { IoEarthOutline } from "react-icons/io";
import { IoEarthOutline } from "react-icons/io5";
import earth from "../img/earth.png";

const First = () => {
  return (
    <div>
      <div className="first_wrap">
        <div className="top_wrap flex flex_jc_sb">
          <a href="/" className="logo">
            <img src={logo} alt="LOGO" />
          </a>

          <div className="left_box flex ">
            <div className="language">
              {/* <div className="test_icon"></div> */}
              <select name="language" id="language" className="test_icon">
                <option value="Korea">
                  {/* <img src={earth} style={{ width: "10px", height: "10px" }} /> */}
                  {/* <IoEarthOutline style={{ color: "red" }} /> */}
                  한국어
                </option>
                <option value="English">English</option>
              </select>
            </div>

            <div className="icon">
              <a href="/login" className="login">
                로그인
              </a>
            </div>
          </div>
        </div>
        <div className="style_box1"></div>
        <div className="style_box2"></div>

        <div className="center_box flex flex_jc_c flex_ai_c">
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
            <a href="/regform" className="btn flex flex_jc-c flex_ai_c">
              시작하기 &gt;{" "}
            </a>
          </div>
        </div>
      </div>
      <hr className="first_hr" />
      <div className="con1_wrap flex flex_jc_sa flex_jc_c">
        <div className="text_box">
          <h1>TV로 즐기세요.</h1>
          <div className="text">
            스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이
            플레이어 등 다양한 디바이스에서 시청하세요.
          </div>
        </div>

        <div className="video_box">
          <div className="img_box flex flex_jc_end">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="video-img"
            />
          </div>
          <div className="video ">
            <video
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              autoPlay
              playsInline
              muted
              loop
            ></video>
          </div>
        </div>
      </div>

      <hr className="first_hr" />

      <div className="con2_wrap flex flex_jc_sa flex_jc_c">
        <div className="video_box">
          <div className="img_box flex flex_jc_end">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="video-img"
            />
          </div>
          <div className="video flex flex_ai_c flex_jc_sb">
            <div className="img_box">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                alt=""
              />
            </div>
            <div className="text1">
              <h5>기묘한 이야기</h5>
              <h6>저장 중 ...</h6>
            </div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
              alt=""
              className="icon"
            />
          </div>
        </div>

        <div className="text_box">
          <h1>즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.</h1>
          <div className="text">간편하게 저장하고 빈틈없이 즐겨보세요.</div>
        </div>
      </div>

      <hr className="first_hr" />
      <div className="con3_wrap flex flex_jc_sa flex_jc_c">
        <div className="text_box">
          <h1>다양한 디바이스에서 시청하세요.</h1>
          <div className="text">
            각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로
            스트리밍하세요. 추가 요금이 전혀 없습니다.
          </div>
        </div>

        <div className="video_box">
          <div className="video ">
            <video
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              autoPlay
              playsInline
              muted
              loop
            ></video>
          </div>
          <div className="img_box flex flex_jc_end">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              alt="video-img"
            />
          </div>
        </div>
      </div>

      <hr className="first_hr" />

      <div className="con4_wrap flex flex_jc_sa flex_jc_c">
        <div className="img_wrap">
          <div className="img_box flex flex_jc_end">
            <img
              src="https://occ-0-3077-988.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABe3Dqef6rg30BxYraI75i97IeQjD0YxUuToAnSA23dl0XQFrjXaFTWIB0HHy4TH_s094NU-9IjLpE_96AvWpTZTAQOR_icyEYcsB.png?r=acf"
              alt="video-img"
            />
          </div>
        </div>

        <div className="text_box">
          <h1>어린이 전용 프로필을 만들어 보세요.</h1>
          <div className="text">
            자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이
            특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.
          </div>
        </div>
      </div>
      <hr className="first_hr" />

      <div className="first_footer_wrap">
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
                <a href="/">계정</a>
              </li>
              <li className="footer_item">
                <a href="/">미디어 센터</a>
              </li>
              <li className="footer_item">
                <a href="/">투자 정보(IR)</a>
              </li>
              <li className="footer_item">
                <a href="/">입사 정보</a>
              </li>
              <li className="footer_item">
                <a href="/">넷플릭스 지원 디바이스</a>
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
              <li className="footer_item">
                <a href="/">문의하기</a>
              </li>
              <li className="footer_item">
                <a href="/">속도 테스트</a>
              </li>
              <li className="footer_item">
                <a href="/">법적 고지</a>
              </li>
              <li className="footer_item">
                <a href="/">오직 넷플릭스에서</a>
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
  );
};

export default First;
