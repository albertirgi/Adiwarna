import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";

const NamaPerancang1 = () => {
  return (
    <div>
      <FixNavbar />
      <div className="bg-category bg-no-repeat bg-cover h-fit lg:px-14 xl:px-20">
        <div className="flex relative flex-col w-full mx-auto lg:max-w-[1024px] xl:max-w-[1440px]">
          <div className="lg:text-2lg lg:mt-24 xl:text-2xl xl:mt-28">
            <div className="flex flex-1 items-center justify-between">
              <div>
                <Link to="/category">
                  <span className="font-medium font-jakarta-sans text-custom-purple lg:mr-1 xl:mr-2">
                    currated
                  </span>
                  <span className="italic font-medium font-caslon-condensed text-custom-purple">
                    works
                  </span>
                </Link>
              </div>
              <div>
                <span className="italic font-caslon-condensed text-custom-purple">
                  Thesis
                </span>
              </div>
            </div>
          </div>
          <div className="lg:text-2lg xl:text-2xl lg:mt-8 xl:mt-20 lg:mb-2 xl:mb-3">
            <span className="font-light italic font-jakarta-sans text-custom-purple">
              Nomor Pameran
            </span>
          </div>
          <div className="flex lg:mb-6 xl:mb-12">
            <div className="w-[58%]">
              <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">
                Judul Karya Lorem Ipsum Dolor Sit Amet Adipiscing Elit Ut
                Suscipit Turpis.
              </p>
              <div className="flex">
                <div className="w-[25%] lg:mt-6 xl:mt-7">
                  <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em]">
                    Nama Perancang
                  </p>
                  <p className="italic font-extralight font-caslon-condensed text-custom-purple lg:text-[1em] xl:text-[1.3em]">
                    Socialmedia/linkedin
                  </p>
                </div>
                <div className="w-[5%]"></div>
                <div className="w-[70%] lg:mt-5 xl:mt-7">
                  <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                    Penjelasan karya lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut suscipit turpis i mollis fringilla.
                    Curabitur lectus augue, tincidunt nec faucibus non, mattis
                    id massa. Pellentesque eget euismod quam. Suspendisse purus
                    libero, eleifend quis ullamcorper eget, aliquam vel ex.
                    Etiam non nisl non ipsum vehicula viverra. Sed mollis ipsum
                    eget iaculis bibendum. Vestibulum eu finibus velit. Sed eu
                    neque quis risus imperdiet posuere. In tincidunt velit quis
                    lorem lacinia, non scelerisque sapien venenatis. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. Vestibulum
                    mi sapien, pharetra elementum accumsan a, sagittis sed
                    sapien. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Ut suscipit turpis enim, vel tristique dui mollis
                    fringilla. Curabitur lectus augue, tincidunt nec faucibus
                    non, mattis id massa. Pellentesque eget euismod quam.
                    Suspendisse purus libero, eleifend quis ullamcorper eget,
                    aliquam vel ex.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[4.5%]"></div>
            <div className="flex justify-between items-start text-center bg-zinc-300 w-[37.5%]"></div>
          </div>
          <div className="flex gap-5 lg:mb-5 xl:mb-7">
            <div className="flex justify-between items-start text-center bg-zinc-300 lg:h-[250px] xl:h-[300px] w-[50%]"></div>
            <div className="w-[50%]">
              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                Penjelasan karya lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ut suscipit turpis i mollis fringilla.
                Curabitur lectus augue, tincidunt nec faucibus non, mattis id
                massa. Pellentesque eget euismod quam. Suspendisse purus libero,
                eleifend quis ullamcorper eget, aliquam vel ex. Etiam non nisl
                non ipsum vehicula viverra. Sed mollis ipsum eget iaculis
                bibendum. Vestibulum eu finibus velit. Sed eu neque quis risus
                imperdiet posuere. In tincidunt velit quis lorem lacinia, non
                scelerisque sapien venenatis. Interdum et malesuada fames ac
                ante ipsum primis in faucibus.
              </p>
            </div>
          </div>
          <div className="flex gap-5 lg:mb-16 xl:mb-20">
            <div className="w-[25%] lg:h-[180px] xl:h-[250px] flex justify-between items-start text-center bg-zinc-300"></div>
            <div className="w-[25%] lg:h-[180px] xl:h-[250px] flex justify-between items-start text-center bg-zinc-300"></div>
            <div className="w-[25%] lg:h-[180px] xl:h-[250px] flex justify-between items-start text-center bg-zinc-300"></div>
            <div className="w-[25%] lg:h-[180px] xl:h-[250px] flex justify-between items-start text-center bg-zinc-300"></div>
          </div>
          <div className="flex flex-col relative lg:pb-56 xl:pb-72">
          <p className="self-end font-light underline font-jakarta-sans text-custom-purple text-justify xl:text-[1.5em]">
            more works
          </p>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NamaPerancang1;
