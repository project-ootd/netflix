import React, { useRef } from "react";
import "../styles/SlideVideo.css";
import {
  BsPlusLg,
  BsPlayFill,
  BsHandThumbsUp,
  BsChevronDown,
  BsHandThumbsDown,
  BsZoomIn,
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
              <div className="evaluation_hover">
                <div className="evaluation_icon1 evaluation_icons">
                  <BsHandThumbsDown
                    style={{
                      fontSize: "20px",
                    }}
                  />
                </div>
                <div className="evaluation_icon2 evaluation_icons">
                  <BsHandThumbsUp
                    style={{
                      fontSize: "20px",
                    }}
                  />
                </div>
                <div className="evaluation_icon3 evaluation_icons">
                  <BsHandThumbsUp
                    style={{
                      fontSize: "20px",
                    }}
                  />
                  <BsHandThumbsUp
                    style={{
                      fontSize: "20px",
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-20%, -55%)",
                      zIndex: "10",
                    }}
                  />
                </div>
              </div>
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

          <ul className="video_genre flex">
            <li>범죄</li>
            <li>한국 드라마</li>
            <li>긴장감 넘치는</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SlideVideo;
