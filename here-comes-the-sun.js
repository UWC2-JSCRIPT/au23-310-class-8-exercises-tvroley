const body = document.querySelector('body');
let darkness = 0;
const makeBrighter = function() {
    darkness++;
    if (darkness <= 255) {
        body.style.backgroundColor = `rgb(${darkness}, ${darkness}, ${darkness})`;
        requestAnimationFrame(makeBrighter);
    }
}
requestAnimationFrame(makeBrighter);