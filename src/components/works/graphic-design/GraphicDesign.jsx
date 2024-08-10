import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";

import GD11 from "../../../assets/images/works/graphicDesign/gd1-1.webp";
import GD12 from "../../../assets/images/works/graphicDesign/gd1-2.webp";
import GD21 from "../../../assets/images/works/graphicDesign/gd2-1.webp";
import GD22 from "../../../assets/images/works/graphicDesign/gd2-2.webp";
import GD31 from "../../../assets/images/works/graphicDesign/gd3-1.webp";
import GD32 from "../../../assets/images/works/graphicDesign/gd3-2.webp";
import GD41 from "../../../assets/images/works/graphicDesign/gd4-1.svg";
import GD42 from "../../../assets/images/works/graphicDesign/gd4-2.svg";
import GD51 from "../../../assets/images/works/graphicDesign/gd5-1.svg";
import GD52 from "../../../assets/images/works/graphicDesign/gd5-2.svg";
import GD61 from "../../../assets/images/works/graphicDesign/gd6-1.svg";
import GD62 from "../../../assets/images/works/graphicDesign/gd6-2.svg";
import GD71 from "../../../assets/images/works/graphicDesign/gd7-1.svg";
import GD72 from "../../../assets/images/works/graphicDesign/gd7-2.svg";
import GD81 from "../../../assets/images/works/graphicDesign/gd8-1.svg";
import GD82 from "../../../assets/images/works/graphicDesign/gd8-2.svg";
import GD91 from "../../../assets/images/works/graphicDesign/gd9-1.svg";
import GD92 from "../../../assets/images/works/graphicDesign/gd9-2.svg";
import GD101 from "../../../assets/images/works/graphicDesign/gd10-1.svg";
import GD102 from "../../../assets/images/works/graphicDesign/gd10-2.svg";
import GD111 from "../../../assets/images/works/graphicDesign/gd11-1.svg";
import GD112 from "../../../assets/images/works/graphicDesign/gd11-2.svg";

const GraphicDesign = () => {
  return (
    <div>
      <FixNavbar />
      <div className="bg-category bg-no-repeat bg-cover h-fit lg:px-14 xl:px-20">
        <div className="flex relative flex-col w-full mx-auto lg:max-w-[1024px] xl:max-w-[1440px]">
          <div className="self-end lg:text-2lg lg:mt-24 xl:text-2xl xl:mt-28">
            <Link to="/category">
              <span className="self-end font-medium font-jakarta-sans text-custom-purple lg:mx-1 xl:mx-2">
                currated
              </span>
              <span className="italic font-medium font-caslon-condensed text-custom-purple">
                works
              </span>
            </Link>
          </div>
          <div className="self-start lg:text-3lg xl:text-3xl">
            <span className="self-start italic font-medium font-caslon-condensed text-custom-purple">
              Graphic Design
            </span>
          </div>
          <div className="flex mt-10">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={GD12} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={GD11} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                  Amborasa
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                  Fiorella Chelsea
                </p>
              </div>
            </article>
            <article className="flex flex-col w-[33%] lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={GD22} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={GD21} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                  HikeIndo
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                  Natasha Wisheilla
                </p>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={GD32} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={GD31} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                  Mayatra
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                  Vannessa Jeane Ananthalia
                </p>
              </div>
            </article>
          </div>
          <div className="flex mt-10">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={GD42} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={GD41} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                  Akgeni
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                  Michelle Jennifer
                </p>
              </div>
            </article>
            <article className="flex flex-col w-[33%] lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={GD52} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={GD51} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                  Ztrawberry
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                  Victoria Guitomo
                </p>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={GD62} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={GD61} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                  Jeanny’s Bakehuis.
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                  Stefanna Shiva
                </p>
              </div>
            </article>
          </div>
          <div className="flex mt-10">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={GD72} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={GD71} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                  10.11.45
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                  Celine Nadia Marchiella
                </p>
              </div>
            </article>
            <article className="flex flex-col w-[33%] lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={GD82} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={GD81} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                  Path Kindness
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                  Jacqueline Jillian
                </p>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={GD92} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={GD91} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                  Aku dan Tubuhku
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                  Stefani
                </p>
              </div>
            </article>
          </div>
          <div className="flex mt-10 mb-40">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={GD102} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={GD101} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                Nettika
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                Shannon Soen Ying Zhen
                </p>
              </div>
            </article>
            <article className="flex flex-col w-[33%] lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={GD112} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={GD111} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                Saktisangraha
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                Miguel Vicenzo
                </p>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={GD91} className="w-full opacity-0" />
              </div>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GraphicDesign;
