import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/thesis/T6/t6-1.webp";
import Picture1 from "../../../assets/images/works/thesis/T6/1.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Behance from "../../../assets/images/behance.svg";
import Email from "../../../assets/images/email.svg";

const T6 = () => {
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
                                    Analisis Pentingnya Memiliki Ciri Khas Gaya Visual Fotografer terhadap Jenjang Karir Dunia Fotografi Fashion
                                </p>
                            </div>
                            <div className="flex-col self-end">
                                <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mb-2">
                                    Thomas Verdy Sutanto
                                </p>
                                <div className="flex">
                                    <div className="w-[25%]">
                                        <div className="flex mb-2">
                                            <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                                            <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">
                                                verdy.sutanto@gmail.com
                                            </p>
                                        </div>
                                        <div className="flex mb-2">
                                            <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                                            <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">
                                                verdy.sutanto
                                            </p>
                                        </div>
                                        <div className="flex mb-2">
                                            <img src={Behance} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                                            <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">
                                                Verdy Sutanto
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-[15%]"></div>
                                    <div className="w-[70%]">
                                        <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                                            Berkembangnya industri fashion photography menyebabkan fotografer tidak lagi bisa jika hanya mengandalkan skill fotografi untuk bertahan dan berkembang dalam industri. Adapun satu aspek krusial yang sering terabaikan, yaitu ciri khas gaya visual atau karakter visual seorang fotografer. Penelitian ini meneliti seberapa penting ciri khas gaya visual terhadap pengembangan jenjang karier fashion photographer. Ciri khas gaya visual dalam fotografi merupakan perwujudan dari keunikan gaya setiap fotografer, yang mampu membedakan fotografer dengan kompetitornya. Hingga saat ini ciri khas gaya visual sering terabaikan yang mengakibatkan para fotografer kesulitan dalam memilih jalan yang efektif dalam masa pengembangan karier. Penelitian ini bertujuan untuk mengetahui pentingnya memiliki ciri khas gaya visual bagi seorang fotografer dalam mengembangkan karier di dunia fashion photography.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[4.5%]"></div>
                        <img src={Profile} className="flex justify-between items-start text-center w-[37.5%]" alt="Picture1" />
                    </div>
                    <div className="flex gap-5 lg:mt-6 xl:mt-12 lg:mb-16 xl:mb-20">
                        <div className="w-[15%]"></div>
                        <div className="w-[41.5%]">
                            <img src={Picture1} />
                        </div>
                        <div className="w-[40.5%]">
                            <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                                Berkembangnya industri fashion photography menyebabkan fotografer tidak lagi bisa jika hanya mengandalkan skill fotografi untuk bertahan dan berkembang dalam industri. Adapun satu aspek krusial yang sering terabaikan, yaitu ciri khas gaya visual atau karakter visual seorang fotografer. Penelitian ini meneliti seberapa penting ciri khas gaya visual terhadap pengembangan jenjang karier fashion photographer. Ciri khas gaya visual dalam fotografi merupakan perwujudan dari keunikan gaya setiap fotografer, yang mampu membedakan fotografer dengan kompetitornya. Hingga saat ini ciri khas gaya visual sering terabaikan yang mengakibatkan para fotografer kesulitan dalam memilih jalan yang efektif dalam masa pengembangan karier. Penelitian ini bertujuan untuk mengetahui pentingnya memiliki ciri khas gaya visual bagi seorang fotografer dalam mengembangkan karier di dunia fashion photography.
                            </p>
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

export default T6;
