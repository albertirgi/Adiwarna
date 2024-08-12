import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/graphicDesign/GD9/gd9-1.webp";
import Picture1 from "../../../assets/images/works/graphicDesign/GD9/1.webp";
import Picture2 from "../../../assets/images/works/graphicDesign/GD9/2.webp";
import Picture3 from "../../../assets/images/works/graphicDesign/GD9/3.webp";
import Picture4 from "../../../assets/images/works/graphicDesign/GD9/4.webp";
import Picture5 from "../../../assets/images/works/graphicDesign/GD9/5.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Behance from "../../../assets/images/behance.svg";
import Email from "../../../assets/images/email.svg";

const GD9 = () => {
  return (
    <div>
      <FixNavbar />
      <div className="bg-category bg-no-repeat bg-cover h-fit lg:px-14 xl:px-20">
        <div className="flex relative flex-col w-full mx-auto lg:max-w-[1024px] xl:max-w-[1440px]">
          <div className="lg:text-2lg lg:mt-24 xl:text-2xl xl:mt-28">
            <div className="flex flex-1 items-center justify-between">
              <div>
                <Link to="/category">
                  <span className="font-medium font-jakarta-sans text-custom-purple lg:mr-1 xl:mr-2">currated</span>
                  <span className="italic font-medium font-caslon-condensed text-custom-purple">works</span>
                </Link>
              </div>
              <div>
                <Link to="/category/graphic-design">
                  <span className="italic font-caslon-condensed text-custom-purple">Graphic Design</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:text-2lg xl:text-2xl lg:mt-8 xl:mt-20 lg:mb-2 xl:mb-3"></div>
          <div className="flex lg:mb-6 xl:mb-12">
            <div className="w-[58%] flex flex-col justify-between">
              <div className="flex-col">
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">Aku dan Tubuhku</p>
              </div>
              <div className="flex-col self-end">
                <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mb-1">Stefani</p>
                <div className="flex">
                  <div className="w-[30%]">
                    <div className="flex">
                      <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Fani14.SMPKBWS@gmail.com</p>
                    </div>
                    <div className="flex mt-1">
                      <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="italic font-extralight font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Stefani Handoko</p>
                    </div>
                  </div>
                  <div className="w-[10%]"></div>
                  <div className="w-[70%]">
                    <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                      “Aku dan Tubuhku” adalah sebuah busy book yang mengangkat tema pendidikan seks untuk anak usia pra sekolah. Dilengkapi dengan berbagai material dan tekstur, buku ini sekaligus dapat menunjang perkembangan sensorik anak. Buku ini tentunya telah disesuaikan dengan tingkat
                      pemahaman dan karakter dari anak usia pra sekolah sehingga orang tua tidak perlu merasa ragu dan bimbang. Melalui uji coba pada KB/TK, “Aku dan Tubuhku” telah teruji efektif bagi anak-anak usia 3 hingga 5 tahun sebagai media untuk bermain dan belajar. Berbagai kegiatan dan
                      permainan interaktif, seperti dress up, lift a flap, slide, dan lain sebagainya, dapat dimainkan dengan mudah oleh anak-anak usia pra sekolah. Selain itu, busy book “Aku dan Tubuhku” juga dilengkapi dengan guide book untuk orang tua yang menjelaskan secara rinci mengenai
                      hal-hal yang sebaiknya dilakukan dan tidak dilakukan ketika memberikan pendidikan seks. Buku ini tentunya dapat menjadi solusi bagi orang tua yang ingin memberikan pendidikan seks pada anaknya, tetapi masih diliputi oleh rasa bingung dan tabu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[4.5%]"></div>
            <img src={Profile} className="flex justify-between items-start text-center w-[37.5%]" alt="Picture1" />
          </div>

          <div className="flex gap-5 lg:mb-5 xl:mb-7">
            <div className="w-[50%] flex flex-col">
              <div className="flex flex-col">
                <img src={Picture1} />
                <div className="mt-5 w-[80%] flex flex-col self-end">
                  <img src={Picture3} className="" />
                </div>
              </div>
            </div>
            <div className="w-[50%] flex flex-col">
              <div className="flex flex-col">
                <img src={Picture2} className="flex justify-between items-start text-center" />
                <div className="mt-5 flex gap-5 w-[48.4%]">
                  <img src={Picture4} />
                  <img src={Picture5} />
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
      </div>
      <Footer />
    </div>
  );
};

export default GD9;
