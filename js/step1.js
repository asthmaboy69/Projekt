document.addEventListener("DOMContentLoaded", function() {
    const letters = document.querySelectorAll(".letter");
    letters.forEach((letter, index) => {
        letter.style.animation = `fallIn 0.5s forwards ${index * 0.2}s`;
    });

    let hasClicked = false;

    document.body.addEventListener("click", function() {
        if (!hasClicked) {
            const factDiv = document.createElement("div");
            factDiv.classList.add("fact");
            factDiv.innerHTML = `
                <div class="content">
                <a><strong>Sofortige Verbesserung:</strong> Schon nach 20 Minuten ohne Zigarette normalisieren sich Puls und Blutdruck.</a>
                <a><strong>Langfristige Gesundheit:</strong> Das Risiko von Herzinfarkten, Schlaganf&aumlllen und Krebserkrankungen wird erheblich reduziert.</a>
                <a><strong>Kosteneinsparungen:</strong> Rauchstopp bedeutet erhebliche Einsparungen in Ihrem Budget.</a>
                <a href="https://251067-4.web.fhgr.ch/step2" class="round-button">Weiter</a>
                </div>
            `;
            document.body.appendChild(factDiv);

            const finalParagraph = document.createElement("p");
            finalParagraph.classList.add("final-paragraph");
            finalParagraph.innerHTML = "Fakten, Unterst&uumltzung, Hoffnung - Gemeinsam k&oumlnnen wir aufh&oumlren!";
            document.body.appendChild(finalParagraph);

            // Nach einer kurzen Verz&oumlgerung die Transition aktivieren
            setTimeout(() => {
                factDiv.classList.add("show");
                finalParagraph.classList.add("show");
            }, 10);

            hasClicked = true;
        }
    });
});
