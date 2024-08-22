import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Picture1 from "../../../assets/images/works/digitalMedia/DM5/1.webp";
import Picture2 from "../../../assets/images/works/digitalMedia/DM5/2.webp";
import Picture3 from "../../../assets/images/works/digitalMedia/DM5/3.webp";
import Picture4 from "../../../assets/images/works/digitalMedia/DM5/4.webp";
import Picture5 from "../../../assets/images/works/digitalMedia/DM5/5.webp";
import Picture6 from "../../../assets/images/works/digitalMedia/DM5/6.webp";
import ProfileMobile1 from "../../../assets/images/works/digitalMedia/DM5/mobile/profile-1.webp";
import ProfileMobile2 from "../../../assets/images/works/digitalMedia/DM5/mobile/profile-2.webp";
import ProfileMobile3 from "../../../assets/images/works/digitalMedia/DM5/mobile/profile-3.webp";
import Mobile1 from "../../../assets/images/works/digitalMedia/DM5/mobile/1.webp";
import Mobile2 from "../../../assets/images/works/digitalMedia/DM5/mobile/2.webp";
import Mobile3 from "../../../assets/images/works/digitalMedia/DM5/mobile/3.webp";
import Mobile4 from "../../../assets/images/works/digitalMedia/DM5/mobile/4.webp";
import Mobile5 from "../../../assets/images/works/digitalMedia/DM5/mobile/5.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Email from "../../../assets/images/email.svg";
import IPDM from "../../../assets/images/logo-ipdm.svg";

