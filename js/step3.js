const cigarette = document.querySelector('.cigarette');
const tobacco = document.querySelector('.tobacco');
const filter = document.querySelector('.filter');
const body = document.body;

let clickCountCigarette = 0;

cigarette.addEventListener('click', function() {
    if (clickCountCigarette < 8) {
        clickCountCigarette++;
        const newWidth = 80 - clickCountCigarette * 10;
        tobacco.style.width = `${newWidth}%`;

        // Aktuelle Hintergrundfarbe und Filter-Farbe bekommen
        var currentBgColor = window.getComputedStyle(body, null).getPropertyValue('background-color');
        var currentFilterColor = window.getComputedStyle(filter, null).getPropertyValue('background-color');
        
        // Farbintensität um 5% reduzieren
        function darkenColor(color) {
            var rgb = color.match(/\d+/g);
            for (var i = 0; i < rgb.length; i++) {
                rgb[i] = Math.floor(rgb[i] * 0.85);
            }
            return 'rgb(' + rgb.join(',') + ')';
        }

        // Neue Hintergrundfarbe und Filter-Farbe setzen
        body.style.backgroundColor = darkenColor(currentBgColor);
        filter.style.backgroundColor = darkenColor(currentFilterColor);
    
    } else {
        // Nach 8 Klicks unterhalb der .cigarette das HTML-Element einfügen
        const continueButton = document.createElement('a');
        continueButton.href = 'https://251067-4.web.fhgr.ch/finishline.html';
        continueButton.className = 'round-button';
        continueButton.textContent = 'Weiter';
        
        // Element unterhalb von .cigarette einfügen
        const container = document.querySelector('.cigarette');
        container.appendChild(continueButton);
        
        // Eventlistener für Klick hinzufügen
        continueButton.addEventListener('click', function(event) {
            // Öffne den Link im aktuellen Tab
            event.preventDefault();
            window.location.href = continueButton.href;
        });
        
        // Entferne den Eventlistener von .cigarette, um weitere Klicks zu verhindern
        cigarette.removeEventListener('click');
    }
});
