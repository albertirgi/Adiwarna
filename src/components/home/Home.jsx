import { useEffect } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Section1 from "./Section1";
// import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Footer from "./Footer";

const Home = () => {
  useEffect(() => {
    // STOP STICKY NAVBAR LOGIC
    setTimeout(() => {
      const navbar = document.getElementById("navbar");
      const mainVideo = document.getElementById("mainVideo");
      const offset = navbar.offsetHeight;

      const handleScroll = () => {
        const videoHeight = mainVideo.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= videoHeight - offset) {
          navbar.classList.add("stop-nav");
          navbar.style.position = "absolute";
          navbar.style.top = `${videoHeight - offset}px`;
        } else {
          navbar.classList.remove("stop-nav");
          navbar.style.position = "fixed";
          navbar.style.top = "0";
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, 7200);

    // LOADING VIDEO LOGIC
    const loadingVideo = document.getElementById("loadingVideo");
    const mainVideo = document.getElementById("main-video");
    const mainContent = document.getElementById("mainContent");
    const kelanaMotion = document.getElementById("kelanaMotion");
    const navbar = document.getElementById("navbar");

    const handleVideoEnd = () => {
      setTimeout(() => {
        loadingVideo.style.opacity = "0";
        kelanaMotion.style.display = "block";
        mainVideo.classList.remove("hidden");
        setTimeout(() => {
          loadingVideo.style.zIndex = "-21";
        }, 500);
        setTimeout(() => {
          mainContent.classList.remove("hidden");
        }, 4000);
        setTimeout(() => {
          navbar.style.opacity = "100";
        }, 4500);
      }, 0);
    };

    loadingVideo.onended = handleVideoEnd;
  }, []);

  return (
    <div>
      <Navbar />
      <div id="mainContent" className="">
        <Hero />
        <Section1 />
        {/* <Section2 /> */}
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
