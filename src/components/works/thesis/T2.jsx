import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/thesis/T2/t2-1.webp";
import Picture1 from "../../../assets/images/works/thesis/T2/1.webp";
import Picture2 from "../../../assets/images/works/thesis/T2/2.webp";
import Picture3 from "../../../assets/images/works/thesis/T2/3.webp";
import Picture4 from "../../../assets/images/works/thesis/T2/4.webp";
import Picture5 from "../../../assets/images/works/thesis/T2/5.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Behance from "../../../assets/images/behance.svg";
import Email from "../../../assets/images/email.svg";

const T2 = () => {
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
                                    Analisis Strategi Rebranding Exsport pada Tahun 2020 terhadap Perubahan Target Market yang Dituju
                                </p>
                            </div>
                            <div className="flex-col self-end">
                                <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mb-2">
                                    Vania Jovita
                                </p>
                                <div className="flex">
                                    <div className="w-[25%]">
                                        <div className="flex mb-2">
                                            <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                                            <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">
                                                vaniajovitaaa@gmail.com
                                            </p>
                                        </div>
                                        <div className="flex mb-2">
                                            <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                                            <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">
                                                Vania Jovita
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-[10%]"></div>
                                    <div className="w-[70%]">
                                        <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                                            Fashion menjadi bagian penting dari gaya hidup dan identitas yang tidak terpisahkan terutama bagi Gen Z saat ini. Perkembangan fashion yang terus meningkat pesat di Indonesia didorong oleh perubahan tren dan pola perilaku yang terjadi dalam masyarakat. Hal ini kemudian memicu persaingan sengit antar brand dalam industri fashion untuk berlomba menghasilkan produk yang trendi sesuai dengan perkembangan zaman. Oleh karena itu, ditengah ketatnya persaingan, sebuah brand membutuhkan strategi branding yang tepat agar mudah dikenali oleh target konsumen. Tujuan penelitian ini adalah menganalisis strategi rebranding yang telah dirancang oleh Exsport agar tetap relevan dan bertahan di tengah perubahan zaman dengan memahami pola perilaku konsumen yang dituju saat ini. Dengan menggunakan metode analisis kualitatif deskriptif serta teknik pengumpulan data melalui wawancara, observasi dan studi literatur, hasil dari penelitian ini menunjukan bahwa rebranding dapat menjadi langkah strategis dalam mempertahankan dan mengembangkan Exsport.
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
                                    Berdasarkan analisis, proses rebranding Exsport didorong oleh faktor internal berkaitan dengan struktur perusahaan dengan hasil penjualan didominasi oleh konsumen perempuan yang sejalan dengan faktor eksternal dimana terjadi peningkatan minat konsumen dikalangan Gen Z terhadap trend fashion terkini. Strategi rebranding Exsport kemudian diterapkan melalui transformasi identitas visual dengan adanya pergantian "wajah" kearah yang dinamis dan eksploratif sesuai dengan karakteristik target market Exsport tanpa meninggalkan esensi dari brand soul yang dimiliki sebagai "The Explorers".
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

export default T2;
