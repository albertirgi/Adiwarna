import PropTypes from 'prop-types';


const TimelineItem = ({content, date}) => {

  return (
    <div>
        <h1 className="text-custom-white font-jakarta-sans text-[14px] lg:text-[24px] xl:text-[32px] 2xl:text-[38px]">{content}</h1>
        <p className="text-custom-white font-bold font-jakarta-sans text-[8px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] mb-8">{date}</p>
    </div>
  )
}
TimelineItem.propTypes = {
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired, // Assuming date is also a required string, add it if not already present
};
export default TimelineItem