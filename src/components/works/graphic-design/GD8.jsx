import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/graphicDesign/GD8/gd8-1.webp";
import Picture1 from "../../../assets/images/works/graphicDesign/GD8/1.webp";
import Picture2 from "../../../assets/images/works/graphicDesign/GD8/2.webp";
import Picture3 from "../../../assets/images/works/graphicDesign/GD8/3.webp";
import Picture4 from "../../../assets/images/works/graphicDesign/GD8/4.webp";
import Picture5 from "../../../assets/images/works/graphicDesign/GD8/5.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Behance from "../../../assets/images/behance.svg";
import Email from "../../../assets/images/email.svg";

const GD8 = () => {
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
                  Path of Kindness
                </p>
              </div>
              <div className="flex-col self-end">
                <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mb-2">
                  Jacqueline Jillian Tanuwijaya
                </p>
                <div className="flex">
                  <div className="w-[25%]">
                    <div className="flex mb-2">
                      <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">
                        iamjacqjt@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="w-[10%]"></div>
                  <div className="w-[70%]">
                    <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                      Board game “Path of Kindness” merupakan board game yang ditujukan sebagai media edukasi penanaman nilai moralitas berdasarkan nilai-nilai Kristiani. Dasar pembuatan perancangan ini karena krisis moralitas yang kian meningkat di Indonesia, terutama kasus bullying pada anak dan remaja. Perancangan board game telah melewati riset data, proses perancangan dan uji coba, yang menjadikan board game ini sebagai media untuk mendukung konsep bermain sambil belajar yang efektif untuk anak. Perancangan board game ditujukan untuk anak SD kelas 2-4. Board game ini menggabungkan jenis permainan tile-placement game, dice game, dan children game. Board game ini memiliki tema fabel, dimana anak-anak yang menjadi pemain akan berpetualang sebagai karakter hewan yang mereka pilih di dunia board game. Goal dari board game ini yaitu siapa yang tercepat mengumpulkan dan menyusun 4 potong puzzle bergambar karakter yang menang. Secara keseluruhan, cara bermainnya seperti berburu harta karun, yang digambarkan dalam bentuk mini puzzle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[4.5%]"></div>
            <img src={Profile} className="flex justify-between items-start text-center w-[37.5%]" alt="Picture1" />
          </div>
          <div className="flex gap-5 lg:mb-16 xl:mb-20 lg:mt-6 xl:mt-12">
            <div className="w-[60%]">
              <div className="flex flex-col gap-5">
                <img src={Picture1} className="flex justify-between items-start text-center" />
                <div className="w-[80%] self-end">
                  <div className="w-[47.3%] gap-5 flex">
                    <img src={Picture2} className="flex justify-between items-start text-center" />
                    <img src={Picture3} className="flex justify-between items-start text-center" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[40%]">
              <div className="w-[100%] flex-col">
                <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">Konten edukasi diaplikasikan pada kartu pertanyaan yang menjadi tantangan bagi anak-anak untuk mendapatkan 1 potongan puzzle. Penggunaan kalimat pada kartu pertanyaan juga disesuaikan dengan tema board game, dengan menggunakan kalimat seperti berdongeng. Dalam kartu pertanyaan akan terdapat kunci jawaban dan penjelasan mengenai nilai moralitas yang diajarkan. Konten kartu pertanyaan akan dibacakan secara lantang, sehingga seluruh anak bisa mendengar dan belajar bersama. Board game juga memiliki kejutan berupa hadiah yang bisa didapatkan jika mendapatkan kartu pertanyaan variasi The Golden Card, sehingga anak-anak lebih semangat dalam bermain sambil belajar.</p>
                <div className="w-[100%] gap-5 flex">
                  <div className="w-[60%]">
                    <img src={Picture4} className="flex justify-between items-start text-center" />
                  </div>
                  <div className="w-[40%]">
                    <img src={Picture5} className="flex justify-between items-start text-center" />
                  </div>
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

export default GD8;
