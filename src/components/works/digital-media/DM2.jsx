import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/digitalMedia/DM2/dm2-1.webp";
import Picture1 from "../../../assets/images/works/digitalMedia/DM2/1.webp";
import Picture2 from "../../../assets/images/works/digitalMedia/DM2/2.webp";
import Picture3 from "../../../assets/images/works/digitalMedia/DM2/3.webp";
import Picture4 from "../../../assets/images/works/digitalMedia/DM2/4.webp";
import Picture5 from "../../../assets/images/works/digitalMedia/DM2/5.webp";
import Picture6 from "../../../assets/images/works/digitalMedia/DM2/6.webp";
import Mobile1 from "../../../assets/images/works/digitalMedia/DM2/mobile/1.webp";
import Mobile2 from "../../../assets/images/works/digitalMedia/DM2/mobile/2.webp";
import Mobile3 from "../../../assets/images/works/digitalMedia/DM2/mobile/3.webp";
import Mobile4 from "../../../assets/images/works/digitalMedia/DM2/mobile/4.webp";
import Mobile5 from "../../../assets/images/works/digitalMedia/DM2/mobile/5.webp";
import Mobile6 from "../../../assets/images/works/digitalMedia/DM2/mobile/6.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Behance from "../../../assets/images/behance.svg";
import Email from "../../../assets/images/email.svg";

