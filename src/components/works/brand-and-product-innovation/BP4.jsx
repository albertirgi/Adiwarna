import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/brandProduct/BP4/bp4-1.webp";
import Picture1 from "../../../assets/images/works/brandProduct/BP4/1.webp";
import Picture2 from "../../../assets/images/works/brandProduct/BP4/2.webp";
import Picture3 from "../../../assets/images/works/brandProduct/BP4/3.webp";
import Picture4 from "../../../assets/images/works/brandProduct/BP4/4.webp";
import Picture5 from "../../../assets/images/works/brandProduct/BP4/5.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Email from "../../../assets/images/email.svg";

const BP4 = () => {
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
                <Link to="/category/brand-and-product-innovation">
                  <span className="italic font-caslon-condensed text-custom-purple">Brand & Product Innovation</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:text-2lg xl:text-2xl lg:mt-8 xl:mt-20 lg:mb-2 xl:mb-3"></div>
          <div className="flex lg:mb-6 xl:mb-12">
            <div className="w-[58%] flex flex-col justify-between">
              <div className="flex-col">
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">Ztrawberry</p>
                <a href="https://drive.google.com/drive/folders/1UGAi1-gawKhYVnsFCx5_HR8_6r4sLZNL" target="_blank" rel="noreferrer">
                  <div className="flex mt-2">
                    <img src={Play} className="flex justify-between items-start text-center w-[3%] lg:mr-2 xl:mr-3" />
                    <p className="font-light font-inter text-custom-purple italic underline leading-tight lg:text-[1em] xl:text-[1.2em]">Watch Video</p>
                  </div>
                </a>
              </div>
              <div className="flex-col self-end">
                <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em]">Victoria Guitomo</p>
                <div className="flex">
                  <div className="w-[25%]">
                    <div className="flex">
                      <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">victoriaguitomo@gmail.com</p>
                    </div>
                    <div className="flex mt-1">
                      <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="italic font-extralight font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Victoria Guitomo</p>
                    </div>
                  </div>
                  <div className="w-[5%]"></div>
                  <div className="w-[70%]">
                    <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                      Generasi muda saat ini banyak yang memiliki ide-ide yang kreatif namun mudah sekali hancur sehingga disebut sebagai Generasi Stroberi. Penggunaan dengan nama “stroberi” karena buah ini dari bentuk dan warnanya terlihat indah namun mudah sekali hancur yang serupa dengan
                      karakteristik generasi Z. Hal tersebut disebabkan oleh faktor internal maupun eksternal. Faktor internal yaitu pola asuh orang tua. Sikap orang tua yang kurang baik karena terlalu memanjakan anaknya dan terlibat dalam menyelesaikan tugas maupun masalah yang dihadapi oleh
                      anaknya. Akibatnya, anak tersebut mudah menyerah dan kurang mau berusaha dalam menghadapi tantangan dalam kehidupan. Faktor eksternal yaitu pengaruh dari media sosial yang menyebabkan overthinking bagi generasi muda saat ini. Hal tersebut disebabkan karena mereka membandingkan
                      dirinya dengan kehidupan orang lain yang dilihatnya di media sosial. Akibatnya generasi ini menjadi mudah sekali stres dan cemas yang berujung kepada istilah healing atau self-reward sebagai bentuk apreasiasi kepada diri sendiri yang cenderung konsumtif.
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
              <div>
                <img src={Picture1} className="flex justify-between items-start text-center" />
              </div>
              <div className="w-[50%] self-end mt-5">
                <img src={Picture2} className="flex justify-between items-start text-center" />
              </div>
            </div>
            <div className="w-[50%]">
              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                Tujuan dari perancangan ini adalah untuk mengedukasi dan membuat Generasi Stroberi khususnya generasi Z yang berusia 18-25 tahun agar memiliki mental yang kuat. Metode penelitian yang digunakan kualitatif. Metode analisis data yang digunakan antara lain SWOT, Why Test, dan Marketing
                Mix 7P. Hasil perancangan adalah merchandise berupa packaging inovatif, komik interaktif, kaos, totebag, enamel pin, gantungan kunci, dan stiker yang menarik.
              </p>
              <div className="flex gap-5 lg:mb-16 xl:mb-20 self-end mt-5">
                <div className="w-[34.7%]">
                  <img src={Picture3} className="flex justify-between items-start text-center mb-2" />
                  <img src={Picture4} className="flex justify-between items-start text-center mt-3" />
                </div>
                <img src={Picture5} className="flex justify-between items-start text-center w-[65.3%] h-fit" />
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

export default BP4;
