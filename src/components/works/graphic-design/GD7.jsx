import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/graphicDesign/GD7/gd7-1.webp";
import Picture1 from "../../../assets/images/works/graphicDesign/GD7/1.webp";
import Picture2 from "../../../assets/images/works/graphicDesign/GD7/2.webp";
import Picture3 from "../../../assets/images/works/graphicDesign/GD7/3.webp";
import Picture4 from "../../../assets/images/works/graphicDesign/GD7/4.webp";
import Picture5 from "../../../assets/images/works/graphicDesign/GD7/5.webp";
import Mobile1 from "../../../assets/images/works/graphicDesign/GD7/mobile/1.webp";
import Mobile2 from "../../../assets/images/works/graphicDesign/GD7/mobile/2.webp";
import Mobile3 from "../../../assets/images/works/graphicDesign/GD7/mobile/3.webp";
import Mobile4 from "../../../assets/images/works/graphicDesign/GD7/mobile/4.webp";
import Mobile5 from "../../../assets/images/works/graphicDesign/GD7/mobile/5.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Behance from "../../../assets/images/behance.svg";
import Email from "../../../assets/images/email.svg";

const GD7 = () => {
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
                <Link to="/category/graphic-design">
                  <span className="italic font-caslon-condensed text-custom-purple">Graphic Design</span>
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
                  <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">10.11.45</p>
                </div>
                <div className="flex-col self-end">
                  <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mb-1">Celine Nadia Marchiella</p>
                  <div className="flex">
                    <div className="w-[30%]">
                      <div className="flex">
                        <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">celine.nm888@gmail.com</p>
                      </div>
                      <div className="flex mt-1">
                        <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="italic font-extralight font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Celine Nadia</p>
                      </div>
                      <div className="flex mt-1">
                        <img src={Behance} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="italic font-extralight font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Celine Nadia Marchiella</p>
                      </div>
                    </div>
                    <div className="w-[10%]"></div>
                    <div className="w-[70%]">
                      <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                        Perancangan buku ilustrasi ini bertujuan sebagai media pengenalan dan pengingat sejarah dan sejarah bangunan bersejarah di Surabaya sehubungan dengan Peristiwa 10 November 1945 yang ditujukan kepada generasi muda berusia 18–23 tahun, khususnya di Surabaya. Tujuan media
                        perancangan adalah mengatasi permasalahan rendahnya minat generasi muda dalam mengenal tempat bersejarah. Metode yang digunakan dalam perancangan ini adalah wawancara kualitatif dan metode deskriptif. Studi pustaka dan diskusi grup menunjukkan bahwa penggunaan media buku
                        ilustrasi interaktif yang informatif dapat menarik minat membaca generasi muda. Untuk itu, desain perancangan ini menggunakan mekanisme pop-up sederhana, teks informasi singkat, jelas, dan padat, beserta aktivitas interaktif, seperti teka-teki dan kuis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[4.5%]"></div>
              <img src={Profile} className="flex justify-between items-start text-center w-[37.5%]" alt="Picture1" />
            </div>

            <div className="flex gap-5 lg:mb-5 xl:mb-7">
              <div className="w-[32.1%] flex flex-col">
                <div>
                  <img src={Picture1} className="flex justify-between items-start text-center" />
                </div>
              </div>
              <div className="w-[32.1%] flex flex-col">
                <div>
                  <img src={Picture2} className="flex justify-between items-start text-center" />
                </div>
                <div className="w-[47.5%] gap-5 mt-5 flex">
                  <img src={Picture3} className="flex justify-between items-start text-center" />
                  <img src={Picture4} className="flex justify-between items-start text-center" />
                </div>
              </div>
              <div className="w-[34.8%] flex flex-col">
                <div>
                  <img src={Picture5} className="flex justify-between items-start text-center" />
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
            <div className="flex mt-8">
              <div className="w-full h-full flex flex-col">
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight text-[12px] mt-2 mb-10">J10.11.45</p>
                <div className="flex flex-col">
                  <p className="font-extralight font-caslon-condensed text-custom-purple text-[8px] mb-1">Celine Nadia Marchiella</p>
                  <div className="flex">
                    <img src={Email} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="font-extralight italic font-caslon-condensed text-custom-purple text-[7px]">celine.nm888@gmail.com</p>
                  </div>
                  <div className="flex">
                    <img src={LinkedIn} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="italic font-extralight font-caslon-condensed text-custom-purple text-[7px]">Celine Nadia</p>
                  </div>
                  <div className="flex">
                    <img src={Behance} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="italic font-extralight font-caslon-condensed text-custom-purple text-[7px]">Celine Nadia Marchiella</p>
                  </div>
                </div>
              </div>
              <img src={Profile} className="flex justify-between items-start text-center w-[35%]" alt="Picture1" />
            </div>
            <div className="flex flex-col pl-10 mt-2">
              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px]">
                Perancangan buku ilustrasi ini bertujuan sebagai media pengenalan dan pengingat sejarah dan sejarah bangunan bersejarah di Surabaya sehubungan dengan Peristiwa 10 November 1945 yang ditujukan kepada generasi muda berusia 18–23 tahun, khususnya di Surabaya. Tujuan media perancangan
                adalah mengatasi permasalahan rendahnya minat generasi muda dalam mengenal tempat bersejarah. Metode yang digunakan dalam perancangan ini adalah wawancara kualitatif dan metode deskriptif. Studi pustaka dan diskusi grup menunjukkan bahwa penggunaan media buku ilustrasi interaktif
                yang informatif dapat menarik minat membaca generasi muda. Untuk itu, desain perancangan ini menggunakan mekanisme pop-up sederhana, teks informasi singkat, jelas, dan padat, beserta aktivitas interaktif, seperti teka-teki dan kuis.
              </p>

              <div className="flex flex-col gap-2 mt-2">
                <div className="flex gap-2">
                  <img src={Mobile1} className="flex justify-between items-start text-center w-[66%] h-fit" />
                  <img src={Mobile2} className="flex justify-between items-start text-center w-[32%] h-fit" />
                </div>
                <div className="flex gap-2">
                  <img src={Mobile3} className="flex justify-between items-start text-center w-[54%] h-fit" />
                  <div className="flex flex-col gap-2">
                    <img src={Mobile4} className="flex justify-between items-start text-center w-[100%] h-fit" />
                    <img src={Mobile5} className="flex justify-between items-start text-center w-[100%] h-fit" />
                  </div>
                </div>
              </div>
              <div className="w-full flex items-end justify-end mt-2 mb-4">
                <p className="self-end font-light underline font-jakarta-sans text-custom-purple text-justify text-[8px]">
                  <Link to="/category">more works</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GD7;
