import React, { useRef } from "react";
import "../styles/SlideVideo.css";
import {
  BsPlusLg,
  BsPlayFill,
  BsHandThumbsUp,
  BsChevronDown,
} from "react-icons/bs";

const SlideVideo = () => {
  const videoRef = useRef();
  return (
    <div>
      <div
        className="hover_box"
        style={{ borderRadius: "25px" }}
        onMouseEnter={() => {
          videoRef.current.play();
        }}
        onMouseLeave={() => {
          videoRef.current.pause();
          //   videoRef.current.currentTime = 0;
        }}
      >
        <video
          className="video"
          src="videos/video_4.mp4"
          width="350vw"
          height="200vh"
          style={{ borderRadius: "5% 5% 0 0" }}
          loop
          //   controls
          ref={videoRef}
        ></video>
        <div className="video_text">
          <div className="video_icon_box flex flex_jc_sb">
            <a className="play" href="/">
              <BsPlayFill
                style={{
                  fontSize: "28px",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  position: "absolute",
                  color: "#232323",
                }}
              />
            </a>
            <a className="steam" href="/">
              <BsPlusLg
                style={{
                  fontSize: "20px",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  position: "absolute",
                }}
              />
            </a>
            <a className="evaluation" href="/">
              <BsHandThumbsUp
                style={{
                  fontSize: "20px",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  position: "absolute",
                }}
              />
            </a>
            <a className="ditail" href="/">
              <BsChevronDown
                style={{
                  fontSize: "20px",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  position: "absolute",
                }}
              />
            </a>
          </div>

          <div className="video_mini_detail flex">
            <div className="text1">99% 일치</div>
            <div className="view_age">15+</div>
            <div className="episode"> 에피소드 12개</div>
            <div className="HD">HD</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideVideo;
