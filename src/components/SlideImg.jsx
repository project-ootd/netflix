import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BsPlusLg,
  BsPlayFill,
  BsHandThumbsUp,
  BsChevronDown,
  BsHandThumbsDown,
} from "react-icons/bs";
import { BACKEND_URL } from "../utils";
import { AiOutlineCheck } from "react-icons/ai";
import AllContents from "./AllContents";
import { Link } from "react-router-dom";

const SlideImg = ({
  ele,
  openModal,
  setZindex,
  key,
  index,
  check,
  ranking,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [category, setCategory] = useState([]);

  const like = async () => {
    // 찜 추가/삭제
    console.log("실행됨");
    const data = await axios({
      url: `${BACKEND_URL}/browse/my-list`,
      method: "POST",
      params: {
        useremail: sessionStorage.getItem("email"),
        contentId: ele.id,
      },
    });
  };
  // console.log("check data===== : ", check[ele.id - 1].likeStatus);
  // console.log("check eleId : ", ele.id);
  useEffect(() => {
    try {
      const getCategory = async () => {
        const data = await axios({
          url: `${BACKEND_URL}/category`,
          method: "GET",
          params: { id: ele.id },
        });
        setCategory(data.data);
      };
      getCategory();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div
      style={
        isActive
          ? { zIndex: "999", marginRight: "10px" }
          : { zIndex: "-1", marginRight: "10px" }
      }
      onMouseEnter={() => {
        console.log("슬라이드 이미지 오픈 : ", ele.likeStatus);
      }}
    >
      <div
        className="thumbnail-container"
        onMouseLeave={() => {
          setIsActive(false);
          setZindex(false);
        }}
        // style={index < index + 1 ? { zIndex: "999" } : { zIndex: "-1" }}
      >
        <div
          className="real-container"
          onMouseEnter={() => {
            setIsActive(true);
            setZindex(true);
          }}
        >
          <Link to={isActive ? "/player" : null} state={ele}>
            <img
              className={
                index == 0 || index == 6
                  ? isActive
                    ? "thumbnail-img img_hover_transform_first"
                    : "thumbnail-img"
                  : index == 5 || index == 11
                  ? isActive
                    ? "thumbnail-img img_hover_transform_5n"
                    : "thumbnail-img"
                  : isActive
                  ? "thumbnail-img img_hover"
                  : "thumbnail-img"
              }
              style={isActive ? { zIndex: "1" } : { zIndex: "0" }}
              src={ele?.contentImg}
              alt=""
            />
          </Link>
        </div>
        <div
          className={
            index == 0 || index == 6
              ? isActive
                ? "slide_video_box_transform_first text_hover"
                : "slide_video_box"
              : index == 5 || index == 11
              ? isActive
                ? "slide_video_box_transform_5n text_hover"
                : "slide_video_box"
              : isActive
              ? "slide_video_box text_hover"
              : "slide_video_box"
          }
          id="slide_video_box"
          style={{ borderRadius: "25px" }}
        >
          <div className="thumbnail_text" id="thumbnail_text">
            <div className="video_icon_box flex flex_jc_sb">
              <Link to="/player" className="play" state={ele}>
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
              </Link>
              <button className="steam" onClick={like}>
                {check[ele?.id - 1]?.likeStatus ? (
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
              {category.map((data, index) => {
                return (
                  <li key={index} style={{ fontSize: "0.947em" }}>
                    {data?.categoryType}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideImg;
