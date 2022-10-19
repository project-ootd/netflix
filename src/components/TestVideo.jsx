import React, { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "../styles/TestVideo.scss";
const TestVideo = () => {
  const [time, setTime] = useState(false);
  return (
    <div className="billboard-row">
      <div className="billboard-motion">
        <div className="motion-background-components">
          <div className="hero-image-wrapper">
            <div style={{ width: "100%", height: "920px" }}>
              {time ? (
                <img
                  src="https://occ-0-988-395.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfEcipOm0J9H6qTiMsqtD40JF93dhiAJOCf-bS0YRKP9is4NEImpeX8rt-6SWFzIAZKI3cvRhhNILxSAHKycebQ4lNvh_1tY3i1mTpB7Wr79GBy6CW8gsWtFgJJ5BKfszzWVCmi41g0onCcSCvIVI2RnZJts3n1_KFkJ-K0JPf0s4TEuMxFdCx6E__Hq_5Qdn_0c3Ugvrlo0BjMQalq7IsfVzCgIwknDwuduipkO3Bw_KKwbn4jerFQcGAMTP9qoPiktO7V1ltzqa_ipHityQ2MlejsTx9RjLzDfiZob7gUoG3zvk_SmcxUfhfc7euAlMBeMn617w0gkZ2P2xirsg33wUbPxflAz_tWpwCL2uLsveQePpfENvb2E0-_MsR1_klrJjuUPMidlUwqUZ8yQmTPL5jmXXpCm53bL4CwDhMxZVHA61voURhaGw93OBJNJn7qMgcI2.webp?r=6db"
                  alt=""
                  style={{ width: "100%", height: "920px" }}
                />
              ) : (
                <video
                  className="player"
                  src="/videos/main_video.mp4"
                  width="100%"
                  height="100%"
                  style={{
                    position: "relative",
                  }}
                  autoPlay
                  loop
                  muted
                ></video>
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
                  src="https://occ-0-988-395.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABVpD2HLqSeIPYBbj82FQUt1gQmvRXsb1wYcbeSEJh2b06C2Th8QVSM9qx4odBsCWdEBhnhvnMEncjN--2_EOTUgQmCSq3GlNAFO8fVTtlrc.webp?r=e4c"
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
