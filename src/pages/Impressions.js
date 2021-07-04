import React, { useLayoutEffect } from "react";
import {
  Image,
  // Transformation,
  CloudinaryContext,
} from "cloudinary-react";
import NavbarNew from "../components/Navbar/NavbarNew";
import Footer from "../components/Footer";

const Impressions = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  // useEffect(() => {
  //   fetch("https://api.cloudinary.com/v1_1/dxkj8owwl/image/upload")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  return (
    <div>
      <NavbarNew />
      <main style={{ height: "100vh" }}>
        <div className="artists-container">
          <div className="header">
            <h1>Live - Impressionen</h1>
          </div>
        </div>
        <div className="container">
          <CloudinaryContext cloudName="dxkj8owwl">
            <div>
              <Image
                publicId="stagebulli/helloworld"
                width="400"
                crop="scale"
              />
            </div>
          </CloudinaryContext>
        </div>
      </main>
      <Footer />

    </div>
  );
};



export default Impressions;

// {
  /* <div className="gallery">
  <CloudinaryContext cloudName="dxkj8owwl">
    {gallery.map((data) => {
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
// }
