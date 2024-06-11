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
    <video id="fullscreenVideo" class="visible" src="/assets/loading.mp4" type="video/mp4" autoplay muted
        playsinline></video>
    <img id="gifOverlay" class="gif-overlay" src="{{ asset('/assets/kelana-motion.gif') }}" alt="gif">
</body>

</html>
