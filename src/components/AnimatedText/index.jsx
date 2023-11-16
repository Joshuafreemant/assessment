import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { ScrollText } from "./ScrollText";
import { BsLightningCharge } from "react-icons/bs";
import { Bounce } from "react-awesome-reveal";
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

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      // Global settings
      // duration: 1000, // Animation duration
      // offset: 100, // Offset (in pixels) from the top of the page

      // Customize per element settings
      once: true, // Only animate an element once
      mirror: false, // Disable animation mirroring on scroll up

      // You can add more options based on your needs
    });

    // Refresh AOS after content changes (e.g., dynamic content updates)
    AOS.refresh();
    // Clean up on component unmount
    return () => {
      AOS.refreshHard(); // Hard refresh to remove all AOS data
    };
  }, []);

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
        {/* <img
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          src="/pitline.svg"
          alt=""
        /> */}
        <p className="animated-text animated-texts" data-aos="fade-down">
          Antidote is a zero-cost consulting agency for grassroots non-profit’s
          & progressive forces.
        </p>
      </div>

      <div className="services">
        <button data-aos="fade-down" className="start">
          CORE SERVICES
        </button>
        <div className="mobile">
          <p>CORE</p>
          <p>SERVICES</p>
        </div>
        <div className="line"></div>

        <div
          className="title-text"
          data-aos="fade-down"
          data-aos-delay="200"
          
        >
          <label htmlFor="" className="pressura title-label">
            STRATEGY
          </label>
          <p className="animate-highlight m-0">
            Analyze needs and prioritize resources to establish a strong
            foundation for clear and focused progress.
          </p>
        </div>
        <div
          className="title-text"
          data-aos="fade-down"
          data-aos-delay="200"
          
        >
          <label htmlFor="" className="pressura title-label">
            MESSAGING
          </label>
          <p className="animate-highlight">
            Distil messages in a ways that stick. Content that resonates beyond
            like-minded circles.
          </p>
        </div>

        <div
          className="title-text"
          data-aos="fade-down"
          data-aos-delay="200"
          
        >
          <label htmlFor="" className="pressura title-label">
            DESIGN
          </label>
          <p className="animate-highlight">
            Confidence inspiring design. Flows and experiences that propel
            people to action.
          </p>
        </div>

        <div
          className="title-text"
          data-aos="fade-down"
          data-aos-delay="200"
          
        >
          <label htmlFor="" className="pressura title-label">
            IDEATION
          </label>
          <p className="animate-highlight">
            Navigate roadblocks with brainstorming, idea building and iteration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
