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
          width="200px"
          height="150px"
          loop
          //   controls
          ref={videoRef}
        ></video>
      </div>
    </div>
  );
};

export default SlideVideo;
