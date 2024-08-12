import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";

import BP11 from "../../../assets/images/works/brandProduct/BP1/bp1-1.webp";
import BP12 from "../../../assets/images/works/brandProduct/BP1/bp1-2.webp";
import BP21 from "../../../assets/images/works/brandProduct/BP2/bp2-1.webp";
import BP22 from "../../../assets/images/works/brandProduct/BP2/bp2-2.webp";
import BP31 from "../../../assets/images/works/brandProduct/BP3/bp3-1.webp";
import BP32 from "../../../assets/images/works/brandProduct/BP3/bp3-2.webp";
import BP41 from "../../../assets/images/works/brandProduct/BP4/bp4-1.webp";
import BP42 from "../../../assets/images/works/brandProduct/BP4/bp4-2.webp";
import BP51 from "../../../assets/images/works/brandProduct/BP5/bp5-1.webp";
import BP52 from "../../../assets/images/works/brandProduct/BP5/bp5-2.webp";
import BP61 from "../../../assets/images/works/brandProduct/BP6/bp6-1.webp";
import BP62 from "../../../assets/images/works/brandProduct/BP6/bp6-2.webp";
import BP71 from "../../../assets/images/works/brandProduct/BP7/bp7-1.webp";
import BP72 from "../../../assets/images/works/brandProduct/BP7/bp7-2.webp";
import BP81 from "../../../assets/images/works/brandProduct/BP8/bp8-1.webp";
import BP82 from "../../../assets/images/works/brandProduct/BP8/bp8-2.webp";

const BrandAndProductInnovation = () => {
  return (
    <div>
      <FixNavbar />
      <div className="bg-category bg-no-repeat bg-cover h-fit lg:px-14 xl:px-20">
        <div className="flex relative flex-col w-full mx-auto lg:max-w-[1024px] xl:max-w-[1440px]">
          <div className="self-end lg:text-2lg lg:mt-24 xl:text-2xl xl:mt-28">
            <Link to="/category">
              <span className="self-end font-medium font-jakarta-sans text-custom-purple lg:mx-1 xl:mx-2">
                currated
              </span>
              <span className="italic font-medium font-caslon-condensed text-custom-purple">
                works
              </span>
            </Link>
          </div>
          <div className="self-start lg:text-3lg xl:text-3xl">
            <span className="self-start italic font-medium font-caslon-condensed text-custom-purple">
            Brand & Product Innovation
            </span>
          </div>
          <div className="flex mt-10">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="1">
                  <img src={BP12} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={BP11} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                    Mayatra
                  </h2>
                  <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                    Vannessa Jeane Ananthalia
                  </p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="2">
                  <img src={BP22} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={BP21} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                    Amborasa
                  </h2>
                  <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                    Fiorella Chelsea
                  </p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="3">
                  <img src={BP32} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={BP31} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                    HikeIndo
                  </h2>
                  <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                    Natasha Wisheilla
                  </p>
                </Link>
              </div>
            </article>
          </div>
          <div className="flex mt-10">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="4">
                  <img src={BP42} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={BP41} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                    Ztrawberry
                  </h2>
                  <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                    Victoria Guitomo
                  </p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="5">
                  <img src={BP52} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={BP51} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                  Jeanny’s Bakehuis
                  </h2>
                  <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                  Stefanna Shiva
                  </p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="6">
                  <img src={BP62} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={BP61} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                  Petallete
                  </h2>
                  <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                  Vanessa Tan
                  </p>
                </Link>
              </div>
            </article>
          </div>
          <div className="flex mt-10 mb-40">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="7">
                  <img src={BP72} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={BP71} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                  Cerita Nusa
                  </h2>
                  <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                  Tristan Amadeo
                  </p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="8">
                  <img src={BP82} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={BP81} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                  Kalkulaku
                  </h2>
                  <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                  Monica Yvetta Utomo
                  </p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative"></article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BrandAndProductInnovation;
