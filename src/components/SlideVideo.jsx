import React, { useRef, useState } from "react";
import "../styles/SlideVideo.css";
import {
  BsPlusLg,
  BsPlayFill,
  BsHandThumbsUp,
  BsChevronDown,
  BsHandThumbsDown,
} from "react-icons/bs";
import Modal from "../components/Modal";
import { BACKEND_URL } from "../utils";
import axios from "axios";
import { AiOutlineCheck } from "react-icons/ai";

const SlideVideo = ({ openModal, ranking, check }) => {
  const videoRef = useRef();

  const like = async () => {
    const data = await axios({
      url: `${BACKEND_URL}/browse/my-list`,
      method: "POST",
      params: {
        useremail: sessionStorage.getItem("email"),
        contentId: ranking.id,
      },
    });
  };
  return (
    <div>
      <div
        className="hover_box"
        style={{ borderRadius: "25px" }}
        onMouseEnter={() => {
          ranking?.contentVideo ? videoRef.current.play() : console.log("1111");
        }}
        onMouseLeave={() => {
          ranking?.contentVideo
            ? videoRef.current.pause()
            : console.log("2222");
          //   videoRef.current.currentTime = 0;
        }}
      >
        {/* {ranking.map((rank, index) => {
          return;
        })} */}

        {ranking?.contentVideo ? (
          <video
            className="video"
            src={ranking?.contentVideo}
            width="350vw"
            height="200vh"
            style={{ borderRadius: "5% 5% 0 0" }}
            loop
            muted
            //   controls
            ref={videoRef}
          ></video>
        ) : (
          <img
            className="slide_hover_img"
            width="300vw"
            height="170vh"
            style={{
              zIndex: "99",
              marginTop: "-200px",
              borderRadius: "5% 5% 0 0",
            }}
            src={ranking?.detailImg}
            alt=""
          />
        )}

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
            <button className="steam" onClick={like}>
              {check ? (
                <AiOutlineCheck
                  style={{
                    color: "white",
                    fontSize: "20px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    position: "absolute",
                  }}
                />
              ) : (
                <BsPlusLg
                  style={{
                    fontSize: "20px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    position: "absolute",
                    color: "white",
                  }}
                />
              )}
            </button>

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
                openModal(ranking);
                console.log(ranking);
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
            <div className="view_age">{ranking?.age}+</div>
            <div className="episode"> 에피소드 {ranking?.episodes}개</div>
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
