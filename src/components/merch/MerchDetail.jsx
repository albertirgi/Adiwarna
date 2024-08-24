import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import FixNavbar from "../global/FixNavbar";
import Footer from "../global/Footer";
import { merchs } from "../global/Data";
import Carousel from "../home/Carousel";

const MerchDetail = () => {
  const { id } = useParams();
  const merch = merchs.find((merch) => merch.id == id);
  const imageArray = [
    merch.img[3].default,
    merch.img[4].default,
  ];

  return (
    <>
      <FixNavbar />
      <div id="merch-detail" className="bg-5 bg-cover bg-no-repeat flex flex-col h-fit w-full lg:px-14 xl:px-20">
        <div className="lg:hidden h-full flex justify-center items-center mt-16 mb-8">
          <Link to="/event" className="font-bold font-jakarta-sans text-custom-white text-[24px] text-end hover:cursor-pointer hover:underline decoration-1 underline-offset-4">
            our <span className="font-caslon-text font-normal italic">Merch</span>
          </Link>
        </div>
        <div className="flex relative flex-col w-full h-full mx-auto max-w-[400px] lg:max-w-[1024px] xl:max-w-[1440px] lg:pt-20 xl:pt-24">
          <Carousel>
            {imageArray.map((i, index) => (
              <img src={i} key={index} />
            ))}
          </Carousel>
          <div className="w-full h-fit"></div>
          <div className="w-full flex flex-row pt-4">
            <div className="hidden basis-2/4 lg:flex flex-col">
              <div className="grid grid-cols-3 gap-x-4">
                <LazyLoadImage src={merch.img[0].default} className="w-full" effect="blur" />
                <LazyLoadImage src={merch.img[1].default} className="w-full" effect="blur" />
                <LazyLoadImage src={merch.img[2].default} className="w-full" effect="blur" />
              </div>
              <div className="hidden lg:block h-full flex items-center mt-4 mb-12">
                <Link to="/event" className="font-bold font-jakarta-sans text-custom-white text-[24px] text-end hover:cursor-pointer hover:underline decoration-1 underline-offset-4">
                  Our <span className="font-caslon-text font-normal italic">Merch</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col lg:hidden">
              <div className="grid grid-cols-3 gap-x-4">
                <LazyLoadImage src={merch.img[0].default} className="w-full" effect="blur" />
                <LazyLoadImage src={merch.img[1].default} className="w-full" effect="blur" />
                <LazyLoadImage src={merch.img[2].default} className="w-full" effect="blur" />
              </div>
            </div>
            <div className="basis-2/4 relative flex flex-col pt-8 lg:pl-12 xl:pl-24 pb-12">
              <p className="hidden lg:block absolute font-jakarta-sans text-custom-white font-bold lg:text-[64px] xl:text-[68px] leading-none -top-12">{merch.name}</p>
              <p className="hidden lg:block font-jakarta-sans text-custom-white lg:text-[16px] xl:text-[20px] leading-tight ">{merch.desc}</p>
              <p className="hidden lg:block font-jakarta-sans text-custom-white lg:text-[16px] xl:text-[20px]  mt-4">Dimensi: {merch.dimension}</p>
              <div className="hidden h-full lg:flex flex-row">
                <div className="basis-1/2 pt-4">
                  <button className="bg-[#0EF0B0] text-[#5C05D7] lg:text-[16px] xl:text-[20px] px-4 py-1 font-jakarta-sans font-bold rounded-3xl">Place Order</button>
                </div>
                <div className="basis-1/2 flex flex-row gap-x-2 justify-end h-fit">
                  <p className="text-custom-white font-jakarta-sans font-light lg:text-[24px] xl:text-[28px] self-end leading-snug">IDR</p>
                  <p className="text-custom-white font-caslon-condensed font-normal lg:text-[48px] xl:text-[56px] italic leading-none">{merch.price}</p>
                  <p className="text-custom-white font-jakarta-sans font-light lg:text-[24px] xl:text-[28px] self-end leading-snug">{merch.uom != "" ? `/${merch.uom}` : ""}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden flex-row justify-between mt-4 items-center">
            <p className="font-jakarta-sans text-custom-white text-[30px] font-bold leading-tight ">{merch.name}</p>
            <p className="text-custom-white font-caslon-condensed font-normal text-[25px] xl:text-[56px] italic leading-none"><span className="text-[15px]">IDR</span> {merch.price}</p>
          </div>
          <div className="flex lg:hidden flex-row justify-center mt-4 items-center">
            <p className="font-jakarta-sans text-custom-white text-[15px] font-normal leading-tight ">{merch.desc}</p>
          </div>
          <div className="flex lg:hidden flex-row mt-4 items-center">
            <p className="font-jakarta-sans text-custom-white text-[12px] font-normal leading-tight ">{merch.dimension}</p>
          </div>
          <div className="flex lg:hidden flex-row mt-8 mb-12 items-center justify-center w-full">
            <button className="bg-[#0EF0B0] text-[#5C05D7] lg:text-[16px] xl:text-[20px] px-4 py-1 font-jakarta-sans font-bold rounded-3xl w-full">Place Order</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MerchDetail;
