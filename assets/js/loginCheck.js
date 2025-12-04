// Verificação de login e notificação
document.addEventListener("DOMContentLoaded", function () {
    // Criar elemento de notificação dinamicamente
    const notification = document.createElement('div');
    notification.id = 'loginNotification';
    notification.className = 'fixed top-24 left-1/2 -translate-x-1/2 bg-[#322f43] text-white px-8 py-4 rounded-lg shadow-2xl z-[100000] opacity-0 pointer-events-none transition-all duration-300 transform -translate-y-4';
    notification.innerHTML = `
        <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <span id="loginNotificationText" class="font-semibold text-lg">É necessário estar logado para reservar</span>
        </div>
    `;
    document.body.appendChild(notification);

    // Função para mostrar notificação
    function showLoginNotification() {
        const notif = document.getElementById('loginNotification');
        if (notif) {
            // Mostrar notificação
            notif.classList.remove('opacity-0', '-translate-y-4', 'pointer-events-none');
            notif.classList.add('opacity-100', 'translate-y-0');

            // Esconder após 3 segundos
            setTimeout(() => {
                notif.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
                notif.classList.remove('opacity-100', 'translate-y-0');
            }, 3000);
        }
    }

    // Adicionar evento ao botão de reserva
    // Procurar pelo botão que contém o span com id "compra-book-now"
    const bookNowSpan = document.getElementById('compra-book-now');
    if (bookNowSpan) {
        const bookNowBtn = bookNowSpan.closest('button');
        if (bookNowBtn) {
            bookNowBtn.addEventListener('click', function (e) {
                e.preventDefault();

                // Verificar se o usuário está logado (por enquanto sempre false)
                const isLoggedIn = false; // TODO: Implementar verificação real de login

                if (!isLoggedIn) {
                    showLoginNotification();
                } else {
                    // Processar reserva
                    console.log('Processando reserva...');
                }
            });
        }
    }
});
