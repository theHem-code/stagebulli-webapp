import React from "react";
import video from "../video/birddogs_video.mp4";

const Video = () => {
  return (
    <div>
      <video autoPlay="autoplay" loop="loop" muted="muted" style={{objectFit: "cover", width: "100%", height: "100%"}}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
