import "./bootstrap";

// STOP STICKY NAVBAR LOGIC
document.addEventListener("DOMContentLoaded", () => {
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
});
