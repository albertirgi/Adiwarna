import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/thesis/T1/t1-1.webp";
import Picture1 from "../../../assets/images/works/thesis/T1/1.webp";
import Picture2 from "../../../assets/images/works/thesis/T1/2.webp";
import Picture3 from "../../../assets/images/works/thesis/T1/3.webp";
import Picture4 from "../../../assets/images/works/thesis/T1/4.webp";
import Picture5 from "../../../assets/images/works/thesis/T1/5.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Behance from "../../../assets/images/behance.svg";
import Email from "../../../assets/images/email.svg";

const T1 = () => {
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
                                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">
                                    Analisis Semiotik Makna Karakter Chinese Lucky Cat pada Logo Restoran Chinese Fast Food Da Jia Hao
                                </p>
                            </div>
                            <div className="flex-col self-end">
                                <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mb-2">
                                    Christabel Amanda
                                </p>
                                <div className="flex">
                                    <div className="w-[25%]">
                                        <div className="flex mb-2">
                                            <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                                            <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">
                                                chrixamanda14@gmail.com
                                            </p>
                                        </div>
                                        <div className="flex mb-2">
                                            <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                                            <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">
                                                Christabel Amanda
                                            </p>
                                        </div>
                                        <div className="flex mb-2">
                                            <img src={Behance} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                                            <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">
                                                Christabel Amanda
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-[10%]"></div>
                                    <div className="w-[70%]">
                                        <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                                            Dalam menghadapi kompetisi di dunia bisnis, sebuah brand memerlukan strategi branding yang kuat. Proses branding sebuah brand merupakan proses yang penting terutama dalam pembuatan logo. Logo harus mampu mewakilkan esensi brand. Logo terdapat banyak jenisnya, salah satunya adalah pictorial marks logo yang merupakan logo yang menggunakan gambar atau icon sebagai visual utamanya. Suatu gambar pada logo dapat mewakilkan banyak nilai dan pesan pada audiensnya. Dengan pendekatan semiotik Roland Barthes, logo dapat dikenali lebih mendalam dari segi pemaknaannya. Suatu logo dapat dikaji dari sisi background, object, dan pose, dengan tingkat pemaknaan konotasi, denotasi, mitos, dan ideologi.
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
                                    Objek yang akan diteliti dalam penelitian ini adalah karakter Chinese Lucky Cat pada logo restoran chinese fast food Da Jia Hao. Karakter yang terdapat pada logo berasal dari sejarah yang panjang dan mewakili banyak pesan pada setiap bentuk dan objek dari karakter. Keberadaanya menjadi sebuah ikon yang dikenal masyarakat melalui perkembangan dan pemaknaan yang berbeda-beda. Logo Da Jia Hao membawakan representasi pemilik usahanya dan kepercayaannya dalam karakter untuk membawa keberuntungan, disampaikan melalui karakter dan objeknya yang dikembangkan menjadi logo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 lg:mb-16 xl:mb-20 mt-5 justify-end">
                    <div className="w-[30%]">
                            <img src={Picture2} />
                        </div>
                        <div className="w-[30%]">
                            <img src={Picture3} />
                        </div>
                        <div className="w-[40%]">
                            <img src={Picture4} />
                        </div>
                        <div className="w-[30%]">
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

export default T1;
