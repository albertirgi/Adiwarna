import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import CS11 from "../../../assets/images/works/campaignStrategy/CS1/cs1-1.webp";
import CS12 from "../../../assets/images/works/campaignStrategy/CS1/cs1-2.webp";
import CS21 from "../../../assets/images/works/campaignStrategy/CS2/cs2-1.webp";
import CS22 from "../../../assets/images/works/campaignStrategy/CS2/cs2-2.webp";
import CS31 from "../../../assets/images/works/campaignStrategy/CS3/cs3-1.webp";
import CS32 from "../../../assets/images/works/campaignStrategy/CS3/cs3-2.webp";
import CS41 from "../../../assets/images/works/campaignStrategy/CS4/cs4-1.webp";
import CS42 from "../../../assets/images/works/campaignStrategy/CS4/cs4-2.webp";
import CS51 from "../../../assets/images/works/campaignStrategy/CS5/cs5-1.webp";
import CS52 from "../../../assets/images/works/campaignStrategy/CS5/cs5-2.webp";
import CS61 from "../../../assets/images/works/campaignStrategy/CS6/cs6-1.webp";
import CS62 from "../../../assets/images/works/campaignStrategy/CS6/cs6-2.webp";

const CampaignStrategy = () => {
  return (
    <div>
      <FixNavbar />
      <div className="bg-category bg-no-repeat bg-cover h-fit lg:px-14 xl:px-20">
        <div className="flex relative flex-col w-full mx-auto lg:max-w-[1024px] xl:max-w-[1440px]">
          <div className="self-end lg:text-2lg lg:mt-24 xl:text-2xl xl:mt-28">
            <Link to="/category">
              <span className="self-end font-medium font-jakarta-sans text-custom-purple lg:mx-1 xl:mx-2">currated</span>
              <span className="italic font-medium font-caslon-condensed text-custom-purple">works</span>
            </Link>
          </div>
          <div className="self-start lg:text-3lg xl:text-3xl">
            <span className="self-start italic font-medium font-caslon-condensed text-custom-purple">Campaign Strategy</span>
          </div>
          <div className="flex mt-5">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="1">
                  <img src={CS12} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={CS11} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Kalkulaku</h2>
                  <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Monica Yvetta Utomo</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="2">
                  <img src={CS22} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={CS21} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Petallete</h2>
                  <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Vanessa Tan</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="3">
                  <img src={CS32} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={CS31} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Nettika</h2>
                  <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Shannon Soen Ying Zhen</p>
                </Link>
              </div>
            </article>
          </div>
          
          <div className="flex mt-10 mb-40">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="4">
                  <img src={CS42} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={CS41} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Harmony Inside & Out</h2>
                  <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Michelle Aldorino</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="5">
                  <img src={CS52} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={CS51} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">7 Broomsticks Bindery </h2>
                  <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Patricia Chamora</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="6">
                  <img src={CS62} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={CS61} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Personality Photoshoot</h2>
                  <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Gwyneth Charlize</p>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CampaignStrategy;
