import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/campaignStrategy/CS6/cs6-1.webp";
import Picture1 from "../../../assets/images/works/campaignStrategy/CS6/1.webp";
import Picture2 from "../../../assets/images/works/campaignStrategy/CS6/2.webp";
import Picture3 from "../../../assets/images/works/campaignStrategy/CS6/3.webp";
import Picture4 from "../../../assets/images/works/campaignStrategy/CS6/4.webp";
import Mobile1 from "../../../assets/images/works/campaignStrategy/CS6/mobile/1.webp";
import Mobile2 from "../../../assets/images/works/campaignStrategy/CS6/mobile/2.webp";
import Mobile3 from "../../../assets/images/works/campaignStrategy/CS6/mobile/3.webp";
import Mobile4 from "../../../assets/images/works/campaignStrategy/CS6/mobile/4.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Behance from "../../../assets/images/behance.svg";
import Email from "../../../assets/images/email.svg";

const CS6 = () => {
  return (
    <div>
      <FixNavbar />
      <div className="bg-category bg-no-repeat bg-cover h-fit px-3 lg:px-14 xl:px-20">
        <div className="flex relative flex-col w-full mx-auto lg:max-w-[1024px] xl:max-w-[1440px]">
          <div className="text-[8px] lg:text-2lg lg:mt-24 xl:text-2xl xl:mt-28 mt-16 lg:mt-0">
            <div className="flex flex-1 items-center justify-between">
              <div>
                <Link to="/category">
                  <span className="font-medium font-jakarta-sans text-custom-purple mr-0.5 lg:mr-1 xl:mr-2">currated</span>
                  <span className="italic font-medium font-caslon-condensed text-custom-purple">works</span>
                </Link>
              </div>
              <div>
                <Link to="/category/campaign-strategy">
                  <span className="italic font-caslon-condensed text-custom-purple">Campaign Strategy</span>
                </Link>
              </div>
            </div>
          </div>
          {/* Desktop View */}
          <div className="hidden lg:block">
            <div className="lg:text-2lg xl:text-2xl lg:mt-8 xl:mt-20 lg:mb-2 xl:mb-3"></div>
            <div className="flex lg:mb-6 xl:mb-12">
              <div className="w-[58%] flex flex-col justify-between">
                <div className="flex-col">
                  <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">Personality Photoshoot</p>
                  <a href="https://drive.google.com/drive/folders/1rCmR71cjOJTWC4gFr42PDzCstC1pI50C" target="_blank" rel="noreferrer">
                    <div className="flex mt-2">
                      <img src={Play} className="flex justify-between items-start text-center w-[3%] lg:mr-2 xl:mr-3" />
                      <p className="font-light font-inter text-custom-purple italic underline leading-tight lg:text-[1em] xl:text-[1.2em]">Watch Video</p>
                    </div>
                  </a>
                </div>
                <div className="flex-col self-end">
                  <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em]">Gwyneth Charlize</p>
                  <div className="flex">
                    <div className="w-[25%]">
                      <div className="flex mb-2">
                        <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">gwynethcharlizelim@gmail.com</p>
                      </div>
                      <div className="flex mb-2">
                        <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">gwynethcharlize</p>
                      </div>
                    </div>
                    <div className="w-[10%]"></div>
                    <div className="w-[65%]">
                      <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                        Photography is a powerful medium for self-celebration and authentic self-expression. However, there are some individuals who struggle to articulate their vision for their portrait sessions and often resulting in images that do not fully represent their personality or
                        identity. The aim of designing a media guide for studio portrait photography based on personality is to ensure the final images reflect the client's vision of how they wish to be portrayed. This guide employs the 5W1H approach (Who, What, When, Where, Why, and How), along
                        with interviews and observations of past experiences. The result is a guide that serves as inspiration for those uncertain about the conceptual direction of their portrait photoshoot, helping to capture images that truly express their individuality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[4.5%]"></div>
              <img src={Profile} className="flex justify-between items-start text-center w-[37.5%]" alt="Picture1" />
            </div>

            <div className="flex gap-5 lg:mb-5 xl:mb-7">
              <img src={Picture1} className="flex justify-between items-start text-center w-[33%] h-fit" />

              <div className="w-[25%] flex flex-col gap-5">
                <img src={Picture2} className="flex justify-between items-start text-center h-[59%]" />
                <img src={Picture3} className="flex justify-between items-start text-center h-[40%]" />
              </div>
              <img src={Picture4} className="flex justify-between items-start text-center w-[41%] h-fit" />
            </div>
            <div className="flex flex-col relative lg:pb-56 xl:pb-72">
              <p className="self-end font-light underline font-jakarta-sans text-custom-purple text-justify xl:text-[1.5em]">
                <Link to="/category">more works</Link>
              </p>
            </div>
          </div>

          {/* Mobile View */}
          <div className="flex flex-col lg:hidden">
            <div className="flex mt-8">
              <div className="w-full h-full flex flex-col">
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight text-[12px] mt-2">Personality Photoshoot</p>
                <a href="https://drive.google.com/drive/folders/1rCmR71cjOJTWC4gFr42PDzCstC1pI50C" target="_blank" rel="noreferrer">
                  <div className="flex mt-1 mb-10">
                    <img src={Play} className="flex justify-between items-start text-center w-[4%] mr-1" />
                    <p className="font-light font-inter text-custom-purple italic underline leading-tight text-[8px]">Watch Video</p>
                  </div>
                </a>
                <div className="flex flex-col">
                  <p className="font-extralight font-caslon-condensed text-custom-purple text-[8px] mb-1">Gwyneth Charlize</p>
                  <div className="flex">
                    <img src={Email} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="font-extralight italic font-caslon-condensed text-custom-purple text-[7px]">gwynethcharlizelim@gmail.com</p>
                  </div>
                  <div className="flex">
                    <img src={LinkedIn} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="italic font-extralight font-caslon-condensed text-custom-purple text-[7px]">gwynethcharlize</p>
                  </div>
                </div>
              </div>
              <img src={Profile} className="flex justify-between items-start text-center w-[35%]" alt="Picture1" />
            </div>
            <div className="flex flex-col pl-10 mt-2">
              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px]">
                Photography is a powerful medium for self-celebration and authentic self-expression. However, there are some individuals who struggle to articulate their vision for their portrait sessions and often resulting in images that do not fully represent their personality or identity. The
                aim of designing a media guide for studio portrait photography based on personality is to ensure the final images reflect the client's vision of how they wish to be portrayed. This guide employs the 5W1H approach (Who, What, When, Where, Why, and How), along with interviews and
                observations of past experiences. The result is a guide that serves as inspiration for those uncertain about the conceptual direction of their portrait photoshoot, helping to capture images that truly express their individuality.
              </p>

              <div className="flex flex-col gap-2 mt-2">
                <div className="flex gap-2">
                  <div className="flex flex-col w-[56%] gap-2">
                    <img src={Mobile1} className="flex justify-between items-start text-center w-full h-fit" />
                    <img src={Mobile2} className="flex justify-between self-end text-center w-[90%] h-fit" />
                  </div>
                  <div className="flex flex-col w-[42%] gap-2">
                    <img src={Mobile3} className="flex justify-between items-start text-center w-full h-fit" />
                    <img src={Mobile4} className="flex justify-between self-end text-center w-full h-fit" />
                  </div>
                </div>

                <div className="w-full flex items-end justify-end mt-12 mb-4">
                  <p className="self-end font-light underline font-jakarta-sans text-custom-purple text-justify text-[8px]">
                    <Link to="/category">more works</Link>
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

export default CS6;
