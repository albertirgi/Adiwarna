import LogoKelanaOnly from "../../assets/images/logo-kelana-only.svg";
import BannerItem from "./BannerItem";
import TimelineItem from "./TimelineItem";
import EventItem from "./EventItem";
import Event1 from "../../assets/images/poster-event-1.png";
import Event2 from "../../assets/images/poster-event-2.png";
import Event3 from "../../assets/images/poster-event-3.png";
import Event4 from "../../assets/images/poster-event-4.png";
import Event5 from "../../assets/images/poster-event-5.png";
import Event6 from "../../assets/images/poster-event-6.png";

const Section2 = () => {
  return (
    <div>
      <div className="bg-2-1 bg-no-repeat bg-cover">
        <div className="flex relative flex-row w-full mx-auto lg:max-w-[760px] xl:max-w-[1070px] lg:pb-16 xl:pb-44">
          <div className="lg:basis-7/12 xl:basis-7/12 flex justify-end lg:mt-28 lg:mr-4 xl:mt-40 xl:mr-0">
            <h1 className="text-custom-white font-jakarta-sans lg:text-[48px] xl:text-[76px] font-bold ">timeline</h1>
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
      <div className="bg-2-2 bg-no-repeat bg-cover">
        <div className="relative overflow-x-hidden flex lg:h-12 xl:h-16  bg-[#FA0202] lg:border-y-2 xl:border-y-4 border-y-white">
          <div className="animate-marquee flex flex-row  items-center space-x-4 whitespace-nowrap">
            <BannerItem type={1} />
            <img className="lg:size-6 xl:size-10" src={LogoKelanaOnly} />
            <BannerItem type={2} />
            <img className="lg:size-6 xl:size-10" src={LogoKelanaOnly} />
            <BannerItem type={3} />
            <img className="lg:size-6 xl:size-10" src={LogoKelanaOnly} />
            <BannerItem type={1} />
            <img className="lg:size-6 xl:size-10" src={LogoKelanaOnly} />
            <BannerItem type={2} />
            <img className="lg:size-6 xl:size-10" src={LogoKelanaOnly} />
            <BannerItem type={3} />
            <img className="lg:size-6 xl:size-10" src={LogoKelanaOnly} />
          </div>
          <div className="absolute inset-0 items-center justify-center animate-marquee2 flex flex-row  space-x-4 whitespace-nowrap">
            <BannerItem type={1} />
            <img className="lg:size-6 xl:size-10" src={LogoKelanaOnly} />
            <BannerItem type={2} />
            <img className="lg:size-6 xl:size-10" src={LogoKelanaOnly} />
            <BannerItem type={3} />
            <img className="lg:size-6 xl:size-10" src={LogoKelanaOnly} />
            <BannerItem type={1} />
            <img className="lg:size-6 xl:size-10" src={LogoKelanaOnly} />
            <BannerItem type={2} />
            <img className="lg:size-6 xl:size-10" src={LogoKelanaOnly} />
            <BannerItem type={3} />
            <img className="lg:size-6 xl:size-10" src={LogoKelanaOnly} />
          </div>
        </div>
        <div className="flex relative flex-col mx-auto lg:max-w-[1024px] xl:max-w-[1440px] lg:px-14  xl:px-20 pb-48">
          <h1 className="text-custom-white font-jakarta-sans lg:text-[48px] xl:text-[76px] font-bold py-16">
            upcoming <span className="font-normal font-caslon-text italic">event</span>
          </h1>
          <div className="flex flex-row justify-evenly mb-20">
            <EventItem img={Event1} name="Nama Event" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis varius. Lorem ipsum dolor sit amet." date="DD MM YYYY" />
            <EventItem img={Event2} name="Nama Event" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis varius. Lorem ipsum dolor sit amet." date="DD MM YYYY" />
            <EventItem img={Event3} name="Nama Event" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis varius. Lorem ipsum dolor sit amet." date="DD MM YYYY" />
          </div>
          <div className="flex flex-row justify-evenly">
            <EventItem img={Event4} name="Nama Event" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis varius. Lorem ipsum dolor sit amet." date="DD MM YYYY" />
            <EventItem img={Event5} name="Nama Event" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis varius. Lorem ipsum dolor sit amet." date="DD MM YYYY" />
            <EventItem img={Event6} name="Nama Event" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis varius. Lorem ipsum dolor sit amet." date="DD MM YYYY" />
          </div>
        </div>
      </div>
    </div>
  );
};

