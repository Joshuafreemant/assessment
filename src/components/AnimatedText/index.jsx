import React, { useEffect, useState } from "react";
import "./index.css";
import { ScrollText } from "./ScrollText";
import { BsLightningCharge } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
const AnimatedText = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const content = [
    "Compassion is the antidote to the hyper-",
    "individualism of our capitalist world. In a",
    "society that often pits us against each other,",
    "we’re choosing a different path. We believe",
    "that building power through community and",
    "kindness is truly revolutionary.",
  ];

  return (
    <div className="animated-bg">
      <div className="top-info">
        <h1 className="antidote heading">ANTIDOTE</h1>
        <div className="faded-btn">
          <BsLightningCharge className="charge-btn" />
          <p className="faded-text start desktop">Start</p>
        </div>
      </div>
      <div className="animated">
        <ScrollText content={content} />
      </div>
      <div className="free-text">
        <img
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          src="/pitline.svg"
          alt=""
        />
        <p data-aos="zoom-in-down" 
        data-aos-duration="2000"
        className="animated-zoom animate-highlight">
          Antidote is a zero-cost consulting agency for grassroots non-profit’s
          & progressive forces.
        </p>
      </div>

      <div className="services">
        <button className="start">CORE SERVICES</button>
        <div className="mobile">
          <p>CORE</p>
          <p>SERVICES</p>
        </div>
        <div className="line"></div>

        <div className="title-text">
          <label htmlFor="" className="pressura title-label">
            STRATEGY
          </label>
          <p data-aos="fade-up" className="animate-highlight">
            Analyze needs and prioritize resources to establish a strong
            foundation for clear and focused progress.
          </p>
        </div>
        <div className="title-text">
          <label htmlFor="" className="pressura title-label">
            MESSAGING
          </label>
          <p data-aos="fade-up" className="animate-highlight">
            Distil messages in a ways that stick. Content that resonates beyond
            like-minded circles.
          </p>
        </div>

        <div className="title-text">
          <label htmlFor="" className="pressura title-label">
            DESIGN
          </label>
          <p data-aos="fade-up" className="animate-highlight">
            Confidence inspiring design. Flows and experiences that propel
            people to action.
          </p>
        </div>

        <div className="title-text">
          <label htmlFor="" className="pressura title-label">
            IDEATION
          </label>
          <p data-aos="fade-up" className="animate-highlight">
            Navigate roadblocks with brainstorming, idea building and iteration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
