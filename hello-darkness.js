const body = document.getElementsByTagName('body')[0];
let darkness = 255;
const countdownInterval = setInterval(function() {
    if(darkness > 0) {
        darkness--;
        body.style.backgroundColor = `rgb(${darkness}, ${darkness}, ${darkness})`;
    } else {
        clearInterval(countdownInterval);
    }
}, 500);