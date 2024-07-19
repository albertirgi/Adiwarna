import { Link } from "react-router-dom";
import { useEffect } from "react";
import FixNavbar from "../global/FixNavbar";
import Footer from "../global/Footer";
import Dot from "../../assets/images/dot.svg";

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
      <div className="bg-category bg-no-repeat bg-cover h-screen lg:px-14 xl:px-20">
        <div className="flex relative flex-col w-full mx-auto lg:max-w-[1024px] xl:max-w-[1440px]">
          <div className="flex flex-1 items-center justify-between mt-28">
            <div className="flex">
              <img src={Dot} className="xl:mr-9" />
              <Link to="/category">
                <span className="font-medium font-jakarta-sans text-custom-purple text-[1.7em] lg:mr-1 xl:mr-2">
                  currated
                </span>
                <span className="italic font-medium font-caslon-condensed text-custom-purple text-[1.7em]">
                  works
                </span>
              </Link>
            </div>
            <div>
              <p className="font-semilight font-caslon-condensed italic text-custom-purple text-[1.7em]">
                Category
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
