import React, {useState, useEffect} from "react";

const Video = () => {

const [isMobile, setIsMobile] = useState(false)
 
const handleRezise = () => {
  if (window.innerWidth < 720) {
    setIsMobile(true)
  } else {
    setIsMobile(false)
    console.log("big")
  }
}

useEffect(() => {
  window.addEventListener("resize", handleRezise)
})
  const video =
    "https://res.cloudinary.com/dxkj8owwl/video/upload/v1629630260/stagebulli/StageBulli_PromoMay21.mp4_1_co3h3l.mp4";
  return (
    <div>
      <video
        autoPlay={isMobile ? "none" : "autoplay"}
        loop="loop"
        muted="muted"
        playsInline
        style={{ objectFit: "cover", width: "100%", height: "100%", marginTop: "150px" }}
        poster="https://res.cloudinary.com/dxkj8owwl/image/upload/v1633206881/stagebulli/Lexmouth-20210517--3585_Kopie_jp0hls.jpg"
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
