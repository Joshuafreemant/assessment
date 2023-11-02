import About from "../../components/About";
import AnimatedText from "../../components/AnimatedText";
import Footer from "../../components/Footer";
import TextSlide from "../../components/TextSlide";
import VideoBackground from "../../components/VideoBackGround";
import "./index.css";

function Home() {
  return (
    <>
      <VideoBackground />
      <AnimatedText/>
      <About/>
      <TextSlide/>
      <Footer/>
    </>
  );
}

export default Home;
