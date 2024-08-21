import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/brandProduct/BP7/bp7-1.webp";
import Picture1 from "../../../assets/images/works/brandProduct/BP7/1.webp";
import Picture2 from "../../../assets/images/works/brandProduct/BP7/2.webp";
import Picture3 from "../../../assets/images/works/brandProduct/BP7/3.webp";
import Picture4 from "../../../assets/images/works/brandProduct/BP7/4.webp";
import Picture5 from "../../../assets/images/works/brandProduct/BP7/5.webp";
import Mobile1 from "../../../assets/images/works/brandProduct/BP7/mobile/1.webp";
import Mobile2 from "../../../assets/images/works/brandProduct/BP7/mobile/2.webp";
import Mobile3 from "../../../assets/images/works/brandProduct/BP7/mobile/3.webp";
import Mobile4 from "../../../assets/images/works/brandProduct/BP7/mobile/4.webp";
import Mobile5 from "../../../assets/images/works/brandProduct/BP7/mobile/5.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Email from "../../../assets/images/email.svg";

const BP7 = () => {
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
                <Link to="/category/brand-and-product-innovation">
                  <span className="italic font-caslon-condensed text-custom-purple">Brand & Product Innovation</span>
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
                  <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">Cerita Nusa</p>
                </div>
                <div className="flex-col self-end">
                  <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em]">Tristan Amadeo</p>
                  <div className="flex">
                    <div className="w-[25%]">
                      <div className="flex">
                        <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">ceritanusacoffee@gmail.com</p>
                      </div>
                    </div>
                    <div className="w-[5%]"></div>
                    <div className="w-[70%]">
                      <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                        Indonesia terkenal dengan kopi berkualitas tinggi dan beragam. Namun, kualitas dan produksi kopi Indonesia di pasar internasional belum sebanding dengan negara penghasil kopi lainnya, seperti Brazil dan Ethiophia. Hal ini disebabkan oleh kurangnya pengetahuan dan fasilitas
                        untuk meningkatkan kualitas kopi Indonesia menjadi specialty coffee. Cerita Nusa, sebuah start up yang didirikan pada tahun 2023, bertujuan untuk meningkatkan apresiasi kopi Indonesia melalui berbagai cara, yaitu meningkatkan pengetahuan masyarakat tentang specialty coffee
                        dari produk kami, memberikan pengalaman baru dalam menyeduh kopi drip bag dengan tambahan bahan pendukung untuk meningkatkan pengalaman rasa, memperkenalkan budaya dan adat Indonesia melalui kopi, serta dari rangkaian produk kopi dari berbagai daerah Indonesia, agar
                        pengalaman tersebut lebih maksimal dengan harapan pembeli bisa mengalami betapa kayanya budaya yang dibentuk karena kopi, uniknya tiap jenis, proses, dan varietas kopi yang di tanam dan dikembangkan Indonesia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[4.5%]"></div>
              <img src={Profile} className="flex justify-between items-start text-center w-[37.5%]" alt="Picture1" />
            </div>

            <div className="flex gap-5 lg:mb-36 xl:mb-40">
              <div className="w-[60%] flex flex-col gap-8">
                <div className="h-[70%] flex gap-5">
                  <img src={Picture1} className="flex justify-between items-start text-center w-[58%]" />
                  <img src={Picture2} className="flex justify-between items-start text-center w-[40%]" />
                </div>
                <div className="h-[30%] flex gap-5 justify-end">
                  <img src={Picture3} className="flex justify-between items-start text-center w-[25%]" />
                  <img src={Picture4} className="flex justify-between items-start text-center w-[25%]" />
                </div>
              </div>
              <img src={Picture5} className="flex justify-between items-start text-center w-[40%]" />
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
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight text-[12px] mt-2 mb-10">Cerita Nusa</p>
                <div className="flex flex-col">
                  <p className="font-extralight font-caslon-condensed text-custom-purple text-[8px] mb-1">Tristan Amadeo</p>
                  <div className="flex">
                    <img src={Email} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="font-extralight italic font-caslon-condensed text-custom-purple text-[7px]">ceritanusacoffee@gmail.com</p>
                  </div>
                </div>
              </div>
              <img src={Profile} className="flex justify-between items-start text-center w-[35%]" alt="Picture1" />
            </div>
            <div className="flex flex-col pl-10 mt-2">
              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px]">
                Indonesia terkenal dengan kopi berkualitas tinggi dan beragam. Namun, kualitas dan produksi kopi Indonesia di pasar internasional belum sebanding dengan negara penghasil kopi lainnya, seperti Brazil dan Ethiophia. Hal ini disebabkan oleh kurangnya pengetahuan dan fasilitas untuk
                meningkatkan kualitas kopi Indonesia menjadi specialty coffee. Cerita Nusa, sebuah start up yang didirikan pada tahun 2023, bertujuan untuk meningkatkan apresiasi kopi Indonesia melalui berbagai cara, yaitu meningkatkan pengetahuan masyarakat tentang specialty coffee dari produk
                kami, memberikan pengalaman baru dalam menyeduh kopi drip bag dengan tambahan bahan pendukung untuk meningkatkan pengalaman rasa, memperkenalkan budaya dan adat Indonesia melalui kopi, serta dari rangkaian produk kopi dari berbagai daerah Indonesia, agar pengalaman tersebut lebih
                maksimal dengan harapan pembeli bisa mengalami betapa kayanya budaya yang dibentuk karena kopi, uniknya tiap jenis, proses, dan varietas kopi yang di tanam dan dikembangkan Indonesia.
              </p>
              <div className="flex gap-2 flex-col mt-2">
                <div className="flex gap-2">
                  <img src={Mobile1} className="flex justify-between items-start text-center w-[60%]" />
                  <img src={Mobile2} className="flex justify-between items-start text-center w-[38%]" />
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2 w-[43%]">
                    <img src={Mobile3} className="flex justify-between items-start text-center w-[100%]" />
                    <img src={Mobile4} className="flex justify-between items-start text-center w-[100%]" />
                  </div>
                  <img src={Mobile5} className="flex justify-between items-start text-center w-[55%] h-fit" />
                </div>
                <div className="w-full flex items-end justify-end mt-8 mb-4"  >
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

export default BP7;
