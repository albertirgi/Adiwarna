import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";

import DM11 from "../../../assets/images/works/digitalMedia/DM1/dm1-1.webp";
import DM12 from "../../../assets/images/works/digitalMedia/DM1/dm1-2.webp";
import DM21 from "../../../assets/images/works/digitalMedia/DM2/dm2-1.webp";
import DM22 from "../../../assets/images/works/digitalMedia/DM2/dm2-2.webp";
import DM31 from "../../../assets/images/works/digitalMedia/DM3/dm3-1.webp";
import DM32 from "../../../assets/images/works/digitalMedia/DM3/dm3-2.webp";
import DM41 from "../../../assets/images/works/digitalMedia/DM4/dm4-1.webp";
import DM42 from "../../../assets/images/works/digitalMedia/DM4/dm4-2.webp";
import DM51 from "../../../assets/images/works/digitalMedia/DM5/dm5-1.webp";
import DM52 from "../../../assets/images/works/digitalMedia/DM5/dm5-2.webp";

const DigitalMedia = () => {
  return (
    <div>
      <FixNavbar />
      <div className="bg-category bg-no-repeat bg-cover h-fit lg:px-14 xl:px-20">
        <div className="flex relative flex-col h-screen lg:h-auto px-3 lg:px-0 w-full mx-auto lg:max-w-[1024px] xl:max-w-[1440px]">
          <div className="flex flex-row justify-between lg:flex-col mt-16 lg:mt-0">
            <div className="order-2 lg:order-1 self-end text-[8px] lg:text-2lg lg:mt-24 xl:text-2xl xl:mt-28">
              <Link to="/category">
                <span className="self-end font-medium font-jakarta-sans text-custom-purple mx-0.5 lg:mx-1 xl:mx-2">currated</span>
                <span className="italic font-medium font-caslon-condensed text-custom-purple">works</span>
              </Link>
            </div>
            <div className="order-1 lg:order-2 self-start text-[24px] lg:text-3lg xl:text-3xl">
              <span className="self-start italic font-medium font-caslon-condensed text-custom-purple">Digital Media</span>
            </div>
          </div>  
          <div className="flex mt-5">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="1">
                  <img src={DM12} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={DM11} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Pinjol Benjol</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Katya Jocelyn</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] mx-4 lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="2">
                  <img src={DM22} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={DM21} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Staying Human</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Priscillia Iva</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="3">
                  <img src={DM32} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={DM31} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">When AI Meets Photography</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Sharen Angelina</p>
                </Link>
              </div>
            </article>
          </div>
          <div className="flex mt-10 mb-40">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="4">
                  <img src={DM42} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={DM41} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">At The End of Time</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Becak Productions</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] mx-4 lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="5">
                  <img src={DM52} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={DM51} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Absolution</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Ara Ara Team</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative"></article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DigitalMedia;
