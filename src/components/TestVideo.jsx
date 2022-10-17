import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "../styles/TestVideo.scss";
const TestVideo = () => {
  const [time, setTime] = useState(false);
  return (
    <div className="billboard-row" style={{}}>
      <div className="billboard-motion">
        <div className="motion-background-components">
          <div className="hero-image-wrapper">
            <div style={{ width: "100%", height: "920px" }}>
              {time ? (
                <img
                  src="https://img.youtube.com/vi/m29lUyODfzk/mqdefault.jpg"
                  alt=""
                  style={{ width: "100%", height: "920px" }}
                />
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/m29lUyODfzk?autoplay=1&mute=1&version=3&loop=1&playlist=4OSFPrOL1LQ&rel=0&controls=0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  style={{ position: "relative" }}
                  allowfullscreen
                />
              )}

              <div
                className="title-text"
                style={{
                  position: "absolute",
                  ZIndex: "9999",
                  top: "50%",
                  left: "20px",
                  width: "500px",
                }}
              >
                <img
                  src="https://occ-0-3077-988.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUq6SWe3nmuxzdO9Gd3VFi303ou0BWefzxdJs-CmirWGUNQrk1agqq1ZkeuqErcYU7btG-xYQBh1hLe0tf_jRDzLajEKxQqa8Q-PPIGK7bM.webp?r=803"
                  alt="슬기로운 의사 생활"
                  className="title-img"
                  style={{
                    width: "100%",
                    marginLeft: "50px",
                    marginBottom: "20px",
                  }}
                />
                <div className="play-btn-box" style={{ display: "flex" }}>
                  <button
                    className="play-btn"
                    style={{
                      width: "150px",
                      fontSize: "1.1rem",
                      borderRadius: "10px",
                      fontWeight: "bold",
                      marginLeft: "50px",
                      marginRight: "20px",
                    }}
                  >
                    <a
                      href="/"
                      style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="play-icon">
                        <BsFillPlayFill
                          style={{
                            fontSize: "20px",
                            width: "3.5rem",
                            height: "3.5rem",
                          }}
                        />
                      </div>
                      <div className="play-text" style={{ fontSize: "23px" }}>
                        재생
                      </div>
                    </a>
                  </button>
                  <button
                    className="info-box"
                    style={{
                      width: "230px",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "bold",
                      border: "none",
                      backgroundColor: "rgba(109, 109, 110, 0.5)",

                      // padding: "0.5rem 0px ",
                    }}
                  >
                    {" "}
                    <div
                      className="information-icon"
                      style={{
                        fontSize: "3rem",
                        borderRadius: "10px",
                        marginRight: "4px",
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      <AiOutlineInfoCircle />
                    </div>
                    <div
                      className="information-text"
                      style={{
                        fontSize: "23px",
                        margin: "2px 0 0 5px",
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      상세정보
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestVideo;