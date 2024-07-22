import LogoKelanaOnly from "../../assets/images/logo-kelana-only.svg";
import BannerItem from "./BannerItem";
import TimelineItem from "./TimelineItem";
import EventItem from "./EventItem";
import { events } from "../global/Data";

const Section2 = () => {
  return (
    <>
      <div className="bg-2-1 bg-no-repeat bg-cover">
        <div className="flex relative flex-row w-full mx-auto lg:max-w-[760px] xl:max-w-[1070px] lg:pb-16 xl:pb-44">
          <div className="lg:basis-7/12 xl:basis-7/12 flex justify-end lg:mt-28 xl:pr-4 xl:mt-36 2xl:mr-0">
            <h1 className="text-custom-white font-jakarta-sans xl:text-[64px] 2xl:text-[76px] font-bold ">timeline</h1>
          </div>
          <div className="lg:basis-5/12 xl:basis-5/12 flex justify-start lg:mt-28 xl:mt-44">
            <div className="flex w-full flex-row">
              <div className="basis 1/4 flex flex-col items-center justify-center pt-8 lg:pl-8 xl:pl-12 h-full">
                <img className="lg:w-8  xl:w-40 xl:h-10" src={LogoKelanaOnly} />
                <div className="w-1 h-full bg-custom-white mt-2 mb-8"></div>
              </div>
              <div className="basis-3/4">
                <div className="flex flex-col lg:pl-4 xl:pl-0 pt-8">
                  <TimelineItem content="roadshow" date="5-9 Agustus 2024" />
                  <TimelineItem content="roadshow" date="12-13 Agustus 2024" />
                  <TimelineItem content="workshop" date="14 Agustus 2024" />
                  <TimelineItem content="talkshow" date="15-16 Agustus 2024" />
                  <TimelineItem content="exhibition" date="14-18 Agustus 2024" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-2-2 bg-no-repeat bg-cover lg:px-14 xl:px-20 relative">
        <div className="absolute top-0 left-0 w-full">
          <div className="relative overflow-x-hidden flex lg:h-12 xl:h-16 bg-[#FA0202] lg:border-y-2 xl:border-y-2 border-y-white">
            <div className="absolute inset-0 items-center justify-evenly  animate-marquee flex flex-row space-x-4 whitespace-nowrap">
              <BannerItem type={1} />
              <img className="lg:size-6 xl:size-9 2xl:size-12" src={LogoKelanaOnly} />
              <BannerItem type={2} />
              <img className="lg:size-6 xl:size-9 2xl:size-12" src={LogoKelanaOnly} />
              <BannerItem type={3} />
              <img className="lg:size-6 xl:size-9 2xl:size-12" src={LogoKelanaOnly} />
              <BannerItem type={1} />
              <img className="lg:size-6 xl:size-9 2xl:size-12" src={LogoKelanaOnly} />
              {/* <BannerItem type={2} />
              <img className="lg:size-6 xl:size-9 2xl:size-12" src={LogoKelanaOnly} /> */}
              {/* <BannerItem type={3} />
              <img className="lg:size-6 xl:size-9" src={LogoKelanaOnly} /> */}
              {/* <BannerItem type={1} />
              <img className="lg:size-6 xl:size-9" src={LogoKelanaOnly} /> */}
            </div>
            <div className=" absolute inset-0 items-center justify-evenly animate-marquee2 flex flex-row  space-x-4 whitespace-nowrap">
              <BannerItem type={1} />
              <img className="lg:size-6 xl:size-9 2xl:size-12" src={LogoKelanaOnly} />
              <BannerItem type={2} />
              <img className="lg:size-6 xl:size-9 2xl:size-12" src={LogoKelanaOnly} />
              <BannerItem type={3} />
              <img className="lg:size-6 xl:size-9 2xl:size-12" src={LogoKelanaOnly} />
              <BannerItem type={1} />
              <img className="lg:size-6 xl:size-9 2xl:size-12" src={LogoKelanaOnly} />
              {/* <BannerItem type={2} /> */}
              {/* <img className="lg:size-6 xl:size-9 2xl:size-12" src={LogoKelanaOnly} /> */}
              {/* <BannerItem type={3} />
              <img className="lg:size-6 xl:size-9" src={LogoKelanaOnly} />
              <BannerItem type={1} />
              <img className="lg:size-6 xl:size-9" src={LogoKelanaOnly} /> */}
            </div>
          </div>
        </div>
        <div className="flex relative flex-col mx-auto lg:max-w-[1024px] xl:max-w-[1440px] pb-48">
          <h1 className="text-custom-white font-jakarta-sans lg:text-[48px] xl:text-[76px] font-bold py-16">
            upcoming <span className="font-normal font-caslon-text italic">event</span>
          </h1>
          <div className="grid gap-x-8 gap-y-24 grid-cols-3 px-8">
            {events.map((event) => (
              <EventItem key={event.id} id={event.id} img={event.img} name={event.title} desc={event.description} date={event.date} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
