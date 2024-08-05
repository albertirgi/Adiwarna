import { Link } from "react-router-dom";
import { useEffect } from "react";
import FixNavbar from "../global/FixNavbar";
import Footer from "../global/Footer";
import Dot from "../../assets/images/dot.svg";

import Thesis from "../../assets/images/thesis-image.svg"
import Campaign from "../../assets/images/campaign-image.svg"
import Brand from "../../assets/images/brand-image.svg"
import Graphic from "../../assets/images/graphic-image.svg"
import Digital from "../../assets/images/digital-image.svg"

const Category = () => {
  useEffect(() => {
    const home = document.getElementById("home");
    const curatedWorks = document.getElementById("curated-works");

    home.classList.remove("text-white");
    home.classList.add("text-gray-300");
    curatedWorks.classList.remove("text-gray-300");
    curatedWorks.classList.add("text-white");
  });

  return (
    <div>
      <FixNavbar />
      <div className="bg-category bg-no-repeat bg-cover h-[2300px] lg:px-14 xl:px-20">
        <div className="flex relative flex-col w-full mx-auto lg:max-w-[1024px] xl:max-w-[1440px]">
          <div className="flex flex-1 items-center justify-between mt-28">
            <div className="flex">
              <img src={Dot} className="lg:mr-5 xl:mr-9" />
              <Link to="/category">
                <span className="font-medium font-jakarta-sans text-custom-purple lg:text-[1.3em] xl:text-[1.7em] mr-2">
                  currated
                </span>
                <span className="italic font-medium font-caslon-condensed text-custom-purple lg:text-[1.3em] xl:text-[1.7em]">
                  works
                </span>
              </Link>
            </div>
            <div>
              <p className="font-semilight font-caslon-condensed italic text-custom-purple lg:text-[1.3em] xl:text-[1.7em]">
                Category
              </p>
            </div>
          </div>
          <div className="absolute flex flex-col relative">
            <div className="relative flex flex-col">
              <div className="flex self-end lg:mt-10 xl:mt-10">
                <p className="self-end font-bold font-jakarta-sans text-custom-purple lg:mr-4 lg:text-[2em] xl:mr-5 xl:text-[3em]">
                  <Link to="/category/thesis">Thesis</Link>
                </p>
                <Link to="/category/thesis">
                  <img src={Thesis} className="lg:h-[350px] lg:w-[460px] xl:h-[480px] xl:w-[590px]" />
                </Link>
              </div>

              <div className="flex self-end lg:mt-32 xl:mt-40">
                <div className="absolute relative flex flex-col">
                  <Link to="/category/brand-and-product-innovation">
                    <img src={Brand} className="lg:h-[250px] lg:w-[460px] xl:h-[380px] xl:w-[710px]" />
                  </Link>
                  <p className="self-end font-caslon-condensed italic text-custom-purple lg:mt-4 lg:text-[1.4em] xl:mt-4 xl:text-[2.1em]">
                    <Link to="/category/brand-and-product-innovation">
                      Brand and Product
                    </Link>
                  </p>
                  <p className="self-end font-bold font-jakarta-sans text-custom-purple lg:text-[2em] xl:text-[3em]">
                    <Link to="/category/brand-and-product-innovation">
                      Innovation
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex self-end lg:mt-28 xl:mt-20">
                <div className="flex flex-col self-end lg:mr-4 xl:mr-5">
                  <p className="self-end font-caslon-condensed italic text-custom-purple lg:mt-3 lg:text-[2em] xl:mt-4 xl:text-[2.8em]">
                    <Link to="/category/digital-media">Digital</Link>
                  </p>
                  <p className="self-end font-bold font-jakarta-sans text-custom-purple lg:text-[2em] xl:text-[3em]">
                    <Link to="/category/digital-media">Media</Link>
                  </p>
                </div>
                <Link to="/category/digital-media">
                  <img src={Digital} className="lg:h-[330px] lg:w-[250px] xl:h-full xl:w-[375px]" />
                </Link>
              </div>

              <div className="absolute lg:mt-[300px] xl:mt-[400px]">
                <Link to="/category/campaign-strategy">
                  <img src={Campaign} className="lg:h-[330px] lg:w-[250px] xl:h-[540px] xl:w-[375px]" />
                </Link>
                <div className="relative flex flex-col">
                  <p className="self-end font-bold font-jakarta-sans text-custom-purple lg:text-[2em] xl:text-[3em]">
                    <Link to="/category/campaign-strategy">Campaign</Link>
                  </p>
                  <p className="self-end font-caslon-condensed italic text-custom-purple lg:text-[1.5em] xl:text-[2em]">
                    <Link to="/category/campaign-strategy">Strategy</Link>
                  </p>
                </div>
              </div>

              <div className="absolute flex lg:mt-[800px] xl:mt-[1225px]">
                <Link to="/category/graphic-design">
                  <img src={Graphic} className="lg:h-[340px] lg:w-[340px] xl:h-[380px] xl:w-full" />
                </Link>
                <div className="flex self-end relative flex-col lg:ml-4 xl:ml-5">
                  <p className="self-start font-bold font-jakarta-sans text-custom-purple lg:text-[2em] xl:text-[3em]">
                    <Link to="/category/graphic-design">Graphic</Link>
                  </p>
                  <p className="self-start font-caslon-condensed italic text-custom-purple lg:text-[2em] xl:text-[2.5em]">
                    <Link to="/category/graphic-design">Design</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
