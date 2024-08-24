import FixNavbar from "../global/FixNavbar";
import Footer from "../global/Footer";
import MerchItem from "./MerchItem";

const Merch = () => {
  return (
    <>
      <FixNavbar />
      <div className="bg-merch bg-no-repeat bg-cover h-[1000px] lg:h-[2100px] xl:h-[2400px] 2xl:h-[3000px] lg:px-12 xl:px-14 2xl:px-20">
        <div className="flex flex-col w-full h-full mx-auto max-w-[400px] lg:max-w-[1024px] xl:max-w-[1440px]">
          <h1 className="text-custom-white font-jakarta-sans lg:text-[48px] xl:text-[80px] font-bold mt-24 mb-8 lg:mb-12 text-center">
            our <span className="font-normal font-caslon-text italic">merch</span>
          </h1>
          <div className="relative h-full">
            <div id="merch-1" className="absolute w-[200px] h-[250px] lg:w-[440px] xl:w-[528px] 2xl:w-[670px] lg:h-fit hover:scale-105 transition-all duration-300 ease-in-out">
              <MerchItem id={1} />
            </div>
            <div id="merch-2" className="absolute w-[100px] h-[60px] mr-16 lg:mr-40 xl:mr-48 2xl:mr-56 right-0 lg:w-[218px] xl:w-[262px] 2xl:w-[332px] lg:h-fit hover:scale-105 transition-all duration-300 ease-in-out">
              <MerchItem id={2} />
            </div>
            <div id="merch-3" className="absolute w-[140px] h-[230px] mt-24 lg:mt-56 xl:mt-64 2xl:mt-72 right-0 lg:w-[312px] xl:w-[375px] 2xl:w-[476px] lg:h-fit hover:scale-105 transition-all duration-300 ease-in-out">
              <MerchItem id={3} />
            </div>
            <div id="merch-4" className="absolute w-[100px] h-[150px] mt-[18em] ml-16 lg:mt-[36rem] xl:mt-[44rem] 2xl:mt-[54rem] lg:left-36 xl:left-44 2xl:left-52 lg:w-[220px] xl:w-[264px] 2xl:w-[336px] lg:h-fit hover:scale-105 transition-all duration-300 ease-in-out">
              <MerchItem id={4} />
            </div>
            <div id="merch-5" className="absolute w-[120px] h-[90px] mb-[17em] ml-4 lg:mb-[52rem] xl:mb-[54rem] 2xl:mb-[70rem] bottom-0 lg:right-8 xl:right-16 2xl:right-24 lg:w-[378px] xl:w-[454px] 2xl:w-[576px] lg:h-fit hover:scale-105 transition-all duration-300 ease-in-out">
              <MerchItem id={5} />
            </div>
            <div id="merch-6" className="absolute w-[130px] h-[90px] mb-[22em] ml-56 lg:mb-[44rem] xl:mb-[45rem] 2xl:mb-[58rem] bottom-0 lg:left-16 xl:left- 2xl:left-24 lg:w-[214px] xl:w-[256px] 2xl:w-[326px] lg:h-fit hover:scale-105 transition-all duration-300 ease-in-out">
              <MerchItem id={6} />
            </div>
            <div id="merch-7" className="absolute w-[150px] h-[150px] mb-[5em] ml-12 lg:mb-[22rem] xl:mb-[20rem] 2xl:mb-[26rem] bottom-0 lg:left-48 xl:left-64 2xl:left-72 lg:w-[276px] xl:w-[331px] 2xl:w-[420px] lg:h-fit hover:scale-105 transition-all duration-300 ease-in-out">
              <MerchItem id={7} />
            </div>
            <div id="merch-8" className="absolute w-[110px] h-[180px] mb-[2em] ml-60 lg:mb-32 xl:mb-20 2xl:mb-32 bottom-0 lg:right-32 xl:right-40 2xl:right-48 lg:w-[212px] xl:w-[253px] 2xl:w-[323px] lg:h-fit hover:scale-105 transition-all duration-300 ease-in-out">
              <MerchItem id={8} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Merch;
