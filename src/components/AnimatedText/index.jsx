import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { ScrollText } from "./ScrollText";
import { BsLightningCharge } from "react-icons/bs";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedText = () => {
  const controls = useAnimation();
  const strategyControls = useAnimation();
  const lineControls = useAnimation();
  const btnControls = useAnimation();
  const messageControls = useAnimation();
  const designControls = useAnimation();
  const ideationControls = useAnimation();
  const [ref, inView] = useInView();
  const [strategyref, inStrategyView] = useInView();
  const [lineref, inLineView] = useInView();
  const [btnref, inBtnView] = useInView();
  const [messageref, inMessageView] = useInView();
  const [designref, inDesignView] = useInView();
  const [ideationref, inIdeationView] = useInView();

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        controls.start("visible");
      }, 500);
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inLineView) {
      setTimeout(() => {
        lineControls.start("visible");
      }, 900);
    }
  }, [lineControls, inLineView]);

  useEffect(() => {
    if (inBtnView) {
      setTimeout(() => {
        btnControls.start("visible");
      }, 500);
    }
  }, [btnControls, inBtnView]);

  useEffect(() => {
    if (inStrategyView) {
      setTimeout(() => {
        strategyControls.start("visible");
      }, 1400);
    }
  }, [strategyControls, inStrategyView]);

  useEffect(() => {
    if (inMessageView) {
      setTimeout(() => {
        messageControls.start("visible");
      }, 1700);
    }
  }, [messageControls, inMessageView]);
  useEffect(() => {
    if (inDesignView) {
      setTimeout(() => {
        designControls.start("visible");
      }, 1400);
    }
  }, [designControls, inDesignView]);
  useEffect(() => {
    if (inIdeationView) {
      setTimeout(() => {
        ideationControls.start("visible");
      }, 1500);
    }
  }, [ideationControls, inIdeationView]);

  const antidoteVariant = {
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -80, scale: 1.01 },
  };

  const btnVariants = {
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -80, scale: 1.01 },
  };
  const lineVariants = {
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -80, scale: 1 },
  };
  const strategyVariants = {
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -30, scale: 1.01 },
  };

  const messageVariants = {
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -45, scale: 1.01 },
  };

  const designVariants = {
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -65, scale: 1.01 },
  };

  const ideationVariants = {
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -65, scale: 1.01 },
  };
  const content = [
    "Compassion is the antidote to the hyper-",
    "individualism of our capitalist world. In a",
    "society that often pits us against each other,",
    "we’re choosing a different path. We believe",
    "that building power through community and",
    "kindness is truly revolutionary.",
  ];

  const contentMobile = [
    "Compassion is the",
    "antidote to the hyper-",
    "individualism of our",
    "capitalist world. In a",
    "society that often pits us",
    "against each other, we’re",
    "choosing a different path.",
    " We believe that building",
    "power through community",
    "and kindness is truly",
    "revolutionary."
  ];

  return (
    <div className="animated-bg" id="highlighted-texts">
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
      <div className="animated-mobile " >
        <ScrollText content={contentMobile} />
      </div>
      
      <div className="free-text ">
        {/* <img
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          src="/pitline.svg"
          alt=""
        /> */}
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={antidoteVariant}
        >
          <p className="animated-text animated-texts">
            Antidote is a zero-cost consulting agency for grassroots
            non-profit’s & progressive forces.
          </p>
        </motion.div>
      </div>

      <div className="services">
        <motion.div
          ref={btnref}
          animate={btnControls}
          initial="hidden"
          variants={btnVariants}
        >
          <button
            // data-aos="fade-down"
            className="pressura"
          >
            CORE SERVICES
          </button>
        </motion.div>
        <div className="mobile pressura">
          <p>CORE</p>
          <p>SERVICES</p>
        </div>
        <motion.div
          ref={lineref}
          animate={lineControls}
          initial="hidden"
          variants={lineVariants}
        >
          <div className="line"></div>
        </motion.div>

        <motion.div
          ref={strategyref}
          animate={strategyControls}
          initial="hidden"
          variants={strategyVariants}
        >
          <div className="title-text">
            <label htmlFor="" className="pressura title-label">
              STRATEGY
            </label>
            <p className="animate-highlight m-0">
              Analyze needs and prioritize resources to establish a strong
              foundation for clear and focused progress.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={messageref}
          animate={messageControls}
          initial="hidden"
          variants={messageVariants}
        >
          <div className="title-text">
            <label htmlFor="" className="pressura title-label">
              MESSAGING
            </label>
            <p className="animate-highlight">
              Distil messages in a ways that stick. Content that resonates
              beyond like-minded circles.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={designref}
          animate={designControls}
          initial="hidden"
          variants={designVariants}
        >
          <div className="title-text">
            <label htmlFor="" className="pressura title-label">
              DESIGN
            </label>
            <p className="animate-highlight">
              Confidence inspiring design. Flows and experiences that propel
              people to action.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ideationref}
          animate={ideationControls}
          initial="hidden"
          variants={ideationVariants}
        >
          <div className="title-text">
            <label htmlFor="" className="pressura title-label">
              IDEATION
            </label>
            <p className="animate-highlight">
              Navigate roadblocks with brainstorming, idea building and
              iteration.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedText;
