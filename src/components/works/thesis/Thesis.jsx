import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";

import T11 from "../../../assets/images/works/thesis/t1-1.svg";
import T12 from "../../../assets/images/works/thesis/t1-2.svg";
import T21 from "../../../assets/images/works/thesis/t2-1.svg";
import T22 from "../../../assets/images/works/thesis/t2-2.svg";
import T31 from "../../../assets/images/works/thesis/t3-1.svg";
import T32 from "../../../assets/images/works/thesis/t3-2.svg";
import T41 from "../../../assets/images/works/thesis/t4-1.svg";
import T42 from "../../../assets/images/works/thesis/t4-2.svg";
import T51 from "../../../assets/images/works/thesis/t5-1.svg";
import T52 from "../../../assets/images/works/thesis/t5-2.svg";
import T61 from "../../../assets/images/works/thesis/t6-1.svg";
import T62 from "../../../assets/images/works/thesis/t6-2.svg";
import T71 from "../../../assets/images/works/thesis/t7-1.svg";
import T72 from "../../../assets/images/works/thesis/t7-2.svg";
import T81 from "../../../assets/images/works/thesis/t8-1.svg";
import T82 from "../../../assets/images/works/thesis/t8-2.svg";
import T91 from "../../../assets/images/works/thesis/t9-1.svg";
import T92 from "../../../assets/images/works/thesis/t9-2.svg";
import T101 from "../../../assets/images/works/thesis/t10-1.svg";
import T102 from "../../../assets/images/works/thesis/t10-2.svg";

const Thesis = () => {
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
              Thesis
            </span>
          </div>
          <div className="flex mt-10">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={T12} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={T11} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                Analisis Semiotik Makna Karakter Chinese Lucky Cat pada Logo Restoran Chinese Fast Food Da Jia Hao.
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                Christabel Amanda
                </p>
              </div>
            </article>
            <article className="flex flex-col w-[33%] lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={T22} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={T21} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                Analisis Strategi Rebranding Exsport pada Tahun 2020 Terhadap Perubahan Target Market yang Dituju.
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                Vania Jovita
                </p>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={T32} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={T31} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                Analisis Pesan Komunikasi dan Semiotika Visual pada Iklan Komedi #Letmeexplain Seri Flashes pada Youtube Valorant.
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                Kayla Federica Jiemesha
                </p>
              </div>
            </article>
          </div>
          <div className="flex mt-10">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={T42} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={T41} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                Analisis Strategi Brand Activation Cat Dulux pada House of Sweet Embrace Exhibition.
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                Gabriella Kova Lucetta
                </p>
              </div>
            </article>
            <article className="flex flex-col w-[33%] lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={T52} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={T51} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                Analisis Gaya Visual pada Seserahan Pertunangan Etnis Tionghoa di Surabaya.
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                Natasya Chandra
                </p>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={T62} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={T61} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                Analisis Pentingnya Memiliki Ciri Khas Gaya Visual Fotografer terhadap Jenjang Karir Dunia Fotografi Fashion
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                Thomas Verdy Sutanto
                </p>
              </div>
            </article>
          </div>
          <div className="flex mt-10">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={T72} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={T71} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                Artikulasi Identitas Kosmopolitan pada Konten Visual Fotografi “Anomali Coffee” di Bali.
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                Clarence Venedictta Tjahjadi
                </p>
              </div>
            </article>
            <article className="flex flex-col w-[33%] lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={T82} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={T81} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                Analisis Guideline Penyusunan Strategi Fashion Photoshoot dari Dua Brand dengan Produk Serupa.
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                Merry Christin Sutedjo
                </p>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={T92} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={T91} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                Analisis Usabilitas pada Desain Website Mobile Modico dengan Menggunakan Teori Jakob Nielsen.
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                Olyvia Irene Hunggianto
                </p>
              </div>
            </article>
          </div>
          <div className="flex mt-10 mb-40">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <img src={T102} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <img src={T101} className="w-full" />
                <h2 className="font-jakarta-sans font-semibold text-justify leading-tight lg:mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">
                Analisis Komparasi Strategi Visual Branding Logo Mojotrisno Sentra Kuningan dengan Logo yang dibuat oleh Artificial Intelligence.
                </h2>
                <p className="font-caslon-condensed font-light italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">
                Renata Agustine Putri Pratama
                </p>
              </div>
            </article>
            <article className="flex flex-col w-[33%] lg:mx-8 xl:mx-10 relative">
            <div className="flex flex-col grow text-custom-purple">
                <img src={T91} className="w-full opacity-0" />
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple">
                <img src={T91} className="w-full opacity-0" />
              </div>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Thesis;
