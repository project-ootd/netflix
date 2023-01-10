import React from "react";
import logo from "../img/logo.png";
import "../styles/First.css";
import Footer from "./Footer";
import { useState } from "react";

const First = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    sessionStorage.setItem("regEmail", value);
  };

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
              <input
                type="text"
                placeholder="이메일 주소"
                value={value}
                onChange={onChange}
              />
            </div>
            <a
              href="/regform"
              className="btn flex flex_jc-c flex_ai_c"
              onClick={onClick}
            >
              시작하기 &gt;{" "}
            </a>
          </div>
        </div>
      </div>
      <hr className="first_hr" />
      <div className="con1_wrap">
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

      <div className="con2_wrap ">
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
      <div className="con3_wrap ">
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
      <Footer />
    </div>
  );
};

export default First;
