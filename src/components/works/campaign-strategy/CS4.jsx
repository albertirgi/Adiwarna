import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/campaignStrategy/CS4/cs4-1.webp";
import Picture1 from "../../../assets/images/works/campaignStrategy/CS4/1.webp";
import Picture2 from "../../../assets/images/works/campaignStrategy/CS4/2.webp";
import Picture3 from "../../../assets/images/works/campaignStrategy/CS4/3.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Behance from "../../../assets/images/behance.svg";
import Email from "../../../assets/images/email.svg";
const CS4 = () => {
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
                <Link to="/category/campaign-strategy">
                  <span className="italic font-caslon-condensed text-custom-purple">Campaign Strategy</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:text-2lg xl:text-2xl lg:mt-8 xl:mt-20 lg:mb-2 xl:mb-3"></div>
          <div className="flex lg:mb-6 xl:mb-12">
            <div className="w-[58%] flex flex-col justify-between">
              <div className="flex-col">
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">Harmony Inside & Out</p>
              </div>
              <div className="flex-col self-end">
                <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em]">Michelle Aldorino</p>
                <div className="flex">
                  <div className="w-[25%]">
                    <div className="flex mb-2">
                      <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">michellealdorino29@gmail.com</p>
                    </div>
                    <div className="flex mb-2">
                      <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Michelle Aldorino</p>
                    </div>
                    <div className="flex">
                      <img src={Behance} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Vanessa Tan</p>
                    </div>
                  </div>
                  <div className="w-[10%]"></div>
                  <div className="w-[65%]">
                    <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                      Citra tubuh adalah “kombinasi dari pikiran dan perasaan yang dimiliki mengenai tubuh sendiri” yang dipengaruhi oleh faktor internal yaitu pribadi dan faktor eksternal yaitu lingkungan. 61,5% dari anak- anak dan remaja perempuan Indonesia memiliki citra tubuh yang negatif.
                      Merasa bahwa penampilan mereka adalah sebuah masalah yang harus diperbaiki. Citra tubuh ini memiliki banyak efek terutama pada harga diri para remaja. Remaja mengalami perubahan fisik dan psikologis yang paling drastis dan mudah terpengaruh dengan lingkungan mereka. Kepercayaan
                      diri yang di kembangkan pada masa remaja memiliki efek besar dan dampak yang sulit diperbaiki, maka itu remaja dengan citra tubuh rendah lebih rentan dalam mengembangkan kebiasaan tidak sehat seputar pola makan, olahraga, perkembangan gangguan mental dan gangguan makan. Maka
                      itu perancangan ini memberikan solusi yaitu buku interaktif yang bertujuan untuk membantu remaja perempuan mengatasi citra tubuh negatif dan meningkatkan citra tubuh positif.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[4.5%]"></div>
            <img src={Profile} className="flex justify-between items-start text-center w-[37.5%]" alt="Picture1" />
          </div>

          <div className="flex gap-8 lg:mb-5 xl:mb-7 justify-end">
            <div className="w-[60%] flex flex-col ">
              <img src={Picture1} className="flex justify-between items-start text-center" />
              <img src={Picture2} className="flex justify-between self-end text-center w-[43%] h-fit" />
            </div>
            <div className="w-[38%] flex flex-col">
              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                Untuk mencapai tujuan ini buku akan menjelaskan mengenai citra tubuh, media literacy, nutrisi, olahraga, dan lain- lainnya. Menggunakan ilustrasi untuk mendampingi informasi dan latihan menulis, menggambar, dan menempelkan stiker untuk mendorong pelajarannya dengan lebih baik dan
                efektif. Buku ini juga akan dipromosikan melalui sosial media dan dijual dalam toko online agar dapat dikenal oleh konsumen dan dapat berpartisipasi menjadi solusi secara nyata dalam membantu meningkatkan citra tubuh positif para remaja perempuan Indonesia.
              </p>
              <img src={Picture3} className="flex justify-between items-start text-center w-full h-fit mt-auto" />
            </div>
          </div>
          <div className="flex justify-end gap-5 lg:mb-16 xl:mb-20"></div>
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

export default CS4;
