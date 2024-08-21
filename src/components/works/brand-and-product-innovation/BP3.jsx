import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/brandProduct/BP3/bp3-1.webp";
import Picture1 from "../../../assets/images/works/brandProduct/BP3/1.webp";
import Picture2 from "../../../assets/images/works/brandProduct/BP3/2.webp";
import Picture3 from "../../../assets/images/works/brandProduct/BP3/3.webp";
import Picture4 from "../../../assets/images/works/brandProduct/BP3/4.webp";
import Picture5 from "../../../assets/images/works/brandProduct/BP3/5.webp";
import Mobile1 from "../../../assets/images/works/brandProduct/BP3/mobile/1.webp";
import Mobile2 from "../../../assets/images/works/brandProduct/BP3/mobile/2.webp";
import Mobile3 from "../../../assets/images/works/brandProduct/BP3/mobile/3.webp";
import Mobile4 from "../../../assets/images/works/brandProduct/BP3/mobile/4.webp";
import Mobile5 from "../../../assets/images/works/brandProduct/BP3/mobile/5.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Email from "../../../assets/images/email.svg";

const BP3 = () => {
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
                  <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">HikeIndo</p>
                </div>
                <div className="flex-col self-end">
                  <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em]">Natasha Wisheilla</p>
                  <div className="flex">
                    <div className="w-[25%]">
                      <div className="flex">
                        <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">wisheillanatasha@gmail.com</p>
                      </div>
                    </div>
                    <div className="w-[5%]"></div>
                    <div className="w-[70%]">
                      <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                        Sebanyak 9.942.004 turis asing mengunjungi Indonesia dari Januari hingga Oktober 2023, terutama untuk menikmati keindahan alam, dengan 46,72% memilih Bali sebagai destinasi utama. Meskipun banyak daerah lain di Indonesia, seperti tempat hiking di Jawa Timur, juga menawarkan
                        keindahan alam, awareness turis asing terhadap potensi wisata di daerah tersebut masih rendah. Hiking populer di kalangan turis asing, terutama dari Australia, dan dapat meningkatkan ekonomi lokal di berbagai daerah pegunungan di Indonesia. Kurangnya informasi dalam bahasa
                        Inggris tentang lokasi hiking di Jawa Timur di internet menjadi salah satu hambatan. Maka dari itu, prototype aplikasi HikeIndo dapat menjadi solusi yang menyediakan informasi lengkap tentang lokasi hiking di Jawa Timur dapat membantu turis asing dan mendorong sektor
                        pariwisata di luar Bali.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[4.5%]"></div>
              <img src={Profile} className="flex justify-between items-start text-center w-[37.5%]" alt="Picture1" />
            </div>
            <div className="flex gap-5 lg:mb-16 xl:mb-20">
              <div className="w-[40%]">
                <img src={Picture1} className="flex justify-between items-start text-center" />
              </div>
              <div className="w-[19%]">
                <img src={Picture2} className="flex justify-between items-start text-center w-[100%] mb-2" />
              </div>
              <div className="w-[19%]">
                <img src={Picture3} className="flex justify-between items-start text-center w-[100%] mb-2" />
                <img src={Picture4} className="flex justify-between items-start text-center w-[100% mt-3" />
              </div>
              <div className="w-[19%] self-end">
                <img src={Picture5} className="flex justify-between items-start text-center w-[100%] mb-2" />
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
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight text-[12px] mt-2 mb-10">HikeIndo</p>
                <div className="flex flex-col">
                  <p className="font-extralight font-caslon-condensed text-custom-purple text-[8px] mb-1">Natasha Wisheilla</p>
                  <div className="flex">
                    <img src={Email} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="font-extralight italic font-caslon-condensed text-custom-purple text-[7px]">wisheillanatasha@gmail.com</p>
                  </div>
                </div>
              </div>
              <img src={Profile} className="flex justify-between items-start text-center w-[35%]" alt="Picture1" />
            </div>
            <div className="flex flex-col pl-10 mt-2">
              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px]">
                Sebanyak 9.942.004 turis asing mengunjungi Indonesia dari Januari hingga Oktober 2023, terutama untuk menikmati keindahan alam, dengan 46,72% memilih Bali sebagai destinasi utama. Meskipun banyak daerah lain di Indonesia, seperti tempat hiking di Jawa Timur, juga menawarkan keindahan
                alam, awareness turis asing terhadap potensi wisata di daerah tersebut masih rendah. Hiking populer di kalangan turis asing, terutama dari Australia, dan dapat meningkatkan ekonomi lokal di berbagai daerah pegunungan di Indonesia. Kurangnya informasi dalam bahasa Inggris tentang
                lokasi hiking di Jawa Timur di internet menjadi salah satu hambatan. Maka dari itu, prototype aplikasi HikeIndo dapat menjadi solusi yang menyediakan informasi lengkap tentang lokasi hiking di Jawa Timur dapat membantu turis asing dan mendorong sektor pariwisata di luar Bali.
              </p>
              <div className="flex flex-col mt-2">
                <div className="flex gap-2 h-fit">
                  <img src={Mobile1} className="flex justify-between items-start text-center w-[50%] h-fit" />
                  <div className="flex flex-col w-[25%] pt-1  ">
                    <img src={Mobile2} className="flex justify-between items-start text-center h-[47%] w-fit" />
                    <img src={Mobile2} className="flex justify-between items-start text-center h-[47%] w-fit" />
                  </div>
                </div>
                <div className="flex w-[50%]">
                  <img src={Mobile3} className="flex justify-between items-start text-center w-[50%] h-fit" />
                  <img src={Mobile4} className="flex justify-between items-start text-center w-[50%] h-fit" />
                </div>
                <div className="w-full flex items-end justify-end mt-8 mb-4">
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

export default BP3;
