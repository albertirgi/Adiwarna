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
        <img
          id="kelanaMotion"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  lg:h-screen scale-150 lg:scale-100"
          src={KelanaMotion}
          alt="gif"
        />
      </section>
    </div>
  );
};

export default Hero;
