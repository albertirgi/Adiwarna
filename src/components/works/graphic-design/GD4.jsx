import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/graphicDesign/GD4/gd4-1.webp";
import Picture1 from "../../../assets/images/works/graphicDesign/GD4/1.webp";
import Picture2 from "../../../assets/images/works/graphicDesign/GD4/2.webp";
import Picture3 from "../../../assets/images/works/graphicDesign/GD4/3.webp";
import Picture4 from "../../../assets/images/works/graphicDesign/GD4/4.webp";
import Picture5 from "../../../assets/images/works/graphicDesign/GD4/5.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Behance from "../../../assets/images/behance.svg";
import Email from "../../../assets/images/email.svg";

const GD4 = () => {
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
                  Graphic Design
                </span>
              </div>
            </div>
          </div>
          <div className="lg:text-2lg xl:text-2xl lg:mt-8 xl:mt-20 lg:mb-2 xl:mb-3"></div>
          <div className="flex">
            <div className="w-[58%] flex flex-col justify-between">
              <div className="flex-col mb-5">
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">
                  Akgeni:
                </p>
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">
                  A Typeface Inspired by Sambal Culinary in Surabaya
                </p>
              </div>
              <div className="flex-col self-end">
                <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mb-2">
                  Michelle Jennifer
                </p>
                <div className="flex">
                  <div className="w-[25%]">
                    <div className="flex mb-2">
                      <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">
                        michelle.jennifer07@gmail.com
                      </p>
                    </div>
                    <div className="flex mb-2">
                      <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">
                        Michelle Jennifer
                      </p>
                    </div>
                    <div className="flex">
                      <img src={Behance} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">
                        Michelle Jennifer
                      </p>
                    </div>
                  </div>
                  <div className="w-[10%]"></div>
                  <div className="w-[70%]">
                    <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                      Akgeni, pronounced /ag.ni/, is a decorative display typeface inspired by the sambal culinary tradition of Surabaya. Its decorative form reflects the diverse flavors of sambal, which arise from varying taste preferences. Three sambals were chosen to represent this rich culinary art: sambal korek, sambal terasi, and sambal bajak. These range from sweet to salty and from mildly spicy to extremely spicy.
                    </p>
                    <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                      The typeface features sharp edges alongside contrasting dull and wavy lines, symbolizing the complexity of these flavors. The name Akgeni is derived from two words: "Aksara," meaning script, and "Geni," which means fire in Javanese. Additionally, "Agni," taken from Sanskrit, also means fire, highlighting a strong connection to the concept of spiciness, as fire is a universally recognized symbol of heat
                    </p>
                    <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                      With this context, I hope you find the typeface engaging and enjoyable to read! Thank you for your attention ;D
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[4.5%]"></div>
            <img src={Profile} className="flex justify-between items-start text-center w-[37.5%]" alt="Picture1" />
          </div>
          <div className="flex gap-5 lg:mb-16 xl:mb-20">
            <div className="w-[60%] lg:mt-6 xl:mt-12">
              <div className="flex flex-col gap-5">
                <img src={Picture1} className="flex justify-between items-start text-center" />
                <div className="w-[54%] self-end">
                  <img src={Picture3} className="flex justify-between items-start text-center" />
                </div>
              </div>
            </div>
            <div className="w-[40%] lg:mt-3 xl:mt-6">
              <div className="w-[100%] flex-col">
                <img src={Picture2} className="flex justify-between items-start text-center" />
                <div className="w-[50%] gap-5 flex">
                  <img src={Picture4} className="flex justify-between items-start text-center" />
                  <img src={Picture5} className="flex justify-between items-start text-center" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative lg:pb-56 xl:pb-72">
            <p className="self-end font-light underline font-jakarta-sans text-custom-purple text-justify xl:text-[1.5em]">
              <Link to="/category">
                more works
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GD4;
