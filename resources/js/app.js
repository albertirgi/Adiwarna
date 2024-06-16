import "./bootstrap";

// STOP STICKY NAVBAR LOGIC
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const navbar = document.getElementById("navbar");
        const mainVideo = document.getElementById("mainVideo");
        const offset = navbar.offsetHeight;

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
    }, 7200);
});

// LOADING VIDEO LOGIC
document.addEventListener("DOMContentLoaded", function () {
    const loadingVideo = document.getElementById("loadingVideo");
    const mainVideo = document.getElementById("main-video");
    const mainContent = document.getElementById("mainContent");
    const kelanaMotion = document.getElementById("kelanaMotion");
    const navbar = document.getElementById("navbar");

    loadingVideo.onended = function () {
        setTimeout(function () {
            loadingVideo.style.opacity = "0";
            kelanaMotion.style.display = "block";
            mainVideo.classList.remove("hidden");
            setTimeout(function () {
                loadingVideo.style.zIndex = "-21";
            }, 500);
            setTimeout(function () {
                mainContent.classList.remove("hidden");
            }, 4000);
            setTimeout(function () {
                navbar.style.opacity = "100";
            }, 4500);
        }, 0);
    };
});
