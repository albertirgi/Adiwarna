import Sponsor1 from "../../assets/images/sponsor-1.svg";
import Sponsor2 from "../../assets/images/sponsor-2.svg";
import Sponsor3 from "../../assets/images/sponsor-3.svg";
import Sponsor4 from "../../assets/images/sponsor-4.svg";
import Sponsor5 from "../../assets/images/sponsor-5.svg";
import Sponsor6 from "../../assets/images/sponsor-6.svg";
import Sponsor7 from "../../assets/images/sponsor-7.svg";
import Sponsor8 from "../../assets/images/sponsor-8.svg";

export const Section6 = () => {
  return (
    <div className="bg-6 relative w-full h-fit bg-no-repeat bg-cover lg:px-14 xl:px-20">
      <div className="flex relative flex-col w-full mx-auto lg:max-w-[1024px] xl:max-w-[1440px]">
        <h2 className="relative self-start text-center text-custom-white leading-tight lg:mt-20 lg:text-3lg xl:mt-28 xl:text-3xl">
          <span className="font-caslon-display text-custom-purple lg:text-[70px] lg:mr-3 xl:text-[110px] xl:mr-5">
            in
          </span>
          <span className="font-caslon-condensed italic text-custom-purple">partner</span>
          <span className="font-caslon-display lg:text-[70px] xl:text-[110px] text-custom-purple">
            ships with
          </span>
        </h2>
        <div className="relative self-center lg:mt-14 lg:mb-28 xl:mt-20 xl:mb-36 xl:w-[900px]">
          <div className="flex justify-center items-center gap-10 mb-20 mt-10">
            <img src={Sponsor1} alt="" className="w-3/4" />
          </div>
          <div className="flex justify-center items-center gap-10 mb-20">
            <img src={Sponsor2} alt="" className="w-full" />
            <img src={Sponsor3} alt="" className="w-full" />
            <img src={Sponsor4} alt="" className="w-full" />
            <img src={Sponsor5} alt="" className="w-full" />
            <img src={Sponsor6} alt="" className="w-full" />
          </div>
          <div className="flex justify-center items-center gap-10">
            <img src={Sponsor7} alt="" className="w-1/6" />
            <img src={Sponsor8} alt="" className="w-1/6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
