document.addEventListener("DOMContentLoaded", function() {
    const bubbles = document.querySelectorAll(".bubble");

    bubbles.forEach(bubble => {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        bubble.style.left = x + "px";
        bubble.style.top = y + "px";

        let xSpeed = (Math.random() - 0.5) * 5;
        let ySpeed = (Math.random() - 0.5) * 5;

        function moveBubble() {
            x += xSpeed;
            y += ySpeed;

            if (x <= 0) {
                x = 0;
                xSpeed = -xSpeed;
            } else if (x >= window.innerWidth - bubble.offsetWidth) {
                x = window.innerWidth - bubble.offsetWidth;
                xSpeed = -xSpeed;
            }

            if (y <= 0) {
                y = 0;
                ySpeed = -ySpeed;
            } else if (y >= window.innerHeight - bubble.offsetHeight) {
                y = window.innerHeight - bubble.offsetHeight;
                ySpeed = -ySpeed;
            }

            bubble.style.left = x + "px";
            bubble.style.top = y + "px";

            requestAnimationFrame(moveBubble);
        }

        moveBubble();
    });
});
