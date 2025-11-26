// Array com os caminhos das imagens
const imagens = [
    'img/machuPichu.jpg',
    'img/lencoismaranhenses.webp',
    'img/cristoredentor.jpg'
];

let indiceAtual = 0;
const INTERVALO = 5000; // 5 segundos por imagem
const DURACAO_TRANSICAO = 800; // Duração da transição em ms

// Função para criar o efeito de slide nas imagens
function criarSlideImagens() {
  const carrosselMenu = document.getElementById('carrosselmenu');
  if (!carrosselMenu) return;
  
  // Cria um container interno para o slide
  const containerSlide = document.createElement('div');
  containerSlide.id = 'container-slide';
  containerSlide.style.cssText = `
    position: absolute;
    inset: 0;
    display: flex;
    transition: transform ${DURACAO_TRANSICAO}ms cubic-bezier(0.4, 0.0, 0.2, 1);
    z-index: 1;
  `;
  
  // Adiciona todas as imagens ao container
  imagens.forEach((img, index) => {
    const divImagem = document.createElement('div');
    divImagem.style.cssText = `
      min-width: 100%;
      width: 100%;
      height: 100%;
      background-image: url(${img});
      background-size: cover;
      background-position: center;
    `;
    containerSlide.appendChild(divImagem);
  });
  
  // Limpa o carrossel e adiciona o container
  carrosselMenu.style.backgroundImage = 'none';
  carrosselMenu.style.position = 'relative';
  carrosselMenu.style.overflow = 'hidden';
  carrosselMenu.appendChild(containerSlide);
  
  return containerSlide;
}

// Função para atualizar as barras com efeito de fluxo de cor
function atualizarBarras(indiceAnterior) {
  const barras = document.querySelectorAll('#carrosselmenu #barra');
  
  if (barras.length === 0) return;
  
  // Se voltou para o início (da última para a primeira)
  if (indiceAtual === 0 && indiceAnterior === imagens.length - 1) {
    // Reseta TODAS as barras para cinza
    barras.forEach((barra) => {
      barra.style.transition = 'background 0.4s ease-out';
      barra.style.background = '#b4b4b4';
    });
    
    // Força o reflow
    barras[0].offsetHeight;
    
    // Inicia o preenchimento da primeira barra
    setTimeout(() => {
      barras[0].style.transition = `background ${INTERVALO}ms linear`;
      barras[0].style.background = '#ffffff';
    }, 400);
  } else {
    // Transição normal: apenas a barra atual fica branca, as outras cinzas
    
    // Primeiro: deixa TODAS as barras cinzas
    barras.forEach((barra, index) => {
      if (index !== indiceAtual) {
        barra.style.transition = 'background 0.3s ease-out';
        barra.style.background = '#b4b4b4';
      }
    });
    
    // Aguarda um momento e então inicia a barra atual
    setTimeout(() => {
      barras[indiceAtual].style.transition = `background ${INTERVALO}ms linear`;
      barras[indiceAtual].style.background = '#ffffff';
    }, 300);
  }
}

// Função para trocar a imagem com efeito de slide
function trocarImagemDeFundo() {
  const containerSlide = document.getElementById('container-slide');
  
  if (!containerSlide) return;
  
  const indiceAnterior = indiceAtual;
  
  // Atualiza o índice (volta ao início quando chegar ao fim)
  indiceAtual = (indiceAtual + 1) % imagens.length;
  
  // Se voltou para o início, faz uma transição especial
  if (indiceAtual === 0) {
    // Move para a posição após a última imagem (cria ilusão de continuidade)
    containerSlide.style.transition = 'none';
    containerSlide.style.transform = `translateX(-${imagens.length * 100}%)`;
    
    // Força o reflow
    containerSlide.offsetHeight;
    
    // Anima de volta para a primeira imagem
    setTimeout(() => {
      containerSlide.style.transition = `transform ${DURACAO_TRANSICAO}ms cubic-bezier(0.4, 0.0, 0.2, 1)`;
      containerSlide.style.transform = `translateX(0%)`;
    }, 50);
  } else {
    // Transição normal: slide da direita para esquerda
    containerSlide.style.transform = `translateX(-${indiceAtual * 100}%)`;
  }
  
  // Atualiza as barras com efeito de fluxo
  atualizarBarras(indiceAnterior);
}

// Inicializa o carrossel quando o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
  const carrosselMenu = document.getElementById('carrosselmenu');
  const barras = document.querySelectorAll('#carrosselmenu #barra');
  
  if (!carrosselMenu || barras.length === 0) return;
  
  // Cria a estrutura de slide
  criarSlideImagens();
  
  // Configura o estado inicial das barras (todas com tamanho fixo)
  barras.forEach((barra, index) => {
    barra.style.transition = 'none';
    barra.style.width = ''; // Remove qualquer width customizado
    barra.style.position = 'relative';
    barra.style.zIndex = '10';
    
    if (index === 0) {
      // Primeira barra começa preenchendo gradualmente
      barra.style.background = '#b4b4b4';
      
      setTimeout(() => {
        barra.style.transition = `background ${INTERVALO}ms linear`;
        barra.style.background = '#ffffff';
      }, 100);
    } else {
      // Outras barras começam cinzas
      barra.style.background = '#b4b4b4';
    }
  });
  
  // Inicia a troca automática
  setInterval(trocarImagemDeFundo, INTERVALO);
});

// Funções opcionais para controle manual
function irParaImagem(indice) {
  if (indice < 0 || indice >= imagens.length) return;
  
  const containerSlide = document.getElementById('container-slide');
  const indiceAnterior = indiceAtual;
  
  indiceAtual = indice;
  
  containerSlide.style.transform = `translateX(-${indiceAtual * 100}%)`;
  atualizarBarras(indiceAnterior);
}

function proximaImagem() {
  trocarImagemDeFundo();
}

function imagemAnterior() {
  const containerSlide = document.getElementById('container-slide');
  const indiceAnterior = indiceAtual;
  
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
  
  containerSlide.style.transform = `translateX(-${indiceAtual * 100}%)`;
  atualizarBarras(indiceAnterior);
}