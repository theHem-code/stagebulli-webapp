import React, { useState, useEffect, useRef } from "react";

const Bulliframe = ({ location }) => {
  const container = useRef(null);

  useEffect(() => {
    const frame = container.current;
    const { center } = location;
    frame.style.left = `${center}px`;
  }, [location]);
  return (
    <div
      className="animation"
      //   style={{ left: `${pixelLeft}px`, visibility: `${visible}` }}
      ref={container}
    ></div>
  );
};

export default Bulliframe;
