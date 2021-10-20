import React, { useState, useEffect } from "react";
// import YouTube from "./YoutubeEmbed";

const Video = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleRezise = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      console.log("big");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleRezise);
  });

  const video =
    "https://res.cloudinary.com/www-stagebulli-de/video/upload/v1634588716/stagebulli/StageBulli_PromoMay21.mp4_1_t7cgcb.mp4";
  return (
    <div className="video">
      <video
        className="video"
        preload={isMobile ? "none" : "auto"}
        // autoPlay
        loop="loop"
        muted="muted"
        playsInline
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          marginTop: "150px",
        }}
        poster="https://ik.imagekit.io/zpqur0hl7qs/Stagebulli/Foto_8_D1E0UT_up.jpg?updatedAt=1634249425924"
      >
        <source src={video} type="video/mp4" />
      </video>
      {/* <YouTube videoId="5RQmIcnByak" className="service-video"/> */}
    </div>
  );
};

export default Video;
