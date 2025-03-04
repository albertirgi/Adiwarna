import Carousel from "./Carousel";
import Merch1 from "../../assets/images/merch-1.webp";
import Merch2 from "../../assets/images/merch-2.webp";
import { Link } from "react-router-dom";

const Section5 = () => {
  const slides = [
    Merch1, Merch2
  ]

  return (
    <div className="bg-5 bg-cover bg-no-repeat flex flex-col w-full h-[45vh] lg:h-fit lg:px-14 xl:px-20">
      <div className="flex relative flex-col w-full mx-auto lg:max-w-[1024px] xl:max-w-[1440px]">
        <div className="flex justify-center items-center text-[24px] mt-6 mb-8 lg:mb-0 lg:text-3lg lg:mt-20 lg:pt-1 xl:text-3xl xl:mt-28 xl:pt-1">
          <h1>
            <span className="font-bold font-jakarta-sans text-custom-white lg:mr-3 xl:mr-5">
              our
            </span>
            <span className="italic font-caslon-condensed text-custom-white">
              merch
            </span>
          </h1>
        </div>
        <div>
          <div className="flex tems-center justify-center px-3 lg:px-0">
            <Carousel>
              {slides.map((i, index) => (
                <img
                  key={index}
                  src={i}
                  className="lg:mt-6 xl:mt-8"
                />
              ))}
            </Carousel>
          </div>
        </div>
        <div
          className="font-jakarta-sans font-light text-custom-white self-end underline hover:cursor-pointer px-3 mt-12 lg:text-2lg lg:px-0 lg:mt-10 lg:mb-28 xl:text-2xl xl:mr-7 xl:mt-16 xl:mb-40"
          tabIndex="0"
          role="button"
        >
          {" "}
          <Link to="/merch">more...</Link>
        </div>
      </div>
    </div>
  );
};

export default Section5;
