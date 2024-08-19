import LogoAll from "../../assets/images/logo-all.png";
import LogoIG from "../../assets/images/logo-ig.svg";
import LogoMail from "../../assets/images/logo-mail.svg";

const Footer = () => {
  return (
    <div className="relative bg-black flex flex-col w-full px-3 lg:px-14 xl:px-20">
      <div className="flex relative flex-col w-full mx-auto lg:max-w-[1024px] xl:max-w-[1440px]">
        <div className="flex mb-8 xl:mb-12">
          <div className="flex">
            <img src={LogoAll} className="h-[100px] w-[140px] mt-[46px] mr-4 lg:h-[160px] lg:w-[200px] lg:mr-10 lg:mt-[75px] xl:h-[240px] xl:w-[300px] xl:mr-14 xl:mt-[68px]" />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex grow gap-5 justify-between lg:mt-[50px] xl:mt-[120px] text-[6px] lg:text-xs text-custom-white">
              <div className="mt-[108px] font-jakarta-sans">
                <p className="italic">©2024 Adiwarna Kelana</p>
                <p className="lg:mt-2">Pameran tugas akhir mahasiswa</p>
                <p className="lg:mt-1">Desain Komunikasi Visual</p>
                <p className="lg:mt-1">Universitas Kristen Petra Surabaya</p>
              </div>
              <div className="flex flex-col mt-[6.5rem] lg:mt-24 font-jakarta-sans">
                <div className="flex items-center justify-end gap-2 lg:gap-5">
                  <p className="italic">@adiwarna.pcu</p>
                  <img loading="lazy" src={LogoIG} alt="Icon representing @adiwarna.pcu" className="shrink-0 w-5 lg:w-8 aspect-[1.04] fill-white" />
                </div>
                <div className="flex items-center gap-2 lg:gap-5 mt-2 lg:mt-10">
                  <p className="lg:flex-auto italic">adiwarna.official@gmail.com</p>

                  <img loading="lazy" src={LogoMail} alt="Icon representing email" className="shrink-0 w-5 lg:w-8 aspect-[1.33] fill-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
