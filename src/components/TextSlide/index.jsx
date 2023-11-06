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
    <>
     
      <div className="m-scroll">
        <div className="m-scroll__title">
          <div>
            <h1>
              <a className="antidote">HEART ON FIRE,</a>{" "}
              <a className="antidote">BRAIN ON ICE</a> &nbsp;&nbsp;
              
            </h1>
            <h1>
            <a className="antidote">HEART ON FIRE,</a>{" "}
              <a className="antidote">BRAIN ON ICE</a> {" "}
              
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextSlide;
