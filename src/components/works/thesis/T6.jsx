import { Link } from "react-router-dom";
import Behance from "../../../assets/images/behance.svg";
import Email from "../../../assets/images/email.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Picture1 from "../../../assets/images/works/thesis/T6/1.webp";
import Profile from "../../../assets/images/works/thesis/T6/t6-1.webp";
import Mobile1 from "../../../assets/images/works/thesis/T6/mobile/1.webp";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";

const T6 = () => {
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
                <Link to="/category/thesis">
                  <span className="italic font-caslon-condensed text-custom-purple">Thesis</span>
                </Link>
              </div>
            </div>
          </div>
          {/* Desktop View */}
          <div className="hidden lg:block">
            <div className="lg:text-2lg xl:text-2xl lg:mt-8 xl:mt-20 lg:mb-2 xl:mb-3"></div>
            <div className="flex">
              <div className="w-[58%] flex flex-col justify-between">
                <div className="flex-col mb-5">
                  <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.1em]">Analisis Pentingnya Memiliki Ciri Khas Gaya Visual Fotografer terhadap Jenjang Karir Dunia Fotografi Fashion</p>
                </div>
                <div className="flex-col self-end">
                  <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mb-2">Thomas Verdy Sutanto</p>
                  <div className="flex">
                    <div className="w-[25%]">
                      <div className="flex mb-2">
                        <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">verdy.sutanto@gmail.com</p>
                      </div>
                      <div className="flex mb-2">
                        <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">verdy.sutanto</p>
                      </div>
                      <div className="flex mb-2">
                        <img src={Behance} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Verdy Sutanto</p>
                      </div>
                    </div>
                    <div className="w-[15%]"></div>
                    <div className="w-[70%]">
                      <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                        Berkembangnya industri fashion photography menyebabkan fotografer tidak lagi bisa jika hanya mengandalkan skill fotografi untuk bertahan dan berkembang dalam industri. Adapun satu aspek krusial yang sering terabaikan, yaitu ciri khas gaya visual atau karakter visual seorang
                        fotografer. Penelitian ini meneliti seberapa penting ciri khas gaya visual terhadap pengembangan jenjang karier fashion photographer. Ciri khas gaya visual dalam fotografi merupakan perwujudan dari keunikan gaya setiap fotografer, yang mampu membedakan fotografer dengan
                        kompetitornya. Hingga saat ini ciri khas gaya visual sering terabaikan yang mengakibatkan para fotografer kesulitan dalam memilih jalan yang efektif dalam masa pengembangan karier. Penelitian ini bertujuan untuk mengetahui pentingnya memiliki ciri khas gaya visual bagi
                        seorang fotografer dalam mengembangkan karier di dunia fashion photography.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[4.5%]"></div>
              <img src={Profile} className="flex justify-between items-start text-center w-[37.5%]" alt="Picture1" />
            </div>
            <div className="flex gap-5 lg:mt-6 xl:mt-12 lg:mb-16 xl:mb-20">
              <div className="w-[15%]"></div>
              <div className="w-[41.5%]">
                <img src={Picture1} />
              </div>
              <div className="w-[40.5%]">
                <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                  Metode penelitian yang digunakan adalah analisa deskriptif kualitatif untuk melihat berapa besar efek dari ciri khas gaya visual terhadap fotografer. Dalam mengumpulkan data pendukung dilakukan pula penelitian dengan metode observasi, studi literatur, dan wawancara dengan fashion
                  photographer profesional. Teknik analisa yang digunakan ialah observasional kualitatif yang merupakan pengamatan subjek penelitian dari kejauhan, serta karakteristik yang diamati bersifat alami dan efektif. Hasil penelitian menunjukan bahwa ciri khas gaya visual sangat berperan
                  dalam pengembangan karier, yang dimana fotografer akan memiliki nilai jual lebih dalam pasar industri fashion photography. Ciri khas gaya visual turut membentuk personal branding dan segmentasi pasar. Sehingga, dalam menarik pasar dan calon klien sangat dibutuhkan ciri khas gaya
                  visual yang didukung dengan skill fotografi yang memumpuni.
                </p>
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
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight text-[12px] mt-2 mb-5 pr-2">Analisis Pentingnya Memiliki Ciri Khas Gaya Visual Fotografer terhadap Jenjang Karir Dunia Fotografi Fashion</p>
                <div className="flex flex-col">
                  <p className="font-extralight font-caslon-condensed text-custom-purple text-[8px] mb-1">Thomas Verdy Sutanto</p>
                  <div className="flex">
                    <img src={Email} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="font-extralight italic font-caslon-condensed text-custom-purple text-[7px]">verdy.sutanto@gmail.com</p>
                  </div>
                  <div className="flex">
                    <img src={LinkedIn} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="italic font-extralight font-caslon-condensed text-custom-purple text-[7px]">verdy.sutanto</p>
                  </div>
                  <div className="flex">
                    <img src={Behance} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="italic font-extralight font-caslon-condensed text-custom-purple text-[7px]">Verdy Sutanto</p>
                  </div>
                </div>
              </div>
              <img src={Profile} className="flex justify-between items-start text-center w-[35%]" alt="Picture1" />
            </div>
            <div className="flex flex-col pl-10 mt-2">
              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px]">
                Berkembangnya industri fashion photography menyebabkan fotografer tidak lagi bisa jika hanya mengandalkan skill fotografi untuk bertahan dan berkembang dalam industri. Adapun satu aspek krusial yang sering terabaikan, yaitu ciri khas gaya visual atau karakter visual seorang
                fotografer. Penelitian ini meneliti seberapa penting ciri khas gaya visual terhadap pengembangan jenjang karier fashion photographer. Ciri khas gaya visual dalam fotografi merupakan perwujudan dari keunikan gaya setiap fotografer, yang mampu membedakan fotografer dengan
                kompetitornya. Hingga saat ini ciri khas gaya visual sering terabaikan yang mengakibatkan para fotografer kesulitan dalam memilih jalan yang efektif dalam masa pengembangan karier. Penelitian ini bertujuan untuk mengetahui pentingnya memiliki ciri khas gaya visual bagi seorang
                fotografer dalam mengembangkan karier di dunia fashion photography.
              </p>

              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px] mt-2">
                Metode penelitian yang digunakan adalah analisa deskriptif kualitatif untuk melihat berapa besar efek dari ciri khas gaya visual terhadap fotografer. Dalam mengumpulkan data pendukung dilakukan pula penelitian dengan metode observasi, studi literatur, dan wawancara dengan fashion
                photographer profesional. Teknik analisa yang digunakan ialah observasional kualitatif yang merupakan pengamatan subjek penelitian dari kejauhan, serta karakteristik yang diamati bersifat alami dan efektif. Hasil penelitian menunjukan bahwa ciri khas gaya visual sangat berperan dalam
                pengembangan karier, yang dimana fotografer akan memiliki nilai jual lebih dalam pasar industri fashion photography. Ciri khas gaya visual turut membentuk personal branding dan segmentasi pasar. Sehingga, dalam menarik pasar dan calon klien sangat dibutuhkan ciri khas gaya visual
                yang didukung dengan skill fotografi yang memumpuni.
              </p>

              <div className="flex flex-col gap-2 mt-2 w-[100%]">
                <img src={Mobile1} className="flex justify-between items-start text-center w-[88%]" />
                
                <div className="w-full flex items-end justify-end  mb-4">
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

export default T6;
