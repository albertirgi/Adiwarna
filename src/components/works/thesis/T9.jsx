import { Link } from "react-router-dom";
import Email from "../../../assets/images/email.svg";
import Framer from "../../../assets/images/framer.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Picture1 from "../../../assets/images/works/thesis/T9/1.webp";
import Picture2 from "../../../assets/images/works/thesis/T9/2.webp";
import Picture3 from "../../../assets/images/works/thesis/T9/3.webp";
import Picture4 from "../../../assets/images/works/thesis/T9/4.webp";
import Picture5 from "../../../assets/images/works/thesis/T9/5.webp";
import Mobile1 from "../../../assets/images/works/thesis/T9/mobile/1.webp";
import Mobile2 from "../../../assets/images/works/thesis/T9/mobile/2.webp";
import Mobile3 from "../../../assets/images/works/thesis/T9/mobile/3.webp";
import Mobile4 from "../../../assets/images/works/thesis/T9/mobile/4.webp";
import Mobile5 from "../../../assets/images/works/thesis/T9/mobile/5.webp";
import Profile from "../../../assets/images/works/thesis/T9/t9-1.webp";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";

const T9 = () => {
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
                  <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.1em]">Analisis Usabilitas pada Desain Website Mobile Modico dengan Menggunakan Teori Jakob Nielsen</p>
                </div>
                <div className="flex-col self-end">
                  <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mb-2">Olyvia Irene Hunggianto</p>
                  <div className="flex">
                    <div className="w-[25%]">
                      <div className="flex mb-2">
                        <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">olyviairenee@gmail.com</p>
                      </div>
                      <div className="flex mb-2">
                        <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.7em] xl:text-[0.85em]">Olyvia Irene Hunggianto</p>
                      </div>
                      <div className="flex mb-2">
                        <img src={Framer} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">olyviairene.framer.website</p>
                      </div>
                    </div>
                    <div className="w-[15%]"></div>
                    <div className="w-[70%]">
                      <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                        Sebuah website harus dapat memiliki tampilan yang menarik agar dikunjungi oleh pengguna internet. Namun masih banyak website yang lebih mementingkan aspek estetika daripada aspek usabilitas pada desain websitenya. Sebuah website tidak hanya membutuhkan tampilan visual yang
                        menarik namun juga dapat menghasilkan pengalaman pengguna yang baik. Pada penelitian ini akan dilakukan pengujian usabilitas atau usability testing terhadap desain website mobile Modico untuk mengetahui apakah desain website mobile Modico sudah memiliki usabilitas yang baik
                        atau tidak berdasarkan teori Jakob Nielsen. Pada teori Jakob Nielsen ini terdapat lima kriteria usabilitas yang menentukan sebuah website sudah memiliki usabilitas yang baik atau tidak.
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
                <div className="w-[57.8%]">
                  <img src={Picture1} />
                </div>
                <div className="w-[40.4%]">
                  <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                    Tahapan dari penelitian ini adalah dengan meminta partisipan mencoba menggunakan desain website mobile Modico dengan menyelesaikan serangkaian tugas dan menganalisis hasil pengujian terhadap lima kriteria usabilitas Jakon Nielsen. Hasil yang didapat adalah desain website mobile
                    Modico sudah memenuhi lima kriteria usabilitas yang menandakan website ini sudah memiliki usabilitas yang baik.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <img src={Picture2} />
                </div>
                <div>
                  <img src={Picture3} />
                </div>
                <div className="flex flex-col gap-5">
                  <img src={Picture4} />
                  <div className="w-[70%]">
                    <img src={Picture5} />
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

          {/* Mobile View */}
          <div className="flex flex-col lg:hidden">
            <div className="flex mt-8">
              <div className="w-full h-full flex flex-col">
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight text-[12px] mt-2 mb-5 pr-2">Analisis Usabilitas pada Desain Website Mobile Modico dengan Menggunakan Teori Jakob Nielsen</p>
                <div className="flex flex-col">
                  <p className="font-extralight font-caslon-condensed text-custom-purple text-[8px] mb-1">Olyvia Irene Hunggianto</p>
                  <div className="flex">
                    <img src={Email} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="font-extralight italic font-caslon-condensed text-custom-purple text-[7px]">olyviairenee@gmail.com</p>
                  </div>
                  <div className="flex">
                    <img src={LinkedIn} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="italic font-extralight font-caslon-condensed text-custom-purple text-[7px]">Olyvia Irene Hunggianto</p>
                  </div>
                  <div className="flex">
                    <img src={Framer} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="italic font-extralight font-caslon-condensed text-custom-purple text-[7px]">olyviairene.framer.website</p>
                  </div>
                </div>
              </div>
              <img src={Profile} className="flex justify-between items-start text-center w-[35%]" alt="Picture1" />
            </div>
            <div className="flex flex-col pl-10 mt-2">
              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px]">
                Sebuah website harus dapat memiliki tampilan yang menarik agar dikunjungi oleh pengguna internet. Namun masih banyak website yang lebih mementingkan aspek estetika daripada aspek usabilitas pada desain websitenya. Sebuah website tidak hanya membutuhkan tampilan visual yang menarik
                namun juga dapat menghasilkan pengalaman pengguna yang baik. Pada penelitian ini akan dilakukan pengujian usabilitas atau usability testing terhadap desain website mobile Modico untuk mengetahui apakah desain website mobile Modico sudah memiliki usabilitas yang baik atau tidak
                berdasarkan teori Jakob Nielsen. Pada teori Jakob Nielsen ini terdapat lima kriteria usabilitas yang menentukan sebuah website sudah memiliki usabilitas yang baik atau tidak.
              </p>

              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px] mt-2">
                Tahapan dari penelitian ini adalah dengan meminta partisipan mencoba menggunakan desain website mobile Modico dengan menyelesaikan serangkaian tugas dan menganalisis hasil pengujian terhadap lima kriteria usabilitas Jakon Nielsen. Hasil yang didapat adalah desain website mobile
                Modico sudah memenuhi lima kriteria usabilitas yang menandakan website ini sudah memiliki usabilitas yang baik.
              </p>

              <div className="flex flex-col gap-2 mt-2 w-[100%]">
                <img src={Mobile1} className="flex justify-between items-start text-center w-[87%]" />
                <div className="flex gap-2 w-[87%]">
                  <img src={Mobile2} className="flex justify-between items-start text-center w-[43%]" />
                  <img src={Mobile3} className="flex justify-between items-start text-center w-[55%]" />
                </div>
                <div className="flex flex-col w-[70%] gap-2 self-end">
                  <img src={Mobile4} className="flex justify-between self-start text-center w-[100%]" />
                  <img src={Mobile5} className="flex justify-between self-start text-center w-[55%]" />
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

export default T9;
