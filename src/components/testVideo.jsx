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
              src="https://www.youtube.com/embed/4OSFPrOL1LQ?autoplay=1&version=3&loop=1&playlist=4OSFPrOL1LQ&rel=0"
              title=" video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="trailer-vignette"></div>
            <div className="hero-vigenette"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestVideo;
