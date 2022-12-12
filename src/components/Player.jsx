import React from "react";
import "../styles/Player.scss";
import { RxArrowLeft } from "react-icons/rx";
import { useLocation } from "react-router-dom";

const Player = ({ currentContent }) => {
  const location = useLocation();

  return (
    <div style={{ width: "100%", height: "920px" }}>
      <div className="back_icon">
        <a href="javascript:history.back();">
          <RxArrowLeft fontSize={"4rem"} />
        </a>
      </div>

      <iframe
        width="100%"
        height="100%"
        src={location.state?.videoLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        controls="0"
        allowFullScreen
      ></iframe>
      {/* <ReactPlayer
        className="reactPlayer"
        url="https://www.youtube.com/watch?v=_stX5qaJl_4"
        width="100%" // 플레이어 크기 (가로)
        height="920px" // 플레이어 크기 (세로)
        playing={true} // 자동 재생 on
        muted={true} // 자동 재생 on
        controls={true} // 플레이어 컨트롤 노출 여부
        light={false} // 플레이어 모드
        pip={true} // pip 모드 설정 여부
        poster={
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
        } // 플레이어 초기 포스터 사진
        // onEnded={() => handleVideo()}  // 플레이어 끝났을 때 이벤트
      /> */}
    </div>
  );
};

export default Player;
