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

  const [isVisible, setIsVisible] = useState(false);
  const [btnVisible, setBtnVisible] = useState(false);
  const [strategyVisible, setStrategyVisible] = useState(false);
  const [strategyTextVisible, setStrategyTextVisible] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const [messageTextVisible, setMessageTextVisible] = useState(false);
  const [designVisible, setDesignVisible] = useState(false);
  const [designTextVisible, setDesignTextVisible] = useState(false);
  const [ideationVisible, setIdeationVisible] = useState(false);
  const [ideationTextVisible, setIdeationTextVisible] = useState(false);
  const sectionRef = useRef(null);
  const btnRef = useRef(null);
  const strategyRef = useRef(null);
  const strategyTextRef = useRef(null);
  const messageRef = useRef(null);
  const messageTextRef = useRef(null);
  const designRef = useRef(null);
  const designTextRef = useRef(null);
  const ideationRef = useRef(null);
  const ideationTextRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && !isVisible) {
        const top = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the threshold as needed
        const threshold = 0.7;

        if (top < windowHeight * threshold) {
          setIsVisible(true);

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
  }, [isVisible]);

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
      if (strategyRef.current && !strategyVisible) {
        const top = strategyRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the threshold as needed
        const threshold = 0.7;

        if (top < windowHeight * threshold) {
          setStrategyVisible(true);

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
  }, [strategyVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (strategyTextRef.current && !strategyTextVisible) {
        const top = strategyTextRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the threshold as needed
        const threshold = 0.7;

        if (top < windowHeight * threshold) {
          setStrategyTextVisible(true);

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
  }, [strategyTextVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (messageRef.current && !messageVisible) {
        const top = messageRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the threshold as needed
        const threshold = 0.7;

        if (top < windowHeight * threshold) {
          setMessageVisible(true);

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
  }, [messageVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (messageTextRef.current && !messageTextVisible) {
        const top = messageTextRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the threshold as needed
        const threshold = 0.7;

        if (top < windowHeight * threshold) {
          setMessageTextVisible(true);

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
  }, [messageTextVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (designRef.current && !designVisible) {
        const top = designRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the threshold as needed
        const threshold = 0.7;

        if (top < windowHeight * threshold) {
          setDesignVisible(true);

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
  }, [designVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (designTextRef.current && !designTextVisible) {
        const top = designTextRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the threshold as needed
        const threshold = 0.7;

        if (top < windowHeight * threshold) {
          setDesignTextVisible(true);

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
  }, [designTextVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (ideationRef.current && !ideationVisible) {
        const top = ideationRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the threshold as needed
        const threshold = 0.7;

        if (top < windowHeight * threshold) {
          setIdeationVisible(true);

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
  }, [ideationVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (ideationTextRef.current && !ideationTextVisible) {
        const top = ideationTextRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Adjust the threshold as needed
        const threshold = 0.7;

        if (top < windowHeight * threshold) {
          setIdeationTextVisible(true);

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
  }, [ideationTextVisible]);
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
        <p
          ref={sectionRef}
          className={`animated-text animated-texts  ${isVisible ? "animated-fade-down" : ""}`}
        >
          Antidote is a zero-cost consulting agency for grassroots non-profit’s
          & progressive forces.
        </p>
      </div>

      <div className="services">
        <button
          ref={btnRef}
          className={`start ${btnVisible ? "animated-fade-down-short" : ""}`}
        >
          CORE SERVICES
        </button>
        <div className="mobile">
          <p>CORE</p>
          <p>SERVICES</p>
        </div>
        <div className="line"></div>

        <div className="title-text">
          <label
            htmlFor=""
            ref={strategyRef}
            className={`pressura title-label ${
              strategyVisible ? "animated-fade-down-short" : ""
            }`}
          >
            STRATEGY
          </label>
          <p
            ref={strategyTextRef}
            className={`animate-highlight ${
              strategyTextVisible ? "animated-fade-down-texts" : ""
            }`}
          >
            Analyze needs and prioritize resources to establish a strong
            foundation for clear and focused progress.
          </p>
        </div>
        <div className="title-text">
          <label
            htmlFor=""
            ref={messageRef}
            className={`pressura title-label ${
              messageVisible ? "animated-fade-down-short" : ""
            }`}
          >
            MESSAGING
          </label>
          <p
            ref={messageTextRef}
            className={`animate-highlight ${
              messageTextVisible ? "animated-fade-down-texts" : ""
            }`}
          >
            Distil messages in a ways that stick. Content that resonates beyond
            like-minded circles.
          </p>
        </div>

        <div className="title-text">
          <label
            htmlFor=""
            ref={designRef}
            className={`pressura title-label ${
              designVisible ? "animated-fade-down-short" : ""
            }`}
          >
            DESIGN
          </label>
          <p
            ref={designTextRef}
            className={`animate-highlight ${
              designTextVisible ? "animated-fade-down-texts" : ""
            }`}
          >
            Confidence inspiring design. Flows and experiences that propel
            people to action.
          </p>
        </div>

        <div className="title-text">
          <label
            htmlFor=""
            ref={ideationRef}
            className={`pressura title-label ${
              ideationVisible ? "animated-fade-down-short" : ""
            }`}
          >
            IDEATION
          </label>
          <p
            ref={ideationTextRef}
            className={`animate-highlight ${
              ideationTextVisible ? "animated-fade-down-texts" : ""
            }`}
          >
            Navigate roadblocks with brainstorming, idea building and iteration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
