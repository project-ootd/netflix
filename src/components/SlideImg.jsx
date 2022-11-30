import React, { useState } from "react";
import {
  BsPlusLg,
  BsPlayFill,
  BsHandThumbsUp,
  BsChevronDown,
  BsHandThumbsDown,
} from "react-icons/bs";

const SlideImg = ({ ele, index, openModal, setZindex }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      style={
        isActive
          ? { zIndex: "999", marginRight: "10px" }
          : { zIndex: "-1", marginRight: "10px" }
      }
    >
      <div
        className="thumbnail-container"
        key={index}
        onMouseLeave={() => {
          setIsActive(false);
          setZindex(false);
        }}
      >
        <div
          className="real-container"
          onMouseEnter={() => {
            setIsActive(true);
            setZindex(true);
          }}
        >
          <img
            className={isActive ? "thumbnail-img img_hover" : "thumbnail-img"}
            style={isActive ? { zIndex: "1" } : { zIndex: "0" }}
            src={ele?.contentImg}
            alt=""
          />
        </div>
        <div
          className={
            isActive ? "slide_video_box text_hover" : "slide_video_box"
          }
          id="slide_video_box"
          style={{ borderRadius: "25px" }}
        >
          <div className="thumbnail_text" id="thumbnail_text">
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
                        transform: "translate(-20%, -63%)",
                        zIndex: "10",
                      }}
                    />
                  </div>
                </div>
              </a>
              <a
                className="detail"
                onClick={() => {
                  openModal(ele);
                  console.log(ele);
                }}
              >
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
              <div className="view_age">{ele?.age}+</div>
              <div className="episode"> 에피소드 {ele?.episodes}개</div>
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
    </div>
  );
};

export default SlideImg;
