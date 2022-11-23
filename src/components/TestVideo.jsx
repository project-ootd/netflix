import React, { useRef, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "../styles/TestVideo.scss";
import $ from "jquery";
import { useEffect } from "react";
const TestVideo = ({ openModal, allContents }) => {
  const [time, setTime] = useState(false);
  const [check, SetCheck] = useState(1);
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
              {/* {time ? (
                <img
                  src={
                    // "https://occ-0-988-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVz7Jt44hr7JRKCx1uRU1f7TM_JnzI8tN_PWK3EKnraE8GMhu1eSwP589ZkL2phbkp0n197H041fQVQQ_95zZk_qhTDDWuY3c3gH.webp?r=21f"
                    allContents?.contentImg
                  }
                  alt=""
                  style={{ width: "100%", height: "920px" }}
                />
              ) : ( */}
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
                ref={testvideoRef}
                src={allContents?.contentVideo}
              >
                {/* <source src={allContents?.contentVideo} type="video/mp4" /> */}
              </video>
              {/* )} */}

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
                  src={
                    // "https://occ-0-988-395.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVpD2HLqSeIPYBbj82FQUt1gQmvRXsb1wYcbeSEJh2b06C2Th8QVSM9qx4odBsCWdEBhnhvnMEncjN--2_EOTUgQmCSq3GlNAFO8fVTtlrc.webp?r=e4c"
                    allContents?.detailTextImg
                  }
                  alt="체인소 맨"
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
