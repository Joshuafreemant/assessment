import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { BsLightningCharge } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      // Global settings
      duration: 1000, // Animation duration
      offset: 100, // Offset (in pixels) from the top of the page

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
    <div className="about">
      <div className="avatar">
        <img
          src="/Avatar.png"
          alt=""
          data-aos="fade-down"
          //  className="bottom-text-about animate-highlight"
        />
        <p data-aos="fade-down" className="pressura">
          P.SENAKA
        </p>
      </div>
      <div className="bottom-line"></div>

      <p data-aos="fade-down" className="bottom-text-about animate-highlight">
        For over a decade, I’ve worked at the intersection of design,
        behavioural science and technology. Helping companies like Airbnb,
        Google, PayPal & Fitbit execute intelligent and elegant products.
      </p>
      <p data-aos="fade-down" className="bottom-text-about animate-highlight">
        Over a period of travel, I’ve experienced the cultures and perspectives
        of people in over 90 countries. These interactions have deepened my
        understanding of global injustices and shifted my focus toward projects
        that tackle today’s most pressing issues.
      </p>

      <div className="about-bottom">
        <div className="bottom-line second-bottom-line"></div>
        <p data-aos="fade-down" 
            data-aos-delay="100"
        
        className="bottom-text animate-highlight">
          Available for 40 hours a month. One project at a time. Zero Cost.
        </p>
        <div data-aos="fade-down" 
            data-aos-delay="500"
        
        className="bottom-btn">
          <BsLightningCharge className="charge-btn" />
          <p className="bottom-btn-text start">Start Something</p>
        </div>
      </div>
    </div>
  );
};

export default About;
