import React, { useEffect } from "react";
import "./index.css";
import { BsLightningCharge } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="about">
      <div className="avatar">
        <img src="/Avatar.png" alt="" className="" />
        <p className="pressura">P.SENAKA</p>
      </div>
      <div className="bottom-line"></div>

      <p  className="bottom-text-about animate-highlight">
        For over a decade, I’ve worked at the intersection of design,
        behavioural science and technology. Helping companies like Airbnb,
        Google, PayPal & Fitbit execute intelligent and elegant products.
      </p>

      <p  className="bottom-text-about  animate-highlight">
        Over a period of travel, I’ve experienced the cultures and perspectives
        of people in over 90 countries. These interactions have deepened my
        understanding of global injustices and shifted my focus toward projects
        that tackle today’s most pressing issues.
      </p>

      <div className="about-bottom">
        <div className="bottom-line"></div>
        <p  className="bottom-text animate-highlight">
          Available for 40 hours a month. One project at a time. Zero Cost.
        </p>
        <div className="bottom-btn">
          <BsLightningCharge className="charge-btn" />
          <p className="bottom-btn-text start">Start Something</p>
        </div>
      </div>
    </div>
  );
};

export default About;
