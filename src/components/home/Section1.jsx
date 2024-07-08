import Section1Pic from '../../assets/images/pic-section1.webp';

const Section1 = () => {
  return (
    <div
      className="bg-1 relative w-full h-screen bg-no-repeat bg-cover"
    >
      <div
        className="flex relative flex-col w-full max-w-[1065px] justify-center mx-auto"
        style={{ paddingTop: '115px' }}
      >
        <h1 className="text-custom-white font-jakarta-sans text-13xl font-bold">
          tentang
        </h1>

        <div className="flex gap-5">
          <div className="flex flex-col text-custom-white font-jakarta-sans text-10xl font-light leading-tight w-[30%]">
            <p className="mt-8 w-[99%]">
              Adiwarna is an annual event held by Humanity and Creative Industry
              of Petra Christian University showcasing final projects of senior
              year students.
            </p>
            <p className="mt-12">
              vIn 2023, Adiwarna is back as an activity consisting of
              exhibitions, talk shows, workshops, and awards for the best Final
              Projects of Visual Communication Design, Fashion and Textile
              Design, and International Digital Media of Petra Christian
              University senior year students.n University senior year students.
            </p>
          </div>

          <div className="flex flex-col w-[71%]">
            <div className="flex gap-1 pl-14 pt-6 relative">
              <figure className="flex flex-col w-[46%]">
                <img
                  src={Section1Pic}
                  alt=""
                  className="w-full hover:scale-110 hover:shadow-lg transition-transform duration-300 ease-in-out"
                />
              </figure>
              <div
                className="flex flex-col absolute"
                style={{ top: '16px', left: '355px' }}
              >
                <h2 className="text-custom-white font-caslon-condensed mt-36 text-14xl italic">
                  kelana
                </h2>
              </div>
            </div>
            <div className="flex flex-col self-end w-[40%] max-w-full">
              <h3 className="font-caslon-text text-custom-white text-11xl">
                ke·la·na
              </h3>
              <p className="text-custom-white font-jakarta-sans">
                Makna kelana Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
