// Aguarda o carregamento completo do DOM antes de executar
document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.getElementById('carrossel');
    
    // Verifica se o elemento existe
    if (!carrossel) {
        console.error('Elemento #carrossel não encontrado');
        return;
    }
    
    let indiceAtual = 0;
    const totalImagens = 3;

    function avancarCarrossel() {
        indiceAtual = (indiceAtual + 1) % totalImagens;
        const deslocamento = indiceAtual * -100;
        carrossel.style.transform = `translateX(${deslocamento}%)`;
    }

    // Inicia o carrossel automático a cada 4 segundos
    setInterval(avancarCarrossel, 4000);
});