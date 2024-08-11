import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/thesis/T3/t3-1.webp";
import Picture1 from "../../../assets/images/works/thesis/T3/1.webp";
import Picture2 from "../../../assets/images/works/thesis/T3/2.webp";
import Picture3 from "../../../assets/images/works/thesis/T3/3.webp";
import Picture4 from "../../../assets/images/works/thesis/T3/4.webp";
import Picture5 from "../../../assets/images/works/thesis/T3/5.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Behance from "../../../assets/images/behance.svg";
import Email from "../../../assets/images/email.svg";

const T3 = () => {
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
                                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.8em]">
                                    Analisis Pesan Komunikasi dan Semiotika Visual pada Iklan Komedi #LETMEEXPLAIN Seri Flashes padaYoutube Valorant
                                </p>
                            </div>
                            <div className="flex-col self-end">
                                <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mb-2">
                                    Kayla Federica Jiemesha
                                </p>
                                <div className="flex">
                                    <div className="w-[25%]">
                                        <div className="flex mb-2">
                                            <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                                            <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">
                                                federickayjie02@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-[10%]"></div>
                                    <div className="w-[70%]">
                                        <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                                            Munculnya game tidak lepas dari berkembangnya teknologi dan zaman. Untuk mengenalkan suatu game kepada masyarakat, diperlukan promosi melalui media iklan. Hal ini digunakan oleh Riot Games untuk mengenalkan game Valorant melalui video iklan YouTube dengan pesan yang kuat dan menarik sehingga mampu menarik minat penonton. Oleh karena itu, pembuatan sebuah video iklan game harus memperhatikan variabel-variabel yang digunakan dalam iklan tersebut, baik visual maupun non visual.
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
                                    Iklan Valorant #LetMeExplain seri Flashes ini menyampaikan pesan dengan cara yang berbeda, yaitu dengan menggunakan konteks perbandingan dunia nyata dan dunia game yang memberikan kesan unik dan menarik. Iklan ini bertujuan untuk memberikan informasi mengenai cara penggunaan skill flash milik karakter bernama Phoenix dan apa dampak serta manfaatnya di dalam game Valorant. Adanya humor di dalam iklan juga membuat iklan ini semakin menarik, bahkan para pemain yang menonton iklan ini dapat bernostalgia ketika iklan menunjukkan ekspresi para tokoh yang terkena flash. Maka melalui penelitian ini, diharapkan dapat mengetahui lebih dalam mengenai apa makna semiotika dan pesan komunikasi pada video iklan #LetMeExplain seri Flashes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 lg:mb-16 xl:mb-20 mt-5">
                        <div className="w-[41.5%]">
                            <img src={Picture2} />
                        </div>
                        <div className="w-[58.5%] flex flex-col gap-5">
                            <img src={Picture3} />
                            <div className="flex gap-5">
                                <div>
                                    <img src={Picture4} />
                                </div>
                                <div>
                                    <img src={Picture5} />
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

export default T3;
