<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://fonts.cdnfonts.com/css/libre-caslon-condensed" rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&display=swap" rel="stylesheet">
    @vite('resources/css/app.css')
    @vite('resources/js/app.js')
</head>

<body class="bg-black relative style="scrollbar-width: none;">
    {{-- <div id="loading-video" class="fixed top-0 left-0 w-full h-full bg-black z-50 overflow-hidden">
        <video id="bg-video" class="w-full h-full object-cover" autoplay muted>
            <source src="{{ asset('/assets/videos/loading.mp4') }}" type="video/mp4">
        </video>
    </div> --}}

    {{-- NAVBAR --}}
    <nav id="navbar" class="bg-custom-gray fixed top-0 z-50 w-full">
        <div class="mx-auto max-w-full px-2 sm:px-6 lg:px-16">
            <div class="relative">
                <div class="flex flex-1 items-center justify-between">
                    <div class="flex flex-shrink-0 items-center">
                        <img class="h-8 w-auto" src="{{ asset('assets/images/navbar-logo.webp') }}" alt="Your Company">
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-16">
                            <a href="#" class="rounded-md p-1 text-base font-bold text-white hover:text-white"
                                aria-current="page">HOME</a>
                            <a href="#"
                                class="rounded-md p-1 text-base font-bold text-gray-300 hover:text-white">CURATED
                                WORKS</a>
                            <a href="#"
                                class="rounded-md p-1 text-base font-bold text-gray-300 hover:text-white">VOTE</a>
                            <a href="#"
                                class="rounded-md p-1 text-base font-bold text-gray-300 hover:text-white">WINNER</a>
                        </div>
                    </div>
                    <div>
                        <button type="button"
                            class="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="menu-dropdown" aria-expanded="false">
                            <span class="absolute -inset-0.5"></span>
                            <span class="sr-only">Open main menu</span>
                            <svg class="block h-12 w-12" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg class="hidden h-12 w-12" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    {{-- MAIN VIDEO --}}
    <div class="relative">
        <video id="mainVideo" class="relative w-full" src="{{ asset('/assets/videos/main_video.mp4') }}"
            type="video/mp4" autoplay muted loop></video>
        <img id="kelanaMotion" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
            src="{{ asset('/assets/videos/kelana-motion.gif') }}" alt="gif">
    </div>

    {{-- SECTION 1 --}}
    <section id="section1" class="bg-1 relative w-full h-screen bg-no-repeat bg-cover">
        <div class="flex relative flex-col w-full max-w-[1065px] justify-center mx-auto" style="padding-top: 115px">
            <h1 class="text-custom-white font-jakarta-sans text-13xl font-bold">tentang</h1>

            <div class="flex gap-5">
                <article
                    class="flex flex-col text-custom-white font-jakarta-sans text-10xl font-light leading-tight w-[30%]">
                    <p class="mt-8 w-[99%]">
                        Adiwarna is an annual event held by Humanity and Creative Industry of Petra Christian
                        University showcasing final projects of senior year students.
                    </p>
                    <p class="mt-12">
                        vIn 2023, Adiwarna is back as an activity consisting of exhibitions, talk shows,
                        workshops, and awards for the best Final Projects of Visual Communication Design,
                        Fashion and Textile Design, and International Digital Media of Petra Christian
                        University senior year students.n University senior year students.
                    </p>
                </article>

                </article>
                <article class="flex flex-col w-[71%]">
                    <div class="flex gap-1 pl-14 pt-6 relative">
                        <figure class="flex flex-col w-[46%]">
                            <img src="{{ asset('assets/images/pic-section1.webp') }}" alt="" class="w-full" />
                        </figure>
                        <div class="flex flex-col absolute" style="top: 16px; left:355px">
                            <h2 class="text-custom-white font-caslon-condensed mt-36 text-14xl italic">
                                kelana
                            </h2>
                        </div>
                    </div>
                    <div class="flex flex-col self-end w-[40%] max-w-full">
                        <h3 class="font-caslon-text text-custom-white text-11xl">ke·la·na</h3>
                        <p class="text-custom-white font-jakarta-sans">Makna kelana Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    </div>
                </article>
            </div>
        </div>
    </section>

    {{-- SECTION 2 --}}
    <section id="section2" class="bg-2 h-2screen relative w-full bg-no-repeat bg-cover">
    </section>

    {{-- SECTION 3 --}}
    <section id="section3"
        class="bg-3 bg-custom-yellow relative w-full h-screen bg-no-repeat bg-cover flex items-center justify-center animate-moveBackground">
        <img src="{{ asset('assets/images/earth.svg') }}" alt=""
            class="w-1/2 relative z-10 animate-spin hover:scale-110 transition-transform duration-500 ease-in-out" />
        <div id="text-above" class="absolute inset-0 flex flex-col items-center justify-center z-20">
            <img src="{{ asset('assets/images/logo-kelana.svg') }}" alt="" class="w-[13%] pb-8 pt-2" />
            <p class="text-13xl font-jakarta-sans italic font-bold text-custom-white pb-8">virtual <a
                    class="text-13xl font-caslon-condensed italic text-custom-white">experience</a></p>
            <p class="text-2xl text-custom-white pb-20">Lorem Ipsum</p>
        </div>
    </section>

    {{-- SECTION 4 --}}
    <section id="section4" class="bg-custom-white flex flex-col px-32 py-[58px] w-full h-screen">
        <header class="self-start text-12xl">
            <h1><span class="font-medium font-jakarta-sans text-custom-purple">currated</span> <span
                    class="italic font-medium font-caslon-condensed text-custom-purple">works</span></h1>
        </header>
        <div class="mt-2">
            <div class="flex">
                <article class="flex flex-col w-[33%]">
                    <div class="flex flex-col grow text-custom-purple">
                        <header
                            class="flex gap-5 justify-between items-start px-5 pt-6 pb-[446px] text-center bg-zinc-300">
                            <span
                                class="font-jakarta-sans justify-center px-6 py-1 text-xl italic border-[1.5px] border-custom-purple border-solid rounded-[72px]">Kategori
                            </span>
                            <span
                                class="font-jakarta-sans justify-center p-2.5 text-xl font-bold rounded-full border-[1.5px] border-custom-purple border-solid stroke-[1px] w-10 h-10 flex items-center justify-center">RI
                            </span>
                        </header>
                        <h2 class="font-jakarta-sans text-2xl font-bold text-justify leading-tight">Judul Karya Judul
                            Karya Judul Karya Judul
                            Karya Judul Karya Judul Karya Judul Karya Judul Karya Judul Karya
                        </h2>
                        <p class="font-jakarta-sans mt-1 text-2xl font-light italic">Nama Perancang</p>
                    </div>
                </article>
                <article class="flex flex-col ml-5 w-[33%]">
                    <div class="flex flex-col grow text-custom-purple">
                        <header
                            class="flex gap-5 justify-between items-start px-5 pt-6 pb-[446px] text-center bg-zinc-300">
                            <span
                                class="font-jakarta-sans justify-center px-6 py-1 text-xl italic border-[1.5px] border-custom-purple border-solid rounded-[72px]">Kategori
                            </span>
                            <span
                                class="font-jakarta-sans justify-center p-2.5 text-xl font-bold rounded-full border-[1.5px] border-custom-purple border-solid stroke-[1px] w-10 h-10 flex items-center justify-center">CE
                            </span>
                        </header>
                        <h2 class="font-jakarta-sans text-2xl font-bold text-justify">Judul Karya Judul Karya Judul
                            Karya Judul
                            Karya Judul Karya Judul Karya Judul Karya Judul Karya Judul Karya
                        </h2>
                        <p class="font-jakarta-sans mt-1 text-2xl font-light italic">Nama Perancang</p>
                    </div>
                </article>
                <article class="flex flex-col ml-5 w-[33%]">
                    <div class="flex flex-col grow text-custom-purple">
                        <header
                            class="flex gap-5 justify-between items-start px-5 pt-6 pb-[446px] text-center bg-zinc-300">
                            <span
                                class="font-jakarta-sans justify-center px-6 py-1 text-xl italic border-[1.5px] border-custom-purple border-solid rounded-[72px]">Kategori
                            </span>
                            <span
                                class="font-jakarta-sans justify-center p-2.5 text-xl font-bold rounded-full border-[1.5px] border-custom-purple border-solid stroke-[1px] w-10 h-10 flex items-center justify-center">CII
                            </span>
                        </header>
                        <h2 class="font-jakarta-sans text-2xl font-bold text-justify">Judul Karya Judul Karya Judul
                            Karya Judul
                            Karya Judul Karya Judul Karya Judul Karya Judul Karya Judul Karya
                        </h2>
                        <p class="font-jakarta-sans mt-1 text-2xl font-light italic">Nama Perancang</p>
                    </div>
                </article>
            </div>
        </div>
        <footer
            class="font-jakarta-sans text-custom-white text-3xl justify-center item-center self-center px-9 py-3 mt-[34px] text-2xl italic font-bold text-center bg-custom-purple rounded-[72px] hover:bg-custom-yellow hover:text-custom-purple cursor-pointer transition-colors duration-300"
            tabindex="0" role="button"> more works
        </footer>
    </section>

    {{-- SECTION 5 --}}
    <section id="section5"
        class="bg-5 relative w-full h-screen bg-no-repeat bg-cover flex relative flex-col px-48 py-28">
        <h2 class="relative self-start text-12xl text-center text-custom-white leading-tight">
            <span class="font-caslon-display text-[100px]">in</span>
            <span class="font-caslon-condensed italic">partner</span><span
                class="font-caslon-display text-[100px]">ships with</span>
        </h2>
        <section class="relative self-center mt-20 mb-9 w-[900px]">
            <div class="flex gap-5">
                <section class="flex flex-col w-[33%]">
                    <section class="flex relative flex-col grow items-center">
                        <div class="shrink-0 rounded-lg bg-zinc-300 h-[200px] w-[200px]"></div>
                        <div class="shrink-0 mt-11 rounded-lg bg-zinc-300 h-[100px] w-[100px]"></div>
                        <div class="flex gap-3 justify-between self-stretch mt-11">
                            <div class="shrink-0 w-16 h-16 rounded-lg bg-zinc-300"></div>
                            <div class="shrink-0 w-16 h-16 rounded-lg bg-zinc-300"></div>
                        </div>
                    </section>
                </section>
                <section class="flex flex-col w-[33%] ml-5">
                    <section class="flex relative flex-col grow items-center">
                        <div class="shrink-0 rounded-lg bg-zinc-300 h-[200px] w-[200px]"></div>
                        <div class="flex gap-5 justify-between self-stretch mt-11">
                            <div class="shrink-0 rounded-lg bg-zinc-300 h-[100px] w-[100px]"></div>
                            <div class="shrink-0 rounded-lg bg-zinc-300 h-[100px] w-[100px]"></div>
                        </div>
                        <div class="shrink-0 mt-11 w-16 h-16 rounded-lg bg-zinc-300 max-md:mt-10"></div>
                    </section>
                </section>
                <section class="flex flex-col w-[33%] ml-5">
                    <section class="flex relative flex-col grow items-center">
                        <div class="shrink-0 rounded-lg bg-zinc-300 h-[200px] w-[200px]"></div>
                        <div class="shrink-0 mt-11 rounded-lg bg-zinc-300 h-[100px] w-[100px]"></div>
                        <div class="flex gap-3 justify-between self-stretch mt-11">
                            <div class="shrink-0 w-16 h-16 rounded-lg bg-zinc-300"></div>
                            <div class="shrink-0 w-16 h-16 rounded-lg bg-zinc-300"></div>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    </section>

    {{-- FOOTER --}}
    <section id="footer" class="relative bg-black w-[90%] flex flex-col ml-5 w-[85%] h-footer">
        <div class="flex gap-5">
            <aside class="flex flex-col mt-16 ml-44">
                <div class="flex grow gap-2">
                    <figure class="flex flex-col">
                        <img loading="lazy" src="{{ asset('/assets/images/logo-pcu.svg') }}"
                            alt="Description of the first image" class="aspect-[1.01] w-[90px]" />
                        <img loading="lazy" src="{{ asset('/assets/images/logo-adiwarna.svg') }}"
                            alt="Description of the second image" class="self-center mt-6 aspect-[1.01] w-[180px]" />
                    </figure>
                    <figure class="flex flex-col items-center">
                        <img loading="lazy" src="{{ asset('/assets/images/logo-dkv.svg') }}"
                            alt="Description of the third image" class="aspect-[1.61] w-[210px]" />
                        <img loading="lazy" src="{{ asset('/assets/images/logo-kelana.svg') }}"
                            alt="Description of the fourth image" class="mt-3.5 aspect-[0.85] w-[130px]" />
                    </figure>
                </div>
            </aside>
            <section class="flex flex-col ml-5 w-full">
                <div class="flex grow gap-5 justify-between mt-28 text-xs text-custom-white">
                    <div class="mt-[108px] font-jakarta-sans">
                        <p class="italic">©2024 Adiwarna Kelana</p>
                        <p class="mt-2">
                            Pameran tugas akhir mahasiswa
                        </p>
                        <p class="mt-1">
                            Desain Komunikasi Visual
                        </p>
                        <p class="mt-1">
                            Universitas Kristen Petra Surabaya
                        </p>
                    </div>
                    <div class="flex flex-col mt-24 font-jakarta-sans mr-10">
                        <div class="flex items-center justify-end gap-5">
                            <p class="italic">@adiwarna.pcu</p>
                            <img loading="lazy" src="{{ asset('/assets/images/logo-ig.svg') }}"
                                alt="Icon representing @adiwarna.pcu" class="shrink-0 w-8 aspect-[1.04] fill-white" />
                        </div>
                        <div class="flex items-center gap-5 mt-10">
                            <p class="flex-auto italic">adiwarna.official@gmail.com</p>

                            <img loading="lazy" src="{{ asset('/assets/images/logo-mail.svg') }}"
                                alt="Icon representing email" class="shrink-0 w-8 aspect-[1.33] fill-white" />
                        </div>
                    </div>

                </div>
        </div>
    </section>
</body>

</html>
