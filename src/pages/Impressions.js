import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  "https://ik.imagekit.io/zpqur0hl7qs/Stagebulli/Foto_1_o_WOFjQV2.jpg?updatedAt=1634249437629",
  "https://ik.imagekit.io/zpqur0hl7qs/Stagebulli/Foto_2_xp2i4M-ef.jpg?updatedAt=1634249428579",
  "https://ik.imagekit.io/zpqur0hl7qs/Stagebulli/Foto_3_WEA6ODJSS.jpg?updatedAt=1634249432221",
  "https://ik.imagekit.io/zpqur0hl7qs/Stagebulli/Foto_5_KMIaz4vHC.jpg?updatedAt=1634249438643",
  "https://ik.imagekit.io/zpqur0hl7qs/Stagebulli/Foto_6_AmKkoMinq.jpg?updatedAt=1634249433306",
  "https://ik.imagekit.io/zpqur0hl7qs/Stagebulli/Foto_7_6nfjfNwQs.jpg?updatedAt=1634249435490",
  "https://ik.imagekit.io/zpqur0hl7qs/Stagebulli/Foto_8_D1E0UT_up.jpg?updatedAt=1634249425924",
  "https://ik.imagekit.io/zpqur0hl7qs/Stagebulli/Foto_9_ddnYtxZTW.jpg?updatedAt=1634249427393",
  "https://ik.imagekit.io/zpqur0hl7qs/Stagebulli/Foto_11.jpg?updatedAt=1640030984785",
  "https://ik.imagekit.io/zpqur0hl7qs/Stagebulli/Foto_12.jpg?updatedAt=1640031004034",
  "https://ik.imagekit.io/zpqur0hl7qs/Stagebulli/Foto_15.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1667994923731",
  "https://ik.imagekit.io/zpqur0hl7qs/Stagebulli/Foto_14.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1667994900808"
];

const desc = [
  "STAGE BULLI Weltpremiere @KulturBrauerei, Artist: Birddogs, Photo by Alexander Mundt",
  "STAGE BULLI Weltpremiere @KulturBrauerei, Artist: Birddogs, Photo by Alexander Mundt",
  "Tag der Deutschen Einheit @Potsdam, Artist: Birddogs, Photo by Carsten Franke",
  "AWO Teamevent @Jagdhaus Spandau, Artist: Sweet Music Collective, Photo by Marko Dietrich",
  "Intermate Teamevent @VON GREIFSWALD, Artist: Sweet Music Collective, Photo by Dominik Wilzok",
  "STAGE BULLI Shooting, Photo by Alexander Mundt",
  "STAGE BULLI Shooting, Photo by Alexander Mundt",
  "STAGE BULLI Shooting, Photo by Alexander Mundt",
  "radioeins Kunstprojekt #KEINBERLINOHNEKULTUR @Tegel Airport, Artist: Min t, Photo by Marc Vorwerk",
  "radioeins Kunstprojekt #KEINBERLINOHNEKULTUR @Tegel Airport, Artist: Min t, Photo by Marc Vorwerk",
  "radioeins Kunstprojekt #KEINBERLINOHNEKULTUR @Tegel Airport, Artist: Min t, Photo by Marc Vorwerk",
  "radioeins Kunstprojekt #KEINBERLINOHNEKULTUR @Tegel Airport, Artist: Min t, Photo by Markus Werner",
  "BESTIVAL 2021 @Motorwerk, Artist: Birddogs, Photo by ©visitBerlin, Mike Auerbach",
  "BESTIVAL 2021 @Motorwerk, Artist: Birddogs, Photo by ©visitBerlin, Mike Auerbach"
];

const Impressions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);


  return (
    <div>
      {/* <main> */}
        <div className="container impressions-container">
          <div className="row header">
            <h1 className="col-12">Impressionen</h1>
          </div>
          <hr></hr>

          <div className="image-grid">
            {images.map((image, index) => {
              const handleImageIndex = () => {
                setIsOpen(true);
                setPhotoIndex(index);
              };
              return (
                <div className="img-wrapper">
                  <img
                    src={image}
                    alt="Stage_Bulli_Image"
                    className="image"
                    onClick={handleImageIndex}
                  />
                </div>
              );
            })}

            {isOpen && (
              <Lightbox
                imageTitle={desc[photoIndex]}
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() =>
                  setPhotoIndex(
                    (photoIndex + images.length - 1) % images.length
                  )
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % images.length)
                }
              />
            )}
          </div>
        <div
        style={{
          padding: "56.25% 0 0 0",
          position: "relative",
          // marginTop: "4rem",
          marginBottom: "100px",
          margin: "0 auto",
          width: "85%"
        }}
        >
        <iframe
          title="#keinberlinohnekultur"
          src="https://player.vimeo.com/video/768950411?h=52165d25b1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&loop=1&color=f15025&title=0&byline=0&portrait=0"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
          frameBorder="0"
          allow="autoplay fullscreen; picture-in-picture"
          allowFullScreen
          ></iframe>
      
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
      {/* </main> */}
    </div>
          </div>
  );
};

export default Impressions;
