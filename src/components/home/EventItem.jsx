import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const EventItem = ({ img, name, desc, date }) => {
  const eventImageRef = useRef(null);

  useEffect(() => {
    const eventImage = eventImageRef.current;

    if (eventImage) {
      eventImage.addEventListener("mouseover", () => {
        eventImage.style.cursor = "pointer";
      });
    }
  }, []);
  return (
    <div className="flex flex-col lg:w-[280px] xl:w-[344px]">
      <div className="lg:h-[360px] xl:h-[428px] relative w-full hover:scale-105 transition-all duration-300 ease-in-out object-fill event-image">
        <img src={img} className="w-full h-full"></img>
        <div ref={eventImageRef} className="w-full h-full absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity hover:opacity-100 duration-300 ease-in-out">
          <p className="text-center text-custom-white lg:text-[16px] xl:text-[20px]">More...</p>
        </div>
      </div>
      <h1 className="text-custom-white font-jakarta-sans font-bold lg:text-[36px] xl:text-[44px] py-4">{name}</h1>
      <p className="text-custom-white text-justify font-jakarta-sans font-light lg:text-[14px] xl:text-[16px] pb-4">{desc}</p>
      <p className="text-custom-white font-jakarta-sans font-bold lg:text-[16px] xl:text-[20px]">{date}</p>
    </div>
  );
};
EventItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default EventItem;
