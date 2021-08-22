import React, { useLayoutEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  "https://res.cloudinary.com/dxkj8owwl/image/upload/v1623152849/stagebulli/img_8493_ob4qhs.jpg",
  "https://res.cloudinary.com/dxkj8owwl/image/upload/v1623152853/stagebulli/helloworld.jpg"
]

const Impressions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <main style={{ height: "100vh" }}>
        <div className="container artists-container">
          <div className="row header">
            <h1 className="col-12">Live - Impressionen</h1>
          </div>
          <div className="image-grid">
            <img
              src="https://res.cloudinary.com/dxkj8owwl/image/upload/v1623152849/stagebulli/img_8493_ob4qhs.jpg"
              alt=""
              className="image"
              onClick={() => setIsOpen(true)}
            />
            <img
              src="https://res.cloudinary.com/dxkj8owwl/image/upload/v1623152849/stagebulli/img_8493_ob4qhs.jpg"
              alt=""
              className="image"
            />
            <img
              src="https://res.cloudinary.com/dxkj8owwl/image/upload/v1623152849/stagebulli/img_8493_ob4qhs.jpg"
              alt=""
              className="image"
            />
            <img
              src="https://res.cloudinary.com/dxkj8owwl/image/upload/v1623152849/stagebulli/img_8493_ob4qhs.jpg"
              alt=""
              className="image"
            />
            <img
              src="https://res.cloudinary.com/dxkj8owwl/image/upload/v1623152849/stagebulli/img_8493_ob4qhs.jpg"
              alt=""
              className="image"
            />
            <img
              src="https://res.cloudinary.com/dxkj8owwl/image/upload/v1623152849/stagebulli/img_8493_ob4qhs.jpg"
              alt=""
              className="image"
            />
            <img
              src="https://res.cloudinary.com/dxkj8owwl/image/upload/v1623152849/stagebulli/img_8493_ob4qhs.jpg"
              alt=""
              className="image"
            />
            <img
              src="https://res.cloudinary.com/dxkj8owwl/image/upload/v1623152849/stagebulli/img_8493_ob4qhs.jpg"
              alt=""
              className="image"
            />
            <img
              src="https://res.cloudinary.com/dxkj8owwl/image/upload/v1623152849/stagebulli/img_8493_ob4qhs.jpg"
              alt=""
              className="image"
            />
            <img
              src="https://res.cloudinary.com/dxkj8owwl/image/upload/v1623152849/stagebulli/img_8493_ob4qhs.jpg"
              alt=""
              className="image"
            />
            <img
              src="https://res.cloudinary.com/dxkj8owwl/image/upload/v1623152849/stagebulli/img_8493_ob4qhs.jpg"
              alt=""
              className="image"
            />
            <img
              src="https://res.cloudinary.com/dxkj8owwl/image/upload/v1623152849/stagebulli/img_8493_ob4qhs.jpg"
              alt=""
              className="image"
            />

            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => setIsOpen(false )}
                onMovePrevRequest={() =>
                  setPhotoIndex((photoIndex + images.length - 1) % images.length,
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
