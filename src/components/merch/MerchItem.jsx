import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { merchs } from "../global/Data";

const MerchItem = ({id}) => {
  const href = `/merch/${id}`;
  const merch = merchs.find((merch) => merch.id == id);
  const merchImageRef = useRef(null);


  useEffect(() => {
    const merhcImage = merchImageRef.current;

    if (merhcImage) {
      merhcImage.addEventListener("click", (e) => {
        if (id === 3) {
          // Prevent the default action for merch5
          e.preventDefault();
        } else {
          const link = merhcImage.querySelector(".link");
          link.click();
        }
      });
    }
  }, []);
  return (
    <>
      <img src={merch.cover} className="w-full h-full"></img>
      <div ref={merchImageRef} className="link-overlay hover:cursor-pointer w-full h-full absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity hover:opacity-100 duration-300 ease-in-out">
        <Link to={href} className="link text-center text-custom-white lg:text-[16px] xl:text-[20px]">
          More...
        </Link>
      </div>
    </>
  );
};

MerchItem.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MerchItem;
