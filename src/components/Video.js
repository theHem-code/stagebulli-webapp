import React /*, { useState, useEffect }*/ from "react";

const Video = () => {
  // const [isMobile, setIsMobile] = useState(false);

  // const handleRezise = () => {
  //   if (window.innerWidth < 720) {
  //     setIsMobile(true);
  //   } else {
  //     setIsMobile(false);
  //     console.log("big");
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleRezise);
  // });

  return (
    <div className="video">
      {/* <video
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
      </video> */}

      <div
        style={{
          padding: "56.25% 0 0 0",
          position: "relative",
          marginTop: "8rem",
        }}
      >
        <iframe
          title="stagebulli_video"
          src="https://player.vimeo.com/video/637793816?h=368d0778e6&autoplay=1&muted=1&loop=1&color=f15025&title=0&byline=0&portrait=0"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
};

export default Video;
