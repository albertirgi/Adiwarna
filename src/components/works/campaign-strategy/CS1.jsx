import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/campaignStrategy/CS1/cs1-1.webp";
import Picture1 from "../../../assets/images/works/campaignStrategy/CS1/1.webp";
import Picture2 from "../../../assets/images/works/campaignStrategy/CS1/2.webp";
import Picture3 from "../../../assets/images/works/campaignStrategy/CS1/3.webp";
import Picture4 from "../../../assets/images/works/campaignStrategy/CS1/4.webp";
import Picture5 from "../../../assets/images/works/campaignStrategy/CS1/5.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Behance from "../../../assets/images/behance.svg";
import Email from "../../../assets/images/email.svg";
const CS1 = () => {
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
          <div className="flex">
            <div className="w-[58%] flex flex-col justify-between">
              <div className="flex-col mb-5">
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">Kalkulaku</p>
              </div>
              <div className="flex-col self-end">
                <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mb-2">Monica Yvetta Utomo</p>
                <div className="flex">
                  <div className="w-[25%]">
                    <div className="flex mb-2">
                      <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">monicautomo3@gmail.com</p>
                    </div>
                    <div className="flex mb-2">
                      <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Monica Utomo</p>
                    </div>
                    <div className="flex">
                      <img src={Behance} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Monica Utomo</p>
                    </div>
                  </div>
                  <div className="w-[10%]"></div>
                  <div className="w-[70%]">
                    <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                      Kalkulaku merupakan usaha startup penyedia fitur untuk seller yang hendak menentukan harga jual ke Marketplace terkait biaya administrasi melalui website. Startup ini berpotensi menjadi solusi baru, namun sayangnya masih belum banyak yang seller yang menyadari ancaman dari
                      permasalahan tersebut. Strategi promosi untuk Kalkulaku dinilai penting, selain agar Kalkulaku dapat dikenal oleh para seller sebagai targeted audience, juga dapat meningkatkan kesadaran para seller terhadap permasalahan tersebut. Perancangan ini didukung oleh hasil wawancara
                      dengan beberapa narasumber sebagai sampel dari target audiens terkait perilaku dari target audiens dalam menggunakan media digital. Adapun strategi media sosial yang dihasilkan diharapkan dapat meningkatkan jumlah kesadaran dan pemahaman seller dalam berjualan online serta
                      perbaikan harga jual yang membangun seller dan calon seller untuk merambah ke marketplace Shopee. Proses perancangan meliputi branding dari Kalkulaku, proses perancangan website, strategi promosi offline dan online.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[4.5%]"></div>
            <img src={Profile} className="flex justify-between items-start text-center w-[37.5%]" alt="Picture1" />
          </div>
          <div className="flex gap-5 lg:mb-36 xl:mb-40 lg:mt-6 xl:mt-12">
            <div>
              <div className="flex gap-5">
                <img src={Picture1} className="flex justify-between items-start text-center w-[24%] h-fit" />
                <div className="w-[25%] flex flex-col gap-5">
                  <img src={Picture2} className="flex justify-between items-start text-center h-fit" />
                  <img src={Picture3} className="flex justify-between items-start text-center h-fit" />
                </div>
                <div className="w-[50%] flex flex-col gap-5">
                  <img src={Picture4} className="flex justify-between items-start text-center w-[86%]" />
                  <img src={Picture5} className="flex justify-between items-start text-center" />
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
      </div>
      <Footer />
    </div>
  );
};

export default CS1;
