import React from "react";
import "../styles/First.css";

const First = () => {
  return (
    <div>
      <hr />
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

      <hr />

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
            <div className="icon"></div>
          </div>
        </div>

        <div className="text_box">
          <h1>즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.</h1>
          <div className="text">간편하게 저장하고 빈틈없이 즐겨보세요.</div>
        </div>
      </div>

      <hr />
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

      <hr />

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

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default First;
