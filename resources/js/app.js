import "./bootstrap";

// STOP STICKY NAVBAR LOGIC
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const mainVideo = document.getElementById("mainVideo");
    const offset = navbar.offsetHeight;

    if (navbar && mainVideo) {
        window.addEventListener("scroll", () => {
            const videoHeight = mainVideo.offsetHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition >= videoHeight - offset) {
                navbar.classList.add("stop-nav");
                navbar.style.position = "absolute";
                navbar.style.top = `${videoHeight - offset}px`;
            } else {
                navbar.classList.remove("stop-nav");
                navbar.style.position = "fixed";
                navbar.style.top = "0";
            }
        });
    } else {
        console.error('Navbar or mainVideo element not found');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const loadingVideo = document.getElementById("loadingVideo");
    const kelanaMotion = document.getElementById("kelanaMotion");
    const body = document.body;

    loadingVideo.onended = function () {
        setTimeout(function () {
            loadingVideo.style.opacity = '0';
            kelanaMotion.style.display = 'block';
            body.classList.remove('overflow-hidden');
            setTimeout(function () {
                loadingVideo.style.zIndex = '-21';
            }, 500); // match the transition duration
        }, 0);
    };
});

