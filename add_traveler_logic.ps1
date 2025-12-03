$file = "c:\Users\felip\Desktop\ILC\compra.html"
$content = Get-Content $file -Raw -Encoding UTF8

# Add traveler selector logic
$oldScript = @'
        // Lógica do Loader
        document.addEventListener("DOMContentLoaded", () => {
            populatePage();
'@

$newScript = @'
        // Lógica do Loader
        document.addEventListener("DOMContentLoaded", () => {
            populatePage();

            // Traveler selector logic
            const decreaseBtn = document.getElementById('decrease-travelers');
            const increaseBtn = document.getElementById('increase-travelers');
            const numTravelersSpan = document.getElementById('num-travelers');

            decreaseBtn.addEventListener('click', () => {
                if (numTravelers > 1) {
                    numTravelers--;
                    numTravelersSpan.textContent = numTravelers;
                    updatePrices();
                }
            });

            increaseBtn.addEventListener('click', () => {
                if (numTravelers < 10) {
                    numTravelers++;
                    numTravelersSpan.textContent = numTravelers;
                    updatePrices();
                }
            });
'@

$content = $content.Replace($oldScript, $newScript)

# Update the populatePage function
$oldPopulate = @'
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

            // Destino Sigla (Fake logic: pegar 3 primeiras letras do país)
            const sigla = data.country.substring(0, 3).toUpperCase();
            const destSigla = document.getElementById('destino-sigla');
            const destSiglaVolta = document.getElementById('destino-sigla-volta');
            if (destSigla) destSigla.textContent = sigla;
            if (destSiglaVolta) destSiglaVolta.textContent = sigla;

            // Preços
            const valorViajante = document.getElementById('valor-viajante');
            const valorTotal = document.getElementById('valor-total');

            // Limpar string de preço para cálculo (R$ 2.115 -> 2115)
            // Assumindo formato "R$ 2.115" ou "2.115" vindo da URL
            let priceRaw = data.price.replace('R$', '').replace('.', '').trim();
            let priceVal = parseFloat(priceRaw);

            if (valorViajante) valorViajante.textContent = `R$ ${data.price}`;

            // Somar taxas (305)
            let total = priceVal + 305;
            if (valorTotal) valorTotal.textContent = `R$ ${total.toLocaleString('pt-BR')}`;
        }
'@

$newPopulate = @'
        // Preencher dados na página
        let numTravelers = 1;
        let basePricePerPerson = 0;

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

            // Destino Sigla (Fake logic: pegar 3 primeiras letras do país)
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

            updatePrices();
        }

        function updatePrices() {
            const valorTotal = document.getElementById('valor-total');
            const travelersLabel = document.getElementById('travelers-label');

            // Calcular total: (preço base * viajantes) + taxas
            let total = (basePricePerPerson * numTravelers) + 305;
            
            if (valorTotal) valorTotal.textContent = `R$ ${total.toLocaleString('pt-BR')}`;
            if (travelersLabel) {
                travelersLabel.textContent = numTravelers === 1 ? '1 viajante' : `${numTravelers} viajantes`;
            }
        }
'@

$content = $content.Replace($oldPopulate, $newPopulate)

$content | Set-Content $file -Encoding UTF8
Write-Host "compra.html updated with traveler selector."
