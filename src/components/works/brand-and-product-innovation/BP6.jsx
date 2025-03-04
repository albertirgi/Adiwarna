import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";
import Profile from "../../../assets/images/works/brandProduct/BP6/bp6-1.webp";
import Picture1 from "../../../assets/images/works/brandProduct/BP6/1.webp";
import Picture2 from "../../../assets/images/works/brandProduct/BP6/2.webp";
import Picture3 from "../../../assets/images/works/brandProduct/BP6/3.webp";
import Picture4 from "../../../assets/images/works/brandProduct/BP6/4.webp";
import Picture5 from "../../../assets/images/works/brandProduct/BP6/5.webp";
import Mobile1 from "../../../assets/images/works/brandProduct/BP6/mobile/1.webp";
import Mobile2 from "../../../assets/images/works/brandProduct/BP6/mobile/2.webp";
import Mobile3 from "../../../assets/images/works/brandProduct/BP6/mobile/3.webp";
import Mobile4 from "../../../assets/images/works/brandProduct/BP6/mobile/4.webp";
import Mobile5 from "../../../assets/images/works/brandProduct/BP6/mobile/5.webp";
import Play from "../../../assets/images/playButton.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Behance from "../../../assets/images/behance.svg";
import Email from "../../../assets/images/email.svg";

