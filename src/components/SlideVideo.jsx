import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const SlideVideo = ({ openModal, ranking, check, setCheck }) => {
  const [category, setCategory] = useState([]);
  const videoRef = useRef();
  const navigate = useNavigate();
  const [mouseEnter, setMouseEnter] = useState(false);

  useEffect(() => {
    try {
      const getCategory = async () => {
        const data = await axios({
          url: `${BACKEND_URL}/category`,
          method: "GET",
          params: { id: ranking?.id },
        });
        setCategory(data.data);
      };
      getCategory();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const like = async () => {
    // 찜 추가/삭제
    await axios({
      url: `${BACKEND_URL}/browse/my-list`,
      method: "POST",
      headers: {
        Authorization: sessionStorage.getItem("userToken"),
      },
      params: {
        useremail: sessionStorage.getItem("email"),
        contentId: ranking?.id,
      },
    });
    const data = await axios({
      url: `${BACKEND_URL}/browse/my-list/check`,
      method: "GET",
      headers: {
        Authorization: sessionStorage.getItem("userToken"),
      },
      params: {
        useremail: sessionStorage.getItem("email"),
      },
    });
    setCheck(data.data);
  };

  const playState = () => {
    navigate("/player", {
      state: ranking,
    });
  };

  return (
    <div className="hover_container">
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
        }}
      >
        {ranking?.contentVideo ? (
          <Link to="/player" state={ranking}>
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
          </Link>
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
          <div className="thumbnail-content__icon2">
            <div className="icon-left2">
              <BsPlayFill onClick={playState} className="playBtn" />

              {check[ranking?.id - 1]?.likeStatus ? (
                <AiOutlineCheck onClick={like} style={{ cursor: "pointer" }} />
              ) : (
                <BsPlusLg onClick={like} style={{ cursor: "pointer" }} />
              )}

              <BsHandThumbsUp
                style={{ cursor: "pointer" }}
                className="good"
                onMouseEnter={() => {
                  setMouseEnter(true);
                }}
                onMouseLeave={() => {
                  setMouseEnter(false);
                }}
              />

              <div
                className={mouseEnter ? "hover_box_run" : "hover_box_none"}
                onMouseEnter={() => {
                  setMouseEnter(true);
                }}
                onMouseLeave={() => {
                  setMouseEnter(false);
                }}
              >
                <BsHandThumbsDown />
                <BsHandThumbsUp />
                <div className="good_overlapping">
                  <BsHandThumbsUp />
                  <BsHandThumbsUp />
                </div>
              </div>
            </div>
            <div
              className="icon-right2"
              onClick={() => {
                openModal(ranking ? ranking : null);
                console.log("모달 클릭 : ", ranking);
              }}
            >
              <BsChevronDown style={{ cursor: "pointer" }} />
            </div>
          </div>

          {/* <div className="video_icon_box flex flex_jc_sb">
            <Link to="/player" className="play" state={ranking}>
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
              {check[ranking?.id - 1]?.likeStatus ? (
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
                ranking={ranking}
              />
            </a>
          </div> */}

          <div className="video_mini_detail flex">
            <div className="text1">99% 일치</div>
            <div className="view_age">{ranking?.age}+</div>
            <div className="episode"> 에피소드 {ranking?.episodes}개</div>
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
    // <div
    //   // className={
    //   //   index === 0 || index === 6
    //   //     ? "thumbnail-box3 hover_thumbnail-box3_06"
    //   //     : index === 5 || index === 10
    //   //     ? "thumbnail-box3 hover_thumbnail-box3_5n"
    //   //     : "thumbnail-box3"
    //   // }
    //   onMouseEnter={() => {
    //     ranking?.contentVideo ? videoRef.current.play() : console.log("1111");
    //   }}
    //   onMousrankingave={() => {
    //     ranking?.contentVideo ? videoRef.current.pause() : console.log("2222");
    //   }}
    // >
    //   {ranking?.contentVideo ? (
    //     <Link to="/player" state={ranking}>
    //       <video
    //         className="video"
    //         src={ranking?.contentVideo}
    //         width="350vw"
    //         height="200vh"
    //         style={{ borderRadius: "5% 5% 0 0" }}
    //         loop
    //         muted
    //         //   controls
    //         ref={videoRef}
    //       ></video>
    //     </Link>
    //   ) : (
    //     <img
    //       className="slide_hover_img"
    //       width="300vw"
    //       height="170vh"
    //       style={{
    //         zIndex: "99",
    //         marginTop: "-200px",
    //         borderRadius: "5% 5% 0 0",
    //       }}
    //       src={ranking?.detailImg}
    //       alt=""
    //     />
    //   )}

    //   <div className="thumbnail-content3">
    //     <div className="thumbnail-content__icon2">
    //       <div className="icon-left2">
    //         <BsPlayFill
    //           // onClick=
    //           // {
    //           // isActive ? playState : null
    //           // }
    //           className="playBtn"
    //         />

    //         {check[ranking?.id - 1]?.likeStatus ? (
    //           <AiOutlineCheck onClick={like} style={{ cursor: "pointer" }} />
    //         ) : (
    //           <BsPlusLg onClick={like} style={{ cursor: "pointer" }} />
    //         )}

    //         <BsHandThumbsUp
    //           style={{ cursor: "pointer" }}
    //           className="good"
    //           onMouseEnter={() => {
    //             // setMouseEnter(true);
    //           }}
    //           onMouseLeave={() => {
    //             // setMouseEnter(false);
    //           }}
    //         />

    //         <div
    //           className={
    //             // mouseEnter ?
    //             "hover_box_run"
    //             //  : "hover_box_none"
    //           }
    //           onMouseEnter={() => {
    //             // setMouseEnter(true);
    //           }}
    //           onMouseLeave={() => {
    //             // setMouseEnter(false);
    //           }}
    //         >
    //           <BsHandThumbsDown />
    //           <BsHandThumbsUp />
    //           <div className="good_overlapping">
    //             <BsHandThumbsUp />
    //             <BsHandThumbsUp />
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         className="icon-right2"
    //         onClick={() => {
    //           openModal(ranking ? ranking : null);
    //           console.log("모달 클릭 : ", ranking);
    //         }}
    //       >
    //         <BsChevronDown style={{ cursor: "pointer" }} />
    //       </div>
    //     </div>

    //     <div className="thumbnail-content__txt2">
    //       <div className="video_mini_detail flex">
    //         <div className="text1">99% 일치</div>
    //         <div className="view_age">15+</div>
    //         <div className="episode"> 에피소드 5개</div>
    //         <div className="HD">HD</div>
    //       </div>
    //     </div>

    //     <ul className="video_genre flex">
    //       <li>범죄 시리즈, 한국 드라마, 무슨 카테고리</li>
    //     </ul>
    //   </div>
    //   {/* </div> */}

    //   <div className="video_text">
    //     <div className="video_icon_box flex flex_jc_sb">
    //       <Link to="/player" className="play" state={ranking}>
    //         <BsPlayFill
    //           style={{
    //             fontSize: "28px",
    //             top: "50%",
    //             left: "50%",
    //             transform: "translate(-50%, -50%)",
    //             position: "absolute",
    //             color: "#232323",
    //           }}
    //         />
    //       </Link>
    //       <button className="steam" onClick={like}>
    //         {check[ranking?.id - 1]?.likeStatus ? (
    //           <AiOutlineCheck
    //             style={{
    //               color: "white",
    //               fontSize: "20px",
    //               top: "50%",
    //               left: "50%",
    //               transform: "translate(-50%, -50%)",
    //               position: "absolute",
    //             }}
    //           />
    //         ) : (
    //           <BsPlusLg
    //             style={{
    //               fontSize: "20px",
    //               top: "50%",
    //               left: "50%",
    //               transform: "translate(-50%, -50%)",
    //               position: "absolute",
    //               color: "white",
    //             }}
    //           />
    //         )}
    //       </button>

    //       <a className="evaluation" href="/">
    //         <BsHandThumbsUp
    //           style={{
    //             fontSize: "20px",
    //             top: "50%",
    //             left: "50%",
    //             transform: "translate(-50%, -50%)",
    //             position: "absolute",
    //           }}
    //         />
    //         <div className="evaluation_hover">
    //           <div className="evaluation_icon1 evaluation_icons">
    //             <BsHandThumbsDown
    //               style={{
    //                 fontSize: "20px",
    //               }}
    //             />
    //           </div>
    //           <div className="evaluation_icon2 evaluation_icons">
    //             <BsHandThumbsUp
    //               style={{
    //                 fontSize: "20px",
    //               }}
    //             />
    //           </div>
    //           <div className="evaluation_icon3 evaluation_icons">
    //             <BsHandThumbsUp
    //               style={{
    //                 fontSize: "20px",
    //               }}
    //             />
    //             <BsHandThumbsUp
    //               style={{
    //                 fontSize: "20px",
    //                 position: "absolute",
    //                 top: "50%",
    //                 left: "50%",
    //                 transform: "translate(-20%, -63%)",
    //                 zIndex: "10",
    //               }}
    //             />
    //           </div>
    //         </div>
    //       </a>
    //       <a
    //         className="detail"
    //         onClick={() => {
    //           openModal(ranking);
    //         }}
    //       >
    //         <BsChevronDown
    //           style={{
    //             fontSize: "20px",
    //             top: "50%",
    //             left: "50%",
    //             transform: "translate(-50%, -50%)",
    //             position: "absolute",
    //           }}
    //           ranking={ranking}
    //         />
    //       </a>
    //     </div>

    //     <div className="video_mini_detail flex">
    //       <div className="text1">99% 일치</div>
    //       <div className="view_age">{ranking?.age}+</div>
    //       <div className="episode"> 에피소드 {ranking?.episodes}개</div>
    //       <div className="HD">HD</div>
    //     </div>

    //     <ul className="video_genre flex">
    //       {category.map((data, index) => {
    //         return (
    //           <li key={index} style={{ fontSize: "0.947em" }}>
    //             {data?.categoryType}
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default SlideVideo;
