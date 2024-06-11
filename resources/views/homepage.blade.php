<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
    @vite('resources/js/app.js')
    @vite('resources/js/video.js')
</head>

<body>
    <nav class="bg-custom-gray">
        <div class="mx-auto max-w-full px-2 sm:px-6 lg:px-16">
            <div class="relative">
                <div class="flex flex-1 items-center justify-between">
                    <div class="flex flex-shrink-0 items-center">
                        <img class="h-8 w-auto" src="{{ asset('assets/svg/navbar-logo.svg') }}" alt="Your Company">
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-16">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
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
                {{-- <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    
                </div> --}}
            </div>
        </div>
    </nav>
    <video id="fullscreenVideo" class="visible" src="/assets/loading.mp4" type="video/mp4" autoplay muted
        playsinline></video>
    <img id="gifOverlay" class="gif-overlay" src="{{ asset('/assets/kelana-motion.gif') }}" alt="gif">
    <div class="h-screen bg-white box-border">
        <!-- Content for first section -->
    </div>
    
    <div class="h-screen bg-blue box-border" style="background-image: url('{{ asset('assets/svg/bg-1.svg') }}'); background-size: cover; background-position: center;">
        <!-- Content for first section -->
    </div>
    
    <div class="h-[200vh] bg-red-500 box-border" style="background-image: url('{{ asset('assets/svg/bg-2.svg') }}'); background-size: cover; background-position: center;">
        <!-- Content for third section -->
    </div>
</body>

</html>
