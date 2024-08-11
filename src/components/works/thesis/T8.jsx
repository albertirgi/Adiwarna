import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/thesis/T8/t8-1.webp";
import Picture1 from "../../../assets/images/works/thesis/T8/1.webp";
import Picture2 from "../../../assets/images/works/thesis/T8/2.webp";
import Picture3 from "../../../assets/images/works/thesis/T8/3.webp";
import Picture4 from "../../../assets/images/works/thesis/T8/4.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Behance from "../../../assets/images/behance.svg";
import Email from "../../../assets/images/email.svg";

const T8 = () => {
    return (
        <div>
            <FixNavbar />
            <div className="bg-category bg-no-repeat bg-cover h-fit lg:px-14 xl:px-20">
                <div className="flex relative flex-col w-full mx-auto lg:max-w-[1024px] xl:max-w-[1440px]">
                    <div className="lg:text-2lg lg:mt-24 xl:text-2xl xl:mt-28">
                        <div className="flex flex-1 items-center justify-between">
                            <div>
                                <Link to="/category">
                                    <span className="font-medium font-jakarta-sans text-custom-purple lg:mr-1 xl:mr-2">
                                        currated
                                    </span>
                                    <span className="italic font-medium font-caslon-condensed text-custom-purple">
                                        works
                                    </span>
                                </Link>
                            </div>
                            <div>
                                <span className="italic font-caslon-condensed text-custom-purple">
                                    Thesis
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:text-2lg xl:text-2xl lg:mt-8 xl:mt-20 lg:mb-2 xl:mb-3"></div>
                    <div className="flex">
                        <div className="w-[58%] flex flex-col justify-between">
                            <div className="flex-col mb-5">
                                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.1em]">
                                    Analisis Guideline Penyusunan Strategi Fashion Photoshoot dari Dua Brand dengan Produk Serupa.
                                </p>
                            </div>
                            <div className="flex-col self-end">
                                <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mb-2">
                                    Merry Christin Sutedjo
                                </p>
                                <div className="flex">
                                    <div className="w-[25%]">
                                        <div className="flex mb-2">
                                            <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                                            <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">
                                                merrychrist.ness@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-[15%]"></div>
                                    <div className="w-[70%]">
                                        <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                                            Fashion brand photoshoot adalah usaha memasarkan produk pakaian atau aksesoris melalui media visual (Mike, 2023). Dalam program Creative Industry Internship (CII), mahasiswa/i berperan sebagai asisten fotografer, project manager, dan retoucher. Mentor magang, Jessica Immanuel, seorang fashion photographer, menghadapi dilema dalam menyusun konsep untuk dua brand dengan produk serupa. Ini menunjukkan perlunya guideline untuk meningkatkan efektivitas fotografer dalam mengeksekusi konsep photoshoot. Guideline yang baik harus sesuai dengan workflow fotografer, membantu mereka memahami brand dan menyusun konsep yang memenuhi kebutuhan klien. Penelitian ini bertujuan membuat guideline strategi fashion photoshoot untuk dua brand dengan produk serupa. Dengan metode kualitatif komparatif, penulis membandingkan workflow mentor magang dalam menyusun konsep untuk brand Frio dan First Time Round (FTR), menggunakan indikator kerangka pemikiran.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[4.5%]"></div>
                        <img src={Profile} className="flex justify-between items-start text-center w-[37.5%]" alt="Picture1" />
                    </div>
                    <div className="flex gap-5 lg:mt-6 xl:mt-12 lg:mb-16 xl:mb-20">
                        <div className="">
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-5">
                                    <div>
                                        <img src={Picture1} />
                                    </div>
                                    <div>
                                        <img src={Picture2} />
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <img src={Picture3} />
                                        <img src={Picture4} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col relative lg:pb-56 xl:pb-72">
                        <p className="self-end font-light underline font-jakarta-sans text-custom-purple text-justify xl:text-[1.5em]">
                            <Link to="/category">
                                more works
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default T8;
