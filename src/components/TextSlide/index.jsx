import React, { useEffect, useRef, useState } from "react";
import "./index.css";
const TextSlide = () => {

  const ref = useRef(null);
  const [containerWidth, setWidth] = useState(100 + "%");
  const [animationState, setPlay] = useState("paused");
  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth + "px");
      setPlay("running");
    }
  }, []);

  return (
    <div className="text-slide">
      <div
        className="d-flex"
        ref={ref}
        style={{
          width: `${containerWidth}`,
          animationPlayState: animationState,
        }}
      >
        <h1 className="antidote">HEART ON FIRE, BRAIN ON ICE
        
        </h1>
      </div>
    </div>
  );
};

export default TextSlide;
