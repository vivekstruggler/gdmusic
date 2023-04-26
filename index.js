// alert("js is loaded");
// let arrow0 = document.getElementsByClassName('arrow0');
// let arrow1 = document.getElementsByClassName('arrow1');

// let videos = document.getElementsByClassName("slider0");
// let music = document.getElementsByClassName('slider1');
// let videoPage = Math.ceil(videos.length / 5);
// let musicPage = Math.ceil(music.length / 5);
// let l = 0;
// let perMove = 40;
// let maxMove = 250;
// // mobile view
// let mobileView = window.matchMedia("(max-width: 768px)");
// if (mobileView.matches) {
//     let perMove = 50;
//     let maxMove = 505;
// }

// let right_mover0 = () => {
//     l = l + perMove;
//     if (videos == 1) { l = 0; }
//     for (const i of videos) {
//         if (l > maxMove) { l = l - perMove; }
//         i.style.left = '-' + l + '%';
//     }

// }
// let left_mover0 = () => {
//     l = l - perMove;
//     if (l <= 0) { l = 0; }
//     for (const i of videos) {
//         if (videoPage > 1) {
//             i.style.left = '-' + l + '%';
//         }
//     }
// }
// let right_mover1 = () => {
//     l = l + perMove;
//     if (music == 1) { l = 0; }
//     for (const i of music) {
//         if (l > maxMove) { l = l - perMove; }
//         i.style.left = '-' + l + '%';
//     }

// }
// let left_mover1 = () => {
//     l = l - perMove;
//     if (l <= 0) { l = 0; }
//     for (const i of music) {
//         if (musicPage > 1) {
//             i.style.left = '-' + l + '%';
//         }
//     }
// }
// arrow0[1].onclick = () => { right_mover0(); }
// arrow0[0].onclick = () => { left_mover0(); }
// arrow1[1].onclick = () => { right_mover1(); }
// arrow1[0].onclick = () => { left_mover1(); }
