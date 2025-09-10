document.addEventListener("DOMContentLoaded", function() {

    const home = document.getElementById("home")
    const header = document.getElementById("header")

    let lastScrollTop = 0;
    const topThreshold = 50; // Pixels do topo para considerar "posição inicial"
    
    if (!header) return;
    
    // Define estado inicial - fixed transparente no topo
    header.classList.add('fixed', 'translate-y-0');
    header.classList.remove('absolute', '-translate-y-full', 'bg-black/40', 'border-b');
    
    window.addEventListener('scroll', function() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const isAtTop = currentScrollTop <= topThreshold;
        
        if (currentScrollTop > lastScrollTop) {
            // Scrollando para baixo
            if (isAtTop) {
                // Ainda no topo - mantém transparente e fixed
                header.classList.remove('absolute', '-translate-y-full', 'bg-black/40', 'border-b');
                header.classList.add('fixed', 'translate-y-0');
            } else {
                // Saindo do topo - primeiro anima para cima (fixed), depois esconde (absolute)
                header.classList.remove('bg-black/40', 'border-b', 'translate-y-0');
                header.classList.add('fixed', '-translate-y-full');
                
                // Após a animação, muda para absolute
                setTimeout(() => {
                    if (header.classList.contains('-translate-y-full')) {
                        header.classList.remove('fixed');
                        header.classList.add('absolute');
                    }
                }, 300); // Tempo da transição CSS
            }
        } else {
            // Scrollando para cima
            if (isAtTop) {
                // Voltou ao topo - header fixed transparente
                header.classList.remove('absolute', '-translate-y-full', 'bg-black/40', 'border-b');
                header.classList.add('fixed', 'translate-y-0');
            } else {
                // Fora do topo - header fixed COM fundo e borda
                header.classList.remove('absolute', '-translate-y-full');
                header.classList.add('fixed', 'translate-y-0', 'bg-black/40', 'border-b');
            }
        }
        
        lastScrollTop = currentScrollTop;
    }, { passive: true });
});