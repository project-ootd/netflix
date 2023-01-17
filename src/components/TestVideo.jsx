import React, { useRef, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import $ from "jquery";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const TestVideo = ({ openModal, allContents }) => {
  const testvideoRef = useRef(null);

  useEffect(() => {
    testvideoRef.current.play();
  }, [testvideoRef]);

  return (
    <div className="billboard-row" style={{ position: "relative" }}>
      <div className="billboard-motion">
        <div className="motion-background-components">
          <div className="hero-image-wrapper">
            <div style={{ width: "100%", height: "920px" }}>
              <video
                className="player"
                width="100%"
                height="100%"
                style={{
                  position: "relative",
                  marginTop: "-20px",
                }}
                muted
                loop
                autoPlay
                ref={testvideoRef}
                src={allContents?.contentVideo}
              ></video>

              <div
                className="title-text"
                style={{
                  position: "absolute",
                  ZIndex: "3",
                  top: "50%",
                  left: "20px",
                  width: "500px",
                }}
              >
                <img
                  src={allContents?.detailTextImg}
                  alt=""
                  className="title-img"
                  style={{
                    width: "100%",
                    marginLeft: "50px",
                    marginBottom: "20px",
                  }}
                />
                <div className="play-btn-box" style={{ display: "flex" }}>
                  <Link to="/player" state={allContents?.videoLink}>
                    <button
                      className="play-btn"
                      style={{
                        width: "150px",
                        fontSize: "1.1rem",
                        borderRadius: "10px",
                        fontWeight: "bold",
                        marginLeft: "50px",
                        marginRight: "20px",
                        cursor: "pointer",
                      }}
                    >
                      <div
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
                      </div>
                    </button>
                  </Link>
                  <button
                    className="info-box"
                    style={{
                      cursor: "pointer",
                      width: "230px",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "bold",
                      border: "none",
                      backgroundColor: "rgba(109, 109, 110, 0.5)",
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
                      onClick={() => {
                        openModal(allContents);
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
