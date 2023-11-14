import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { BsLightningCharge } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { Bounce } from "react-awesome-reveal";

const About = () => {
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const thirdTextRef = useRef(null);
  const btnRef = useRef(null);
  const avatarRef = useRef(null);
  const nameRef = useRef(null);

  const [firstTextVisible, setFirstTextVisible] = useState(false);
  const [secondTextVisible, setSecondTextVisible] = useState(false);
  const [thirdTextVisible, setThirdTextVisible] = useState(false);
  const [btnVisible, setBtnVisible] = useState(false);
  const [avatarVisible, setAvatarVisible] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (firstTextRef.current && !firstTextVisible) {
        const top = firstTextRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the threshold as needed
        const threshold = 0.7;

        if (top < windowHeight * threshold) {
          setFirstTextVisible(true);

          // Remove the event listener once the animation is triggered
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [firstTextVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (secondTextRef.current && !secondTextVisible) {
        const top = secondTextRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the threshold as needed
        const threshold = 0.7;

        if (top < windowHeight * threshold) {
          setSecondTextVisible(true);

          // Remove the event listener once the animation is triggered
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [secondTextVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (thirdTextRef.current && !thirdTextVisible) {
        const top = thirdTextRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the threshold as needed
        const threshold = 0.7;

        if (top < windowHeight * threshold) {
          setThirdTextVisible(true);

          // Remove the event listener once the animation is triggered
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [thirdTextVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (btnRef.current && !btnVisible) {
        const top = btnRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the threshold as needed
        const threshold = 0.7;

        if (top < windowHeight * threshold) {
          setBtnVisible(true);

          // Remove the event listener once the animation is triggered
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [btnVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (avatarRef.current && !avatarVisible) {
        const top = avatarRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the threshold as needed
        const threshold = 0.7;

        if (top < windowHeight * threshold) {
          setAvatarVisible(true);

          // Remove the event listener once the animation is triggered
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [avatarVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (nameRef.current && !nameVisible) {
        const top = nameRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the threshold as needed
        const threshold = 0.7;

        if (top < windowHeight * threshold) {
          setNameVisible(true);

          // Remove the event listener once the animation is triggered
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nameVisible]);
  return (
    <div className="about">
      <div className="avatar">
        <img src="/Avatar.png" alt="" 
         ref={avatarRef}
         className={`bottom-text-about animate-highlight ${
           avatarVisible ? "animated-fade-down-texts" : ""
         }`}
        />
        <p 
         ref={nameRef}
         className={`pressura ${
           nameVisible ? "animated-fade-down-textss" : ""
         }`}
        >P.SENAKA</p>
      </div>
      <div className="bottom-line"></div>

      <p
        ref={firstTextRef}
        className={`bottom-text-about animate-highlight ${
          firstTextVisible ? "animated-fade-down-texts" : ""
        }`}
      >
        For over a decade, I’ve worked at the intersection of design,
        behavioural science and technology. Helping companies like Airbnb,
        Google, PayPal & Fitbit execute intelligent and elegant products.
      </p>
        <p 
        ref={secondTextRef}
        className={`bottom-text-about animate-highlight ${
          secondTextVisible ? "animated-fade-down-texts" : ""
        }`}
        >
          Over a period of travel, I’ve experienced the cultures and
          perspectives of people in over 90 countries. These interactions have
          deepened my understanding of global injustices and shifted my focus
          toward projects that tackle today’s most pressing issues.
        </p>

      <div className="about-bottom">
        <div className="bottom-line second-bottom-line"></div>
        <p 
          ref={thirdTextRef}
          className={`bottom-text animate-highlight ${
            thirdTextVisible ? "animated-fade-down-texts" : ""
          }`}
        >
          Available for 40 hours a month. One project at a time. Zero Cost.
        </p>
        <div 
         ref={btnRef}
         className={`bottom-btn ${
           btnVisible ? "animated-fade-down-short" : ""
         }`}
        >
          <BsLightningCharge className="charge-btn" />
          <p className="bottom-btn-text start">Start Something</p>
        </div>
      </div>
    </div>
  );
};

export default About;
