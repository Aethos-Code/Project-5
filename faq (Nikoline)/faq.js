// Array af vigtig information og svar
const vigtigInformation = [
    { 
        spørgsmål: 'Fablabs 3D Printere', 
        svar: `
            <ul>
                <li>SLS-printer: SLS-printere bruger pulvermateriale (ofte nylon) og en laser til at smelte pulveret sammen i lag. De producerer stærke og funktionelle dele.</li>
                <li>SLA-printer: Stereolithography-printeren bruger flydende resin og en laser til at skabe meget præcise og detaljerede modeller. Den hærdede resin giver en glat finish.</li>
                <li>FFF-printer: Fused Filament Fabrication-printeren smelter plastfilament og bygger modellen lag for lag.</li>
            </ul>
        `
    },
    {
        spørgsmål: 'Stickers og t-shirt print', 
        svar: 'Brug vores vinyl printer til at lave stickers i alle mulige former og farver. Kun fantasien sætter grænser!'
    },
    {
        spørgsmål: 'Laserskæring',
        svar: `
            <p>Til laserskæring kan materialerne Clear Acryl, HDF, sort HDF, MDF og Birch Plywood benyttes.</p>
            <h3>Regler for Brug af Laserskærer</h3>
            <ul>
                <li>Forlad aldrig maskinen når den kører!</li>
                <li>Brug aldrig maskinen med PVC eller VINYL, da det vil udlede giftige dampe som ødelægger maskinen.</li>
                <li>Brug aldrig maskinen mens den er åben.</li>
                <li>Husk at tænde UDSUGNING samt TRYKLUFT før brug.</li>
                <li>BRANDRISIKO: Tjek at der er en godkendt brandslukker i nærheden.</li>
            </ul>
        `
    },
    {
        spørgsmål: 'Badges', 
        svar: 'Ved at tage kurser hos os kan du få et badge som bevis på at du mestre færdigheden du har taget kursus i. Når du har færdiggjort dit kursus vil du få tilsendt et link på den mail du har skrevet dig op med til kurset med mere infomation om dit badge.'
    },
    {
        spørgsmål: 'Priser',
        svar: `
            <p>Alle uddannelsesrettede opgaver er gratis. Hvis man som studerende ønsker at benytte fablab til private opgaver, tager vi en beskeden pris for materialer. Uddannelsesrettede opgaver vil altid have fortrinsret.</p>
            <h3>PRISLISTE</h3>
            <ul>
                <li>3mm Clear Acrylic 600 x 450 mm: 100 kr</li>
                <li>6mm Clear Acrylic 600 x 450 mm: 180 kr</li>
                <li>3mm HDF 600 x 450 mm: 20 kr</li>
                <li>3mm SORT HDF 600 x 450 mm: 70 kr</li>
                <li>4mm MDF 600 x 450 mm: 25 kr</li>
                <li>6mm MDF 600 x 450 mm: 30 kr</li>
                <li>3mm HDF 1220 x 600 mm: 40 kr</li>
                <li>4mm MDF 1220 x 600 mm: 50 kr</li>
                <li>6mm MDF 1220 x 600 mm: 60 kr</li>
                <li>3mm Birch Plywood 600 x 450 mm: 50 kr</li>
                <li>6mm Birch Plywood 600 x 450 mm: 80 kr</li>
            </ul>
            <strong>Vinyl</strong>
            <ul>
                <li>Sticker Price pr. 10 cm: 5 kr</li>
                <li>T-shirt Price pr. 10 cm: 10 kr</li>
            </ul>
            <p>MobilePay: 946470</p>
        `
    },
    {
        spørgsmål: 'Er du ny i fablab?',
        svar: 'Først og fremmest velkommen til! Hvis du er ny og usikker på, hvordan du bruger vores maskiner, er du ikke alene – vi hjælper dig gerne! Vores team er klar til at guide dig gennem processen, så du kan komme i gang. Tøv ikke med at spørge, hvis du har brug for hjælp, vi er her for at sikre, at du føler dig tryg og godt forberedt på at bruge vores udstyr.'
    }
];

function opretFAQ() {
    const faqListe = document.getElementById("faq-liste");

    // Opret FAQ-elementer
    vigtigInformation.forEach((item) => {
        const faqElement = document.createElement("div");
        faqElement.classList.add("faq-element");

        faqElement.innerHTML = `
            <h3 class="faq-spørgsmål">${item.spørgsmål}</h3>
            <div class="faq-svar">${item.svar}</div>
        `;

        faqListe.appendChild(faqElement);
    });
// Åben og Luk funktionen
    faqListe.addEventListener("click", (event) => {
        const faqElement = event.target.closest(".faq-element");
    
        faqListe.querySelectorAll(".faq-element").forEach((element) => {
            if (element === faqElement) {
                element.classList.toggle("aktiv");
            } else {
                element.classList.remove("aktiv");
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", opretFAQ);