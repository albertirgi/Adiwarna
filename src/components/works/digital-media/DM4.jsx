import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/digitalMedia/DM4/dm4-1.webp";
import Picture1 from "../../../assets/images/works/digitalMedia/DM4/1.webp";
import Picture2 from "../../../assets/images/works/digitalMedia/DM4/2.webp";
import ProfileMobile1 from "../../../assets/images/works/digitalMedia/DM4/mobile/profile-1.webp";
import ProfileMobile2 from "../../../assets/images/works/digitalMedia/DM4/mobile/profile-2.webp";
import ProfileMobile3 from "../../../assets/images/works/digitalMedia/DM4/mobile/profile-3.webp";
import Mobile1 from "../../../assets/images/works/digitalMedia/DM4/mobile/1.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Behance from "../../../assets/images/behance.svg";
import Email from "../../../assets/images/email.svg";
import IPDM from "../../../assets/images/logo-ipdm.svg";

const DM4 = () => {
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
                <Link to="/category/digital-media">
                  <span className="italic font-caslon-condensed text-custom-purple">Digital Media</span>
                </Link>
              </div>
            </div>
          </div>
          {/* Desktop View */}
          <div className="hidden lg:block">
            <div className="lg:text-2lg xl:text-2xl lg:mt-8 xl:mt-20 lg:mb-2 xl:mb-3"></div>
            <div className="flex lg:mb-6 xl:mb-12">
              <div className="w-full flex flex-col justify-between">
                <div className="flex-col">
                  <div className="flex justify-between">
                    <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">At The End of Time</p>
                    <img src={IPDM} clssName="w-[10%] lg:mr-2 xl:mr-3" />
                  </div>
                  <a href="https://drive.google.com/drive/folders/1Wq-OvrZeGwOLUDizXqL9_QGjIrkvUcN1" target="_blank" rel="noreferrer">
                    <div className="flex mt-2">
                      <img src={Play} className="flex justify-between items-start text-center w-[3%] lg:mr-2 xl:mr-3" />
                      <p className="font-light font-inter text-custom-purple italic underline leading-tight lg:text-[1em] xl:text-[1.2em]">Watch Video</p>
                    </div>
                  </a>
                </div>
                <div className="flex-col self-end">
                  <div className="flex">
                    <div className="w-[15%]">
                      <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] my-20">Becak Productions</p>

                      <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em]">A.A Ngurah Kadiva Dhiyopusya</p>
                      <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[0.6em] xl:text-[0.85em] italic my-4">(Team Leader, VFX Artist, Lighting Artist, Compositor, Animator, Rigging)</p>

                      <div className="flex mb-2">
                        <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">kadiva.wardhiana@gmail.com</p>
                      </div>
                      <div className="flex mb-2">
                        <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Kadiva Wardhiana</p>
                      </div>

                      <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mt-20">Angeline Emmanuelkoku</p>
                      <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[0.6em] xl:text-[0.85em] italic my-4">(Character Designer, Storyboard, Modeller Asset, Animator)</p>
                      <div className="flex mb-2">
                        <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Angeline Emmanuelkoku</p>
                      </div>

                      <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mt-20">Cindy Yapranata </p>
                      <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[0.6em] xl:text-[0.85em] italic my-4">(Storyboard, Envi Modeller, Animator)</p>
                      <div className="flex mb-2">
                        <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Cindy Yapranata </p>
                      </div>
                    </div>
                    <div className="w-[10%]"></div>
                    <div className="w-full flex flex-col gap-5">
                      <img src={Picture1} className="flex justify-between items-start text-center w-[100%]" alt="Picture1" />
                      <div className="flex gap-5">
                        <img src={Picture2} className="flex justify-between items-start text-center w-[50%]" alt="Picture2" />
                        <div className="w-[50%]">
                          <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mt-8">
                            The life of an aging painter, diagnosed with a type of dementia and his late supportive wife. As the disease progresses, the painter’s struggle to remember drawing poses a profound challenge to their collaboration, exploring themes of love, loss, and the enduring power of
                            art in the face of memory’s fragility.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col relative lg:pb-56 xl:pb-72">
              <p className="self-end font-light underline font-jakarta-sans text-custom-purple text-justify xl:text-[1.5em]">
                <Link to="/category">more works</Link>
              </p>
            </div>
          </div>

          {/* Mobile View */}
          <div className="flex flex-col lg:hidden">
            <div className="flex justify-between mt-8">
              <div className="w-[30%] h-full flex flex-col">
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight text-[12px]">At The End of Time</p>
                <a href="https://drive.google.com/drive/folders/1Wq-OvrZeGwOLUDizXqL9_QGjIrkvUcN1" target="_blank" rel="noreferrer">
                  <div className="flex mt-1 mb-10">
                    <img src={Play} className="flex justify-between items-start text-center w-[10%] mr-1" />
                    <p className="font-light font-inter text-custom-purple italic underline leading-tight text-[8px]">Watch Video</p>
                  </div>
                </a>
                <div className="flex flex-col">
                  <p className="font-extralight font-caslon-condensed text-custom-purple text-[8px] mb-4">Becak Production</p>

                  <div className="mb-4">
                    <p className="font-extralight font-caslon-condensed text-custom-purple text-[8px] mb-1">A.A Ngurah Kadiva Dhiyopusya</p>
                    <p className="font-extralight font-caslon-condensed text-custom-purple text-[5px] italic my-1">(Team Leader, VFX Artist, Lighting Artist, Compositor, Animator, Rigging)</p>

                    <div className="flex">
                      <img src={Email} className="flex justify-between items-start text-center w-[3%] mr-1" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple text-[7px]">kadiva.wardhiana@gmail.com</p>
                    </div>
                    <div className="flex">
                      <img src={LinkedIn} className="flex justify-between items-start text-center w-[3%] mr-1" />
                      <p className="italic font-extralight font-caslon-condensed text-custom-purple text-[7px]">Kadiva Wardhiana</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="font-extralight font-caslon-condensed text-custom-purple text-[8px] mb-1">Angeline Emmanuelkoku</p>
                    <p className="font-extralight font-caslon-condensed text-custom-purple text-[5px] italic my-1">(Character Designer, Storyboard, Modeller Asset, Animator)</p>

                    <div className="flex">
                      <img src={LinkedIn} className="flex justify-between items-start text-center w-[3%] mr-1" />
                      <p className="italic font-extralight font-caslon-condensed text-custom-purple text-[7px]">Angeline Emmanuelkoku</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="font-extralight font-caslon-condensed text-custom-purple text-[8px] mb-1">Cindy Yapranata</p>
                    <p className="font-extralight font-caslon-condensed text-custom-purple text-[5px] italic my-1">(Storyboard, Envi Modeller, Animator)</p>
                    <div className="flex">
                      <img src={LinkedIn} className="flex justify-between items-start text-center w-[3%] mr-1" />
                      <p className="italic font-extralight font-caslon-condensed text-custom-purple text-[7px]">Cindy Yapranata</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[36%] gap-2">
                <img src={IPDM} className="w-[30%] lg:mr-2 xl:mr-3 self-end" />
                {/* <img src={Profile} className="flex justify-between items-start text-center w-full" alt="Picture1" /> */}
                <div className="flex flex-col w-full">
                  <img src={ProfileMobile1} className="flex justify-between items-start text-center w-full" alt="Picture1" />
                  <img src={ProfileMobile2} className="flex justify-between items-start text-center w-full" alt="Picture1" />
                  <img src={ProfileMobile3} className="flex justify-between items-start text-center w-full" alt="Picture1" />
                </div>
              </div>
            </div>
            <div className="flex flex-col pl-10 mt-2">
              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px]">
                The life of an aging painter, diagnosed with a type of dementia and his late supportive wife. As the disease progresses, the painter’s struggle to remember drawing poses a profound challenge to their collaboration, exploring themes of love, loss, and the enduring power of art in the
                face of memory’s fragility.
              </p>

              <div className="flex gap-2 flex-col mt-2">
                <img src={Mobile1} className="flex justify-between items-start text-center w-[85%] h-fit" />

                <div className="w-full flex items-end justify-end mt-4 mb-4">
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

export default DM4;
