import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const EventItem = ({ id, img, name, desc, date }) => {
  const eventImageRef = useRef(null);
  const href = `/event/${id}`;

  useEffect(() => {
    const eventImage = eventImageRef.current;

    if (eventImage) {
      eventImage.addEventListener("click", () => {
        const link = eventImage.querySelector(".link");
        link.click();
      });
    }
  }, []);
  return (
    <div className="flex flex-col w-fit">
      <div className="h-fit relative w-full hover:scale-105 transition-all duration-300 ease-in-out object-fill event-image">
        <img src={img} className="w-full h-full"></img>
        <div ref={eventImageRef} className="link-overlay hover:cursor-pointer w-full h-full absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity hover:opacity-100 duration-300 ease-in-out">
          <Link to={href} className="link text-center text-custom-white lg:text-[16px] xl:text-[20px]">
            More...
          </Link>
        </div>
      </div>
      <div className="h-full">
      <div className="h-2/5">
        <h1 className="text-custom-white font-jakarta-sans font-bold lg:text-[22px] xl:text-[32px] py-4 leading-tight">{name}</h1>
      </div>
      <div className="h-2/5">
        <p className="text-custom-white text-justify font-jakarta-sans font-light lg:text-[16px] xl:text-[20px] ">{desc}</p>
      </div>
      <div className="h-2/5">
        <p className="text-custom-white font-jakarta-sans font-light lg:text-[16px] xl:text-[24px] pt-4">Date: {date}</p>
      </div>
      </div>
      
    </div>
  );
};
EventItem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default EventItem;
