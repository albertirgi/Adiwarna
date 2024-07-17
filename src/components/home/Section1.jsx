import Section1Pic from "../../assets/images/pic-section1.webp";

const Section1 = () => {
  return (
    <div className="bg-1 bg-no-repeat bg-cover">
      <div className="flex relative flex-col w-full mx-auto lg:max-w-[760px] lg:pt-20 xl:max-w-[1070px] xl:pt-32">
        <h1 className="text-custom-white font-jakarta-sans font-bold items-start lg:text-4lg xl:text-4xl">
          tentang
        </h1>

        <div className="flex gap-5">
          <div className="flex flex-col text-custom-white font-jakarta-sans font-light leading-tight w-[30%] lg:text-1lg xl:text-1xl">
            <p className="lg:mt-5 xl:mt-8">
              Adiwarna is an annual event held by Humanity and Creative Industry
              of Petra Christian University showcasing final projects of senior
              year students.
            </p>
            <p className="lg:mt-9 xl:mt-12">
              vIn 2023, Adiwarna is back as an activity consisting of
              exhibitions, talk shows, workshops, and awards for the best Final
              Projects of Visual Communication Design, Fashion and Textile
              Design, and International Digital Media of Petra Christian
              University senior year students.n University senior year students.
            </p>
          </div>

          <div className="flex flex-col w-[71%]">
            <div className="flex gap-1 lg:pl-8 lg:pt-4 xl:pl-12 xl:pt-6">
              <figure className="flex flex-col w-[44.5%]">
                <img
                  src={Section1Pic}
                  alt=""
                  className="w-full hover:scale-110 hover:shadow-lg transition-transform duration-300 ease-in-out"
                />
              </figure>
              <div className="flex flex-col absolute lg:ml-52 lg:pl-1 xl:ml-72 xl:pl-3">
                <h2 className="text-custom-white font-caslon-condensed italic lg:text-5lg lg:mt-24 xl:text-5xl xl:mt-32">
                  kelana
                </h2>
              </div>
            </div>
            <div className="flex flex-col self-end w-[42%]">
              <h3 className="font-caslon-text text-custom-white lg:text-2lg xl:text-2xl">
                ke·la·na
              </h3>
              <p className="text-custom-white font-jakarta-sans font-light leading-tight lg:text-1lg lg:mb-16 xl:text-1xl xl:mb-24">
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
