import { Link } from "react-router-dom";

const Section4 = () => {
  return (
    <div className="bg-4 bg-cover bg-no-repeat flex flex-col w-full h-fit lg:px-14 xl:px-20">
      <div className="flex relative flex-col w-full mx-auto lg:max-w-[1024px] xl:max-w-[1440px]">
        <div className="self-start lg:text-3lg lg:mt-11 xl:text-3xl xl:mt-14">
          <h1>
            <span className="font-medium font-jakarta-sans text-custom-purple lg:mx-3 xl:mx-5">
              currated
            </span>
            <span className="italic font-medium font-caslon-condensed text-custom-purple">
              works
            </span>
          </h1>
        </div>
        <div>
          <div className="flex">
            <article className="flex flex-col items-center w-[33%]">
              <div className="flex flex-col grow text-custom-purple">
                <div className="flex justify-between items-start text-center bg-zinc-300 hover:scale-105 hover:shadow-lg hover:cursor-pointer transition-transform duration-300 ease-in-out lg:px-5 lg:py-44 xl:px-5 xl:pt-64 xl:pb-60"></div>
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                  Judul Karya Lorem Ipsum Dolor Sit Amet Adipiscing Elit Ut
                  Suscipit Turpis Enim Vel Tristique Du.
                </h2>
                <p className="font-jakarta-sans font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                  Nama Perancang
                </p>
              </div>
            </article>
            <article className="flex flex-col w-[33%] lg:mx-8 xl:mx-10">
              <div className="flex flex-col grow text-custom-purple">
                <div className="flex justify-between items-start text-center bg-zinc-300 hover:scale-105 hover:shadow-lg hover:cursor-pointer transition-transform duration-300 ease-in-out lg:px-5 lg:py-44 xl:px-5 xl:pt-64 xl:pb-60"></div>
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                  Judul Karya Lorem Ipsum Dolor Sit Amet Adipiscing Elit Ut
                  Suscipit Turpis Enim Vel Tristique Du.
                </h2>
                <p className="font-jakarta-sans font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                  Nama Perancang
                </p>
              </div>
            </article>
            <article className="flex flex-col w-[33%]">
              <div className="flex flex-col grow text-custom-purple">
                <div className="flex justify-between items-start text-center bg-zinc-300 hover:scale-105 hover:shadow-lg hover:cursor-pointer transition-transform duration-300 ease-in-out lg:px-5 lg:py-44 xl:px-5 xl:pt-64 xl:pb-60"></div>
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                  Judul Karya Lorem Ipsum Dolor Sit Amet Adipiscing Elit Ut
                  Suscipit Turpis Enim Vel Tristique Du.
                </h2>
                <p className="font-jakarta-sans font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                  Nama Perancang
                </p>
              </div>
            </article>
          </div>
        </div>
        <div
          className="font-jakarta-sans text-custom-white justify-center item-center self-center italic font-bold text-center bg-custom-purple rounded-[72px] hover:bg-custom-yellow hover:text-custom-purple cursor-pointer transition-colors duration-500 hover:scale-110 hover:shadow-lg hover:cursor-pointer transition-transform duration-500 ease-in-out lg:px-7 lg:py-2 lg:mt-7 lg:text-2lg lg:mb-10 xl:px-9 xl:py-3 xl:mt-7 xl:text-2xl xl:mb-14"
          tabIndex="0"
          role="button"
        >
          <Link to="/category">more works</Link>
        </div>
      </div>
    </div>
  );
};

export default Section4;
