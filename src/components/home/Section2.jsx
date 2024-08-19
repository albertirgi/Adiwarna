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
          <div className="basis-2/4 lg:basis-7/12 xl:basis-7/12 flex justify-end lg:mt-28 xl:pr-4 xl:mt-36 2xl:mr-0">
            <h1 className="text-custom-white font-jakarta-sans text-[36px] lg:text-[56px] xl:text-[64px] 2xl:text-[76px] font-bold ">timeline</h1>
          </div>
          <div className="basis-2/4lg:basis-5/12 xl:basis-5/12 flex justify-start lg:mt-28 xl:mt-44">
            <div className="flex w-full flex-row">
              <div className="basis 1/4 flex flex-col items-center justify-center pt-8 pl-4 lg:pl-8 xl:pl-12 h-full">
                <img className="w-4 lg:w-8  xl:w-40 xl:h-10" src={LogoKelanaOnly} />
                <div className="w-[2px] lg:w-1 h-full bg-custom-white mt-2 mb-8"></div>
              </div>
              <div className="basis-3/4">
                <div className="flex flex-col pl-8 lg:pl-4 xl:pl-0 pt-8">
                  <TimelineItem content="roadshow" date="5-9 Agustus 2024" />
                  <TimelineItem content="competition" date="14-16 Agustus 2024" />
                  <TimelineItem content="workshop" date="14 Agustus 2024" />
                  <TimelineItem content="talkshow" date="15-16 Agustus 2024" />
                  <TimelineItem content="exhibition" date="14-18 Agustus 2024" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-2-2 bg-no-repeat bg-cover px-6 lg:px-14 xl:px-20 relative">
        <div className="absolute top-0 left-0 w-full">
          <div className="relative overflow-x-hidden flex h-8 lg:h-12 xl:h-16 bg-[#FA0202] border-y-2 border-y-white">
            <div className="absolute inset-0 items-center justify-evenly  animate-marquee flex flex-row whitespace-nowrap">
              <BannerItem type={1} />
              <img className="size-4 lg:size-6 xl:size-9 2xl:size-12" src={LogoKelanaOnly} />
              <BannerItem type={2} />
              <img className="size-4 lg:size-6 xl:size-9 2xl:size-12" src={LogoKelanaOnly} />
              <BannerItem type={3} />
              <img className="size-4 lg:size-6 xl:size-9 2xl:size-12" src={LogoKelanaOnly} />
              <BannerItem type={1} />
              <img className="size-4 lg:size-6 xl:size-9 2xl:size-12" src={LogoKelanaOnly} />
            </div>
            <div className=" absolute inset-0 items-center justify-evenly animate-marquee2 flex flex-row whitespace-nowrap">
              <BannerItem type={1} />
              <img className="size-4 lg:size-6 xl:size-9 2xl:size-12" src={LogoKelanaOnly} />
              <BannerItem type={2} />
              <img className="size-4 lg:size-6 xl:size-9 2xl:size-12" src={LogoKelanaOnly} />
              <BannerItem type={3} />
              <img className="size-4 lg:size-6 xl:size-9 2xl:size-12" src={LogoKelanaOnly} />
              <BannerItem type={1} />
              <img className="size-4 lg:size-6 xl:size-9 2xl:size-12" src={LogoKelanaOnly} />
            </div>
          </div>
        </div>
        <div className="flex relative flex-col mx-auto lg:max-w-[1024px] xl:max-w-[1440px] pb-4 lg:pb-48">
          <h1 className="text-custom-white font-jakarta-sans text-[36px] lg:text-[48px] xl:text-[76px] font-bold pt-16 lg:pt-24 pb-8 lg:pb-16">
            upcoming <span className="font-normal font-caslon-text italic">event</span>
          </h1>
          <div className="grid gap-x-4 lg:gap-x-12 gap-y-8 lg:gap-y-24 grid-cols-3 lg:px-4">
            {events.map((event) => (
              <EventItem key={event.id} id={event.id} img={event.img} name={event.display != "" ? event.display : event.title} desc={event.desc} date={event.date} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
