// Variáveis globais
let numTravelers = 1;
let basePricePerPerson = 0;

// Função para pegar parâmetros da URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        title: params.get('title') || 'Pacote ILC',
        country: params.get('country') || 'Destino',
        price: params.get('price') || '0,00',
        ida: params.get('ida') || '--/--/----',
        volta: params.get('volta') || '--/--/----'
    };
}

// Preencher dados na página
function populatePage() {
    const data = getQueryParams();

    // Título e Localização
    document.title = `Comprar - ${data.title}`;

    const hotelLocation = document.getElementById('hotel-location');
    if (hotelLocation) hotelLocation.textContent = `- ${data.country}`;

    // Datas
    const idaDisplay = document.getElementById('data-ida-display');
    const voltaDisplay = document.getElementById('data-volta-display');
    const hotelCheckin = document.getElementById('hotel-checkin');
    const hotelCheckout = document.getElementById('hotel-checkout');

    if (idaDisplay) idaDisplay.textContent = data.ida;
    if (voltaDisplay) voltaDisplay.textContent = data.volta;

    // Formatar data curta para hotel (ex: 01/12)
    if (hotelCheckin) hotelCheckin.textContent = data.ida.substring(0, 5);
    if (hotelCheckout) hotelCheckout.textContent = data.volta.substring(0, 5);

    // Destino Sigla (pegar 3 primeiras letras do país)
    const sigla = data.country.substring(0, 3).toUpperCase();
    const destSigla = document.getElementById('destino-sigla');
    const destSiglaVolta = document.getElementById('destino-sigla-volta');
    if (destSigla) destSigla.textContent = sigla;
    if (destSiglaVolta) destSiglaVolta.textContent = sigla;

    // Preços
    const valorViajante = document.getElementById('valor-viajante');

    // Limpar string de preço para cálculo (R$ 2.115 -> 2115)
    let priceRaw = data.price.replace('R$', '').replace('.', '').trim();
    basePricePerPerson = parseFloat(priceRaw);

    if (valorViajante) valorViajante.textContent = `R$ ${data.price}`;

    // Definir imagem do hotel baseada no país
    const hotelImage = document.querySelector('.w-full.md\\:w-48.h-32 img');
    if (hotelImage) {
        const hotelImages = {
            'Brasil': 'img/hotel_brasil.png',
            'Bolívia': 'img/hotel_bolivia.png',
            'Venezuela': 'img/hotel_venezuela.png',
            'Chile': 'img/hotel_chile.png',
            'Peru': 'img/hotel_peru.png'
        };

        const imageSrc = hotelImages[data.country] || 'https://placehold.co/400x300?text=Hotel';
        hotelImage.src = imageSrc;
        hotelImage.onerror = function () {
            this.src = 'https://placehold.co/400x300?text=Hotel+Image';
        };
    }

    updatePrices();
}

// Atualizar preços com base no número de viajantes
function updatePrices() {
    const valorTotal = document.getElementById('valor-total');
    const travelersLabel = document.getElementById('travelers-label');

    // Calcular total: (preço base * viajantes) + taxas
    let total = (basePricePerPerson * numTravelers) + 305;

    if (valorTotal) valorTotal.textContent = `R$ ${total.toLocaleString('pt-BR')}`;
    if (travelersLabel) {
        const currentLang = localStorage.getItem('selectedLanguage') || 'pt';
        if (currentLang === 'en') {
            travelersLabel.textContent = numTravelers === 1 ? '1 traveler' : `${numTravelers} travelers`;
        } else if (currentLang === 'es') {
            travelersLabel.textContent = numTravelers === 1 ? '1 viajero' : `${numTravelers} viajeros`;
        } else {
            travelersLabel.textContent = numTravelers === 1 ? '1 viajante' : `${numTravelers} viajantes`;
        }
    }
}

// Lógica do Loader e inicialização
document.addEventListener("DOMContentLoaded", () => {
    populatePage();

    const loader = document.getElementById("tela-carregamento");
    const content = document.getElementById("conteudo-pagina");

    // Configurar botões de viajantes
    const decreaseBtn = document.getElementById('decrease-travelers');
    const increaseBtn = document.getElementById('increase-travelers');
    const numTravelersSpan = document.getElementById('num-travelers');

    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', () => {
            if (numTravelers > 1) {
                numTravelers--;
                numTravelersSpan.textContent = numTravelers;
                updatePrices();
            }
        });
    }

    if (increaseBtn) {
        increaseBtn.addEventListener('click', () => {
            if (numTravelers < 10) {
                numTravelers++;
                numTravelersSpan.textContent = numTravelers;
                updatePrices();
            }
        });
    }

    // Esperar 3 segundos para o loader
    setTimeout(() => {
        // Fade out loader
        loader.classList.add("opacity-0");

        // Mostrar conteúdo
        content.classList.remove("hidden");
        // Pequeno delay para permitir que o display:block seja processado antes da opacidade
        setTimeout(() => {
            content.classList.remove("opacity-0");
        }, 50);

        // Remover loader do DOM após transição
        setTimeout(() => {
            loader.remove();
        }, 1000); // 1s da transição CSS
    }, 3000);
});
