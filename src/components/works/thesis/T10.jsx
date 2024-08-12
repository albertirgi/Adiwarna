import { Link } from "react-router-dom";
import Email from "../../../assets/images/email.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Picture1 from "../../../assets/images/works/thesis/T10/1.webp";
import Picture2 from "../../../assets/images/works/thesis/T10/2.webp";
import Picture3 from "../../../assets/images/works/thesis/T10/3.webp";
import Profile from "../../../assets/images/works/thesis/T10/t10-1.webp";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";

const T10 = () => {
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
                <Link to="/category/thesis">
                  <span className="italic font-caslon-condensed text-custom-purple">Thesis</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:text-2lg xl:text-2xl lg:mt-8 xl:mt-20 lg:mb-2 xl:mb-3"></div>
          <div className="flex">
            <div className="w-[58%] flex flex-col justify-between">
              <div className="flex-col mb-5">
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.1em]">Analisis Komparasi Strategi Visual Branding Logo Mojotrisno Sentra Kuningan dengan Logo yang dibuat oleh Artificial Intelligence.</p>
              </div>
              <div className="flex-col self-end">
                <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mb-2">Renata Agustine Putri Pratama</p>
                <div className="flex">
                  <div className="w-[25%]">
                    <div className="flex mb-2">
                      <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">renataagustine12@gmail.com</p>
                    </div>
                    <div className="flex mb-2">
                      <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.7em] xl:text-[0.85em]">Renata Agustine</p>
                    </div>
                  </div>
                  <div className="w-[15%]"></div>
                  <div className="w-[70%]">
                    <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                      Di era digital ini, terdapat banyak platform situs website yang menawarkan jasa pembuatan logo secara instant menggunakan artificial intelligence. Dari beberapa hasil penelitian mengatakan bahwa logo buatan artificial intelligence secara visual memiliki nilai estetika yang
                      tinggi dan cukup menarik. Namun sebuah logo tidak hanya menunjukan keindahan estetika saja, melaikan karakteristik dan nilai citra brand dalam strategi positioning brand. Penelitian ini bertujuan untuk mengetahui apakah logo yang dibuat menggunakan artificial intelligence dapat
                      menunjukan karakteristik, nilai dan citra brand dibandingkan dengan logo brand yang dibuat secara manual. Brand yang digunakan untuk pembahasan penelitian merupakan brand Sentra Kuningan Mojotrisno yang telah memiliki strategi branding yang matang. Metode penelitian yang
                      digunakan merupakan metode jenis kualitatif phenomenology deskriptif dengan analisis menggunakan teori semiotika visual C. S. Pierce.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[4.5%]"></div>
            <img src={Profile} className="flex justify-between items-start text-center w-[37.5%]" alt="Picture1" />
          </div>
          <div className="flex flex-col gap-5 lg:mt-6 xl:mt-12 lg:mb-16 xl:mb-20">
            <div className="flex gap-5">
              <div className="w-[14%]"></div>
              <div className="w-[43.8%]">
                <img src={Picture1} />
              </div>
              <div className="w-[40.4%] flex flex-col gap-5">
                <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                  Hasil penelitian menunjukan bahwa hasil logo dari ke 5 platform artificial intelligence logo generator masih kurang kreatif atau bervariasi secara bentuk, warna dan tipografi dibandingkan logo manual. Artificial intelligence logo generator cenderung menghasilkan logo dari
                  simbol/ikon atau desain logo yang pernah ada atau banyak digunakan sebelumnya. Hal ini menunjukan bahwa logo yang dibuat oleh artificial intelligence masih belum dapat menggambarkan karakteristik keunikan brand Sentra Kuningan Mojotrisno.
                </p>
                <div className="w-[70%]">
                  <img src={Picture2} />
                </div>
                <div className="w-[70%]">
                  <img src={Picture3} />
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

export default T10;
