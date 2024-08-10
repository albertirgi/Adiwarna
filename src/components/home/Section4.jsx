import works11 from "../../assets/images/works/thesis/t4-1.webp";
import works12 from "../../assets/images/works/thesis/t4-2.webp";
import works21 from "../../assets/images/works/brandProduct/bnp6-1.webp";
import works22 from "../../assets/images/works/brandProduct/bnp6-2.webp";
import works31 from "../../assets/images/works/digitalMedia/dm4-1.webp";
import works32 from "../../assets/images/works/digitalMedia/dm4-2.webp";

import { Link } from "react-router-dom";

const Section4 = () => {
  return (
    <div className="bg-4 bg-cover bg-no-repeat flex flex-col w-full h-fit lg:px-14 xl:px-20">
      <div className="flex relative flex-col w-full mx-auto lg:max-w-[1024px] xl:max-w-[1440px]">
        <div className="self-start lg:text-3lg lg:mt-11 xl:text-3xl xl:mt-14">
          <h1>
            <span className="font-medium font-jakarta-sans text-custom-purple lg:mx-3 xl:mx-5">
              currated
            </span>
            <span className="italic font-medium font-caslon-condensed text-custom-purple">
              works
            </span>
          </h1>
        </div>
        <div>
          <div className="flex">
            <article className="flex flex-col items-center w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={works12} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={works11} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                  Analisis Strategi Brand Activation Cat Dulux pada House of Sweet Embrace Exhibition.
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                  Gabriella Kova Lucetta
                </p>
              </div>
            </article>
            <article className="flex flex-col w-[33%] lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={works22} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={works21} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                  Petallete
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                  Vanessa Tan
                </p>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={works32} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={works31} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                  At The End of Time
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                  Becak Productions
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="flex justify-center">
  <Link to="/category">
    <div
      className="font-jakarta-sans text-custom-white justify-center item-center self-center italic font-bold text-center bg-custom-purple rounded-[72px] hover:bg-custom-yellow hover:text-custom-purple cursor-pointer transition-colors duration-500 hover:scale-110 hover:shadow-lg hover:cursor-pointer transition-transform duration-500 ease-in-out lg:px-7 lg:py-2 lg:mt-7 lg:text-2lg lg:mb-10 xl:px-9 xl:py-3 xl:mt-7 xl:text-2xl xl:mb-14 inline-block"
      tabIndex="0"
      role="button"
    >
      more works
    </div>
  </Link>
</div>

      </div>
    </div>
  );
};

export default Section4;
