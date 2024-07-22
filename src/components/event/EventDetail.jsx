import { Link, useParams } from "react-router-dom";
import FixNavbar from "../global/FixNavbar";
import Footer from "../global/Footer";
import { events } from "../global/Data";

const EventDetail = () => {
  let { id } = useParams();
  const event = events.find((event) => event.id == id);
  return (
    <>
      <FixNavbar />
      <div id="event-detail" className="bg-7 bg-no-repeat bg-cover lg:px-14  xl:px-20">
        <div className="flex relative flex-col mx-auto lg:max-w-[1024px] xl:max-w-[1440px] ">
          <h1 className="text-custom-white font-jakarta-sans lg:text-[48px] xl:text-[76px] font-bold lg:mt-16 xl:mt-20  mb-4">
            upcoming <span className="font-normal font-caslon-text italic">event</span>
          </h1>
          <div className="grid grid-cols-2 gap-x-20 w-full ">
            <div className="flex justify-end">
              <div className="lg:h-[360px] xl:h-[650px] xl:w-[520px] relative w-full object-fill">
                <img src={event.img} className="w-full h-full"></img>
              </div>
            </div>
            <div className="flex flex-col justify-center pr-40">
              <h1 className="text-custom-white font-jakarta-sans font-bold lg:text-[36px] xl:text-[44px] pb-4">{event.title}</h1>
              <p className="text-custom-white text-justify font-jakarta-sans font-light lg:text-[14px] xl:text-[16px] pb-4">{event.description} consectur adipisc.</p>
              <p className="text-custom-white font-jakarta-sans font-light lg:text-[16px] xl:text-[20px] pb-4">Date: {event.date}</p>
              <button className="lg:w-[256px] lg:h-[32px]  xl:w-[304px] xl:h-[40px] bg-custom-purple rounded-3xl text-custom-white font-jakarta-sans font-bold lg:text-[16px] xl:text-[20px]">Registration</button>
            </div>
          </div>
          <Link to="/event" className="font-bold text-custom-white text-[24px] text-end hover:cursor-pointer hover:underline decoration-1 underline-offset-4 mb-12">
            more events
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventDetail;
