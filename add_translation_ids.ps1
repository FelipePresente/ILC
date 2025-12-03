# Script para adicionar IDs de tradução no compra.html
$file = "c:\Users\felip\Desktop\ILC\compra.html"
$content = Get-Content $file -Raw -Encoding UTF8

# Adicionar IDs nos textos
$replacements = @{
    '<li class="cursor-pointer hover:text-gray-600"><a href="index.html#about">Sobre nós</a></li>' = '<li class="cursor-pointer hover:text-gray-600"><a href="index.html#about" id="compra-about">Sobre nós</a></li>'
    '<li class="cursor-pointer hover:text-gray-600"><a href="index.html#inter">Intercâmbios</a></li>' = '<li class="cursor-pointer hover:text-gray-600"><a href="index.html#inter" id="compra-exchanges">Intercâmbios</a></li>'
    '<li class="cursor-pointer hover:text-gray-600">Contato</li>' = '<li class="cursor-pointer hover:text-gray-600" id="compra-contact">Contato</li>'
    '<h1 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Pacote selecionado</h1>' = '<h1 class="text-2xl md:text-3xl font-bold text-gray-800 mb-8" id="compra-selected-package">Pacote selecionado</h1>'
    '<h2 class="font-bold text-gray-700">Voo</h2>' = '<h2 class="font-bold text-gray-700" id="compra-flight">Voo</h2>'
    '<span class="text-[#322f43] font-bold text-lg">Ida</span>' = '<span class="text-[#322f43] font-bold text-lg" id="compra-departure">Ida</span>'
    '<p class="text-[10px] text-center text-gray-400 mt-1">Voo direto</p>' = '<p class="text-[10px] text-center text-gray-400 mt-1" id="compra-direct-flight">Voo direto</p>'
    '<span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Reembolsável</span>' = '<span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded" id="compra-refundable">Reembolsável</span>'
    '<span class="text-[#322f43] font-bold text-lg">Volta</span>' = '<span class="text-[#322f43] font-bold text-lg" id="compra-return">Volta</span>'
    '<h2 class="font-bold text-gray-700">Hotel</h2>' = '<h2 class="font-bold text-gray-700" id="compra-hotel">Hotel</h2>'
    '<p class="text-xs text-gray-500 underline cursor-pointer">Veja no mapa' = '<p class="text-xs text-gray-500 underline cursor-pointer" id="compra-view-map">Veja no mapa'
    '<span class="font-bold text-[#322f43]">Entrada</span>' = '<span class="font-bold text-[#322f43]" id="compra-checkin">Entrada</span>'
    '<span class="font-bold text-[#322f43]">Saída</span>' = '<span class="font-bold text-[#322f43]" id="compra-checkout">Saída</span>'
    '<p class="font-bold text-sm">1x Standard Casal</p>' = '<p class="font-bold text-sm" id="compra-room-type">1x Standard Casal</p>'
    'Café da manhã</span>' = '<span id="compra-breakfast">Café da manhã</span></span>'
    '<span class="text-[10px] bg-[#d3d2ce] text-[#322f43] px-2 py-1 rounded-full">Não' = '<span class="text-[10px] bg-[#d3d2ce] text-[#322f43] px-2 py-1 rounded-full" id="compra-non-refundable">Não'
    '<h2 class="font-bold text-gray-700">Resumo</h2>' = '<h2 class="font-bold text-gray-700" id="compra-summary">Resumo</h2>'
    '<label class="text-sm text-gray-600 block mb-2">Número de viajantes</label>' = '<label class="text-sm text-gray-600 block mb-2" id="compra-num-travelers">Número de viajantes</label>'
    '<span class="text-gray-600">Valor por viajante</span>' = '<span class="text-gray-600" id="compra-price-per-traveler">Valor por viajante</span>'
    '<span class="text-gray-600">Taxas e impostos</span>' = '<span class="text-gray-600" id="compra-taxes">Taxas e impostos</span>'
    '<span class="text-sm text-[#322f43] font-bold">Valor final</span>' = '<span class="text-sm text-[#322f43] font-bold" id="compra-final-price">Valor final</span>'
    'Reservar Agora' = '<span id="compra-book-now">Reservar Agora</span>'
    'Taxas inclusas | Em até 12x' = '<span id="compra-payment-info">Taxas inclusas | Em até 12x</span>'
}

foreach ($key in $replacements.Keys) {
    $content = $content.Replace($key, $replacements[$key])
}

# Adicionar referência ao script de idioma
$scriptTag = '<script src="assets/js/compra.js"></script>'
$newScriptTags = '<script src="assets/js/idioma.js"></script>' + "`r`n    " + '<script src="assets/js/compra.js"></script>'
$content = $content.Replace($scriptTag, $newScriptTags)

# Adicionar botões de idioma no header
$headerIcons = '                <!-- Troca de idioma -->
                <img src="img/BR-icon.png" alt="pt-br" class="max-w-10 cursor-pointer">'

$newHeaderIcons = '                <!-- Troca de idioma -->
                <img src="img/BR-icon.png" alt="pt-br" class="max-w-10 cursor-pointer" id="br-compra">
                <img src="img/USA-icon.png" alt="en" class="max-w-10 cursor-pointer hidden" id="en-compra">
                <img src="img/SPAIN-icon.png" alt="spn" class="max-w-10 cursor-pointer hidden" id="spanish-compra">'

$content = $content.Replace($headerIcons, $newHeaderIcons)

$content | Set-Content $file -Encoding UTF8
Write-Host "IDs de tradução adicionados ao compra.html!"
