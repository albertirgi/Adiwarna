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
            <div className="flex flex-col justify-center">
              {event.sub == "" ? (
                <h1 className="text-custom-white font-jakarta-sans font-bold lg:text-[36px] xl:text-[40px] pb-4">{event.title}</h1>
              ) : (
                <>
                  <h1 className="text-custom-white font-jakarta-sans font-bold lg:text-[20px] xl:text-[24px]">{event.title}</h1>
                  <h1 className="text-custom-white font-jakarta-sans font-bold lg:text-[36px] xl:text-[40px] pb-4">{event.sub}</h1>
                </>
              )}
              <p className="text-custom-white text-left font-jakarta-sans font-light lg:text-[16px] xl:text-[20px] pb-16">{event.desc2 == "" ? event.desc : event.desc2}</p>
              <p className="text-custom-white font-jakarta-sans font-light lg:text-[16px] xl:text-[20px] pb-4">Date: {event.date}</p>
              <div className="flex flex-row gap-x-4 h-fit w-full ">
                {event.brief != "" && (
                  <a href={event.brief} target="_blank" rel="noreferrer" className="lg:w-[256px] lg:h-[32px] xl:w-[304px] xl:h-[40px] bg-transparent border-2 border-white rounded-3xl text-custom-white flex items-center justify-center font-jakarta-sans font-bold lg:text-[16px] xl:text-[20px]">
                    Brief Lomba
                  </a>
                )}
                {event.regist != "" && (
                  <a href={event.regist} target="_blank" rel="noreferrer" className="lg:w-[256px] lg:h-[32px] xl:w-[304px] xl:h-[40px] bg-custom-purple rounded-3xl text-custom-white flex items-center justify-center font-jakarta-sans font-bold lg:text-[16px] xl:text-[20px]">
                    Registration
                  </a>
                )}
              </div>
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
