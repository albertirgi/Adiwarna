import Earth from "../../assets/images/earth.svg";
import LogoKelana from "../../assets/images/logo-kelana.svg";

const Section3 = () => {
  return (
    <div className="bg-3 bg-custom-yellow w-full h-[60vh] lg:h-fit bg-no-repeat bg-cover flex justify-center ">
      <div className="flex relative flex-col my-auto lg:my-0 mx-auto lg:max-w-[760px] xl:max-w-[1070px]">
        <a href="https://adiwarna-kelana-trisixfy.netlify.app">
        <div className="z-10 hover:scale-110 hover:cursor-pointer transition-transform duration-300 ease-in-out flex items-center justify-center lg:py-12 xl:py-16">
          <img src={Earth} className=" w-[75%] lg:w-custom-earth animate-spin" />
          <div className="absolute flex flex-col items-center justify-center">
            <img src={LogoKelana} className="w-[25%] lg:pb-6 pt-16 lg:pt-0" />
            <p className="font-jakarta-sans italic font-bold text-custom-white pb-4 lg:pb-8 text-[40px] lg:text-4lg xl:text-4xl">
              virtual
              <a className="font-caslon-condensed italic text-custom-white ml-4 lg:ml-5">
                experience
              </a>
            </p>
            <p className="text-custom-white pb-20 text-[8px] lg:text-2lg xl:text-2xl">
              in partnership with Trisixfy
            </p>
          </div>
        </div>
        </a>
      </div>
    </div>
  );
};

export default Section3;
