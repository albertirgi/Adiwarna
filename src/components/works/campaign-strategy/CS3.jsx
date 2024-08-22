import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/campaignStrategy/CS3/cs3-1.webp";
import Picture1 from "../../../assets/images/works/campaignStrategy/CS3/1.webp";
import Picture2 from "../../../assets/images/works/campaignStrategy/CS3/2.webp";
import Picture3 from "../../../assets/images/works/campaignStrategy/CS3/3.webp";
import Picture4 from "../../../assets/images/works/campaignStrategy/CS3/4.webp";
import Picture5 from "../../../assets/images/works/campaignStrategy/CS3/5.webp";
import Mobile1 from "../../../assets/images/works/campaignStrategy/CS3/mobile/1.webp";
import Mobile2 from "../../../assets/images/works/campaignStrategy/CS3/mobile/2.webp";
import Mobile3 from "../../../assets/images/works/campaignStrategy/CS3/mobile/3.webp";
import Mobile4 from "../../../assets/images/works/campaignStrategy/CS3/mobile/4.webp";
import Mobile5 from "../../../assets/images/works/campaignStrategy/CS3/mobile/5.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Behance from "../../../assets/images/behance.svg";
import Email from "../../../assets/images/email.svg";
const CS3 = () => {
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
                <Link to="/category/campaign-strategy">
                  <span className="italic font-caslon-condensed text-custom-purple">Campaign Strategy</span>
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
                  <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">Nettika</p>
                </div>
                <div className="flex-col self-end">
                  <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mb-2">Shannon Soen Ying Zhen</p>
                  <div className="flex">
                    <div className="w-[25%]">
                      <div className="flex mb-2">
                        <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">ssoenyingzhen@gmail.com</p>
                      </div>
                    </div>
                    <div className="w-[10%]"></div>
                    <div className="w-[70%]">
                      <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                        Segala kemudahan yang diberikan internet membuat manusia semakin dekat dengan teknologi. Hal ini perlu diimbangi dengan netiket. Netiket atau etika penggunaan internet adalah aturan dan tata tertib dalam dunia maya yang mengatur batasan dan cara seseorang dalam menggunakan
                        internet. Dengan adanya netiket, dapat menjaga komunikasi juga hubungan antar manusia yang baik dan mencegah terjadinya berbagai kasus kejahatan siber. Edukasi netiket penting terutama bagi remaja. Karena remaja merupakan pengguna internet terbanyak yang masih belum mencapai
                        kematangan berpikir. Selain itu, edukasi netiket diperlukan di Indonesia karena kesadaran masyarakat Indonesia akan netiket masih sangat rendah.
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
                    Nettika adalah sebuah media edukasi berupa website yang mengedukasi dan memperkenalkan netiket kepada remaja usia 16-18 tahun. Bertujuan agar remaja dapat bijaksana dalam menggunakan internet, menjaga perilaku di internet, juga dapat mengetahui cara melindungi diri dari ancaman
                    dan bahaya yang datang dari internet. Selain netiket, Nettika juga akan membahas mengenai cyberbullying yang merupakan kasus kejahatan siber yang paling sering terjadi di Indonesia.
                  </p>
                  <div className="w-[100%] gap-5 flex">
                    <img src={Picture2} className="flex justify-between items-start text-center" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 lg:mb-16 xl:mb-20 mt-5 justify-end">
              <div className="w-[20%]">
                <img src={Picture3} />
              </div>
              <div className="w-[25%]">
                <img src={Picture4} />
              </div>
              <div className="w-[25%]">
                <img src={Picture5} />
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
              <div className="flex mt-8">
                <div className="w-full h-full flex flex-col">
                  <p className="font-bold font-jakarta-sans text-custom-purple leading-tight text-[12px] mt-2 mb-14">Nettika</p>
                  <div className="flex flex-col">
                    <p className="font-extralight font-caslon-condensed text-custom-purple text-[8px] mb-1">Shannon Soen Ying Zhen</p>
                    <div className="flex">
                      <img src={Email} className="flex justify-between items-start text-center w-[3%] mr-1" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple text-[7px]">ssoenyingzhen@gmail.com</p>
                    </div>
                  </div>
                </div>
                <img src={Profile} className="flex justify-between items-start text-center w-[35%]" alt="Picture1" />
              </div>
            </div>
            <div className="flex flex-col pl-10 mt-2">
              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px]">
                Segala kemudahan yang diberikan internet membuat manusia semakin dekat dengan teknologi. Hal ini perlu diimbangi dengan netiket. Netiket atau etika penggunaan internet adalah aturan dan tata tertib dalam dunia maya yang mengatur batasan dan cara seseorang dalam menggunakan internet.
                Dengan adanya netiket, dapat menjaga komunikasi juga hubungan antar manusia yang baik dan mencegah terjadinya berbagai kasus kejahatan siber. Edukasi netiket penting terutama bagi remaja. Karena remaja merupakan pengguna internet terbanyak yang masih belum mencapai kematangan
                berpikir. Selain itu, edukasi netiket diperlukan di Indonesia karena kesadaran masyarakat Indonesia akan netiket masih sangat rendah.
              </p>

              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px] mt-2">
                Nettika adalah sebuah media edukasi berupa website yang mengedukasi dan memperkenalkan netiket kepada remaja usia 16-18 tahun. Bertujuan agar remaja dapat bijaksana dalam menggunakan internet, menjaga perilaku di internet, juga dapat mengetahui cara melindungi diri dari ancaman dan
                bahaya yang datang dari internet. Selain netiket, Nettika juga akan membahas mengenai cyberbullying yang merupakan kasus kejahatan siber yang paling sering terjadi di Indonesia.
              </p>

              <div className="flex flex-col gap-2 mt-2 items-end">
                <img src={Mobile1} className="flex justify-between items-start text-center w-[100%]" />
                <div className="flex flex-col gap-2 w-[85%]">
                  <img src={Mobile2} className="flex justify-between items-start text-center w-[100%]" />
                  <div className="flex gap-2">
                    <div className="flex flex-col w-[49%] gap-2">
                      <img src={Mobile3} className="flex justify-between items-start text-center w-[100%]" />
                      <img src={Mobile4} className="flex justify-between items-start text-center w-[100%]" />
                    </div>
                    <img src={Mobile5} className="flex justify-between items-start text-center w-[49%] h-fit" />
                  </div>
                </div>
                <div className="w-full flex items-end justify-end mt-4 mb-4">
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

export default CS3;
