import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { BsLightningCharge } from "react-icons/bs";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const firstControls = useAnimation();
  const secondControls = useAnimation();
  const thirdControls = useAnimation();
  const btnControls = useAnimation();

  const imageControls = useAnimation();
  const lineControls = useAnimation();
  const [firstRef, inFirstView] = useInView();
  const [imageRef, inImageView] = useInView();
  const [secondRef, inSecondView] = useInView();
  const [lineRef, inLineView] = useInView();
  const [thirdRef, inThirdView] = useInView();
  const [btnRef, inBtnView] = useInView();

  useEffect(() => {
    if (inFirstView) {
      setTimeout(() => {
        firstControls.start("visible");

      }, 400);
    }
  }, [firstControls, inFirstView]);
  useEffect(() => {
    if (inSecondView) {
      setTimeout(() => {
        secondControls.start("visible");
      }, 400);
    }
  }, [secondControls, inSecondView]);

  useEffect(() => {
    if (inImageView) {
      imageControls.start("visible");
    }
  }, [imageControls, inImageView]);

  useEffect(() => {
    if (inLineView) {
      lineControls.start("visible");
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
    if (inThirdView) {
      thirdControls.start("visible");
    }
  }, [thirdControls, inThirdView]);

  const firstVariant = {
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -80, scale: 1 },
  };

  const secondVariants = {
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -80, scale: 1 },
  };

  const imageVariants = {
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -80, scale: 1 },
  };

  const lineVariants = {
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -80, scale: 1 },
  };
  const btnVariants = {
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -80, scale: 1 },
  };
  const thirdVariants = {
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -80, scale: 1 },
  };
  return (
    <div className="about">
      <div className="avatar">
        <motion.div
          ref={imageRef}
          animate={imageControls}
          initial="hidden"
          variants={imageVariants}
        >
          <img src="/Avatar.png" alt="" />

          <p className="pressura">P.SENAKA</p>
        </motion.div>
      </div>
      <div className="bottom-line"></div>
      <motion.div
        ref={firstRef}
        animate={firstControls}
        initial="hidden"
        variants={firstVariant}
      >
        <p className="bottom-text-about animate-highlight">
          For over a decade, I’ve worked at the intersection of design,
          behavioural science and technology. Helping companies like Airbnb,
          Google, PayPal & Fitbit execute intelligent and elegant products.
        </p>
      </motion.div>
      <motion.div
        ref={secondRef}
        animate={secondControls}
        initial="hidden"
        variants={secondVariants}
      >
        <p className="bottom-text-about animate-highlight">
          Over a period of travel, I’ve experienced the cultures and
          perspectives of people in over 90 countries. These interactions have
          deepened my understanding of global injustices and shifted my focus
          toward projects that tackle today’s most pressing issues.
        </p>
      </motion.div>

      <div className="about-bottom">
        <motion.div
          ref={lineRef}
          animate={lineControls}
          initial="hidden"
          variants={lineVariants}
        >
          <div className="bottom-line second-bottom-line"></div>
        </motion.div>

        <motion.div
          ref={thirdRef}
          animate={thirdControls}
          initial="hidden"
          variants={thirdVariants}
        >
          <p className="bottom-text animate-highlight">
            Available for 40 hours a month. One project at a time. Zero Cost.
          </p>
        </motion.div>
        <motion.div
          ref={btnRef}
          animate={btnControls}
          initial="hidden"
          variants={btnVariants}
        >
          <div className="bottom-btn">
            <BsLightningCharge className="charge-btn" />
            <p className="bottom-btn-text start">Start Something</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
