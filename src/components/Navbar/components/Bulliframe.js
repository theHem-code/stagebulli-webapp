import React, { useEffect, useRef } from "react";

const Bulliframe = ({ location, renderVisibility }) => {
  const container = useRef(null);

  useEffect(() => {
    const frame = container.current;
    const { center, left } = location;
    frame.style.left = '-100%';
    frame.style.left = `${center}px`;
    console.log(frame)
    console.log(center)
  }, [location]);
  return (
    <div
      className="frame"
      style={{ visibility: `${renderVisibility}` }}
      ref={container}
    ></div>
  );
};

export default Bulliframe;