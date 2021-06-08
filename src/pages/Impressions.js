import React, { useState, useEffect } from "react";
import {
  Image,
  Video,
  // Transformation,
  CloudinaryContext,
} from "cloudinary-react";
// import axios from "axios";

const Impressions = () => {
  const [gallery, setGallery] = useState("");

  useEffect(() => {
    fetch("https://res.cloudinary.com/dxkj8owwl/image/upload/v1623152849/stagebulli/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    }, []);



  return (
    <div>
      <h3> Here are all Bulli Live Impressions</h3>
      <CloudinaryContext cloudName="dxkj8owwl">
        <div>
          <Image publicId="sample" width="50" crop="scale" />
        </div>
      </CloudinaryContext>
    </div>
  );
};

export default Impressions;

{
  /* <div className="gallery">
  <CloudinaryContext cloudName="dxkj8owwl">
    {this.state.gallery.map((data) => {
      return (
        <div className="responsive" key={data.public_id}>
          <div className="img">
            <a
              target="_blank"
              href={`http://res.cloudinary.com/christekh/image/upload/${data.public_id}.jpg`}
            >
              <Image publicId={data.public_id}>
                <Transformation
                  crop="scale"
                  width="300"
                  height="200"
                  dpr="auto"
                  responsive_placeholder="blank"
                />
              </Image>
            </a>
            <div className="desc">Created at {data.created_at}</div>
          </div>
        </div>
      );
    })}
  </CloudinaryContext>
  <div className="clearfix"></div>
</div>; */
}
