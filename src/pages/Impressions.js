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
//comment

  // useEffect(() => {
  //   fetch("https://api.cloudinary.com/v1_1/dxkj8owwl/image/upload")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
  
  // commen

  return (
    <div>
      <main style={{ height: "100vh" }}>
        <div className="container artists-container">
          <div className="row header">
            <h1 className="col-12">Live - Impressionen</h1>
          </div>
        </div>
        <div className="image-grid">
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
