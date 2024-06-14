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
    @vite('resources/css/app.css')
    @vite('resources/js/app.js')
</head>

<body class="bg-black relative">
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
    <div id="section1" class="bg-1 relative w-full h-screen bg-no-repeat bg-cover">
        <div class="flex relative flex-col w-full max-w-[1065px] justify-center mx-auto" style="padding-top: 115px">
            <h1 class="text-custom-white font-jakarta-sans text-12xl font-bold">tentang</h1>

            <div class="flex gap-5 max-md:flex-col max-md:gap-0">
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
                            <h2 class="text-custom-white font-caslon-condensed mt-36 text-13xl italic">
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
    </div>

    {{-- SECTION 2 --}}
    <div id="section2" class="bg-2 h-2screen relative w-full h-screen bg-no-repeat bg-cover">
    </div>
</body>

</html>
