import React, { useRef } from "react";

const SlideVideo = () => {
  const videoRef = useRef();
  return (
    <div>
      <div
        className="hover"
        style={{ borderRadius: "25px" }}
        onMouseEnter={() => {
          videoRef.current.play();
        }}
        onMouseLeave={() => {
          videoRef.current.pause();
          //   videoRef.current.currentTime = 0;
        }}
      >
        <video
          src="videos/video_4.mp4"
          width="140px"
          height="80px"
          loop
          //   controls
          ref={videoRef}
          style={{
            borderRadius: "5%",
            // border: "1px solid red",
            marginTop: "15px",
          }}
        ></video>
      </div>
    </div>
  );
};

export default SlideVideo;
