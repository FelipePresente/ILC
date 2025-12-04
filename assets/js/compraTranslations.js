const compraTranslations = {
    pt: {
        "compra-about": "Sobre nós",
        "compra-intercambios": "Intercâmbios",
        "compra-contact": "Contato",
        "compra-selected-package": "Pacote selecionado",
        "compra-flight": "Voo",
        "compra-departure": "Ida",
        "compra-direct-flight": "Voo direto",
        "compra-return": "Volta",
        "compra-hotel": "Hotel",
        "compra-checkin": "Entrada",
        "compra-checkout": "Saída",
        "compra-non-refundable": "Não Reembolsável",
        "compra-summary-title": "Resumo da viagem",
        "compra-summary-hotel": "Hotel + Aéreo",
        "compra-taxes": "Impostos e taxas",
        "compra-total": "Valor final",
        "compra-book-now": "Reservar Agora",
        "compra-footer": "Copyright © 2025 ILC - Intercâmbio, Linguagem e Cultura",
        "compra-travelers-label": "Viajantes",
        "loadingText": "Aguarde um instante",
        "loginNotificationText": "É necessário estar logado para reservar"
    },
    en: {
        "compra-about": "About us",
        "compra-intercambios": "Exchanges",
        "compra-contact": "Contact",
        "compra-selected-package": "Selected Package",
        "compra-flight": "Flight",
        "compra-departure": "Departure",
        "compra-direct-flight": "Direct flight",
        "compra-return": "Return",
        "compra-hotel": "Hotel",
        "compra-checkin": "Check-in",
        "compra-checkout": "Check-out",
        "compra-non-refundable": "Non-refundable",
        "compra-summary-title": "Trip Summary",
        "compra-summary-hotel": "Hotel + Flight",
        "compra-taxes": "Taxes and fees",
        "compra-total": "Total price",
        "compra-book-now": "Book Now",
        "compra-footer": "Copyright © 2025 ILC - Exchange, Language and Culture",
        "compra-travelers-label": "Travelers",
        "loadingText": "Please wait a moment",
        "loginNotificationText": "You need to be logged in to book"
    },
    es: {
        "compra-about": "Sobre nosotros",
        "compra-intercambios": "Intercambios",
        "compra-contact": "Contacto",
        "compra-selected-package": "Paquete seleccionado",
        "compra-flight": "Vuelo",
        "compra-departure": "Ida",
        "compra-direct-flight": "Vuelo directo",
        "compra-return": "Vuelta",
        "compra-hotel": "Hotel",
        "compra-checkin": "Entrada",
        "compra-checkout": "Salida",
        "compra-non-refundable": "No reembolsable",
        "compra-summary-title": "Resumen del viaje",
        "compra-summary-hotel": "Hotel + Vuelo",
        "compra-taxes": "Impuestos y tasas",
        "compra-total": "Precio final",
        "compra-book-now": "Reservar Ahora",
        "compra-footer": "Copyright © 2025 ILC - Intercambio, Lengua y Cultura",
        "compra-travelers-label": "Viajeros",
        "loadingText": "Espere un momento",
        "loginNotificationText": "Necesitas estar conectado para reservar"
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const brBtn = document.getElementById("br-compra");
    const enBtn = document.getElementById("en-compra");
    const esBtn = document.getElementById("spanish-compra");

    function updateLanguage(lang) {
        // Save to localStorage
        localStorage.setItem('selectedLanguage', lang);

        // Update texts
        const texts = compraTranslations[lang];
        if (texts) {
            for (const [id, text] of Object.entries(texts)) {
                const element = document.getElementById(id);
                if (element) {
                    element.textContent = text;
                }
            }
        }

        // Update buttons visibility
        // Logic: Show the button for the NEXT language in the cycle or specific logic?
        // Index logic: BR -> EN -> ES -> BR (cycle)
        // But the UI shows one flag at a time usually.
        // Let's match index.html logic:
        // PT selected: Show BR flag? Or show EN flag to switch to EN?
        // In index.html:
        // trocarEnglish() -> hides BR, shows EN. (Means EN is active? Or EN is the button to click?)
        // Actually, usually the flag shown is the CURRENT language or the ONE TO SWITCH TO.
        // Let's assume the flag shown is the one to CLICK to switch language.
        // If I am in PT, I see USA flag (to switch to EN).
        // If I am in EN, I see Spain flag (to switch to ES).
        // If I am in ES, I see Brazil flag (to switch to PT).

        // Let's check index.html logic again.
        // trocarEnglish(): hides BR, shows EN.
        // This implies: I clicked BR (which was visible), now EN is visible.
        // So the visible flag represents the NEXT language? Or the current?
        // If I click BR, it calls trocarEnglish. So BR button switches to English.
        // So BR button = "Switch to English".

        // Let's implement a simple cycle:
        // PT -> EN -> ES -> PT

        if (lang === 'pt') {
            brBtn.classList.remove('hidden');
            enBtn.classList.add('hidden');
            esBtn.classList.add('hidden');
        } else if (lang === 'en') {
            brBtn.classList.add('hidden');
            enBtn.classList.remove('hidden');
            esBtn.classList.add('hidden');
        } else if (lang === 'es') {
            brBtn.classList.add('hidden');
            enBtn.classList.add('hidden');
            esBtn.classList.remove('hidden');
        }
    }

    // Initialize
    const savedLang = localStorage.getItem('selectedLanguage') || 'pt';
    updateLanguage(savedLang);

    // Event Listeners
    // If BR is visible (meaning we are in PT, based on my assumption above? No wait.)
    // In index.js:
    // br.onclick = trocarEnglish (Switch to EN)
    // en.onclick = trocarEspanhol (Switch to ES)
    // spanish.onclick = trocarBr (Switch to PT)

    // So:
    // BR Icon visible = Current is PT? Or Current is something else?
    // If I click BR icon, it switches to English. That's weird. Usually clicking US flag switches to English.
    // Let's assume the icon shown is the one you CLICK to change TO that language.
    // So if BR icon is shown, clicking it changes to... English? That's what index.js says: br.onclick = trocarEnglish.
    // That's very counter-intuitive. Usually you click the flag of the language you want.
    // But maybe the ID "br" is the button that HAS the BR flag image?
    // <img src="img/BR-icon.png" alt="pt-br" class="max-w-10 cursor-pointer" id="br">
    // Yes. So clicking Brazil flag switches to English.
    // Clicking USA flag switches to Spanish.
    // Clicking Spain flag switches to Portuguese.
    // This is a "Next Language" cycle.

    // Let's replicate this exact behavior.

    brBtn.onclick = function () {
        updateLanguage('en'); // BR flag -> Switch to EN
    };

    enBtn.onclick = function () {
        updateLanguage('es'); // USA flag -> Switch to ES
    };

    esBtn.onclick = function () {
        updateLanguage('pt'); // Spain flag -> Switch to PT
    };

});
