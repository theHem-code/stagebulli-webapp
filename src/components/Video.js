import React, {useState, useEffect} from "react";

const Video = () => {

const [isMobile, setIsMobile] = useState(false)
 
const handleRezise = () => {
  if (window.innerWidth < 720) {
    setIsMobile(true)
  } else {
    setIsMobile(false)
  }
}

useEffect(() => {
  window.addEventListener("resize", handleRezise)
})
  const video =
    "";
  return (
    <div>
      <video
        autoPlay='autoplay'
        loop="loop"
        muted="muted"
        playsInline
        style={{ objectFit: "cover", width: "100%", height: "100%", marginTop: "150px" }}
        poster="https://ik.imagekit.io/zpqur0hl7qs/Stagebulli/Foto_8_D1E0UT_up.jpg?updatedAt=1634249425924"
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
