import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/digitalMedia/DM1/dm1-1.webp";
import Picture1 from "../../../assets/images/works/digitalMedia/DM1/1.webp";
import Picture2 from "../../../assets/images/works/digitalMedia/DM1/2.webp";
import Picture3 from "../../../assets/images/works/digitalMedia/DM1/3.webp";
import Picture4 from "../../../assets/images/works/digitalMedia/DM1/4.webp";
import Picture5 from "../../../assets/images/works/digitalMedia/DM1/5.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Behance from "../../../assets/images/behance.svg";
import Email from "../../../assets/images/email.svg";

const DM1 = () => {
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
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">Pinjol Benjol</p>
                <a href="https://drive.google.com/file/d/1J7vwDwQC4zdiv9uDTdTKwWNUuK7EQ1eA/view" target="_blank" rel="noreferrer">
                  <div className="flex mt-2">
                    <img src={Play} className="flex justify-between items-start text-center w-[3%] lg:mr-2 xl:mr-3" />
                    <p className="font-light font-inter text-custom-purple italic underline leading-tight lg:text-[1em] xl:text-[1.2em]">Watch Video</p>
                  </div>
                </a>
              </div>
              <div className="flex-col self-end">
                <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em]">Katya Jocelyn</p>
                <div className="flex">
                  <div className="w-[35%]">
                    <div className="flex">
                      <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">katya.tan@gmail.com</p>
                    </div>
                  </div>
                  <div className="w-[5%]"></div>
                  <div className="w-[60%]">
                    <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                      Kemajuan teknologi telah mempermudah transaksi dalam kehidupan sehari-hari, terutama melalui layanan fintech seperti pinjaman online. Layanan ini memungkinkan pengguna untuk meminjam dana sementara dengan mudah. Kelompok sosial yang cakap dalam memanfaatkan teknologi dan
                      memiliki gaya hidup hedonis didominasi oleh dewasa muda. Dorongan untuk menikmati hidup sering kali membuat mereka menggunakan layanan pinjaman tanpa berpikir panjang. Media sosial juga memicu perasaan FOMO (Fear Of Missing Out) pada dewasa muda, sehingga mereka menggunakan
                      layanan ini untuk memenuhi keinginan mereka. Namun, tanpa literasi keuangan yang memadai, pinjaman online dapat menjadi perangkap finansial.
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
                Banyak dewasa muda yang akhirnya terjerat utang karena tidak mampu membayar tagihan berbunga tinggi. Dalam upaya mencari solusi cepat, mereka sering kali menggunakan layanan pinjaman lainnya, menciptakan siklus utang yang berkelanjutan. Tekanan psikologis akibat utang yang menumpuk
                sering kali mendorong dewasa muda melakukan tindakan ekstrem, seperti mengakhiri hidup atau mencelakai orang lain. Untuk meningkatkan kesadaran akan bahaya pinjaman online dan mendorong literasi keuangan, penulis membuat film web-series berjudul "Pinjol Benjol". Film ini ditujukan
                untuk dewasa muda di kota Surabaya, agar mereka lebih memahami risiko layanan pinjaman online dan pentingnya literasi keuangan.
              </p>
            </div>
          </div>
          <div className="flex justify-end gap-5 lg:mb-7 xl:mb-5">
            <img src={Picture2} className="flex justify-between items-start text-center w-[31%]" />
            <img src={Picture3} className="flex justify-between items-start text-center w-[24%]" />
            <img src={Picture5} className="flex justify-between items-start text-center w-[42%]" />
          </div>
          <div className="flex flex-row relative gap-5 lg:mb-16 xl:mb-20">
            <div className="w-[56%] flex justify-end">
              <img src={Picture4} className="flex justify-between items-start text-center w-[70%]" />
            </div>
            <div className="w-[44%] flex justify-end">
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

export default DM1;
