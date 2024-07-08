import Earth from '../../assets/images/earth.svg';
const Section3 = () => {
  return (
    <div id="section3" className="bg-3 bg-custom-yellow relative w-full h-screen bg-no-repeat bg-cover flex items-center justify-center animate-moveBackground">
      <div className="z-10 hover:scale-110 hover:cursor-pointer transition-transform duration-300 ease-in-out flex items-center justify-center">
        <img src="{{ asset('assets/images/earth.svg') }}" className="w-custom-earth animate-spin" />
        <div id="text-above" class="absolute flex flex-col items-center justify-center">
          <img src={Earth} className="w-[25%] pb-6" />
          <p className="text-13xl font-jakarta-sans italic font-bold text-custom-white pb-8 w-custom-earth-2">
            virtual
            <a className="text-13xl font-caslon-condensed italic text-custom-white">experience</a>
          </p>
          <p className="text-2xl text-custom-white pb-20">Lorem Ipsum</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