// const Section2 = () => {
//   return (
//     <div>
//       <div className="bg-2-1 h-screen relative w-full bg-no-repeat bg-contain bg-center snap-start">
//         <div className="flex flex-row justify-end pt-40">
//           <div className="basis-7/12 flex justify-end">
//             <h1 className="text-custom-white font-jakarta-sans text-6xl font-bold pr-20">timeline</h1>
//           </div>
//           <div className="basis-5/12 flex justify-start">
//             <div className="flex flex-row">
//               <div className="basis-1/4 flex">
//                 <div className="flex flex-col items-center justify-center pt-10">
//                   <img src={LogoKelanaOnly} />
//                   <div className="w-1 h-full bg-custom-white mt-2"></div>
//                 </div>
//               </div>
//               <div className="basis-4/4 flex">
//                 <div className="flex flex-col pt-3">
//                   <h1 className="text-custom-white font-jakarta-sans text-3xl mb-16">pre-kelana</h1>
//                   <h1 className="text-custom-white font-jakarta-sans text-3xl mb-16">roadshow</h1>
//                   <h1 className="text-custom-white font-jakarta-sans text-3xl mb-16">kelana ke kafe</h1>
//                   <h1 className="text-custom-white font-jakarta-sans text-3xl mb-16">workshop</h1>
//                   <h1 className="text-custom-white font-jakarta-sans text-3xl mb-16">talkshow</h1>
//                   <h1 className="text-custom-white font-jakarta-sans text-3xl">exhibition</h1>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-2-2 h-screen relative w-full bg-no-repeat bg-contain bg-center snap-start">
//         <div className="flex flex-col justify-end pt-8">
//           <div className="w-full h-16 bg-[#FA0202] border-y-4 border-y-white marquee-container">
//             <div className="flex flex-row items-center h-full justify-evenly marquee-content">
//               <h1 className="text-custom-white font-jakarta-sans text-2xl font-bold">
//                 upcoming <span className="text-custom-white font-jakarta-sans text-2xl font-normal italic">event</span>
//               </h1>
//               <img src={LogoKelanaOnly} />
//               <h1 className="text-custom-white font-caslon-text text-2xl font-normal italic">
//                 upcoming <span className="text-custom-white font-jakarta-sans text-2xl font-normal">event</span>
//               </h1>
//               <img src={LogoKelanaOnly} />

//               <h1 className="text-custom-white font-jakarta-sans text-2xl font-bold">
//                 upcoming <span className="text-custom-white font-caslon-text text-2xl font-normal italic">event</span>
//               </h1>
//               <img src={LogoKelanaOnly} />
//               <h1 className="text-custom-white font-jakarta-sans text-2xl font-bold">
//                 upcoming <span className="text-custom-white font-jakarta-sans text-2xl font-normal italic">event</span>
//               </h1>
//               <img src={LogoKelanaOnly} />
//               <h1 className="text-custom-white font-caslon-text text-2xl font-normal italic">
//                 upcoming <span className="text-custom-white font-jakarta-sans text-2xl font-normal">event</span>
//               </h1>
//               <img src={LogoKelanaOnly} />

//               <h1 className="text-custom-white font-jakarta-sans text-2xl font-bold">
//                 upcoming <span className="text-custom-white font-caslon-text text-2xl font-normal italic">event</span>
//               </h1>
//               <img src={LogoKelanaOnly} />
//             </div>
//           </div>

//           <div className="flex flex-col px-64 pt-12">
//             <h1 className="text-custom-white font-jakarta-sans text-6xl font-bold">
//               upcoming <span className="text-custom-white font-caslon-text text-6xl font-normal italic">event</span>
//             </h1>
//             <div className="flex flex-row pt-12 justify-between">
//               <div className="w-[23rem]">
//                 <div className="flex flex-col">
//                   <div className="size-[23rem] bg-custom-gray"></div>
//                   <h1 className="text-custom-white font-jakarta-sans text-4xl font-bold mt-8">nama event</h1>
//                   <p className="text-custom-white font-jakarta-sans text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis varius. Lorem ipsum dolor sit amet.</p>
//                 </div>
//               </div>
//               <div className="w-[23rem]">
//                 <div className="flex flex-col">
//                   <div className="size-[23rem] bg-custom-gray"></div>
//                   <h1 className="text-custom-white font-jakarta-sans text-4xl font-bold mt-8">nama event</h1>
//                   <p className="text-custom-white font-jakarta-sans text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis varius. Lorem ipsum dolor sit amet.</p>
//                 </div>
//               </div>
//               <div className="w-[23rem]">
//                 <div className="flex flex-col">
//                   <div className="size-[23rem] bg-custom-gray"></div>
//                   <h1 className="text-custom-white font-jakarta-sans text-4xl font-bold mt-8">nama event</h1>
//                   <p className="text-custom-white font-jakarta-sans text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis varius. Lorem ipsum dolor sit amet.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Section2;
