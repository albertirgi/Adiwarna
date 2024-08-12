import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/graphicDesign/GD1/gd1-1.webp";
import Picture1 from "../../../assets/images/works/graphicDesign/GD1/1.webp";
import Picture2 from "../../../assets/images/works/graphicDesign/GD1/2.webp";
import Picture3 from "../../../assets/images/works/graphicDesign/GD1/3.webp";
import Picture4 from "../../../assets/images/works/graphicDesign/GD1/4.webp";
import Picture5 from "../../../assets/images/works/graphicDesign/GD1/5.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Email from "../../../assets/images/email.svg";

const GD1 = () => {
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
                <Link to="/category/graphic-design">
                  <span className="italic font-caslon-condensed text-custom-purple">Graphic Design</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:text-2lg xl:text-2xl lg:mt-8 xl:mt-20 lg:mb-2 xl:mb-3"></div>
          <div className="flex lg:mb-6 xl:mb-12">
            <div className="w-[58%] flex flex-col justify-between">
              <div className="flex-col">
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">Amborasa</p>
                <a href="https://drive.google.com/drive/folders/1iKccJ92r2YPDK5fITrGUQhFIon44hh1W" target="_blank" rel="noreferrer">
                  <div className="flex mt-2">
                    <img src={Play} className="flex justify-between items-start text-center w-[3%] lg:mr-2 xl:mr-3" />
                    <p className="font-light font-inter text-custom-purple italic underline leading-tight lg:text-[1em] xl:text-[1.2em]">Watch Video</p>
                  </div>
                </a>
              </div>
              <div className="flex-col self-end">
                <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em]">Fiorella Chelsea</p>
                <div className="flex">
                  <div className="w-[25%]">
                    <div className="flex">
                      <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">fiorellachelsea5@gmail.com</p>
                    </div>
                    <div className="flex mt-1">
                      <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="italic font-extralight font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Fiorella Chelsea</p>
                    </div>
                  </div>
                  <div className="w-[5%]"></div>
                  <div className="w-[70%]">
                    <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                      Rempah-rempah merupakan warisan budaya Indonesia yang masih digunakan hingga saat ini. Namun, masih banyak Generasi Z yang kurang mengenal rempah-rempah karena mereka jarang melihat dan menggunakannya secara langsung selama beraktivitas. Karena itu, board game Amborasa hadir
                      sebagai media edukasi untuk memperkenalkan 20 jenis rempah-rempah di Indonesia. Amborasa merupakan singkatan dari “Amboja Rempah Nusantara”. Kata “Amboja” diambil dari bahasa Sansekerta yang bermakna menjamu makanan. Secara keseluruhan, “Amborasa” artinya adalah menjamu makanan
                      yang kaya akan rempah Nusantara. Board game ini dapat dimainkan oleh 2-4 pemain secara individu dan 1 orang game master dengan durasi di atas 45 menit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[4.5%]"></div>
            <img src={Profile} className="flex justify-between items-start text-center w-[37.5%]" alt="Picture1" />
          </div>

          <div className="flex gap-16 lg:mb-5 xl:mb-7">
            <img src={Picture1} className="flex justify-between items-start text-center w-[50%]" />
            <div className="w-[50%]">
              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                Secara garis besar, board game Amborasa mengajak para pemain untuk menjamu idola favorit mereka dengan hidangan khas Indonesia yang penuh rempah. Para pemain didorong untuk mengenali berbagai rempah yang dijual dan yang akan digunakan untuk ‘memasak’ sesuai resep yang diambil. Karena
                stok sangat terbatas, para pemain harus menawar harga setinggi-tingginya demi mendapatkan rempah yang diinginkan. Selain menawarkan interaksi langsung dengan miniatur replika rempah-rempah, Amborasa juga memberikan edukasi seputar bahan-bahan masakan serta teknik dasar pengolahan
                rempah yang berbeda-beda.
              </p>
            </div>
          </div>
          <div className="flex gap-5 lg:mb-16 xl:mb-20">
            <img src={Picture2} className="flex justify-between items-start text-center w-[25%]" />
            <div className="w-[20%]">
              <img src={Picture3} className="flex justify-between items-start text-center w-[100%] mb-2" />
              <img src={Picture4} className="flex justify-between items-start text-center w-[100% mt-3" />
            </div>
            <img src={Picture5} className="flex justify-between items-start text-center w-[55%] h-fit" />
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

export default GD1;
