const Section4 = () => {
  return (
    <div id="section4" className="bg-custom-white flex flex-col px-32 py-[30px] w-full h-screen">
            <header className="self-start text-12xl">
                <h1><span className="font-medium font-jakarta-sans text-custom-purple">currated</span> <span
                        className="italic font-medium font-caslon-condensed text-custom-purple">works</span></h1>
            </header>
            <div className="mt-2">
                <div className="flex">
                    <article className="flex flex-col w-[33%]">
                        <div className="flex flex-col grow text-custom-purple">
                            <header
                                className="flex gap-5 justify-between items-start px-5 pt-6 pb-[446px] text-center bg-zinc-300 hover:scale-105 hover:shadow-lg hover:cursor-pointer transition-transform duration-300 ease-in-out">
                                <span
                                    className="font-jakarta-sans justify-center px-6 py-1 text-xl italic border-[1.5px] border-custom-purple border-solid rounded-[72px]">Kategori
                                </span>
                                <span
                                    className="font-jakarta-sans justify-center p-2.5 text-xl font-bold rounded-full border-[1.5px] border-custom-purple border-solid stroke-[1px] w-10 h-10 flex items-center justify-center">RI
                                </span>
                            </header>
                            <h2 className="font-jakarta-sans text-2xl font-bold text-justify leading-tight">Judul Karya
                                Judul
                                Karya Judul Karya Judul
                                Karya Judul Karya Judul Karya Judul Karya Judul Karya Judul Karya
                            </h2>
                            <p className="font-jakarta-sans mt-1 text-2xl font-light italic">Nama Perancang</p>
                        </div>
                    </article>
                    <article className="flex flex-col ml-5 w-[33%]">
                        <div className="flex flex-col grow text-custom-purple">
                            <header
                                className="flex gap-5 justify-between items-start px-5 pt-6 pb-[446px] text-center bg-zinc-300 hover:scale-105 hover:shadow-lg hover:cursor-pointer transition-transform duration-300 ease-in-out">
                                <span
                                    className="font-jakarta-sans justify-center px-6 py-1 text-xl italic border-[1.5px] border-custom-purple border-solid rounded-[72px]">Kategori
                                </span>
                                <span
                                    className="font-jakarta-sans justify-center p-2.5 text-xl font-bold rounded-full border-[1.5px] border-custom-purple border-solid stroke-[1px] w-10 h-10 flex items-center justify-center">CE
                                </span>
                            </header>
                            <h2 className="font-jakarta-sans text-2xl font-bold text-justify">Judul Karya Judul Karya Judul
                                Karya Judul
                                Karya Judul Karya Judul Karya Judul Karya Judul Karya Judul Karya
                            </h2>
                            <p className="font-jakarta-sans mt-1 text-2xl font-light italic">Nama Perancang</p>
                        </div>
                    </article>
                    <article className="flex flex-col ml-5 w-[33%]">
                        <div className="flex flex-col grow text-custom-purple">
                            <header
                                className="flex gap-5 justify-between items-start px-5 pt-6 pb-[446px] text-center bg-zinc-300 hover:scale-105 hover:shadow-lg hover:cursor-pointer transition-transform duration-300 ease-in-out">
                                <span
                                    className="font-jakarta-sans justify-center px-6 py-1 text-xl italic border-[1.5px] border-custom-purple border-solid rounded-[72px]">Kategori
                                </span>
                                <span
                                    className="font-jakarta-sans justify-center p-2.5 text-xl font-bold rounded-full border-[1.5px] border-custom-purple border-solid stroke-[1px] w-10 h-10 flex items-center justify-center">CII
                                </span>
                            </header>
                            <h2 className="font-jakarta-sans text-2xl font-bold text-justify">Judul Karya Judul Karya Judul
                                Karya Judul
                                Karya Judul Karya Judul Karya Judul Karya Judul Karya Judul Karya
                            </h2>
                            <p className="font-jakarta-sans mt-1 text-2xl font-light italic">Nama Perancang</p>
                        </div>
                    </article>
                </div>
            </div>
            <footer
                className="font-jakarta-sans text-custom-white text-3xl justify-center item-center self-center px-9 py-3 mt-[34px] text-2xl italic font-bold text-center bg-custom-purple rounded-[72px] hover:bg-custom-yellow hover:text-custom-purple cursor-pointer transition-colors duration-500 hover:scale-110 hover:shadow-lg hover:cursor-pointer transition-transform duration-500 ease-in-out"
                tabIndex="0" role="button"> more works
            </footer>
        </div>
  )
}

export default Section4