import LoadingVideo from "../../assets/videos/loading.mp4";
import MainVideo from "../../assets/videos/main_video.mp4";
import KelanaMotion from "../../assets/videos/kelana-motion.gif";

const Hero = () => {
  return (
    <div className="hero">
      {/* -- LOADING VIDEO -- */}
      <video
        id="loadingVideo"
        className="w-full h-screen object-cover absolute z-50 opacity-100 transition-opacity duration-500"
        src={LoadingVideo}
        autoPlay
        muted
        playsInline
      ></video>

      {/* -- MAIN VIDEO -- */}
      <section id="main-video" className="hidden relative">
        <video
          id="mainVideo"
          className="w-full h-screen object-cover"
          src={MainVideo}
          type="video/mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <img
            id="kelanaMotion"
            src={KelanaMotion}
            alt="gif"
          />
        </div>

      </section>
    </div>
  );
};

export default Hero;
