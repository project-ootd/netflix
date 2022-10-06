import React from "react";

const TestVideo = () => {
  return (
    <div className="billboard-row">
      <div className="billboard-motion">
        <div className="nfp"></div>
        <div className="motion-background-components">
          <div
            className="hero-image-wrapper"
            style={{ width: "100%", height: "1000px" }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/4OSFPrOL1LQ?autoplay=1&mute=1&version=3&loop=1&playlist=4OSFPrOL1LQ&rel=0&controls=0"
              title=" video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div
              className="titleWrapper"
              style={{ transformorigin: "left bottom", transform: "scale(1)" }}
            >
              <div className="title-text" style={{ display: "flex" }}>
                <img
                  src="https://occ-0-3077-988.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABUq6SWe3nmuxzdO9Gd3VFi303ou0BWefzxdJs-CmirWGUNQrk1agqq1ZkeuqErcYU7btG-xYQBh1hLe0tf_jRDzLajEKxQqa8Q-PPIGK7bM.webp?r=803"
                  alt="슬기로운 의사 생활"
                  className="title-img"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestVideo;
