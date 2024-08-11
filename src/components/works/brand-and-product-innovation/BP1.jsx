import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/brandProduct/BP1/bp1-1.webp";
import Picture1 from "../../../assets/images/works/brandProduct/BP1/1.webp";
import Picture2 from "../../../assets/images/works/brandProduct/BP1/2.webp";
import Picture3 from "../../../assets/images/works/brandProduct/BP1/3.webp";
import Picture4 from "../../../assets/images/works/brandProduct/BP1/4.webp";
import Picture5 from "../../../assets/images/works/brandProduct/BP1/5.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Email from "../../../assets/images/email.svg";

const BP1 = () => {
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
                  Brand & Product Innovation
                </span>
              </div>
            </div>
          </div>
          <div className="lg:text-2lg xl:text-2xl lg:mt-8 xl:mt-20 lg:mb-2 xl:mb-3"></div>
          <div className="flex lg:mb-6 xl:mb-12">

            <div className="w-[58%] flex flex-col justify-between">
              <div className="flex-col">
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">
                  Mayatra
                </p>
              </div>
              <div className="flex-col self-end">
                <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em]">
                  Vannessa Jeane Ananthalia
                </p>
                <div className="flex">
                  <div className="w-[25%]">
                    <div className="flex">
                      <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">
                        vanessajeaneananthalia@gmail.com
                      </p>
                    </div>
                    <div className="flex mt-1">
                      <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="italic font-extralight font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">
                        Vanessa Jeane
                      </p>
                    </div>
                  </div>
                  <div className="w-[15%]"></div>
                  <div className="w-[70%]">
                    <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                      Mayatra merupakan clothing line asal Surabaya yang dirancang sebagai pakaian sehari-hari untuk menceritakan beragam kisah melalui ilustrasi street art. Diambil dari bahasa Sanskerta, "Maya" (माया) berarti semu, tidak nyata dan "Tra" dari "Caritra" (चरित) berarti cerita. Mayatra menjadi media komunikasi visual yang menceritakan fenomena fiksi dan tidak wajar seperti sastra budaya berbentuk cerita legenda daerah. Target audiens yang dituju dalam perancangan ini adalah kalangan anak muda (gen z) yang tinggal di kota Surabaya, dengan gaya hidup cenderung berbasis internet dan media sosial yang membiasakan mereka lebih mengenal budaya asing daripada budaya daerahnya sendiri.
                    </p>
                    <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mt-3">
                      Kota Surabaya memiliki ciri khas kota tua yang terlihat di setiap sudut kota, seperti bangunan bersejarah, graffiti di dinding kota, hingga cerita budaya yang menyebar di dalamnya. Untuk mengenalkan sisi lain dari kota Surabaya, diambil sisi cerita misteri dan mengerikan dari beragam urban legend yang tersebar di daerah-daerah bersejarah khas kota tersebut. Urban legend yang diangkat meliputi legenda Pintu Air Jagir, Jembatan Merah, Plaza Surabaya, hingga Rumah Hantu Darmo. Keempat legenda dikemas secara ilustratif dengan menggabungkan ciri khas seni Surabaya, yaitu graffiti dengan visualisasi yang bold dan menarik perhatian.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[4.5%]"></div>
            <img src={Profile} className="flex justify-between items-start text-center w-[37.5%]" alt="Picture1" />
          </div>
          <div className="flex gap-5 lg:mb-16 xl:mb-20">
            <div className="w-[32%]">
              <img src={Picture1} className="flex justify-between items-start text-center" />
            </div>
            <div className="w-[23.25%]">
              <img src={Picture2} className="flex justify-between items-start text-center w-[100%] mb-2" />
            </div>
            <div className="w-[44.75%]">
              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-5">
                Perancangan ini menghasilkan pakaian bergaya streetwear yang casual, yaitu graphic t-shirt dan hoodie sesuai tren pakaian yang populer dan digemari anak muda. Mayatra menjadi salah satu upaya kreatif dalam mengapresiasi kearifan lokal dengan cara yang trendy dan fashionable sehingga terlihat menarik dan relevan di kehidupan modern gen z. Diharapkan, mengenakan produk Mayatra dapat menjadi bentuk apresiasi dan kebanggaan terhadap budaya daerah yang melekat dalam kehidupan sehari-hari anak muda.
              </p>
              <div className="flex">
                <div className="w-[38.5%]">
                  <img src={Picture3} className="flex justify-between items-start text-center w-[100%] mb-2 mr-2" />
                </div>
                <div className="w-[59.5%]">
                  <img src={Picture5} className="flex justify-between items-start text-center w-[100%] mb-2 ml-3" />
                </div>
              </div>
              <img src={Picture4} className="flex justify-between items-start text-center w-[100% mt-3" />
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
    </div>
  );
};

export default BP1;
