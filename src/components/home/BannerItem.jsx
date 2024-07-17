import PropTypes from "prop-types";

const BannerItem = ({type}) => {
  var element = null;
  if (type == 1) {
    element = (
      <h1 className="text-custom-white font-jakarta-sans xl:text-[24px] font-bold">
        upcoming <span className="text-custom-white font-jakarta-sans xl:text-[24px] font-normal italic">event</span>
      </h1>
    );
  } else if (type == 2) {
    element = (
      <h1 className="text-custom-white font-caslon-text xl:text-[24px] font-normal italic">
        upcoming <span className="text-custom-white font-jakarta-sans xl:text-[24px] font-normal">event</span>
      </h1>
    );
  } else if (type == 3) {
    element = (
      <h1 className="text-custom-white font-jakarta-sans xl:text-[24px] font-bold">
        upcoming <span className="text-custom-white font-caslon-text xl:text-[24px] font-normal italic">event</span>
      </h1>
    );
  }
  return <div>{element}</div>;
};

BannerItem.propTypes = {
  type: PropTypes.number.isRequired,
};

export default BannerItem;