const DM5 = () => {
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
                    <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">Absolution </p>
                    <img src={IPDM} className="w-[10%] lg:mr-2 xl:mr-3" />
                  </div>
                  <a href="https://drive.google.com/file/d/1LVqj2aqLzEwFSAAWEqe1ZGN-vMjyWiCg/view" target="_blank" rel="noreferrer">
                    <div className="flex mt-2 items-center">
                      <img src={Play} className="flex justify-between items-start text-center w-[3%] lg:mr-2 xl:mr-3" />
                      <p className="font-light font-inter text-custom-purple italic underline leading-tight lg:text-[1em] xl:text-[1.2em]">Watch Video</p>
                    </div>
                  </a>
                </div>
                <div className="flex-col self-end">
                  <div className="flex">
                    <div className="w-[15%]">
                      <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] my-20">Ara Ara Team</p>

                      <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em]">Emmanuel Abraham Theofilus Putra Kasih Djunaedhy </p>
                      <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[0.6em] xl:text-[0.85em] italic my-4">(Director)</p>

                      <div className="flex mb-2">
                        <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">emmanueldjunaedhy@gmail.com</p>
                      </div>
                      <div className="flex mb-2">
                        <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Emmanuel Abraham Djunaedhy</p>
                      </div>

                      <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mt-20">Amanda Kylie Kusuma</p>
                      <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[0.6em] xl:text-[0.85em] italic my-4">(Character Designer)</p>
                      <div className="flex mb-2">
                        <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">e12200008@john.petra.ac.id</p>
                      </div>

                      <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mt-20">Ritchie Wiyogo</p>
                      <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[0.6em] xl:text-[0.85em] italic my-4">(3D Modeller)</p>
                      <div className="flex mb-2">
                        <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">ritchiewiyogo0@gmail.com</p>
                      </div>
                    </div>
                    <div className="w-[10%]"></div>
                    <div className="w-full flex flex-col gap-10">
                      <img src={Picture1} className="flex justify-between items-start text-center w-[100%]" alt="Picture1" />
                      <div className="flex gap-5">
                        <div className="w-[50%]">
                          <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                            Generasi muda saat ini banyak yang memiliki ide-ide yang kreatif namun mudah sekali hancur sehingga disebut sebagai Generasi Stroberi. Penggunaan dengan nama “stroberi” karena buah ini dari bentuk dan warnanya terlihat indah namun mudah sekali hancur yang serupa dengan
                            karakteristik generasi Z. Hal tersebut disebabkan oleh faktor internal maupun eksternal. Faktor internal yaitu pola asuh orang tua. Sikap orang tua yang kurang baik karena terlalu memanjakan anaknya dan terlibat dalam menyelesaikan tugas maupun masalah yang dihadapi oleh
                            anaknya. Akibatnya, anak tersebut mudah menyerah dan kurang mau berusaha dalam menghadapi tantangan dalam kehidupan. Faktor eksternal yaitu pengaruh dari media sosial yang menyebabkan overthinking bagi generasi muda saat ini. Hal tersebut disebabkan karena mereka
                            membandingkan dirinya dengan kehidupan orang lain yang dilihatnya di media sosial.
                          </p>
                        </div>
                        <div className="w-[50%] flex flex-col gap-5">
                          <img src={Picture2} className="flex justify-between items-start text-center w-full h-fit" alt="Picture2" />
                          <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                            Akibatnya generasi ini menjadi mudah sekali stres dan cemas yang berujung kepada istilah healing atau self-reward sebagai bentuk apreasiasi kepada diri sendiri yang cenderung konsumtif.
                            <br />
                            <br /> Tujuan dari perancangan ini adalah untuk mengedukasi dan membuat Generasi Stroberi khususnya generasi Z yang berusia 18-25 tahun agar memiliki mental yang kuat. Metode penelitian yang digunakan kualitatif. Metode analisis data yang digunakan antara lain SWOT, Why
                            Test, dan Marketing Mix 7P. Hasil perancangan adalah merchandise berupa packaging inovatif, komik interaktif, kaos, totebag, enamel pin, gantungan kunci, dan stiker yang menarik.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-[33%]">
                      <img src={Picture3} className="flex justify-between items-start text-center w-full h-fit" alt="Picture2" />
                    </div>
                    <div className="w-[65%] flex flex-col gap-5 justify-end">
                      <div className="flex gap-5">
                        <img src={Picture4} className="flex justify-between items-start text-center w-[50%] h-fit" alt="Picture2" />
                        <img src={Picture5} className="flex justify-between items-start text-center w-[50%] h-fit" alt="Picture2" />
                      </div>
                      <img src={Picture6} className="flex justify-between items-start text-center w-[77%] h-fit" alt="Picture2" />
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
              <div className="h-full flex flex-col w-[30%]">
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight text-[12px]">Absolution</p>
                <a href="https://drive.google.com/file/d/1LVqj2aqLzEwFSAAWEqe1ZGN-vMjyWiCg/view" target="_blank" rel="noreferrer">
                  <div className="flex mt-1 mb-10">
                    <img src={Play} className="flex justify-between items-start text-center w-[10%] mr-1" />
                    <p className="font-light font-inter text-custom-purple italic underline leading-tight text-[8px]">Watch Video</p>
                  </div>
                </a>
                <div className="flex flex-col">
                  <p className="font-extralight font-caslon-condensed text-custom-purple text-[8px] mb-4">Ara Ara Team</p>

                  <div className="mb-4">
                    <p className="font-extralight font-caslon-condensed text-custom-purple text-[8px] mb-1">Emmanuel Abraham Theofilus Putra Kasih Djunaedhy</p>
                    <p className="font-extralight font-caslon-condensed text-custom-purple text-[5px] italic my-1">(Director)</p>

                    <div className="flex">
                      <img src={Email} className="flex justify-between items-start text-center w-[3%] mr-1" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple text-[7px]">emmanueldjunaedhy@gmail.com</p>
                    </div>
                    <div className="flex">
                      <img src={LinkedIn} className="flex justify-between items-start text-center w-[3%] mr-1" />
                      <p className="italic font-extralight font-caslon-condensed text-custom-purple text-[7px]">Emmanuel Abraham Djunaedhy</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="font-extralight font-caslon-condensed text-custom-purple text-[8px] mb-1">Amanda Kylie Kusuma</p>
                    <p className="font-extralight font-caslon-condensed text-custom-purple text-[5px] italic my-1">(Character Designer)</p>

                    <div className="flex">
                      <img src={Email} className="flex justify-between items-start text-center w-[3%] mr-1" />
                      <p className="italic font-extralight font-caslon-condensed text-custom-purple text-[7px]">e12200008@john.petra.ac.id</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="font-extralight font-caslon-condensed text-custom-purple text-[8px] mb-1">Ritchie Wiyogo</p>
                    <p className="font-extralight font-caslon-condensed text-custom-purple text-[5px] italic my-1">(3D Modeller)</p>
                    <div className="flex">
                      <img src={Email} className="flex justify-between items-start text-center w-[3%] mr-1" />
                      <p className="italic font-extralight font-caslon-condensed text-custom-purple text-[7px]">ritchiewiyogo0@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[36%] gap-2">
                <img src={IPDM} className="w-[30%] lg:mr-2 xl:mr-3 self-end" />
                <div className="flex flex-col w-full">
                  <img src={ProfileMobile1} className="flex justify-between items-start text-center w-full" alt="Picture1" />
                  <img src={ProfileMobile2} className="flex justify-between items-start text-center w-full" alt="Picture1" />
                  <img src={ProfileMobile3} className="flex justify-between items-start text-center w-full" alt="Picture1" />
                </div>
              </div>
            </div>
            <div className="flex flex-col pl-10 mt-2">
              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px]">
                Generasi muda saat ini banyak yang memiliki ide-ide yang kreatif namun mudah sekali hancur sehingga disebut sebagai Generasi Stroberi. Penggunaan dengan nama “stroberi” karena buah ini dari bentuk dan warnanya terlihat indah namun mudah sekali hancur yang serupa dengan karakteristik
                generasi Z. Hal tersebut disebabkan oleh faktor internal maupun eksternal. Faktor internal yaitu pola asuh orang tua. Sikap orang tua yang kurang baik karena terlalu memanjakan anaknya dan terlibat dalam menyelesaikan tugas maupun masalah yang dihadapi oleh anaknya. Akibatnya, anak
                tersebut mudah menyerah dan kurang mau berusaha dalam menghadapi tantangan dalam kehidupan. Faktor eksternal yaitu pengaruh dari media sosial yang menyebabkan overthinking bagi generasi muda saat ini. Hal tersebut disebabkan karena mereka membandingkan dirinya dengan kehidupan orang
                lain yang dilihatnya di media sosial.
              </p>

              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px] mt-2">
                Akibatnya generasi ini menjadi mudah sekali stres dan cemas yang berujung kepada istilah healing atau self-reward sebagai bentuk apreasiasi kepada diri sendiri yang cenderung konsumtif. Tujuan dari perancangan ini adalah untuk mengedukasi dan membuat Generasi Stroberi khususnya
                generasi Z yang berusia 18-25 tahun agar memiliki mental yang kuat. Metode penelitian yang digunakan kualitatif. Metode analisis data yang digunakan antara lain SWOT, Why Test, dan Marketing Mix 7P. Hasil perancangan adalah merchandise berupa packaging inovatif, komik interaktif,
                kaos, totebag, enamel pin, gantungan kunci, dan stiker yang menarik.
              </p>

              <div className="flex gap-2 flex-col mt-2">
                <div className="flex gap-2">
                  <img src={Mobile1} className="flex justify-between items-start text-center w-[54%]" alt="Picture2" />
                  <div className="flex flex-col justify-end w-[44%] gap-2">
                    <img src={Mobile2} className="flex justify-between items-start text-center w-full" alt="Picture2" />
                    <img src={Mobile3} className="flex justify-between items-start text-center w-full" alt="Picture2" />
                  </div>
                </div>
                <img src={Mobile4} className="flex justify-between items-start text-center w-[100%]" alt="Picture2" />
                <img src={Mobile5} className="flex justify-between items-start text-center w-[54%]" alt="Picture2" />

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

export default DM5;
