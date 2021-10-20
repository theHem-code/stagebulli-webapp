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
  "https://ik.imagekit.io/zpqur0hl7qs/Stagebulli/Foto_10_O1ajKDI4y.jpg?updatedAt=1634249418300",
  "https://ik.imagekit.io/zpqur0hl7qs/Stagebulli/Foto_11_mpCkYPRTo.jpg?updatedAt=1634249439489",
  "https://ik.imagekit.io/zpqur0hl7qs/Stagebulli/Foto_12_4Y1i_4OCem.jpg?updatedAt=1634249429629",
  "https://ik.imagekit.io/zpqur0hl7qs/Stagebulli/Foto_13_7-PqP5rEO.jpg?updatedAt=1634249434749"
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
  "radioeins Kunstprojekt #KEINBERLINOHNEKULTUR @Tegel Airport, Artist: Min t, Photo by Markus Werner"
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
        </div>
      {/* </main> */}
    </div>
  );
};

export default Impressions;