const BP6 = () => {
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
                <Link to="/category/brand-and-product-innovation">
                  <span className="italic font-caslon-condensed text-custom-purple">Brand & Product Innovation</span>
                </Link>
              </div>
            </div>
          </div>
          {/* Desktop View */}
          <div className="hidden lg:block">
            <div className="lg:text-2lg xl:text-2xl lg:mt-8 xl:mt-20 lg:mb-2 xl:mb-3"></div>
            <div className="flex lg:mb-6 xl:mb-12">
              <div className="w-[58%] flex flex-col justify-between">
                <div className="flex-col">
                  <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.9em]">Petallete</p>
                  <a href="https://drive.google.com/drive/folders/1fQ8DuXrc6RSofi8FFYxx8AUJ0PLdlRPw" target="_blank" rel="noreferrer">
                    <div className="flex mt-2">
                      <img src={Play} className="flex justify-between items-start text-center w-[3%] lg:mr-2 xl:mr-3" />
                      <p className="font-light font-inter text-custom-purple italic underline leading-tight lg:text-[1em] xl:text-[1.2em]">Watch Video</p>
                    </div>
                  </a>
                </div>
                <div className="flex-col self-end">
                  <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em]">Vanessa Tan</p>
                  <div className="flex">
                    <div className="w-[25%]">
                      <div className="flex mb-2">
                        <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">vanes.sat4n@gmail.com</p>
                      </div>
                      <div className="flex mb-2">
                        <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Vanessa Tan</p>
                      </div>
                      <div className="flex">
                        <img src={Behance} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                        <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Vanessa Tan</p>
                      </div>
                    </div>
                    <div className="w-[5%]"></div>
                    <div className="w-[70%]">
                      <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                        Polusi sampah organik menjadi salah satu ancaman terbesar terhadap lingkungan Indonesia karena dapat menyumbat baik sistem pembuangan sampah maupun perairan, berpotensi memicu kebakaran liar, berkontribusi terhadap peningkatan penyakit dari serangga pembawa penyakit serta
                        lingkungan kotor, dan masih banyak lagi. Hal ini menjadi permasalahan di Kota Surabaya di mana warga terkenal sering mengadakan pesta megah setiap akhir pekan, khususnya dengan menggunakan barang dekorasi favorit mereka yaitu bunga hidup. Akan tetapi sehabis tiap acara,
                        beberapa vendor dekorasi mengaku langsung membuang bunga hidupnya ke tempat sampah karena sudah tidak berguna bagi mereka atau klien. Ada pun peluang untuk mengolah limbah bunga yang tersisa dari acara-acara tersebut agar memaksimalkan potensi yang bisa diperoleh darinya
                        sebelum akhirnya dibuang, dengan cara membuat pigmen untuk cat air organik.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[4.5%]"></div>
              <img src={Profile} className="flex justify-between items-start text-center w-[37.5%]" alt="Picture1" />
            </div>

            <div className="flex gap-16 lg:mb-5 xl:mb-7">
              <img src={Picture1} className="flex justify-between items-start text-center w-[50%]" />
              <div className="w-[50%]">
                <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em]">
                  Petallete adalah usaha cat air buatan tangan yang memperkenalkan pigmen organik sebagai bahan artistik baru untuk mewujudkan kreativitas. Dengan target audience wanita dewasa muda berusia 18 hingga 23 tahun yang suka menggunakan media lukis cat air namun ingin mencoba dan
                  bereksperimen dengan suatu hal baru, Petallete bertujuan untuk menginspirasi mereka agar dapat terus berkarya tanpa beban baik pada pikiran, dompet, maupun lingkungan. Pesan ini disampaikan melalui strategi branding sekaligus komunikasi brand yang berputar di sekitar brand essence
                  "Limitless Creativity". Hasilnya adalah serangkaian logo, maskot, custom font, kemasan, dan media promosi untuk Instagram (@petallete.id) yang bertemakan visual diary. Strategi komunikasi brand dilaksanakan untuk membangun brand awareness pada platform digital media sosial, sebelum
                  brand activation berupa 2 acara workshop diadakan untuk menambah terhadap nilai brand experience konsumen secara keseluruhan.
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-5 lg:mb-16 xl:mb-20">
              <img src={Picture2} className="flex justify-between items-start text-center w-[25%] h-fit" />
              <img src={Picture3} className="flex justify-between items-start text-center w-[25%] h-fit" />
              <img src={Picture4} className="flex justify-between items-start text-center w-[25%]" />
              <img src={Picture5} className="flex justify-between items-start text-center w-[10%] h-fit" />
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
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight text-[12px] mt-2">Petallete</p>
                <a href="https://drive.google.com/drive/folders/1fQ8DuXrc6RSofi8FFYxx8AUJ0PLdlRPw" target="_blank" rel="noreferrer">
                  <div className="flex mt-1 mb-10">
                    <img src={Play} className="flex justify-between items-start text-center w-[4%] mr-1" />
                    <p className="font-light font-inter text-custom-purple italic underline leading-tight text-[8px]">Watch Video</p>
                  </div>
                </a>
                <div className="flex flex-col">
                  <p className="font-extralight font-caslon-condensed text-custom-purple text-[8px] mb-1">Vanessa Tan</p>
                  <div className="flex">
                    <img src={Email} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="font-extralight italic font-caslon-condensed text-custom-purple text-[7px]">vanes.sat4n@gmail.com</p>
                  </div>
                  <div className="flex">
                    <img src={LinkedIn} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="italic font-extralight font-caslon-condensed text-custom-purple text-[7px]">Vanessa Tan</p>
                  </div>
                  <div className="flex">
                    <img src={Behance} className="flex justify-between items-start text-center w-[3%] mr-1" />
                    <p className="italic font-extralight font-caslon-condensed text-custom-purple text-[7px]">Vanessa Tan</p>
                  </div>
                </div>
              </div>
              <img src={Profile} className="flex justify-between items-start text-center w-[35%]" alt="Picture1" />
            </div>
            <div className="flex flex-col pl-10 mt-2">
              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px]">
                Polusi sampah organik menjadi salah satu ancaman terbesar terhadap lingkungan Indonesia karena dapat menyumbat baik sistem pembuangan sampah maupun perairan, berpotensi memicu kebakaran liar, berkontribusi terhadap peningkatan penyakit dari serangga pembawa penyakit serta lingkungan
                kotor, dan masih banyak lagi. Hal ini menjadi permasalahan di Kota Surabaya di mana warga terkenal sering mengadakan pesta megah setiap akhir pekan, khususnya dengan menggunakan barang dekorasi favorit mereka yaitu bunga hidup. Akan tetapi sehabis tiap acara, beberapa vendor dekorasi
                mengaku langsung membuang bunga hidupnya ke tempat sampah karena sudah tidak berguna bagi mereka atau klien. Ada pun peluang untuk mengolah limbah bunga yang tersisa dari acara-acara tersebut agar memaksimalkan potensi yang bisa diperoleh darinya sebelum akhirnya dibuang, dengan cara
                membuat pigmen untuk cat air organik.
              </p>

              <p className="font-semilight font-jakarta-sans text-custom-purple text-justify text-[8px] mt-2">
                Petallete adalah usaha cat air buatan tangan yang memperkenalkan pigmen organik sebagai bahan artistik baru untuk mewujudkan kreativitas. Dengan target audience wanita dewasa muda berusia 18 hingga 23 tahun yang suka menggunakan media lukis cat air namun ingin mencoba dan
                bereksperimen dengan suatu hal baru, Petallete bertujuan untuk menginspirasi mereka agar dapat terus berkarya tanpa beban baik pada pikiran, dompet, maupun lingkungan. Pesan ini disampaikan melalui strategi branding sekaligus komunikasi brand yang berputar di sekitar brand essence
                "Limitless Creativity". Hasilnya adalah serangkaian logo, maskot, custom font, kemasan, dan media promosi untuk Instagram (@petallete.id) yang bertemakan visual diary. Strategi komunikasi brand dilaksanakan untuk membangun brand awareness pada platform digital media sosial, sebelum
                brand activation berupa 2 acara workshop diadakan untuk menambah terhadap nilai brand experience konsumen secara keseluruhan.
              </p>

              <div className="flex flex-col mt-2">
                <div>
                  <img src={Mobile1} className="flex justify-between items-start text-center w-[100%] h-fit" />
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="flex flex-col gap-2 w-[35%]">
                    <img src={Mobile2} className="flex justify-between items-start text-center w-[100%] h-fit" />
                    <img src={Mobile3} className="flex justify-between items-start text-center w-[100%] h-fit" />
                  </div>
                  <img src={Mobile4} className="flex justify-between items-start text-center w-[30%] h-fit" />
                  <img src={Mobile5} className="flex justify-between items-start text-center w-[35%] h-fit" />
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

export default BP6;
