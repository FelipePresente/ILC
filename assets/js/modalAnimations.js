document.addEventListener("DOMContentLoaded", function () {
	const criarContaMenu = document.querySelector("#criarContaMenu");
	const entrarMenu = document.querySelector("#entrarMenu");
	const linkCriarFromEntrar = document.querySelector("#linkCriarFromEntrar");
	const linkEntrarFromCriar = document.querySelector("#linkEntrarFromCriar");
	const ANIMATION_DURATION = 700;

	function animateSwitchToCriarConta() {
		if (!criarContaMenu || !entrarMenu) return;

		// Remove a classe que esconde e deixa visível
		criarContaMenu.classList.remove('-translate-y-full');
		criarContaMenu.style.visibility = 'visible';
		criarContaMenu.style.pointerEvents = 'auto';

		// Reseta transições
		criarContaMenu.style.transition = 'none';
		entrarMenu.style.transition = 'none';

		// Posiciona: criar conta acima, entrar visível no centro
		criarContaMenu.style.transform = 'translateY(-100%)';
		entrarMenu.style.transform = 'translateY(0)';

		// Force reflow
		void criarContaMenu.offsetWidth;

		// Ativa transições suaves
		criarContaMenu.style.transition = `transform ${ANIMATION_DURATION}ms cubic-bezier(0.4,0,0.2,1)`;
		entrarMenu.style.transition = `transform ${ANIMATION_DURATION}ms cubic-bezier(0.4,0,0.2,1)`;

		// Anima ambos simultaneamente
		requestAnimationFrame(() => {
			criarContaMenu.style.transform = 'translateY(0)';
			entrarMenu.style.transform = 'translateY(100%)';
		});

		// Após completar a animação, esconde o menu entrar mas mantém a posição
		setTimeout(() => {
			entrarMenu.style.visibility = 'hidden';
			entrarMenu.style.pointerEvents = 'none';
			// NÃO limpa o transform do menu que saiu
			criarContaMenu.style.transition = '';
			criarContaMenu.style.transform = '';
		}, ANIMATION_DURATION);
	}

	function animateSwitchToEntrar() {
		if (!criarContaMenu || !entrarMenu) return;

		// Remove a classe que esconde e deixa visível
		entrarMenu.classList.remove('-translate-y-full');
		entrarMenu.style.visibility = 'visible';
		entrarMenu.style.pointerEvents = 'auto';

		// Garante que o blackscreen e body overflow estão ativos
		const body = document.querySelector("body");
		const blackscreen = document.querySelector("#blackscreen");
		if (body) body.classList.add("overflow-hidden");
		if (blackscreen) {
			blackscreen.classList.add("bg-black/60");
			blackscreen.classList.add("z-0");
		}

		// Reseta transições
		criarContaMenu.style.transition = 'none';
		entrarMenu.style.transition = 'none';

		// Posiciona: criar conta visível no centro, entrar abaixo
		criarContaMenu.style.transform = 'translateY(0)';
		entrarMenu.style.transform = 'translateY(100%)';

		// Force reflow
		void entrarMenu.offsetWidth;

		// Ativa transições suaves
		criarContaMenu.style.transition = `transform ${ANIMATION_DURATION}ms cubic-bezier(0.4,0,0.2,1)`;
		entrarMenu.style.transition = `transform ${ANIMATION_DURATION}ms cubic-bezier(0.4,0,0.2,1)`;

		// Anima ambos simultaneamente
		requestAnimationFrame(() => {
			criarContaMenu.style.transform = 'translateY(-100%)';
			entrarMenu.style.transform = 'translateY(0)';
		});

		// Após completar a animação, esconde o menu criar conta mas mantém a posição
		setTimeout(() => {
			criarContaMenu.style.visibility = 'hidden';
			criarContaMenu.style.pointerEvents = 'none';
			// NÃO limpa o transform do menu que saiu
			entrarMenu.style.transition = '';
			entrarMenu.style.transform = '';
		}, ANIMATION_DURATION);
	}

	if (linkCriarFromEntrar) {
		linkCriarFromEntrar.addEventListener('click', function (e) {
			e.preventDefault();
			animateSwitchToCriarConta();
		});
	}

	if (linkEntrarFromCriar) {
		linkEntrarFromCriar.addEventListener('click', function (e) {
			e.preventDefault();
			animateSwitchToEntrar();
		});
	}
});