const DM2 = () => {
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
              <div className="w-[58%] flex flex-col justify-between">
                <div className="flex-col">
                  <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">Staying Human</p>
                  <a href="https://drive.google.com/file/d/18JXWLUct63vLeDu5kmL1W0-zf8f37hZq/view" target="_blank" rel="noreferrer">
                    <div className="flex mt-2">
                      <img src={Play} className="flex justify-between items-start text-center w-[3%] lg:mr-2 xl:mr-3" />
                      <p className="font-light font-inter text-custom-purple italic underline leading-tight lg:text-[1em] xl:text-[1.2em]">Watch Video</p>
                    </div>
                  </a>
                </div>
                <div className="flex-col self-end">
                  <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em]">Priscillia Iva</p>
                  <div className="flex">
                    <div className="w-[35%]">
                      <div className="flex mb-2">
                        <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">priscillia.liustanto@gmail.com</p>
                      </div>
                      <div className="flex mb-2">
                        <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Priscillia Iva</p>
                      </div>
                      <div className="flex">
                        <img src={Behance} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Priscillia Iva</p>
                      </div>
                    </div>
                    <div className="w-[5%]"></div>
                    <div className="w-[60%]">
                      <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                        Staying Human adalah animasi cut-out 2D tentang etika yang baik dalam menggunakan generative artificial intelligence. Animasi ini bercerita tentang Felix, seorang mahasiswa yang dengan bersemangat mengutilisasikan CHICO, robot AI yang dapat mengerjakan tugasnya. Namun, ia
                        terlena dan menjadi malas, sampai suatu hari, ia mulai merasakan dampaknya. Untungnya, ada dosen dan teman-temannya yang siap menasihatinya.
                        <br />
                        <br /> Animasi ini didasarkan pada masalah etika yang ada pada generative AI, dimana AI tersebut sudah terbukti menggunakan database hasil 'curian', meliputi gambar, teks, suara, dan sebagainya. Namun, dapat ditarik sebuah garis yang dapat diterima dalam penggunaan generative
                        AI, yaitu tidak menggunakannya sebagai hasil akhir pengganti kreatifitas manusia, tidak menjadi malas, serta menggunakannya sesuai aturan dan hukum yang sudah berlaku.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[4.5%]"></div>
              <img src={Profile} className="flex justify-between items-start text-center w-[37.5%]" alt="Picture1" />
            </div>

            <div className="flex gap-16 lg:mb-5 xl:mb-7">
              <img src={Picture1} className="flex justify-between items-start text-center w-[57%]" />
              <div className="w-[43%]">
                <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                  Akan tetapi, perlu diingat bahwa pola pikir manusia dan prosesnya akan selalu lebih baik daripada AI, sehingga jika ingin menggunakan AI, gunakan seperlunya.
                  <br />
                  <br />
                  Animasi ini dibuat menggunakan Clip Studio Paint untuk aset, Adobe After Effects untuk animasi dan compositing, serta Adobe Illustrator untuk media pendukung.
                </p>
              </div>
            </div>
            <div className="flex justify-end  gap-5 lg:mb-7 xl:mb-5">
              <div className="w-[57%] flex justify-end gap-5">
                <img src={Picture2} className="flex justify-between items-start text-center w-[33%] h-fit" />
                <img src={Picture3} className="flex justify-between items-start text-center w-[36%] " />
              </div>
              <div className="w-[43%] flex flex-col gap-5">
                <div className="w-full flex gap-5">
                  <img src={Picture4} className="flex justify-between items-start text-center w-[48%]" />
                  <img src={Picture5} className="flex justify-between items-start text-center w-[48%]" />
                </div>
                <img src={Picture6} className="flex justify-between items-start text-center w-full h-fit" />
              </div>
            </div>
            <div className="flex flex-row relative gap-5 lg:mb-16 xl:mb-20">
              <div className="w-[56%] flex justify-end"></div>
              <div className="w-[44%] flex justify-end">
                <p className="self-end font-light underline font-jakarta-sans text-custom-purple text-justify xl:text-[1.5em]">
                  <Link to="/category">more works</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="flex flex-col lg:hidden">
            <div className="flex mt-8">
              <div className="w-full h-full flex flex-col">
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight text-[12px] mt-2">Staying Human</p>
                <a href="https://drive.google.com/file/d/18JXWLUct63vLeDu5kmL1W0-zf8f37hZq/view" target="_blank" rel="noreferrer">
                  <div className="flex mt-1 mb-10">
                    <img src={Play} className="flex justify-between items-start text-center w-[4%] mr-1" />
                    <p className="font-light font-inter text-custom-purple italic underline leading-tight text-[8px]">Watch Video</p>
                  </div>
                </a>
                <div className="flex flex-col">
                  <p className="font-extralight font-caslon-condensed text-custom-purple text-[8px] mb-1">Priscillia Iva</p>
                  <div className="flex">
                    <img src={Email} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="font-extralight italic font-caslon-condensed text-custom-purple text-[7px]">priscillia.liustanto@gmail.com</p>
                  </div>
                  <div className="flex">
                    <img src={LinkedIn} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="italic font-extralight font-caslon-condensed text-custom-purple text-[7px]">Priscillia Iva</p>
                  </div>
                  <div className="flex">
                    <img src={Behance} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="italic font-extralight font-caslon-condensed text-custom-purple text-[7px]">Priscillia Iva</p>
                  </div>
                </div>
              </div>
              <img src={Profile} className="flex justify-between items-start text-center w-[35%]" alt="Picture1" />
            </div>
            <div className="flex flex-col pl-10 mt-2">
              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px]">
                Staying Human adalah animasi cut-out 2D tentang etika yang baik dalam menggunakan generative artificial intelligence. Animasi ini bercerita tentang Felix, seorang mahasiswa yang dengan bersemangat mengutilisasikan CHICO, robot AI yang dapat mengerjakan tugasnya. Namun, ia terlena dan
                menjadi malas, sampai suatu hari, ia mulai merasakan dampaknya. Untungnya, ada dosen dan teman-temannya yang siap menasihatinya.
              </p>

              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px] mt-2">
                Animasi ini didasarkan pada masalah etika yang ada pada generative AI, dimana AI tersebut sudah terbukti menggunakan database hasil 'curian', meliputi gambar, teks, suara, dan sebagainya. Namun, dapat ditarik sebuah garis yang dapat diterima dalam penggunaan generative AI, yaitu
                tidak menggunakannya sebagai hasil akhir pengganti kreatifitas manusia, tidak menjadi malas, serta menggunakannya sesuai aturan dan hukum yang sudah berlaku. Akan tetapi, perlu diingat bahwa pola pikir manusia dan prosesnya akan selalu lebih baik daripada AI, sehingga jika ingin
                menggunakan AI, gunakan seperlunya.
              </p>

              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px] mt-2">Animasi ini dibuat menggunakan Clip Studio Paint untuk aset, Adobe After Effects untuk animasi dan compositing, serta Adobe Illustrator untuk media pendukung.</p>

              <div className="flex gap-2 flex-col mt-2">
                <div className="flex gap-2">
                  <div className="flex flex-col w-[36.5%] gap-2">
                    <img src={Mobile1} className="flex justify-between items-start text-center w-full h-fit" />
                    <img src={Mobile2} className="flex justify-between items-start text-center w-full h-fit" />
                    <img src={Mobile3} className="flex justify-between items-start text-center w-full h-fit" />
                  </div>
                  <div className="flex flex-col w-[61.5%] gap-2">
                    <img src={Mobile4} className="flex justify-between items-start text-center w-[68%] h-fit" />
                    <img src={Mobile5} className="flex justify-between items-start text-center w-full h-fit" />
                  </div>
                </div>

                <img src={Mobile6} className="flex justify-between items-start text-center w-[70%] h-fit" />
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

export default DM2;
