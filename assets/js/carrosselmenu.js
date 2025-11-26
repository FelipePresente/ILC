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

  // Adiciona uma cópia da primeira imagem no final para loop infinito
  const primeiraImagemClone = document.createElement('div');
  primeiraImagemClone.style.cssText = `
    min-width: 100%;
    width: 100%;
    height: 100%;
    background-image: url(${imagens[0]});
    background-size: cover;
    background-position: center;
  `;
  containerSlide.appendChild(primeiraImagemClone);

  // Limpa o carrossel e adiciona o container
  carrosselMenu.style.backgroundImage = 'none';
  carrosselMenu.style.position = 'relative';
  carrosselMenu.style.overflow = 'hidden';
  carrosselMenu.appendChild(containerSlide);

  return containerSlide;
}

// Função para atualizar as barras com efeito de fluxo de cor (água fluindo)
function atualizarBarras(indiceAnterior, indiceBarraAtual) {
  const barras = document.querySelectorAll('#carrosselmenu #barra');

  if (barras.length === 0) return;

  const DURACAO_FLUXO = 600; // Duração da transição de fluxo entre barras

  // Usa o índice da barra atual passado como parâmetro
  const indiceAtualBarra = indiceBarraAtual !== undefined ? indiceBarraAtual : indiceAtual;

  // A barra anterior esvazia completamente de uma vez (da esquerda para direita)
  if (indiceAnterior >= 0 && indiceAnterior < barras.length) {
    barras[indiceAnterior].style.transition = `background ${DURACAO_FLUXO}ms ease-out`;
    barras[indiceAnterior].style.background = '#b4b4b4';
  }
  
  // A barra atual começa a encher da esquerda para direita
  barras[indiceAtualBarra].style.transition = `background ${DURACAO_FLUXO}ms ease-in-out`;
  barras[indiceAtualBarra].style.background = 'linear-gradient(to right, #ffffff 30%, #b4b4b4 70%)';
  
  // Após o fluxo inicial, continua o preenchimento gradual
  setTimeout(() => {
    barras[indiceAtualBarra].style.transition = `background ${INTERVALO}ms linear`;
    barras[indiceAtualBarra].style.background = 'linear-gradient(to right, #ffffff 100%, #ffffff 100%)';
  }, DURACAO_FLUXO);
}

// Função para trocar a imagem com efeito de slide
function trocarImagemDeFundo() {
  const containerSlide = document.getElementById('container-slide');

  if (!containerSlide) return;

  const indiceAnterior = indiceAtual;

  // Atualiza o índice
  indiceAtual = indiceAtual + 1;

  // Anima para a próxima imagem (incluindo o clone da primeira)
  containerSlide.style.transition = `transform ${DURACAO_TRANSICAO}ms cubic-bezier(0.4, 0.0, 0.2, 1)`;
  containerSlide.style.transform = `translateX(-${indiceAtual * 100}%)`;

  // Se chegou no clone da primeira imagem (após a última)
  if (indiceAtual === imagens.length) {
    // Aguarda a transição terminar
    setTimeout(() => {
      // Remove a transição
      containerSlide.style.transition = 'none';
      // Volta instantaneamente para a primeira imagem real
      indiceAtual = 0;
      containerSlide.style.transform = `translateX(0%)`;
    }, DURACAO_TRANSICAO);
  }

  // Atualiza as barras (sempre usa o índice correto para as barras)
  const indiceBarraAtual = indiceAtual >= imagens.length ? 0 : indiceAtual;
  const indiceBarraAnterior = indiceAnterior >= imagens.length ? 0 : indiceAnterior;
  
  atualizarBarras(indiceBarraAnterior, indiceBarraAtual);
}

// Inicializa o carrossel quando o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
  const carrosselMenu = document.getElementById('carrosselmenu');
  const barras = document.querySelectorAll('#carrosselmenu #barra');

  if (!carrosselMenu || barras.length === 0) return;

  // Cria a estrutura de slide
  criarSlideImagens();

  // Garante que o conteúdo fique por cima da imagem
  const conteudoCarrossel = carrosselMenu.querySelectorAll('div, h2, p, button');
  conteudoCarrossel.forEach(elemento => {
    if (elemento.id !== 'container-slide' && !elemento.closest('#container-slide')) {
      elemento.style.position = 'relative';
      elemento.style.zIndex = '20';
    }
  });

  // Configura o estado inicial das barras (todas com tamanho fixo)
  barras.forEach((barra, index) => {
    barra.style.transition = 'none';
    barra.style.width = ''; // Remove qualquer width customizado
    barra.style.position = 'relative';
    barra.style.zIndex = '20';
    barra.style.flexShrink = '0'; // Impede que as barras encolham no mobile
    
    if (index === 0) {
      // Primeira barra começa preenchendo gradualmente com gradiente
      barra.style.background = '#b4b4b4';
      
      setTimeout(() => {
        barra.style.transition = `background ${INTERVALO}ms linear`;
        barra.style.background = 'linear-gradient(to right, #ffffff 100%, #ffffff 100%)';
      }, 100);
    } else {
      // Outras barras começam cinzas
      barra.style.background = '#b4b4b4';
    }
  });

  // Ajusta o texto e elementos para serem mais visíveis no mobile
  const textoCarrossel = carrosselMenu.querySelector('p');
  if (textoCarrossel) {
    textoCarrossel.style.textShadow = '2px 2px 8px rgba(0,0,0,0.8)';
    textoCarrossel.style.fontWeight = '600';
  }

  const tituloCarrossel = carrosselMenu.querySelector('h2');
  if (tituloCarrossel) {
    tituloCarrossel.style.textShadow = '2px 2px 8px rgba(0,0,0,0.8)';
    tituloCarrossel.style.fontWeight = '700';
  }

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