// Array com os caminhos das imagens
const imagens = [
  'img/machuPichu.jpg',
  'img/lencoismaranhenses.webp',
  'img/cristoredentor.jpg'
];

const INTERVALO = 5000; // 5 segundos por imagem
const DURACAO_TRANSICAO = 800; // Duração da transição em ms

function initCarrossel(element) {
  if (!element) return;

  let indiceAtualLocal = 0;

  // Cria um container interno para o slide
  const containerSlide = document.createElement('div');
  containerSlide.className = 'container-slide';
  containerSlide.style.cssText = `
    position: absolute;
    inset: 0;
    display: flex;
    transition: transform ${DURACAO_TRANSICAO}ms cubic-bezier(0.4, 0.0, 0.2, 1);
    z-index: 1;
  `;

  imagens.forEach((img) => {
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

  // Clone da primeira imagem para loop
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

  element.style.backgroundImage = 'none';
  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  element.appendChild(containerSlide);

  const barras = element.querySelectorAll('.barra');

  function atualizarBarras(indiceAnterior, indiceBarraAtual) {
    if (!barras || barras.length === 0) return;
    const DURACAO_FLUXO = 600;
    const indiceAtualBarra = indiceBarraAtual !== undefined ? indiceBarraAtual : indiceAtualLocal;

    if (indiceAnterior >= 0 && indiceAnterior < barras.length) {
      barras[indiceAnterior].style.transition = `background ${DURACAO_FLUXO}ms ease-out`;
      barras[indiceAnterior].style.background = '#b4b4b4';
    }

    barras[indiceAtualBarra].style.transition = `background ${DURACAO_FLUXO}ms ease-in-out`;
    barras[indiceAtualBarra].style.background = 'linear-gradient(to right, #ffffff 30%, #b4b4b4 70%)';

    setTimeout(() => {
      barras[indiceAtualBarra].style.transition = `background ${INTERVALO}ms linear`;
      barras[indiceAtualBarra].style.background = 'linear-gradient(to right, #ffffff 100%, #ffffff 100%)';
    }, DURACAO_FLUXO);
  }

  function trocarImagemDeFundo() {
    if (!containerSlide) return;
    const indiceAnterior = indiceAtualLocal;
    indiceAtualLocal = indiceAtualLocal + 1;

    containerSlide.style.transition = `transform ${DURACAO_TRANSICAO}ms cubic-bezier(0.4, 0.0, 0.2, 1)`;
    containerSlide.style.transform = `translateX(-${indiceAtualLocal * 100}%)`;

    if (indiceAtualLocal === imagens.length) {
      setTimeout(() => {
        containerSlide.style.transition = 'none';
        indiceAtualLocal = 0;
        containerSlide.style.transform = `translateX(0%)`;
      }, DURACAO_TRANSICAO);
    }

    const indiceBarraAtual = indiceAtualLocal >= imagens.length ? 0 : indiceAtualLocal;
    const indiceBarraAnterior = indiceAnterior >= imagens.length ? 0 : indiceAnterior;
    atualizarBarras(indiceBarraAnterior, indiceBarraAtual);
  }

  // posicionamento do restante do conteúdo
  const conteudoCarrossel = element.querySelectorAll('div, h2, p, button');
  conteudoCarrossel.forEach(el => {
    if (!el.classList.contains('container-slide')) {
      el.style.position = 'relative';
      el.style.zIndex = '20';
    }
  });

  // barras init
  if (barras && barras.length > 0) {
    barras.forEach((barra, index) => {
      barra.style.transition = 'none';
      barra.style.width = '';
      barra.style.position = 'relative';
      barra.style.zIndex = '20';
      barra.style.flexShrink = '0';
      if (index === 0) {
        barra.style.background = '#b4b4b4';
        setTimeout(() => {
          barra.style.transition = `background ${INTERVALO}ms linear`;
          barra.style.background = 'linear-gradient(to right, #ffffff 100%, #ffffff 100%)';
        }, 100);
      } else {
        barra.style.background = '#b4b4b4';
      }
    });
  }

  const textoCarrossel = element.querySelector('p');
  if (textoCarrossel) {
    textoCarrossel.style.textShadow = '2px 2px 8px rgba(0,0,0,0.8)';
    textoCarrossel.style.fontWeight = '600';
  }

  const tituloCarrossel = element.querySelector('h2');
  if (tituloCarrossel) {
    tituloCarrossel.style.textShadow = '2px 2px 8px rgba(0,0,0,0.8)';
    tituloCarrossel.style.fontWeight = '700';
  }

  // inicia troca automática para este carrossel
  setInterval(trocarImagemDeFundo, INTERVALO);
}

document.addEventListener('DOMContentLoaded', function() {
  const elementos = document.querySelectorAll('.carrosselmenu');
  elementos.forEach(el => initCarrossel(el));
});

// Funções opcionais para controle manual (funcionam apenas no primeiro carrossel)
function irParaImagem(indice) {
  // mantém compatibilidade com código anterior; não implementado para múltiplos carrosséis
}

function proximaImagem() {
  // compatibilidade
}

function imagemAnterior() {
  // compatibilidade
}