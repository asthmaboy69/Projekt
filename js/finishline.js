// Circle Jagen
document.addEventListener('DOMContentLoaded', function() {
    const circle = document.getElementById('circle');
    const radius = 500; // Radius für die Bewegung des Kreises in Pixeln

    document.addEventListener('mousemove', function(event) {
        const x = event.clientX;
        const y = event.clientY;

        // Berechne die Entfernung zwischen Mauszeiger und Kreismittelpunkt
        const distance = Math.sqrt(Math.pow(x - circle.offsetLeft - circle.offsetWidth / 2, 2) +
                                   Math.pow(y - circle.offsetTop - circle.offsetHeight / 2, 2));

        // Überprüfe, ob die Entfernung kleiner als der Radius ist
        if (distance < radius) {
            // Berechne den Winkel zwischen dem Mauszeiger und dem Kreis
            const angle = Math.atan2(y - circle.offsetTop - circle.offsetHeight / 2, x - circle.offsetLeft - circle.offsetWidth / 2);
            
            // Bewege den Kreis in die entgegengesetzte Richtung des Mauszeigers
            const newX = x - radius * Math.cos(angle);
            const newY = y - radius * Math.sin(angle);

            // Begrenze die Position des Kreises, um innerhalb des sichtbaren Bereichs zu bleiben
            const maxX = window.innerWidth - circle.offsetWidth;
            const maxY = window.innerHeight - circle.offsetHeight;
            circle.style.left = Math.min(maxX, Math.max(0, newX - circle.offsetWidth / 2)) + 'px';
            circle.style.top = Math.min(maxY, Math.max(0, newY - circle.offsetHeight / 2)) + 'px';
        }
    });
});
