import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/digitalMedia/DM3/dm3-1.webp";
import Picture1 from "../../../assets/images/works/digitalMedia/DM3/1.webp";
import Picture2 from "../../../assets/images/works/digitalMedia/DM3/2.webp";
import Picture3 from "../../../assets/images/works/digitalMedia/DM3/3.webp";
import Picture4 from "../../../assets/images/works/digitalMedia/DM3/4.webp";
import Picture5 from "../../../assets/images/works/digitalMedia/DM3/5.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Framer from "../../../assets/images/framer.svg";
import Email from "../../../assets/images/email.svg";

const DM3 = () => {
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
                <Link to="/category/digital-media">
                  <span className="italic font-caslon-condensed text-custom-purple">Digital Media</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:text-2lg xl:text-2xl lg:mt-8 xl:mt-20 lg:mb-2 xl:mb-3"></div>
          <div className="flex lg:mb-6 xl:mb-12">
            <div className="w-[58%] flex flex-col justify-between">
              <div className="flex-col">
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">When AI Meets Photography</p>
              </div>
              <div className="flex-col self-end">
                <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em]">Sharen Angelina</p>
                <div className="flex">
                  <div className="w-[35%]">
                    <div className="flex mb-2">
                      <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">sharenangelinaworks@gmail.com</p>
                    </div>
                    <div className="flex mb-2">
                      <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Sharen Angelina</p>
                    </div>
                    <div className="flex">
                      <img src={Framer} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">sharenangelina.com</p>
                    </div>
                  </div>
                  <div className="w-[5%]"></div>
                  <div className="w-[60%]">
                    <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                      Perancangan ini mendalami mengenai proses pemakaian Artificial Intelligence (AI) dalam memproses karya foto commercial. Di era saat ini kemajuan teknologi sudah merambah di industri kreatif dengan hadirnya teknologi AI dalam bentuk aplikasi yang dapat digunakan dengan mudah
                      oleh para pelaku kreatif. Dengan kemudahan yang dihadirkan oleh AI membawa perubahan atau inovasi terhadap cara fotografer mengolah suatu karya foto komersial. Di dunia kreatif khususnya fotografi komersial sangat memperhatikan aspek ketelitian foto yang tinggi, kecepatan dalam
                      pemrosesan foto dan kesesuaian pemrosesan foto dengan permintaan klien. Pemanfaatan AI dalam proses penyuntingan dapat membantu proses kerja fotografer agar lebih efisien dan menyelesaikan masalah produksi secara kreatif.
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
                Tujuan dari perancangan ini adalah untuk merancang foto komersial dengan memanfaatkan AI dalam proses pasca produksi yaitu tahap penyuntingan foto. Metode penelitian yang akan digunakan yaitu kualitatif dengan melakukan observasi dan wawancara langsung kepada narasumber. Peneliti
                akan mencari data sebanyak-banyaknya untuk mendapatkan hasil yang maksimal serta mendalam terhadap pemahaman yang diteliti. Berdasarkan hasil observasi dan wawancara ditemukan bahwa dengan memanfaatkan teknologi AI dapat meningkatkan kreatifitas fotografer dalam mengolah foto,
                meningkatkan keefektifitasan waktu dalam menyelesaikan proses penyuntingan foto dan AI memberikan kesempatan untuk memperbaiki keterbatasan produksi dengan penyuntingan foto. Namun didapati juga beberapa rintangan saat memakai AI seperti ketidaksesuaian hasil gambar dengan perintah
                yang diberikan, hasil generasi gambar yang memiliki pixel yang kurang besar sehingga gambar yang dihasilkan tidak tajam.
              </p>
            </div>
          </div>
          <div className="flex flex-row relative gap-5 lg:mb-16 xl:mb-20">
            <div className="w-[56%] flex justify-end gap-5">
              <img src={Picture2} className="flex justify-between items-start text-center w-[40%]" />
              <div className="w-[40%] flex flex-col gap-5">
                <img src={Picture3} className="flex justify-between items-start text-center w-full" />
                <img src={Picture4} className="flex justify-between items-start text-center w-full" />
              </div>
            </div>
            <div className="w-[44%] flex justify-between">
              <img src={Picture5} className="flex justify-between items-start text-center w-[51%]" />
              <p className="self-end font-light underline font-jakarta-sans text-custom-purple text-justify xl:text-[1.5em]">
                <Link to="/category">more works</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default DM3;
