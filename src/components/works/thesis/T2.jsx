import { Link } from "react-router-dom";
import Email from "../../../assets/images/email.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Picture1 from "../../../assets/images/works/thesis/T2/1.webp";
import Picture2 from "../../../assets/images/works/thesis/T2/2.webp";
import Picture3 from "../../../assets/images/works/thesis/T2/3.webp";
import Picture4 from "../../../assets/images/works/thesis/T2/4.webp";
import Picture5 from "../../../assets/images/works/thesis/T2/5.webp";
import Mobile1 from "../../../assets/images/works/thesis/T2/mobile/1.webp";
import Mobile2 from "../../../assets/images/works/thesis/T2/mobile/2.webp";
import Mobile3 from "../../../assets/images/works/thesis/T2/mobile/3.webp";
import Mobile4 from "../../../assets/images/works/thesis/T2/mobile/4.webp";
import Mobile5 from "../../../assets/images/works/thesis/T2/mobile/5.webp";
import Profile from "../../../assets/images/works/thesis/T2/t2-1.webp";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";

const T2 = () => {
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
                  <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.1em]">Analisis Strategi Rebranding Exsport pada Tahun 2020 terhadap Perubahan Target Market yang Dituju</p>
                </div>
                <div className="flex-col self-end">
                  <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mb-2">Vania Jovita</p>
                  <div className="flex">
                    <div className="w-[25%]">
                      <div className="flex mb-2">
                        <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">vaniajovitaaa@gmail.com</p>
                      </div>
                      <div className="flex mb-2">
                        <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Vania Jovita</p>
                      </div>
                    </div>
                    <div className="w-[10%]"></div>
                    <div className="w-[70%]">
                      <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                        Fashion menjadi bagian penting dari gaya hidup dan identitas yang tidak terpisahkan terutama bagi Gen Z saat ini. Perkembangan fashion yang terus meningkat pesat di Indonesia didorong oleh perubahan tren dan pola perilaku yang terjadi dalam masyarakat. Hal ini kemudian memicu
                        persaingan sengit antar brand dalam industri fashion untuk berlomba menghasilkan produk yang trendi sesuai dengan perkembangan zaman. Oleh karena itu, ditengah ketatnya persaingan, sebuah brand membutuhkan strategi branding yang tepat agar mudah dikenali oleh target konsumen.
                        Tujuan penelitian ini adalah menganalisis strategi rebranding yang telah dirancang oleh Exsport agar tetap relevan dan bertahan di tengah perubahan zaman dengan memahami pola perilaku konsumen yang dituju saat ini. Dengan menggunakan metode analisis kualitatif deskriptif
                        serta teknik pengumpulan data melalui wawancara, observasi dan studi literatur, hasil dari penelitian ini menunjukan bahwa rebranding dapat menjadi langkah strategis dalam mempertahankan dan mengembangkan Exsport.
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
                    Berdasarkan analisis, proses rebranding Exsport didorong oleh faktor internal berkaitan dengan struktur perusahaan dengan hasil penjualan didominasi oleh konsumen perempuan yang sejalan dengan faktor eksternal dimana terjadi peningkatan minat konsumen dikalangan Gen Z terhadap
                    trend fashion terkini. Strategi rebranding Exsport kemudian diterapkan melalui transformasi identitas visual dengan adanya pergantian "wajah" kearah yang dinamis dan eksploratif sesuai dengan karakteristik target market Exsport tanpa meninggalkan esensi dari brand soul yang
                    dimiliki sebagai "The Explorers".
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-5 lg:mb-16 xl:mb-20 mt-5 justify-end">
              <div className="w-[25.5%]">
                <img src={Picture2} />
              </div>
              <div className="w-[43.5%] flex flex-col gap-5">
                <img src={Picture3} />
                <div className="flex self-end w-[70%]">
                  <img src={Picture4} />
                </div>
              </div>
              <div className="w-[31%]">
                <img src={Picture5} />
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
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight text-[12px] mt-2 mb-5 pr-2">Analisis Strategi Rebranding Exsport pada Tahun 2020 terhadap Perubahan Target Market yang Dituju</p>
                <div className="flex flex-col">
                  <p className="font-extralight font-caslon-condensed text-custom-purple text-[8px] mb-1">Vania Jovita</p>
                  <div className="flex">
                    <img src={Email} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="font-extralight italic font-caslon-condensed text-custom-purple text-[7px]">vaniajovitaaa@gmail.com</p>
                  </div>
                  <div className="flex">
                    <img src={LinkedIn} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="italic font-extralight font-caslon-condensed text-custom-purple text-[7px]">Vania Jovita</p>
                  </div>
                </div>
              </div>
              <img src={Profile} className="flex justify-between items-start text-center w-[35%]" alt="Picture1" />
            </div>
            <div className="flex flex-col pl-10 mt-2">
              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px]">
                Fashion menjadi bagian penting dari gaya hidup dan identitas yang tidak terpisahkan terutama bagi Gen Z saat ini. Perkembangan fashion yang terus meningkat pesat di Indonesia didorong oleh perubahan tren dan pola perilaku yang terjadi dalam masyarakat. Hal ini kemudian memicu
                persaingan sengit antar brand dalam industri fashion untuk berlomba menghasilkan produk yang trendi sesuai dengan perkembangan zaman. Oleh karena itu, ditengah ketatnya persaingan, sebuah brand membutuhkan strategi branding yang tepat agar mudah dikenali oleh target konsumen. Tujuan
                penelitian ini adalah menganalisis strategi rebranding yang telah dirancang oleh Exsport agar tetap relevan dan bertahan di tengah perubahan zaman dengan memahami pola perilaku konsumen yang dituju saat ini. Dengan menggunakan metode analisis kualitatif deskriptif serta teknik
                pengumpulan data melalui wawancara, observasi dan studi literatur, hasil dari penelitian ini menunjukan bahwa rebranding dapat menjadi langkah strategis dalam mempertahankan dan mengembangkan Exsport.
              </p>

              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px] mt-2">
                Berdasarkan analisis, proses rebranding Exsport didorong oleh faktor internal berkaitan dengan struktur perusahaan dengan hasil penjualan didominasi oleh konsumen perempuan yang sejalan dengan faktor eksternal dimana terjadi peningkatan minat konsumen dikalangan Gen Z terhadap trend
                fashion terkini. Strategi rebranding Exsport kemudian diterapkan melalui transformasi identitas visual dengan adanya pergantian "wajah" kearah yang dinamis dan eksploratif sesuai dengan karakteristik target market Exsport tanpa meninggalkan esensi dari brand soul yang dimiliki
                sebagai "The Explorers".
              </p>

              <div className="flex flex-col gap-2 mt-2">
                <img src={Mobile1} className="flex justify-between items-start text-center w-[75%]" />
                <div className="flex gap-2 w-[87.5%]">
                  <img src={Mobile2} className="flex justify-between items-start text-center w-[34%]" />
                  <img src={Mobile3} className="flex justify-between items-start text-center w-[64%]" />
                </div>
                <div className="flex gap-2 ">
                  <img src={Mobile4} className="flex justify-between items-start text-center w-[33%]" />
                  <img src={Mobile5} className="flex justify-between items-start text-center w-[65%]" />
                </div>
                <div className="w-full flex items-end justify-end mt-16 mb-4">
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

export default T2;
