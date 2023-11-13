const circle = document.getElementById('circle');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    circle.style.left = x - circle.offsetWidth / 2 + 'px';
    circle.style.top = y - circle.offsetHeight / 2 + 'px';
});

