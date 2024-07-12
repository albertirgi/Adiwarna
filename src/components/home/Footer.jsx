import LogoAdiwarna from '../../assets/images/logo-adiwarna.svg'
import LogoPCU from '../../assets/images/logo-pcu.svg'
import LogoDKV from '../../assets/images/logo-dkv.svg'
import LogoKelana from '../../assets/images/logo-kelana.svg'
import LogoIG from '../../assets/images/logo-ig.svg'
import LogoMail from '../../assets/images/logo-mail.svg'


const Footer = () => {
  return (
    <div id="footer" className="relative bg-black flex flex-col w-full h-footer">
            <div className="flex gap-5">
                <aside className="flex flex-col mt-16 ml-44">
                    <div className="flex grow gap-2">
                        <figure className="flex flex-col">
                            <img loading="lazy" src={LogoPCU}
                                alt="Description of the first image" className="aspect-[1.01] w-[90px]" />
                            <img loading="lazy" src={LogoAdiwarna}
                                alt="Description of the second image"
                                className="self-center mt-6 aspect-[1.01] w-[180px]" />
                        </figure>
                        <figure className="flex flex-col items-center">
                            <img loading="lazy" src={LogoDKV}
                                alt="Description of the third image" className="aspect-[1.61] w-[210px]" />
                            <img loading="lazy" src={LogoKelana}
                                alt="Description of the fourth image" className="mt-3.5 aspect-[0.85] w-[130px]" />
                        </figure>
                    </div>
                </aside>
                <div className="flex flex-col ml-5 w-full">
                    <div className="flex grow gap-5 justify-between mt-[120px] text-xs text-custom-white">
                        <div className="mt-[108px] font-jakarta-sans">
                            <p className="italic">©2024 Adiwarna Kelana</p>
                            <p className="mt-2">
                                Pameran tugas akhir mahasiswa
                            </p>
                            <p className="mt-1">
                                Desain Komunikasi Visual
                            </p>
                            <p className="mt-1">
                                Universitas Kristen Petra Surabaya
                            </p>
                        </div>
                        <div className="flex flex-col mt-24 font-jakarta-sans mr-44">
                            <div className="flex items-center justify-end gap-5">
                                <p className="italic">@adiwarna.pcu</p>
                                <img loading="lazy" src={LogoIG}
                                    alt="Icon representing @adiwarna.pcu"
                                    className="shrink-0 w-8 aspect-[1.04] fill-white" />
                            </div>
                            <div className="flex items-center gap-5 mt-10">
                                <p className="flex-auto italic">adiwarna.official@gmail.com</p>

                                <img loading="lazy" src={LogoMail}
                                    alt="Icon representing email" className="shrink-0 w-8 aspect-[1.33] fill-white" />
                            </div>
                        </div>

                    </div>
            </div>
        </div>
        </div>
  )
}

export default Footer