import { Link } from "react-router-dom";
import Email from "../../../assets/images/email.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Picture1 from "../../../assets/images/works/thesis/T4/1.webp";
import Picture2 from "../../../assets/images/works/thesis/T4/2.webp";
import Picture3 from "../../../assets/images/works/thesis/T4/3.webp";
import Picture4 from "../../../assets/images/works/thesis/T4/4.webp";
import Picture5 from "../../../assets/images/works/thesis/T4/5.webp";
import Mobile1 from "../../../assets/images/works/thesis/T4/mobile/1.webp";
import Mobile2 from "../../../assets/images/works/thesis/T4/mobile/2.webp";
import Mobile3 from "../../../assets/images/works/thesis/T4/mobile/3.webp";
import Mobile4 from "../../../assets/images/works/thesis/T4/mobile/4.webp";
import Mobile5 from "../../../assets/images/works/thesis/T4/mobile/5.webp";
import Profile from "../../../assets/images/works/thesis/T4/t4-1.webp";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";

const T4 = () => {
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
                  <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.8em]">Analisis Strategi Brand Activation Cat Dulux pada House of Sweet Embrace Exhibition</p>
                </div>
                <div className="flex-col self-end">
                  <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mb-2">Gabriella Kova Lucetta</p>
                  <div className="flex">
                    <div className="w-[25%]">
                      <div className="flex mb-2">
                        <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">gabriellakovalucetta42@gmail.com</p>
                      </div>
                      <div className="flex mb-2">
                        <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Gabriella Kova Lucetta</p>
                      </div>
                    </div>
                    <div className="w-[15%]"></div>
                    <div className="w-[70%]">
                      <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                        Industri cat tembok di Indonesia semakin ramai dengan persaingan ketat untuk menarik konsumen. Maka dari itu, Dulux, sebagai salah satu merek cat ternama di Indonesia yang selalu aktif dalam melakukan strategi brand activation untuk meningkatkan awareness serta engagement
                        dengan konsumen. Setiap tahun, Dulux mengumumkan tren warna tahunan dan untuk tahun 2024 ini Dulux memperkenalkan Sweet Embrace. Strategi yang dilakukan adalah dengan membuat event dalam bentuk House of Sweet Embrace Exhibition. Pameran ini merupakan house art installation
                        untuk memperkenalkan Sweet Embrace sebagai Colour of The Year 2024. Pameran ini didesain dalam bentuk “rumah” untuk memberikan kehangatan, ketenangan, dan kebahagiaan ke rumah konsumen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[4.5%]"></div>
              <img src={Profile} className="flex justify-between items-start text-center w-[37.5%]" alt="Picture1" />
            </div>
            <div className="flex gap-5 lg:mt-6 xl:mt-12">
              <div className="w-[53.5%]">
                <div className="flex flex-col gap-5">
                  <img src={Picture1} className="flex justify-between items-start text-center" />
                </div>
              </div>
              <div className="w-[46.5%]">
                <div className="w-[100%] flex-col">
                  <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                    Tujuan penelitian ini untuk menganalisis strategi brand activation yang dilakukan oleh Dulux pada House of Sweet Embrace Exhibition. Penelitian ini juga menggunakan metode kualitatif deskriptif dengan teknik pengumpulan data melalui observasi dan wawancara. Observasi dilakukan
                    pada event Dulux di House of Sweet Embrace Exhibition, sedangkan wawancara dilakukan dengan Head of Planner dan PIC Account Executive FAV Creative Activation Agency sebagai event organizer yang membuat activation plan untuk pameran tersebut, serta pengunjung yang hadir. Temuan
                    penelitian menunjukkan bahwa Dulux menggunakan berbagai aktivitas brand activation serta berbagai media komunikasi untuk menyampaikan pesan Dulux agar target audiens dapat terinspirasi menggunakan warna-warna ini dan berdampak pada pembelian.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-5 lg:mb-16 xl:mb-20 mt-5">
              <div className="gap-5 flex">
                <div className="w-[25%]">
                  <img src={Picture2} />
                </div>
                <div className="w-[25%]">
                  <img src={Picture3} />
                </div>
                <div className="w-[25%]">
                  <img src={Picture4} />
                </div>
                <div className="w-[25%]">
                  <img src={Picture5} />
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
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight text-[12px] mt-2 mb-5 pr-2">Analisis Strategi Brand Activation Cat Dulux pada House of Sweet Embrace Exhibition</p>
                <div className="flex flex-col">
                  <p className="font-extralight font-caslon-condensed text-custom-purple text-[8px] mb-1">Gabriella Kova Lucetta</p>
                  <div className="flex">
                    <img src={Email} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="font-extralight italic font-caslon-condensed text-custom-purple text-[7px]">gabriellakovalucetta42@gmail.com</p>
                  </div>
                  <div className="flex">
                    <img src={LinkedIn} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="italic font-extralight font-caslon-condensed text-custom-purple text-[7px]">Gabriella Kova Lucetta</p>
                  </div>
                </div>
              </div>
              <img src={Profile} className="flex justify-between items-start text-center w-[35%]" alt="Picture1" />
            </div>
            <div className="flex flex-col pl-10 mt-2">
              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px]">
                Industri cat tembok di Indonesia semakin ramai dengan persaingan ketat untuk menarik konsumen. Maka dari itu, Dulux, sebagai salah satu merek cat ternama di Indonesia yang selalu aktif dalam melakukan strategi brand activation untuk meningkatkan awareness serta engagement dengan
                konsumen. Setiap tahun, Dulux mengumumkan tren warna tahunan dan untuk tahun 2024 ini Dulux memperkenalkan Sweet Embrace. Strategi yang dilakukan adalah dengan membuat event dalam bentuk House of Sweet Embrace Exhibition. Pameran ini merupakan house art installation untuk
                memperkenalkan Sweet Embrace sebagai Colour of The Year 2024. Pameran ini didesain dalam bentuk “rumah” untuk memberikan kehangatan, ketenangan, dan kebahagiaan ke rumah konsumen.
              </p>

              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px] mt-2">
                Tujuan penelitian ini untuk menganalisis strategi brand activation yang dilakukan oleh Dulux pada House of Sweet Embrace Exhibition. Penelitian ini juga menggunakan metode kualitatif deskriptif dengan teknik pengumpulan data melalui observasi dan wawancara. Observasi dilakukan pada
                event Dulux di House of Sweet Embrace Exhibition, sedangkan wawancara dilakukan dengan Head of Planner dan PIC Account Executive FAV Creative Activation Agency sebagai event organizer yang membuat activation plan untuk pameran tersebut, serta pengunjung yang hadir. Temuan penelitian
                menunjukkan bahwa Dulux menggunakan berbagai aktivitas brand activation serta berbagai media komunikasi untuk menyampaikan pesan Dulux agar target audiens dapat terinspirasi menggunakan warna-warna ini dan berdampak pada pembelian.
              </p>

              <div className="flex flex-col gap-2 mt-2">
                <img src={Mobile1} className="flex justify-between items-start text-center w-[100%]" />
                <div className="flex flex-col gap-2 w-[70%]">
                  <div className="flex gap-2">
                    <img src={Mobile2} className="flex justify-between items-start text-center w-[49%]" />
                    <img src={Mobile3} className="flex justify-between items-start text-center w-[49%]" />
                  </div>
                  <div className="flex gap-2">
                    <img src={Mobile4} className="flex justify-between items-start text-center w-[49%]" />
                    <img src={Mobile5} className="flex justify-between items-start text-center w-[49%]" />
                  </div>
                </div>

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

export default T4;
