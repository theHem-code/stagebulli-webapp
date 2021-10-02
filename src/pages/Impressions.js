import React, { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  "https://res.cloudinary.com/dxkj8owwl/image/upload/v1629742127/stagebulli/Stage%20Bulli_6.jpg",
  "https://res.cloudinary.com/dxkj8owwl/image/upload/v1629742127/stagebulli/Stage%20Bulli_2.jpg",
  "https://res.cloudinary.com/dxkj8owwl/image/upload/v1629742127/stagebulli/Stage%20Bulli_4.jpg",
  "https://res.cloudinary.com/dxkj8owwl/image/upload/v1629742127/stagebulli/Stage%20Bulli_7.jpg",
  "https://res.cloudinary.com/dxkj8owwl/image/upload/v1629742127/stagebulli/Stage%20Bulli_1.jpg",
  "https://res.cloudinary.com/dxkj8owwl/image/upload/v1629742127/stagebulli/Stage%20Bulli_5.jpg",
  "https://res.cloudinary.com/dxkj8owwl/image/upload/v1629742127/stagebulli/Stage%20Bulli_3.jpg",
  "https://res.cloudinary.com/dxkj8owwl/image/upload/v1629742127/stagebulli/Stage%20Bulli_3.jpg",
  "https://res.cloudinary.com/dxkj8owwl/image/upload/v1629742127/stagebulli/Stage%20Bulli_6.jpg",
  "https://res.cloudinary.com/dxkj8owwl/image/upload/v1629742127/stagebulli/Stage%20Bulli_2.jpg",
  "https://res.cloudinary.com/dxkj8owwl/image/upload/v1629742127/stagebulli/Stage%20Bulli_4.jpg",
  "https://res.cloudinary.com/dxkj8owwl/image/upload/v1629742127/stagebulli/Stage%20Bulli_7.jpg",
];

const desc = [
  "STAGE BULLI - Weltpremiere in der Kulturbrauerei",
  "test 2",
  "test 3",
]

const Impressions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <main>
        <div className="container impressions-container">
          <div className="row header">
            <h1 className="col-12">Live - Impressionen</h1>
          </div>
          <hr></hr>

          <div className="image-grid">
            {images.map((image, index) => {
              const handleImageIndex = () => {
                setIsOpen(true);
                setPhotoIndex(index);
              };
              return (
                <img
                  src={image}
                  alt="Stage_Bulli_Image"
                  className="image"
                  onClick={handleImageIndex}
                />
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
      </main>
    </div>
  );
};

export default Impressions;
