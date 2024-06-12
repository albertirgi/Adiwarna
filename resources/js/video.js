// document.addEventListener('DOMContentLoaded', (event) => {
//     let video = document.getElementById('fullscreenVideo');
//     let gifOverlay = document.getElementById('gifOverlay');
//     let videoQueue = [
//         '/assets/loading.mp4',
//         '/assets/main_video.mp4'
//     ];
//     let currentVideoIndex = 0;
//     let nav = document.querySelector('nav');

//     video.addEventListener('canplay', () => {
//         if (video.requestFullscreen) {
//             video.requestFullscreen();
//         } else if (video.mozRequestFullScreen) {
//             video.mozRequestFullScreen();
//         } else if (video.webkitRequestFullscreen) {
//             video.webkitRequestFullscreen();
//         } else if (video.msRequestFullscreen) {
//             video.msRequestFullscreen();
//         }

//         video.play();
//     });

//     video.addEventListener('ended', () => {
//         currentVideoIndex++;
//         if (currentVideoIndex < videoQueue.length) {
//             let nextVideo = document.createElement('video');
//             nextVideo.src = videoQueue[currentVideoIndex];
//             nextVideo.autoplay = true;
//             nextVideo.loop = true;
//             nextVideo.muted = true;
//             nextVideo.playsinline = true;
//             nextVideo.className = 'visible';
//             nextVideo.style.zIndex = -1;
//             document.body.appendChild(nextVideo);
//             video.classList.remove('visible');
//             gifOverlay.style.display = 'block';
//             setTimeout(() => {
//                 video.remove();
//                 video = nextVideo;

//                 // Show and fade in the navbar when the second video starts
//                 if (currentVideoIndex === 1) {
//                     nav.classList.add('visible');
//                 }
//             }, 500);
//         }
//     });

//     video.addEventListener('error', (e) => {
//         console.error('Video error:', e);
//     });
// });
