import React from "react";
import "./index.css";
import { DropDown } from "../../assets/Icons";
import { SlArrowDown } from "react-icons/sl";

const VideoBackground = () => {
  return (
    <div className="fullscreen-video-wrap">
      <div className="text-overlay-p">
        <p className="start">P. SENAKA</p>
      </div>

      <div
        
        dangerouslySetInnerHTML={{
          __html: `
    <video playsinline loop autoPlay muted autobuffer class="video-background">
        <source src="/antidote.mp4" type="video/mp4" />
      </video>
</video>            
`,
        }}
      ></div>

      <div className="antidote text-overlay">
        <h1>Antidote</h1>
      </div>

      <div className="dropdown-overlay">
        <SlArrowDown className="arrow-down" />
      </div>

      <div className="red-dot"></div>
    </div>
  );
};

export default VideoBackground;
