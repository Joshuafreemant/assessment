import React from "react";
import "./index.css";
import { LogoSvg, MobileLogoSvg, TabLogoSvg } from "../../assets/Icons";
import { SlArrowDown } from "react-icons/sl";
import { HashLink } from "react-router-hash-link";

const VideoBackground = () => {
  return (
    <div className="video-container">
      <div className="text-overlay-p">
        <p className="start">P. SENAKA</p>
      </div>
      <video playsInline muted autoBuffer autoPlay loop id="video-background">
        <source src="/antidote.mp4" type="video/mp4" />
      </video>

      <div className="desktop text-overlay">
        <LogoSvg />
      </div>
      <div className="mobile text-overlay">
        <MobileLogoSvg />
      </div>

      <div className="tab text-overlay">
        <TabLogoSvg />
      </div>

      <HashLink to="/#highlighted-texts">
        <div className="dropdown-overlay">
          <SlArrowDown className="arrow-down" />
        </div>
      </HashLink>

      <div className="red-dot"></div>
    </div>
  );
};

export default VideoBackground;
