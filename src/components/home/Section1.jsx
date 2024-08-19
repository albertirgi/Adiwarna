import Section1Pic from "../../assets/images/pic-section1.webp";

const Section1 = () => {
  return (
    <div id="about" className="bg-1 bg-no-repeat bg-cover">
      <div className="flex relative flex-col w-full h-[50vh] px-3 lg:px-0 lg:h-auto mx-auto  lg:max-w-[760px]  lg:pt-20 xl:max-w-[1070px] xl:pt-32">
        <h1 className="absolute top-4 lg:block text-custom-white font-jakarta-sans font-bold items-start text-[48px] lg:text-4lg xl:text-4xl">
          tentang
        </h1>

        <div className="flex lg:gap-5">
          <div className="flex flex-col text-custom-white font-jakarta-sans font-light leading-tight w-[25%] lg:w-[30%] text-[5px] lg:text-1lg xl:text-base my-auto lg:my-0">
            <p className="lg:mt-5 xl:mt-8">
              Adiwarna adalah acara tahunan yang memamerkan tugas akhir dari mahasiswa Desain Komunikasi Visual Universitas Kristen Petra
            </p>
            <p className=" mt-2 lg:mt-9 xl:mt-12">
              Melalui kegiatan ini kami ingin menjadi wadah yang memberikan pengetahuan serta pemahaman lebih mengenai luasnya dunia desain dan industrinya. Kami juga ingin menjadi teman yang mendukung pecinta serta pejuang industri kreatif untuk tetap berjalan, bertahan, dan percaya pada setiap proses yang dijalaninya.
            </p>
          </div>

          <div className="flex flex-col w-[75%] lg:w-[71%]">
            <div className="flex gap-1 pt-16 lg:pl-8 lg:pt-4 xl:pl-12 xl:pt-6 ">
              <figure className="flex flex-col w-[65%] lg:w-[44.5%]">
                <img
                  src={Section1Pic}
                  alt=""
                  className="w-full hover:scale-110 hover:shadow-lg transition-transform duration-300 ease-in-out"
                />
              </figure>
              <div className="flex flex-col absolute ml-32 mt-52 lg:ml-52 lg:pl-1 xl:ml-72 xl:pl-3">
                <h2 className="text-custom-white font-caslon-condensed italic text-[52px] lg:text-5lg lg:mt-24 xl:text-5xl xl:mt-32">
                  kelana
                </h2>
              </div>
            </div>
            <div className="absolute bottom-32 right-4 lg:flex flex-col self-end w-[25%] lg:w-[42%]">
              <h3 className="font-caslon-text text-custom-white text-[8px] lg:text-2lg xl:text-2xl">
                ke·la·na
              </h3>
              <p className="text-custom-white font-jakarta-sans font-light leading-tight text-[5px] lg:text-1lg lg:mb-16 xl:text-1xl xl:mb-24">
                Secara harafiah kelana berarti &ldquo;perjalanan&rdquo; dan adiwarna berarti &ldquo;indah sekali&rdquo;. Sehingga kelana adiwarna memiliki makna, perjalanan yang indah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;