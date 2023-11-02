import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate
} from "framer-motion";
import "./index.css";


const ContentLine = ({ content }) => {
  const contentRef = useRef();

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["end center", "start start"]
  });

  const scrollValue = useTransform(scrollYProgress, [0, 0.15], ["100%", "0%"]);
  const clipPathVal = useMotionTemplate`inset(0% ${scrollValue} 0% 0%)`;

  return (
    <span className="text-container" ref={contentRef}>
      <motion.span
        style={{ clipPath: clipPathVal }}
        className="highlighted-text animate-highlight"
        data-text={content}
      />
      <span className="static-text animate-highlight">{content}</span>
    </span>
  );
};

export const ScrollText = ({ content }) => {
  return (
    <div className="outer">
      <div className="inner">
        <p className="animated-text">
          {content.map((item) => (
            <ContentLine key={item} content={item} />
          ))}
        </p>
      </div>
    </div>
  );
};
